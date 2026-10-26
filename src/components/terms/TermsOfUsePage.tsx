import React, { useEffect } from 'react';
import { 
  FileText, 
  ArrowLeft, 
  Mail, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Calendar, 
  Building2, 
  Layers, 
  AlertCircle,
  Scale,
  Ban,
  Clock,
  Sparkles
} from 'lucide-react';

export function TermsOfUsePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'sec-1', number: '1', title: 'Agreement to These Terms' },
    { id: 'sec-2', number: '2', title: 'The Service' },
    { id: 'sec-3', number: '3', title: 'Eligibility and Accounts' },
    { id: 'sec-4', number: '4', title: 'Connecting Third-Party Accounts' },
    { id: 'sec-5', number: '5', title: 'Content and Publishing' },
    { id: 'sec-6', number: '6', title: 'Acceptable Use' },
    { id: 'sec-7', number: '7', title: 'AI-Generated Content' },
    { id: 'sec-8', number: '8', title: 'Third-Party Services' },
    { id: 'sec-9', number: '9', title: 'Fees and Payments' },
    { id: 'sec-10', number: '10', title: 'Privacy' },
    { id: 'sec-11', number: '11', title: 'Intellectual Property' },
    { id: 'sec-12', number: '12', title: 'Service Availability and Changes' },
    { id: 'sec-13', number: '13', title: 'Disclaimer' },
    { id: 'sec-14', number: '14', title: 'Limitation of Liability' },
    { id: 'sec-15', number: '15', title: 'Suspension and Termination' },
    { id: 'sec-16', number: '16', title: 'Changes to These Terms' },
    { id: 'sec-17', number: '17', title: 'Governing Law and Disputes' },
    { id: 'sec-18', number: '18', title: 'Contact Us' },
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

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href="#privacy-policy" 
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#privacy-policy';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-emerald-700 hover:text-emerald-900 font-semibold transition-colors hidden sm:inline"
            >
              View Privacy Policy →
            </a>
            <div className="flex items-center gap-1.5 text-gray-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Effective: October 23, 2026
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold mb-6">
            <FileText className="w-4 h-4 text-blue-600" />
            SocialHub AI Terms of Service
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.12] mb-4">
            Terms of Service
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Please read these terms carefully before using SocialHub AI. They set out your rights and responsibilities when managing and publishing social media content.
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
                  className="text-xs font-bold text-blue-700 hover:underline truncate block"
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
            <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-blue-950">You own your content</h4>
                  <p className="text-xs text-blue-800/90 mt-0.5">
                    You grant SocialHub AI only the limited permissions necessary to schedule, format, and publish posts to your connected accounts.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: Agreement to These Terms */}
            <section id="sec-1" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">1</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Agreement to These Terms</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                These Terms of Service (<strong>"Terms"</strong>) govern your access to and use of SocialHub AI (<strong>"SocialHub AI," "we," "us," or "our"</strong>), operated by <strong>Laimsoft</strong>. By creating an account or using the service, you agree to these Terms. If you do not agree, do not use SocialHub AI.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 2: The Service */}
            <section id="sec-2" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">2</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">The Service</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                SocialHub AI is intended to help individuals, creators, and businesses manage social media workflows. Depending on availability, platform approval, and the permissions you grant, features may include connecting social accounts, preparing content, publishing posts, scheduling supported content, uploading videos, and viewing supported account information.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mt-3">
                Features may be added, changed, limited, suspended, or discontinued. We do not guarantee uninterrupted availability or that every social platform will support every feature.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 3: Eligibility and Accounts */}
            <section id="sec-3" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">3</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Eligibility and Accounts</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                You must be legally able to enter into these Terms and meet any minimum age requirements that apply to you. You agree to provide accurate account information, keep it up to date, protect your login credentials, and promptly notify us of suspected unauthorized access.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mt-3">
                You are responsible for activity carried out through your account unless applicable law provides otherwise.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 4: Connecting Third-Party Accounts */}
            <section id="sec-4" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">4</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Connecting Third-Party Accounts</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                When connecting a social media account, you authorize SocialHub AI to access and use the permissions you approve through the relevant platform's authorization process. You must have the rights and authority necessary to connect the account and act on its behalf.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed mt-3">
                Your use of third-party platforms remains subject to their terms, developer policies, community standards, and API restrictions. We are not responsible for a third party's decision to reject, change, limit, or revoke access to its services.
              </p>
              <p className="text-xs text-gray-500 mt-3">
                You may disconnect accounts where supported. You may also need to revoke access directly in the third-party platform's settings.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 5: Content and Publishing */}
            <section id="sec-5" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">5</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Content and Publishing</h2>
              </div>
              <div className="space-y-3 text-[14.5px] text-gray-700 leading-relaxed">
                <p>
                  <strong>Ownership:</strong> You retain ownership of content you create or own, subject to the rights needed to operate the service. You grant SocialHub AI a limited, non-exclusive permission to host, process, transmit, format, and use your content only as reasonably necessary to provide the features you request.
                </p>
                <p>
                  <strong>Responsibility:</strong> You are responsible for your content, including captions, images, videos, music, trademarks, claims, and any other materials you submit or publish. You represent that you have the rights, licenses, consents, and permissions necessary to use and publish that content.
                </p>
                <p>
                  <strong>Publishing Authorization:</strong> When you ask SocialHub AI to publish or schedule content, you authorize us to send the relevant content and instructions to the connected platform. You are responsible for reviewing content, destination accounts, timing, visibility, and other settings before confirming an action.
                </p>
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                  <div>
                    <strong>Scheduling Conditions:</strong> Scheduling is subject to platform availability, API limits, account eligibility, authorization, processing delays, and other technical conditions. <strong>We do not guarantee that every scheduled post or video will publish at a specific time or at all.</strong> Check the status shown in SocialHub AI and the destination platform.
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 6: Acceptable Use */}
            <section id="sec-6" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">6</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Acceptable Use</h2>
              </div>
              <p className="text-gray-700 text-[15px] mb-4">
                You agree not to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700">
                {[
                  'Use SocialHub AI for unlawful, deceptive, fraudulent, abusive, or infringing activity.',
                  "Violate another person's privacy, intellectual property, publicity, or other legal rights.",
                  'Publish spam, malware, or content prohibited by applicable law or destination platform rules.',
                  'Attempt to bypass API rate limits, security measures, authorization controls, or platform restrictions.',
                  'Access accounts, channels, or private data without explicit authorization.',
                  'Interfere with the service, probe or attack systems, or introduce malicious code.',
                  'Reverse engineer or misuse the service except where prohibited by applicable law.',
                  'Use automation to violate a platform’s policies or manipulate engagement deceptively.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                    <Ban className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                We may investigate suspected violations and take proportionate action, including restricting or suspending access where reasonably necessary.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 7: AI-Generated Content */}
            <section id="sec-7" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">7</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">AI-Generated Content</h2>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-50/60 border border-purple-100">
                <Sparkles className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div className="text-[14.5px] text-gray-700 leading-relaxed">
                  <p>
                    AI-assisted outputs may be inaccurate, incomplete, unsuitable, or similar to material generated for others. You are responsible for reviewing outputs before relying on them or publishing them, checking facts and rights, and ensuring compliance with applicable laws and platform rules.
                  </p>
                  <p className="mt-2 text-xs font-semibold text-purple-950">
                    AI features do not replace your own editorial judgment and review.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 8: Third-Party Services */}
            <section id="sec-8" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">8</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Third-Party Services</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                SocialHub AI depends on third-party platforms, APIs, hosting providers, and other services. Those services may change or become unavailable. We do not control third-party services and are not responsible for their independent content, policies, decisions, or availability.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 9: Fees and Payments */}
            <section id="sec-9" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">9</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Fees and Payments</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                If paid plans or features are offered, their prices, billing periods, renewal terms, and applicable taxes will be disclosed at the point of purchase. Unless otherwise stated or required by law, fees are payable according to the terms presented at purchase. Any cancellation or refund terms presented during checkout will apply, subject to applicable law.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                If no paid plan is offered to you, this section does not create a payment obligation.
              </p>
            </section>

            <hr className="border-gray-100" />

            {/* Section 10: Privacy */}
            <section id="sec-10" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">10</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Privacy</h2>
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Our collection and use of personal information are described in the SocialHub AI Privacy Policy, which forms part of the information governing your use of the service. By using SocialHub AI, you acknowledge that you have had the opportunity to review that policy.
              </p>
              <div className="mt-3">
                <a
                  href="#privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#privacy-policy';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Read the full SocialHub AI Privacy Policy →
                </a>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 11 & 12 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <section id="sec-11" className="p-5 rounded-xl bg-gray-50/80 border border-gray-100 scroll-mt-36">
                <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">11. Intellectual Property</h3>
                <h4 className="text-base font-bold text-gray-950 mb-2">Our Proprietary Rights</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  SocialHub AI and its software, branding, design, and materials (excluding user content) are owned by or licensed to Laimsoft and are protected by applicable intellectual property laws. These Terms do not transfer ownership to you.
                </p>
              </section>

              <section id="sec-12" className="p-5 rounded-xl bg-gray-50/80 border border-gray-100 scroll-mt-36">
                <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">12. Service Availability</h3>
                <h4 className="text-base font-bold text-gray-950 mb-2">Platform Changes</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We aim to maintain a useful and reliable service but do not promise uninterrupted or error-free availability at all times. We may maintain, update, modify, or discontinue features for operational, security, legal, or business reasons.
                </p>
              </section>
            </div>

            <hr className="border-gray-100" />

            {/* Section 13: Disclaimer */}
            <section id="sec-13" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">13</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Disclaimer</h2>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 leading-relaxed space-y-2">
                <p>
                  To the extent permitted by law, SocialHub AI is provided on an <strong>"as available"</strong> and <strong>"as is"</strong> basis, without warranties that are not expressly made in these Terms or required by law.
                </p>
                <p>
                  We do not guarantee specific publishing results, audience reach, engagement, analytics accuracy, business outcomes, or uninterrupted third-party API access.
                </p>
                <p className="text-gray-500 italic">
                  Nothing in these Terms excludes or limits a right or warranty that cannot lawfully be excluded or limited.
                </p>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 14: Limitation of Liability */}
            <section id="sec-14" className="scroll-mt-36">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">14</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950">Limitation of Liability</h2>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 leading-relaxed space-y-2">
                <p>
                  To the extent permitted by applicable law, Laimsoft will not be liable for indirect, incidental, special, consequential, exemplary, or punitive losses, or for lost profits, revenue, goodwill, data, or business opportunities arising from use of or inability to use SocialHub AI.
                </p>
                <p>
                  To the extent permitted by law, Laimsoft's total liability for claims arising from the service will be limited to the amount you paid to Laimsoft for SocialHub AI during the twelve months before the event giving rise to the claim, or, if you have paid nothing, the minimum amount permitted by applicable law.
                </p>
              </div>
            </section>

            <hr className="border-gray-100" />

            {/* Section 15, 16, 17 */}
            <div className="space-y-6">
              <section id="sec-15" className="scroll-mt-36">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">15</span>
                  <h3 className="text-lg font-bold text-gray-950">Suspension and Termination</h3>
                </div>
                <p className="text-gray-700 text-xs leading-relaxed">
                  You may stop using SocialHub AI at any time. We may suspend or terminate access where reasonably necessary for security, legal compliance, serious or repeated violations of these Terms, misuse of third-party services, or risks to users or the service. Surviving sections include intellectual property, disclaimers, liability limitations, and dispute provisions.
                </p>
              </section>

              <section id="sec-16" className="scroll-mt-36">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">16</span>
                  <h3 className="text-lg font-bold text-gray-950">Changes to These Terms</h3>
                </div>
                <p className="text-gray-700 text-xs leading-relaxed">
                  We may update these Terms as the service or legal requirements change. We will update the "Last updated" date. Where required by law, we will give notice or obtain consent for material changes. Continued use after changes take effect indicates acceptance.
                </p>
              </section>

              <section id="sec-17" className="scroll-mt-36">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-bold rounded">17</span>
                  <h3 className="text-lg font-bold text-gray-950">Governing Law and Disputes</h3>
                </div>
                <p className="text-gray-700 text-xs leading-relaxed">
                  These Terms are subject to applicable law. Before starting formal proceedings, you agree to contact us at <strong>socialhubaiofficial@gmail.com</strong> and make a reasonable effort to resolve any issue informally.
                </p>
              </section>
            </div>

            <hr className="border-gray-100" />

            {/* Section 18: Contact Us */}
            <section id="sec-18" className="scroll-mt-36 bg-[#f7f9fd] border border-blue-200/80 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded">18</span>
                <h2 className="text-xl sm:text-2xl font-bold text-blue-950">Contact Us</h2>
              </div>
              <p className="text-blue-900 text-sm mb-4">
                Questions about these Terms can be sent to:
              </p>
              <div className="space-y-1.5 text-xs text-blue-950 font-medium">
                <p><strong>Entity:</strong> Laimsoft — SocialHub AI</p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:socialhubaiofficial@gmail.com" className="font-bold underline text-blue-700 hover:text-blue-900">
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
