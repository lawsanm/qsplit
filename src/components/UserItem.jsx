import React from 'react';
import { Trash2 } from 'lucide-react';

const AVATAR_COLORS = ['#6366f1', '#ec4899', '#f97316', '#10b981', '#06b6d4', '#f59e0b', '#8b5cf6', '#ef4444'];

function getColor(id) {
  const sum = id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

export default function UserItem({ user, index, updateName, updateAmount, removeUser }) {
  const initial = user.name ? user.name[0].toUpperCase() : String(index + 1);
  const avatarColor = getColor(user.id);

  return (
    <div className="flex items-center gap-3 px-5 py-3.5 group hover:bg-gray-50/70 dark:hover:bg-gray-800/40 transition-colors animate-fade-in">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 select-none"
        style={{ backgroundColor: avatarColor }}
      >
        {initial}
      </div>

      <div className="flex-1 min-w-0">
        <input
          type="text"
          value={user.name}
          onChange={(e) => updateName(user.id, e.target.value)}
          placeholder="Person's name"
          className="w-full bg-transparent py-1 focus:outline-none text-gray-800 dark:text-gray-100 text-sm font-medium placeholder:text-gray-300 dark:placeholder:text-gray-600 border-b border-transparent focus:border-primary-400 dark:focus:border-primary-600 transition-colors"
        />
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className="relative">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-xs font-medium pointer-events-none">Rs.</span>
          <input
            type="number"
            value={user.amount === 0 ? '' : user.amount}
            onChange={(e) => updateAmount(user.id, e.target.value)}
            placeholder="0"
            className="w-24 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-1.5 pl-8 pr-2 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-gray-800 dark:text-gray-100 text-sm font-medium"
            min="0"
            step="1"
          />
        </div>

        <button
          onClick={() => removeUser(user.id)}
          className="p-1.5 text-gray-300 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
          title="Remove person"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
}
