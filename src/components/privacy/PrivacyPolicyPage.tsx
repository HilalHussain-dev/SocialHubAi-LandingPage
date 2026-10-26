import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  ArrowLeft, 
  Mail, 
  ExternalLink, 
  CheckCircle2, 
  Server, 
  Cpu, 
  Globe, 
  UserCheck, 
  Trash2, 
  Cookie, 
  AlertTriangle,
  Building2,
  Calendar,
  Layers
} from 'lucide-react';

export function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'sec-1', number: '1', title: 'Introduction' },
    { id: 'sec-2', number: '2', title: 'Information We Collect' },
    { id: 'sec-3', number: '3', title: 'Social Media Integrations & Permissions' },
    { id: 'sec-4', number: '4', title: 'How We Use Information' },
    { id: 'sec-5', number: '5', title: 'AI-Assisted Features' },
    { id: 'sec-6', number: '6', title: 'Storage and Security' },
    { id: 'sec-7', number: '7', title: 'Sharing of Information' },
    { id: 'sec-8', number: '8', title: 'Data Retention and Deletion' },
    { id: 'sec-9', number: '9', title: 'Your Choices and Privacy Rights' },
    { id: 'sec-10', number: '10', title: 'Cookies & Similar Technologies' },
    { id: 'sec-11', number: '11', title: 'International Processing' },
    { id: 'sec-12', number: '12', title: "Children's Privacy" },
    { id: 'sec-13', number: '13', title: 'Third-Party Services and Links' },
    { id: 'sec-14', number: '14', title: 'Changes to This Policy' },
    { id: 'sec-15', number: '15', title: 'Contact Us' },
  ];

  return (
    <div className="bg-[#faf9f6] min-h-screen text-gray-900 font-sans pb-24">
      {/* Top Banner / Breadcrumb */}
      <div className="border-b border-gray-200/80 bg-white/80 backdrop-blur-md sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-950 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </button>

          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Effective: October 23, 2026
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            SocialHub AI Privacy Policy
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.12] mb-4">
            We value your privacy and transparency
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            This Privacy Policy details how SocialHub AI collects, uses, protects, and handles your information when you connect your social media channels.
          </p>

          {/* Metadata Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/70 flex items-start gap-3">
              <Calendar className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Last Updated</p>
                <p className="text-xs font-bold text-gray-800">October 23, 2026</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/70 flex items-start gap-3">
              <Building2 className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Operated By</p>
                <p className="text-xs font-bold text-gray-800">Laimsoft</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/70 flex items-start gap-3">
              <Mail className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Official Email</p>
                <a 
                  href="mailto:socialhubaiofficial@gmail.com" 
                  className="text-xs font-bold text-emerald-700 hover:underline truncate block"
                >
                  socialhubaiofficial@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Table of Contents (Sticky on Desktop) */}
          <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-32 bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Table of Contents
            </h3>
            <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 text-sm">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-gray-950 hover:bg-gray-100/70 text-xs font-medium transition-colors"
                >
                  <span className="text-gray-400 font-mono text-[11px] w-4">{sec.number}.</span>
                  <span className="truncate">{sec.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Policy Body */}
          <div className="flex-1 min-w-0 bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-xs space-y-12 leading-relaxed">
            
            {/* Quick Principles Banner */}
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">We do not sell your personal data</h4>
                  <p className="text-xs text-emerald-800/90 mt-0.5">
                    Your social content, tokens, and credentials are used solely to provide and power SocialHub AI services.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: Introduction */}
            <section id="sec-1" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">1</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Introduction</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                SocialHub AI (<strong>"SocialHub AI," "we," "us," or "our"</strong>) is a social media management platform operated by <strong>Laimsoft</strong>. It is designed to help individuals, creators, and businesses manage social media content and, where supported, connect their accounts to publish content, schedule posts, and view account information.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mt-3">
                This Privacy Policy explains what information we collect, how we use and protect it, when we share it, and the choices available to you.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 2: Information We Collect */}
            <section id="sec-2" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">2</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Information We Collect</h2>
              </div>
              <p className="text-gray-700 text-[15px] mb-4">
                Depending on the features you use, we may collect:
              </p>
              <ul className="space-y-3 text-[14.5px] text-gray-700">
                <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                  <UserCheck className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <strong className="text-gray-950">Account information:</strong> such as your name, email address, login credentials in securely hashed form, and account preferences.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                  <Globe className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <div>
                    <strong className="text-gray-950">Social account information:</strong> information returned by a social platform after you authorize a connection, such as your platform account or channel ID, display name, profile image, connected pages or channels, and permissions granted.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                  <Layers className="w-4 h-4 text-purple-600 mt-1 shrink-0" />
                  <div>
                    <strong className="text-gray-950">Content and publishing information:</strong> posts, captions, images, videos, titles, descriptions, thumbnails, scheduling details, and publishing status that you choose to manage through SocialHub AI.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                  <Server className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                  <div>
                    <strong className="text-gray-950">Usage and technical information:</strong> service logs, error reports, device or browser information, and information needed to secure and maintain the platform.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                  <Mail className="w-4 h-4 text-rose-600 mt-1 shrink-0" />
                  <div>
                    <strong className="text-gray-950">Support communications:</strong> information you provide when contacting us for assistance.
                  </div>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                We aim to collect only the information reasonably needed to provide the features you request.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 3: Social Media Integrations and Permissions */}
            <section id="sec-3" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">3</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Social Media Integrations and Permissions</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                SocialHub AI may offer integrations with third-party services, including Meta services (such as Facebook and Instagram), Pinterest, LinkedIn, and YouTube/Google. Availability depends on implementation, platform approval, and the permissions granted by each service.
              </p>
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 my-4 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
                <Lock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Direct Password Security:</strong> We do not ask you to provide your social platform password directly to SocialHub AI. Authorization is handled exclusively through the relevant platform's secure sign-in and OAuth consent flow.
                </div>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                Each third-party platform operates under its own independent terms and privacy policy. Please review the relevant provider's policies:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <span className="font-semibold">Google Privacy Policy</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
                <a 
                  href="https://www.facebook.com/privacy/policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <span className="font-semibold">Meta Privacy Policy</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
                <a 
                  href="https://policy.pinterest.com/en/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <span className="font-semibold">Pinterest Privacy Policy</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
                <a 
                  href="https://www.linkedin.com/legal/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <span className="font-semibold">LinkedIn Privacy Policy</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 4: How We Use Information */}
            <section id="sec-4" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">4</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">How We Use Information</h2>
              </div>
              <p className="text-gray-700 text-[15px] mb-3">
                We use information to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {[
                  'Create and manage your SocialHub AI account.',
                  'Connect social accounts at your explicit request.',
                  'Create, prepare, schedule, and publish content you instruct us to publish.',
                  'Display supported account details, publishing results, or reporting metrics.',
                  'Store your preferences and content needed for active features.',
                  'Provide customer support and promptly answer inquiries.',
                  'Protect the platform, detect misuse, troubleshoot errors, and prevent fraud.',
                  'Comply with applicable legal obligations and enforce terms.',
                  'Improve platform reliability using aggregated and de-identified telemetry.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2 bg-gray-50/70 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-emerald-50 text-emerald-950 text-xs font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                We do not sell your personal information.
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 5: AI-Assisted Features */}
            <section id="sec-5" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">5</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">AI-Assisted Features</h2>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200/70">
                <Cpu className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-[14.5px] text-gray-700 leading-relaxed">
                  <p>
                    If AI-assisted features are available and you choose to use them, the text, prompts, images, or other materials you submit may be processed to generate suggestions or content.
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    Do not submit confidential or sensitive information you are not authorized to share. Where an external AI provider processes information, that processing is subject to the provider's applicable terms and privacy practices.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 6: Storage and Security */}
            <section id="sec-6" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">6</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Storage and Security</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                We use reasonable technical and organizational safeguards designed to protect information against unauthorized access, loss, misuse, or alteration.
              </p>
              <div className="mt-3 p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-blue-950 text-xs leading-relaxed flex items-start gap-3">
                <Server className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <strong>Secure Cloud Infrastructure:</strong> Our platform employs industry-standard encrypted cloud hosting safeguards and secure transmission protocols to protect your data.
                </div>
              </div>
              <p className="text-gray-600 text-xs mt-3">
                No method of transmission or storage is completely secure. You are responsible for keeping your SocialHub AI credentials secure and notifying us immediately if you suspect unauthorized access.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 7: Sharing of Information */}
            <section id="sec-7" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">7</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Sharing of Information</h2>
              </div>
              <p className="text-gray-700 text-[15px] mb-3">
                We share information strictly under the following circumstances:
              </p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                  <strong>With social platforms:</strong> when you connect an account or instruct us to perform actions such as publishing a post or uploading media.
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                  <strong>With service providers:</strong> trusted infrastructure vendors (such as hosting, database, and operational tooling) under strict confidentiality.
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                  <strong>For legal and safety reasons:</strong> when required to comply with law, respond to lawful subpoenas, protect rights, or investigate security threats.
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                  <strong>Business transfers:</strong> in connection with a merger, reorganization, financing, or transfer of business assets.
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                  <strong>At your direction:</strong> whenever you explicitly authorize third-party sharing.
                </div>
              </div>
              <p className="text-xs font-bold text-gray-900 mt-3">
                We do not sell your personal information to advertisers or data brokers.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 8: Data Retention and Deletion */}
            <section id="sec-8" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">8</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Data Retention and Deletion</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                We retain information for as long as reasonably necessary to provide the service, maintain security, resolve disputes, comply with legal obligations, and enforce agreements.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-rose-50/60 border border-rose-100 text-rose-950 text-xs flex items-start gap-3">
                <Trash2 className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                <div className="leading-relaxed">
                  <strong>Request Data Deletion:</strong> You may disconnect a social account at any time through your dashboard settings. To request full deletion of your SocialHub AI account and all associated data, email{' '}
                  <a href="mailto:socialhubaiofficial@gmail.com" className="font-bold underline text-rose-800">
                    socialhubaiofficial@gmail.com
                  </a>
                  . Verified requests are processed in accordance with applicable regulations.
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Note: Disconnecting an account inside SocialHub AI may not revoke granted permissions on the provider side. You can also revoke SocialHub AI's access directly in Meta, Google, LinkedIn, or Pinterest connected apps settings.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 9: Your Choices and Privacy Rights */}
            <section id="sec-9" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">9</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Your Choices and Privacy Rights</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                Depending on your jurisdiction, you may have rights to access, correct, delete, or obtain a portable copy of your personal data, or object to specific processing activities.
              </p>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200/70 text-xs text-gray-800 flex items-center justify-between">
                <span>To submit a request, email with subject line <strong>"Privacy Request"</strong>:</span>
                <a 
                  href="mailto:socialhubaiofficial@gmail.com?subject=Privacy%20Request"
                  className="px-3 py-1.5 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
                >
                  Send Request
                </a>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 10: Cookies */}
            <section id="sec-10" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">10</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Cookies and Similar Technologies</h2>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700 leading-relaxed">
                <Cookie className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <p>
                  SocialHub AI uses essential session cookies and storage tokens to maintain authenticated sessions, secure accounts, and persist interface preferences. We do not use third-party tracking cookies across unassociated websites.
                </p>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 11, 12, 13: International, Children, Third-Party */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <section id="sec-11" className="p-4 rounded-xl bg-gray-50/80 border border-gray-100 scroll-mt-36">
                <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">11. International</h3>
                <h4 className="text-sm font-bold text-gray-950 mb-1.5">Global Processing</h4>
                <p className="text-[12px] text-gray-600 leading-relaxed">
                  Your data may be processed on servers across various cloud regions. Standard contractual clauses and legal safeguards apply where required.
                </p>
              </section>

              <section id="sec-12" className="p-4 rounded-xl bg-gray-50/80 border border-gray-100 scroll-mt-36">
                <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">12. Age Limits</h3>
                <h4 className="text-sm font-bold text-gray-950 mb-1.5">Children's Privacy</h4>
                <p className="text-[12px] text-gray-600 leading-relaxed">
                  SocialHub AI is not intended for children under legally allowed age. We do not knowingly collect personal data from minors.
                </p>
              </section>

              <section id="sec-13" className="p-4 rounded-xl bg-gray-50/80 border border-gray-100 scroll-mt-36">
                <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">13. External Links</h3>
                <h4 className="text-sm font-bold text-gray-950 mb-1.5">Third-Party Sites</h4>
                <p className="text-[12px] text-gray-600 leading-relaxed">
                  We do not control the independent privacy policies or practices of third-party platforms linked from or integrated into our service.
                </p>
              </section>
            </div>

            <hr className="border-gray-100" />

            {/* Section 14: Changes to Policy */}
            <section id="sec-14" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">14</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Changes to This Policy</h2>
              </div>
              <p className="text-gray-700 text-[14.5px] leading-relaxed">
                We may periodically update this Privacy Policy as our features, third-party integrations, or applicable laws evolve. The "Last updated" date will reflect any revisions. Continued use of SocialHub AI after modifications denotes acknowledgment.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 15: Contact Us */}
            <section id="sec-15" className="scroll-mt-36 bg-[#f7fdf9] border border-emerald-200/80 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded">15</span>
                <h2 className="text-xl sm:text-2xl font-bold text-emerald-950">Contact Us</h2>
              </div>
              <p className="text-emerald-900 text-sm mb-4">
                Have questions, concerns, or requests regarding this Privacy Policy? Please reach out to our team:
              </p>
              <div className="space-y-1.5 text-xs text-emerald-950 font-medium">
                <p><strong>Entity:</strong> Laimsoft — SocialHub AI</p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:socialhubaiofficial@gmail.com" className="font-bold underline text-emerald-700 hover:text-emerald-900">
                    socialhubaiofficial@gmail.com
                  </a>
                </p>
                <p><strong>Website:</strong> SocialHub AI official domain</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
