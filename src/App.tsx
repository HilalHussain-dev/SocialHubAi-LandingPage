import React, { useState, useEffect, useCallback } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Channels } from './components/Channels';
import { CoreFeatures } from './components/CoreFeatures';
import { MoreFeatures } from './components/MoreFeatures';
import { AISection } from './components/AISection';
import { Support } from './components/Support';
import { Metrics } from './components/Metrics';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { PricingPage } from './components/pricing/PricingPage';
import { PrivacyPolicyPage } from './components/privacy/PrivacyPolicyPage';
import { TermsOfUsePage } from './components/terms/TermsOfUsePage';
import { LoginPage } from './components/auth/LoginPage';
import { SocialHubDashboard } from './components/admin/SocialHubDashboard';
import { AccountPickerModal, type FacebookPageOption, type InstagramAccountOption } from './components/admin/AccountPickerModal';

// Configurable backend API endpoint (blank by default for pure landing page)
const API_URL = import.meta.env.VITE_API_URL || '';

export interface User {
  id: string;
  email: string;
  name?: string;
}

// Helpers for unified hash & pathname routing
const isPricingRoute = (h: string, p: string) => h === '#pricing' || p === '/pricing';
const isPrivacyRoute = (h: string, p: string) =>
  h === '#privacy' || h === '#privacy-policy' || p === '/privacy' || p === '/privacy-policy';
const isTermsRoute = (h: string, p: string) =>
  h === '#terms' || h === '#terms-of-use' || h === '#terms-of-service' || p === '/terms' || p === '/terms-of-use' || p === '/terms-of-service';
const isAuthRoute = (h: string, p: string) =>
  h === '#login' || h === '#register' || h === '#signup' || p === '/login' || p === '/register' || p === '/signup';
