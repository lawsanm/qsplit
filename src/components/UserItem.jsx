import React from 'react';
import { Trash2 } from 'lucide-react';

export default function UserItem({ user, updateName, updateAmount, removeUser }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 py-3 group items-center animate-fade-in">
      <div className="flex-1 w-full">
        <input
          type="text"
          value={user.name}
          onChange={(e) => updateName(user.id, e.target.value)}
          placeholder="Person's Name"
          className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-2 px-1 focus:outline-none focus:border-primary-500 transition-colors text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
        />
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="relative flex-1 sm:w-32">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 pl-1">Rs.</span>
          <input
            type="number"
            value={user.amount === 0 ? '' : user.amount}
            onChange={(e) => updateAmount(user.id, e.target.value)}
            placeholder="0"
            className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 py-2 pl-7 pr-1 focus:outline-none focus:border-primary-500 transition-colors text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
            min="0"
            step="1"
          />
        </div>
        <button
          onClick={() => removeUser(user.id)}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
          title="Remove person"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}
