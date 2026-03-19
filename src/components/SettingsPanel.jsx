import React from 'react';
import { Settings, Percent, Truck, ArrowBigUpDash } from 'lucide-react';

export default function SettingsPanel({ rules, updateRules, deliveryFee, setDeliveryFee }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-6 transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <Settings size={18} className="text-gray-500 dark:text-gray-400" />
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Order Settings</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1.5 uppercase tracking-wider">
            <Truck size={14} /> Delivery Fee
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">Rs.</span>
            <input
              type="number"
              value={deliveryFee === 0 ? '' : deliveryFee}
              onChange={(e) => setDeliveryFee(e.target.value)}
              placeholder="0"
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl py-2.5 pl-9 pr-3 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none text-gray-800 dark:text-gray-100"
              min="0"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1.5 uppercase tracking-wider">
            <Percent size={14} /> Discount (%)
          </label>
          <div className="relative">
            <input
              type="number"
              value={rules.discountPercentage === 0 ? '' : rules.discountPercentage}
              onChange={(e) => updateRules({ discountPercentage: e.target.value })}
              placeholder="0"
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl py-2.5 px-3 pr-8 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none text-gray-800 dark:text-gray-100"
              min="0"
              max="100"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">%</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1.5 uppercase tracking-wider">
            <ArrowBigUpDash size={14} /> Max / Discount Value
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">Rs.</span>
            <input
              type="number"
              value={rules.maxDiscount === 0 ? '' : rules.maxDiscount}
              onChange={(e) => updateRules({ maxDiscount: e.target.value })}
              placeholder="Max cap or flat discount"
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl py-2.5 pl-9 pr-3 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none text-gray-800 dark:text-gray-100"
              min="0"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Min Order for Discount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">Rs.</span>
            <input
              type="number"
              value={rules.minOrder === 0 ? '' : rules.minOrder}
              onChange={(e) => updateRules({ minOrder: e.target.value })}
              placeholder="Required amount"
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl py-2.5 pl-9 pr-3 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none text-gray-800 dark:text-gray-100"
              min="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