const isDashboardRoute = (h: string, p: string) =>
  h === '#admin' || h === '#dashboard' || p === '/dashboard' || p === '/admin' || p === '/facebook/callback' || p === '/instagram/callback';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => (typeof window !== 'undefined' ? window.location.pathname : '/'));
  const [currentHash, setCurrentHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));

  // Authenticated user state
  const [user, setUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState(true);

  // Initial view resolver: 'landing' | 'login' | 'dashboard'
  const [view, setView] = useState<'landing' | 'login' | 'dashboard'>(() => {
    if (typeof window !== 'undefined') {
      const h = window.location.hash;
      const p = window.location.pathname;

      if (isDashboardRoute(h, p)) return 'dashboard';
      if (isAuthRoute(h, p)) return 'login';
      if (isPricingRoute(h, p) || isPrivacyRoute(h, p) || isTermsRoute(h, p)) return 'landing';

      try {
        const saved = localStorage.getItem('socialhub_view');
        if (saved === 'dashboard') return 'dashboard';
      } catch {}
    }
    return 'landing';
  });

  const updateView = useCallback((newView: 'landing' | 'login' | 'dashboard') => {
    setView(newView);
    try {
      localStorage.setItem('socialhub_view', newView);
    } catch {}
  }, []);

  // Initial auth mode: 'login' | 'register'
  const [authMode, setAuthMode] = useState<'login' | 'register'>(() => {
    if (typeof window !== 'undefined') {
      const h = window.location.hash;
      const p = window.location.pathname;
      if (h === '#login' || p === '/login') return 'login';
    }
    return 'register';
  });

  // Account picker state (shown after OAuth callback)
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerPlatform, setPickerPlatform] = useState<'facebook' | 'instagram'>('facebook');
  const [pickerPendingKey, setPickerPendingKey] = useState('');
  const [pickerFbPages, setPickerFbPages] = useState<FacebookPageOption[]>([]);
  const [pickerIgAccounts, setPickerIgAccounts] = useState<InstagramAccountOption[]>([]);

  // Trigger to reload channels inside dashboard without page reload
  const [channelRefreshKey, setChannelRefreshKey] = useState(0);

  // Synchronize route state on URL change
  useEffect(() => {
    const handleNavigation = () => {
      const h = window.location.hash;
      const p = window.location.pathname;
      setCurrentPath(p);
      setCurrentHash(h);

      if (isDashboardRoute(h, p)) {
        updateView('dashboard');
      } else if (h === '#register' || h === '#signup' || p === '/register' || p === '/signup') {
        setAuthMode('register');
        updateView('login');
      } else if (h === '#login' || p === '/login') {
        setAuthMode('login');
        updateView('login');
      } else if (isPricingRoute(h, p) || isPrivacyRoute(h, p) || isTermsRoute(h, p)) {
        updateView('landing');
      } else if ((h === '' || h === '#hero' || h === '#features' || h === '#channels' || h === '#ai' || h === '#support' || h === '#metrics') && p === '/') {
        try {
          const saved = localStorage.getItem('socialhub_view');
          if (saved === 'dashboard' && user) {
            updateView('dashboard');
            window.location.hash = '#dashboard';
            return;
          }
        } catch {}
        updateView('landing');
      }
    };

    handleNavigation();

    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, [updateView, user]);

  // Check active user session if an API endpoint is configured
  useEffect(() => {
    if (!API_URL) {
      setAuthChecking(false);
      return;
    }

    const checkSession = async () => {
      try {
        const res = await fetch(`${API_URL}/api/auth/me`, { credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            setUser(data.user);
            const h = window.location.hash;
            const p = window.location.pathname;
            let saved = null;
            try { saved = localStorage.getItem('socialhub_view'); } catch {}
            if (isDashboardRoute(h, p) || saved === 'dashboard') {
              updateView('dashboard');
              if (window.location.hash !== '#dashboard') {
                window.location.hash = '#dashboard';
              }
            }
          }
        }
      } catch (err) {
        console.warn('Session check notice:', err);
      } finally {
        setAuthChecking(false);
      }
    };

    checkSession();
  }, [updateView]);

  // Handle OAuth Callbacks (/facebook/callback or /instagram/callback)
  useEffect(() => {
    const isCallback = currentPath === '/facebook/callback' || 
                       currentPath === '/instagram/callback' || 
                       window.location.pathname === '/facebook/callback' || 
                       window.location.pathname === '/instagram/callback';

    if (isCallback) {
      const params = new URLSearchParams(window.location.search);
      const pendingKey = params.get('pending');
      const platform = params.get('platform') as 'facebook' | 'instagram' | null;
      const error = params.get('error');

      updateView('dashboard');
      window.location.hash = '#dashboard';

      if (error) {
        window.history.replaceState({}, '', '/#dashboard');
        return;
      }

      if (pendingKey && platform) {
        setPickerPendingKey(pendingKey);
        setPickerPlatform(platform);

        if (platform === 'facebook') {
          try {
            const pages = JSON.parse(params.get('pages') || '[]');
            setPickerFbPages(pages);
          } catch { setPickerFbPages([]); }
        } else {
          try {
            const accounts = JSON.parse(params.get('accounts') || '[]');
            setPickerIgAccounts(accounts);
          } catch { setPickerIgAccounts([]); }
        }

        setTimeout(() => setPickerOpen(true), 300);
      }

      window.history.replaceState({}, '', '/#dashboard');
      window.location.hash = '#dashboard';
    }
  }, [currentPath, updateView]);

  const handleLoginSuccess = (loggedInUser: User) => {
    setUser(loggedInUser);
    updateView('dashboard');
    window.location.hash = '#dashboard';
  };

  const handleLogout = async () => {
    try {
      localStorage.removeItem('socialhub_view');
      await fetch(`${API_URL}/api/auth/logout`, { method: 'POST', credentials: 'include' });
    } catch {}
    setUser(null);
    updateView('landing');
    window.location.hash = '';
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToLanding = () => {
    updateView('landing');
    window.location.hash = '';
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // =====================================================
  // VIEW: SOCIALHUB AI ADMIN DASHBOARD
  // =====================================================
  if (view === 'dashboard') {
    if (!user && !authChecking) {
      // If user is not authenticated, present the login/signup screen
      return (
        <LoginPage
          initialMode={authMode}
          onLoginSuccess={handleLoginSuccess}
          onGoToLanding={handleGoToLanding}
          apiUrl={API_URL}
        />
      );
    }

    // Default clean dashboard user if session is still loading or guest preview
    const activeDashboardUser = user || {
      id: 'demo_user',
      email: 'creator@socialhub.ai',
      name: 'SocialHub Creator'
    };

    return (
      <>
        <SocialHubDashboard
          user={activeDashboardUser}
          onLogout={handleLogout}
          onGoToLanding={handleGoToLanding}
          apiUrl={API_URL}
          refreshTrigger={channelRefreshKey}
        />
        <AccountPickerModal
          isOpen={pickerOpen}
          onClose={() => {
            setPickerOpen(false);
            updateView('dashboard');
            window.location.hash = '#dashboard';
          }}
          platform={pickerPlatform}
          pendingKey={pickerPendingKey}
          facebookPages={pickerFbPages}
          instagramAccounts={pickerIgAccounts}
          apiUrl={API_URL}
          onConnected={() => {
            setPickerOpen(false);
            updateView('dashboard');
            window.location.hash = '#dashboard';
            setChannelRefreshKey((prev) => prev + 1);
          }}
        />
      </>
    );
  }

  // =====================================================
  // VIEW: AUTH PAGE (LOGIN / SIGN UP)
  // =====================================================
  if (view === 'login') {
    return (
      <LoginPage
        initialMode={authMode}
        onLoginSuccess={handleLoginSuccess}
        onGoToLanding={handleGoToLanding}
        apiUrl={API_URL}
      />
    );
  }

  // =====================================================
  // VIEW: DEFAULT PUBLIC LANDING & MARKETING PAGES
  // =====================================================
  const showPricing = isPricingRoute(currentHash, currentPath);
  const showPrivacy = isPrivacyRoute(currentHash, currentPath);
  const showTerms = isTermsRoute(currentHash, currentPath);

  return (
    <div
      className="min-h-screen bg-white text-gray-900"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <Nav
        user={user}
        onOpenAuth={(mode) => {
          setAuthMode(mode);
          updateView('login');
          window.location.hash = mode === 'register' ? '#register' : '#login';
        }}
        onOpenAdmin={() => {
          updateView('dashboard');
          window.location.hash = '#dashboard';
        }}
        onLogout={handleLogout}
      />

      {showPricing ? (
        <div className="pt-20">
          <PricingPage />
        </div>
      ) : showPrivacy ? (
        <div className="pt-16">
          <PrivacyPolicyPage />
        </div>
      ) : showTerms ? (
        <div className="pt-16">
          <TermsOfUsePage />
        </div>
      ) : (
        <main className="pt-16">
          <Hero />
          <TrustedBy />
          <Channels 
            onSelectChannel={() => {
              if (!user) {
                setAuthMode('register');
                updateView('login');
                window.location.hash = '#register';
              } else {
                updateView('dashboard');
                window.location.hash = '#dashboard';
              }
            }} 
          />
          <CoreFeatures />
          <MoreFeatures />
          <AISection />
          <Support />
          <Metrics />
          <CTA />
        </main>
      )}

      <Footer />
    </div>
  );
}