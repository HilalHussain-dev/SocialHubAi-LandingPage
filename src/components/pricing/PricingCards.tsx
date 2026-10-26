import React, { useState } from 'react';
import { Check, Info, Minus, Plus, ArrowRight } from 'lucide-react';

export function PricingCards() {
  const [channels, setChannels] = useState(1);
  const [billing, setBilling] = useState<'Monthly' | 'Yearly'>('Yearly');

  const essentialsPrice = billing === 'Yearly' ? 5 * channels : 6 * channels;
  const essentialsBilled = billing === 'Yearly' ? essentialsPrice * 12 : essentialsPrice;

  const teamPrice = billing === 'Yearly' ? 10 * channels : 12 * channels;
  const teamBilled = billing === 'Yearly' ? teamPrice * 12 : teamPrice;

  const handleStartPlan = (plan: 'free' | 'essentials' | 'team') => {
    try {
      localStorage.setItem('socialhub_selected_plan', plan);
    } catch {}
    window.location.hash = '#register';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToComparison = () => {
    const el = document.getElementById('feature-comparison');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
      {/* Toggles */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-6 mb-12">
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <span className="font-semibold text-gray-900">Channels</span>
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1">
            <button 
              onClick={() => setChannels(Math.max(1, channels - 1))} 
              className="p-1 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors"
              title="Decrease channels"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-semibold text-gray-900 select-none">{channels}</span>
            <button 
              onClick={() => setChannels(channels + 1)} 
              className="p-1 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors"
              title="Increase channels"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="font-semibold text-gray-900">Billing</span>
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full p-1">
            <button 
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                billing === 'Monthly' 
                  ? 'bg-white shadow-sm text-gray-900 border border-gray-200' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setBilling('Monthly')}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                billing === 'Yearly' 
                  ? 'bg-white shadow-sm text-gray-900 border border-gray-200' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setBilling('Yearly')}
            >
              Yearly (Save 17%)
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free */}
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col bg-white shadow-xs hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-[52px] leading-none font-extrabold text-gray-900">Free</span>
            <span className="text-gray-500 font-medium">forever</span>
          </div>
          <p className="text-sm text-gray-500 mb-8 mt-2">Connect up to 3 channels</p>
          <button 
            onClick={() => handleStartPlan('free')}
            className="bg-[#1a1a1a] text-white rounded-full py-3 px-6 font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors w-max mb-10 cursor-pointer"
          >
            Let's go <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="mt-auto">
            <h4 className="font-semibold text-gray-900 mb-4">What's included</h4>
            <ul className="space-y-4">
              {[
                '10 scheduled posts per channel - refill anytime',
                '100 ideas',
                '1 user account',
                'AI Assistant',
                'Basic insights',
                'API access',
                'Community inbox',
                'Customer support'
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-gray-700 leading-snug">
                  <div className="bg-gray-100 rounded-full p-1 mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-gray-900" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Essentials */}
        <div className="border-2 border-[#1a1a1a] rounded-2xl p-8 flex flex-col bg-white relative shadow-sm hover:shadow-lg transition-shadow">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#d1fae5] text-[#047857] text-xs font-bold px-3 py-1 rounded-full border border-[#a7f3d0]">
            Recommended
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">Essentials</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-[52px] leading-none font-extrabold text-gray-900">${essentialsPrice}</span>
            <span className="text-gray-500 font-medium">/month</span>
          </div>
          <p className="text-sm text-gray-500 mb-8 mt-2">
            {channels} channel{channels > 1 ? 's' : ''} · ${essentialsBilled} billed {billing.toLowerCase()} {billing === 'Yearly' ? '(save 2 months)' : ''}
          </p>
          <button 
            onClick={() => handleStartPlan('essentials')}
            className="bg-[#1a1a1a] text-white rounded-full py-3 px-6 font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors w-max mb-10 cursor-pointer"
          >
            Start 14-day free trial <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="mt-auto">
            <h4 className="font-semibold text-gray-900 mb-4">What's included</h4>
            <ul className="space-y-4">
              {[
                'Unlimited scheduled posts per channel',
                'Unlimited ideas',
                '1 user account',
                'AI Assistant',
                'Advanced analytics & reports',
                'API access',
                'Community inbox',
                'Hashtag manager',
                'First comment scheduling',
                'Priority customer support'
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-gray-700 leading-snug">
                  <div className="bg-gray-100 rounded-full p-1 mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-gray-900" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col bg-white shadow-xs hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Team</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-[52px] leading-none font-extrabold text-gray-900">${teamPrice}</span>
            <span className="text-gray-500 font-medium">/month</span>
          </div>
          <p className="text-sm text-gray-500 mb-8 mt-2">
            {channels} channel{channels > 1 ? 's' : ''} · ${teamBilled} billed {billing.toLowerCase()} {billing === 'Yearly' ? '(save 2 months)' : ''}
          </p>
          <button 
            onClick={() => handleStartPlan('team')}
            className="bg-[#1a1a1a] text-white rounded-full py-3 px-6 font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors w-max mb-10 cursor-pointer"
          >
            Start 14-day free trial <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="mt-auto">
            <h4 className="font-semibold text-gray-900 mb-4">What's included</h4>
            <ul className="space-y-4">
              {[
                'Unlimited scheduled posts per channel',
                'Unlimited ideas',
                'Unlimited team members',
                'AI Assistant',
                'Advanced analytics & client reports',
                'API access',
                'Community inbox',
                'Hashtag manager',
                'First comment scheduling',
                'Custom access & role levels',
                'Content approval workflows',
                'Dedicated 24/7 priority support'
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-gray-700 leading-snug">
                  <div className="bg-gray-100 rounded-full p-1 mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-gray-900" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 flex flex-col items-center gap-6">
        <button 
          onClick={handleScrollToComparison}
          className="bg-[#262626] text-white rounded-full py-3 px-6 text-[15px] font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
        >
          Compare all plan features &darr;
        </button>
      </div>
    </div>
  );
}
