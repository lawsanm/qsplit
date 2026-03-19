import React from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';

export default function ResultsBreakdown({ result }) {
  if (!result || result.splitData.length === 0) return null;

  return (
    <div className="bg-primary-600 dark:bg-primary-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-primary-500/20 transition-colors animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Calculator size={24} className="text-primary-100" />
        <h2 className="text-xl font-bold">Calculation Results</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/10 dark:bg-black/20 rounded-2xl p-4 backdrop-blur-sm">
          <p className="text-primary-100 text-sm font-medium mb-1">Total Order</p>
          <p className="text-2xl font-bold">Rs. {result.totalOrder}</p>
        </div>
        <div className="bg-white/10 dark:bg-black/20 rounded-2xl p-4 backdrop-blur-sm">
          <p className="text-primary-100 text-sm font-medium mb-1">Total Discount</p>
          <p className="text-2xl font-bold">-Rs. {Math.round(result.actualDiscount)}</p>
        </div>
        <div className="bg-white/10 dark:bg-black/20 rounded-2xl p-4 backdrop-blur-sm">
          <p className="text-primary-100 text-sm font-medium mb-1">Delivery</p>
          <p className="text-2xl font-bold">+Rs. {result.deliveryTotal}</p>
        </div>
        <div className="bg-white/20 dark:bg-primary-600/50 rounded-2xl p-4 backdrop-blur-sm shadow-inner border border-white/10">
          <p className="text-primary-50 text-sm font-medium mb-1">Total Payable</p>
          <p className="text-2xl font-bold">Rs. {result.targetTotal}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <CheckCircle2 size={18} className="text-primary-200" />
          Individual Breakdown
        </h3>
        
        <div className="bg-white/5 rounded-2xl overflow-hidden divide-y divide-white/10">
          {result.splitData.map((user) => (
            <div key={user.id} className="p-4 hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-lg truncate pr-4">{user.name || 'Unnamed'}</span>
                <span className="font-bold text-xl whitespace-nowrap">Rs. {user.finalPayable}</span>
              </div>
              
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-primary-200">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-300"></span>
                  Order: Rs. {user.amount}
                </span>
                {user.discountShare > 0 && (
                  <span className="flex items-center gap-1 text-green-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    -Rs. {user.discountShare.toFixed(1)}
                  </span>
                )}
                {user.deliveryShare > 0 && (
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-300"></span>
                    +Rs. {user.deliveryShare.toFixed(1)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
