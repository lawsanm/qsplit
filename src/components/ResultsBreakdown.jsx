import React from 'react';
import { CheckCircle2, TrendingDown, Truck, ShoppingBag, CreditCard } from 'lucide-react';

const AVATAR_COLORS = ['#6366f1', '#ec4899', '#f97316', '#10b981', '#06b6d4', '#f59e0b', '#8b5cf6', '#ef4444'];
function getColor(id) {
  const sum = id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

function StatCard({ label, value, icon: Icon, accent }) {
  return (
    <div className={`rounded-xl p-3.5 ${accent ? 'bg-white/20 border border-white/20' : 'bg-white/10'}`}>
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon size={13} className="text-primary-200" />
        <p className="text-primary-100 text-xs font-medium">{label}</p>
      </div>
      <p className="text-xl font-bold tracking-tight">{value}</p>
    </div>
  );
}

export default function ResultsBreakdown({ result }) {
  if (!result || result.splitData.length === 0) return null;

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary-500/15 animate-slide-up">
      {/* Header gradient */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-950 px-6 py-5">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="bg-white/15 rounded-xl p-2">
            <CheckCircle2 size={18} className="text-white" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white leading-none">Calculation Results</h2>
            <p className="text-primary-200 text-xs mt-0.5">Here's how it breaks down</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <StatCard label="Total Order" value={`Rs. ${result.totalOrder}`} icon={ShoppingBag} />
          <StatCard label="Total Discount" value={`-Rs. ${Math.round(result.actualDiscount)}`} icon={TrendingDown} />
          <StatCard label="Delivery" value={`+Rs. ${result.deliveryTotal}`} icon={Truck} />
          <StatCard label="Total Payable" value={`Rs. ${result.targetTotal}`} icon={CreditCard} accent />
        </div>
      </div>

      {/* Individual breakdown */}
      <div className="bg-white dark:bg-gray-900 border-t-0">
        <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/40">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Individual Breakdown</h3>
        </div>

        <div className="divide-y divide-gray-50 dark:divide-gray-800">
          {result.splitData.map((user) => {
            const initial = user.name ? user.name[0].toUpperCase() : '?';
            const color = getColor(user.id);
            return (
              <div key={user.id} className="px-5 py-4 flex items-center gap-3 hover:bg-gray-50/70 dark:hover:bg-gray-800/40 transition-colors">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {initial}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm truncate">
                    {user.name || 'Unnamed'}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      Order: Rs. {user.amount}
                    </span>
                    {user.discountShare > 0 && (
                      <span className="text-xs text-emerald-500 dark:text-emerald-400">
                        −Rs. {user.discountShare.toFixed(1)}
                      </span>
                    )}
                    {user.deliveryShare > 0 && (
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        +Rs. {user.deliveryShare.toFixed(1)} del.
                      </span>
                    )}
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <p className="font-bold text-gray-900 dark:text-white text-base">Rs. {user.finalPayable}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
