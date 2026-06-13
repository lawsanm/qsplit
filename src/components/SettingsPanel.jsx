import React from 'react';
import { Percent, Truck, ArrowUpCircle, ShoppingCart } from 'lucide-react';

function SettingInput({ label, icon: Icon, prefix, suffix, value, onChange, placeholder, min, max }) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        <Icon size={12} className="shrink-0" />
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm font-medium pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value === 0 ? '' : value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 rounded-xl py-2.5 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 dark:focus:border-primary-500 transition-all outline-none text-gray-800 dark:text-gray-100 text-sm placeholder:text-gray-300 dark:placeholder:text-gray-600 ${prefix ? 'pl-9' : 'pl-3'} ${suffix ? 'pr-8' : 'pr-3'}`}
          min={min}
          max={max}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm font-medium pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

export default function SettingsPanel({ rules, updateRules, deliveryFee, setDeliveryFee }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden transition-colors">
      <div className="px-5 py-3.5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/40">
        <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-tight">Order Settings</h2>
      </div>

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SettingInput
          label="Delivery Fee"
          icon={Truck}
          prefix="Rs."
          value={deliveryFee}
          onChange={(e) => setDeliveryFee(e.target.value)}
          placeholder="0"
          min="0"
        />

        <SettingInput
          label="Discount"
          icon={Percent}
          suffix="%"
          value={rules.discountPercentage}
          onChange={(e) => updateRules({ discountPercentage: e.target.value })}
          placeholder="0"
          min="0"
          max="100"
        />

        <SettingInput
          label="Max / Flat Discount"
          icon={ArrowUpCircle}
          prefix="Rs."
          value={rules.maxDiscount}
          onChange={(e) => updateRules({ maxDiscount: e.target.value })}
          placeholder="Cap or flat amount"
          min="0"
        />

        <SettingInput
          label="Min Order for Discount"
          icon={ShoppingCart}
          prefix="Rs."
          value={rules.minOrder}
          onChange={(e) => updateRules({ minOrder: e.target.value })}
          placeholder="Required amount"
          min="0"
        />
      </div>
    </div>
  );
}
