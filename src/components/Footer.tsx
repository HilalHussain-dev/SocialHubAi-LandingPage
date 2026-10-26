import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import logo from '../assets/logo.png';
import { SiThreads } from 'react-icons/si';

const SOCIAL_ICONS = [
  { id: 'IG', name: 'Instagram', icon: <FaInstagram className="w-4 h-4" />, href: '#channels' },
  { id: 'FB', name: 'Facebook', icon: <FaFacebookF className="w-4 h-4" />, href: '#channels' },
  { id: 'X', name: 'X', icon: <FaXTwitter className="w-4 h-4" />, href: '#channels' },
  { id: 'LI', name: 'LinkedIn', icon: <FaLinkedinIn className="w-4 h-4" />, href: '#channels' },
  { id: 'TH', name: 'Threads', icon: <SiThreads className="w-4 h-4" />, href: '#channels' },
];

const FOOTER_COLS = [
  {
    heading: 'Product',
    links: [
      { label: 'Publish & Schedule', href: '#features' },
      { label: 'AI Content Assistant', href: '#ai' },
      { label: 'Analytics & Insights', href: '#features' },
      { label: 'Community Inbox', href: '#features' },
      { label: 'Live Company Metrics', href: '#metrics' },
    ],
  },
  {
    heading: 'Channels',
    links: [
      { label: 'Instagram', href: '#channels' },
      { label: 'Facebook', href: '#channels' },
      { label: 'LinkedIn', href: '#channels' },
      { label: 'TikTok', href: '#channels' },
      { label: 'X / Twitter', href: '#channels' },
      { label: 'Threads', href: '#channels' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Pricing Plans', href: '#pricing' },
      { label: 'Frequently Asked Questions', href: '#faq' },
      { label: 'Help Center & Support', href: '#support' },
      { label: 'Privacy Policy', href: '#privacy-policy' },
      { label: 'Terms of Use', href: '#terms-of-use' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About SocialHub AI', href: '#hero' },
      { label: 'Open Dashboard', href: '#dashboard' },
      { label: 'Customer Reviews', href: '#pricing' },
      { label: 'Contact Support', href: 'mailto:socialhubaiofficial@gmail.com' },
    ],
  },
];

export function Footer() {
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('mailto:')) return;
    e.preventDefault();
    if (href.startsWith('#')) {
      window.location.hash = href;
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (href === '/') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#f9f8f6] border-t border-gray-200 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Logo + social */}
        <div className="flex flex-col md:flex-row md:items-start gap-10 mb-14">
          <div className="shrink-0">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick('/', e)}
              className="flex items-center gap-2 mb-5 cursor-pointer"
            >
              <div className="flex items-center justify-center">
                <img src={logo} alt="SocialHub Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-extrabold text-[20px] tracking-tight text-gray-900">SocialHub</span>
            </a>
            <p className="text-xs text-gray-500 max-w-[220px] mb-4 leading-relaxed">
              The all-in-one social media management and AI analytics platform for creators and teams.
            </p>
            <div className="flex gap-2.5">
              {SOCIAL_ICONS.map((s) => (
                <a 
                  key={s.id} 
                  href={s.href}
                  onClick={(e) => handleLinkClick(s.href, e)}
                  title={s.name}
                  className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors hover:text-gray-900 cursor-pointer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer columns (4 equal columns) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">{col.heading}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        onClick={(e) => handleLinkClick(link.href, e)}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>© 2026 SocialHub AI · All rights reserved</span>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-gray-400">
            {[
              { label: 'Privacy Policy', href: '#privacy-policy' },
              { label: 'Terms of Use', href: '#terms-of-use' },
              { label: 'Security & Compliance', href: '#privacy-policy' },
              { label: 'Cookie Policy', href: '#privacy-policy' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
                className="hover:text-gray-700 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
