import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: "Does SocialHub AI work for agencies or businesses managing multiple brands?",
    a: "Yes! SocialHub AI is built with agencies in mind. You can invite team members, assign custom permission levels, manage multiple brand workspaces, and schedule posts across unlimited client channels with seamless approval workflows."
  },
  {
    q: "What counts as a channel?",
    a: "A channel is any single social media account or profile you connect to SocialHub AI — for example, one Instagram Business account, one Facebook Page, or one LinkedIn company page each count as one channel."
  },
  {
    q: "What features are supported for each specific channel?",
    a: "We support direct publishing, scheduling, image/video uploads, first comment automation, hashtag management, and deep analytics across Facebook, Instagram, LinkedIn, TikTok, X (Twitter), Pinterest, Threads, and YouTube."
  },
  {
    q: "What are the billing options for SocialHub AI's paid plans?",
    a: "We offer flexible monthly and yearly billing options. With yearly billing, you save approximately 17% (2 months free). You can upgrade, downgrade, or cancel your subscription at any time without long-term lock-ins."
  },
  {
    q: "What payment methods does SocialHub AI accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, and Google Pay/Apple Pay where supported."
  },
  {
    q: "Does SocialHub AI have a free trial?",
    a: "Yes, both Essentials and Team plans include a full-featured 14-day free trial with no upfront charge. You can explore all premium features risk-free."
  },
  {
    q: "What happens at the end of the 14-day trial?",
    a: "At the end of your 14-day trial, your chosen plan will activate. If you decide not to continue, you can cancel before the trial ends and you will never be charged, or simply downgrade to our Free Forever plan."
  },
  {
    q: "Can I keep my three free channels if I upgrade from SocialHub AI's Free plan to a paid plan?",
    a: "When you upgrade to a paid plan, all your connected channels and post history seamlessly transfer over and unlock unlimited scheduled posts, advanced analytics, and AI features."
  },
  {
    q: "What is the scheduled post limit for each plan?",
    a: "The Free plan includes 10 scheduled posts per channel at any given time. Essentials and Team plans include unlimited scheduled posts per channel."
  },
  {
    q: "Does SocialHub AI offer a discount to nonprofit organizations and charities?",
    a: "Yes! We proudly offer a 50% discount on all paid plans for registered 501(c)(3) nonprofits, charities, and educational institutions. Contact support to apply."
  },
  {
    q: "Does SocialHub AI charge Value-Added Tax (VAT) to customers?",
    a: "Applicable taxes or VAT are automatically calculated at checkout based on your country and billing location in accordance with local regulations."
  },
  {
    q: "When were the prices of SocialHub AI's plans last updated?",
    a: "Our pricing was recently optimized to provide transparent, per-channel flexibility with no hidden fees or tier traps."
  },
  {
    q: "How does SocialHub AI's new pricing help me save as I grow?",
    a: "With our modular per-channel pricing, you only pay for the exact number of active social profiles you need. You can add or remove channels on the fly as client contracts change without paying for unused slots."
  }
];

export function FAQ() {
  return (
    <div id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 py-24 border-t border-gray-200 scroll-mt-20">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3">
          <h2 className="text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">FAQs</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Everything you need to know about SocialHub AI plans, billing, and channel management.
          </p>
          <a
            href="mailto:socialhubaiofficial@gmail.com"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Have another question? Email support &rarr;
          </a>
        </div>
        <div className="w-full md:w-2/3 space-y-0">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="group border-b border-gray-200">
              <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 py-6 text-[15px] hover:text-blue-600 transition-colors">
                <span className="pr-4">{item.q}</span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" />
              </summary>
              <p className="text-gray-600 pb-6 text-[15px] leading-relaxed hidden group-open:block">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
