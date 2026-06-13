import React from 'react';
import UserItem from './UserItem';
import { Plus, Users } from 'lucide-react';

export default function UserList({ users, addUser, removeUser, updateName, updateAmount }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden transition-colors">
      <div className="px-5 py-3.5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users size={14} className="text-gray-400 dark:text-gray-500" />
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-tight">People</h2>
        </div>
        <span className="bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 text-xs font-bold px-2.5 py-1 rounded-full">
          {users.length} {users.length === 1 ? 'person' : 'people'}
        </span>
      </div>

      <div className="divide-y divide-gray-50 dark:divide-gray-800">
        {users.map((user, index) => (
          <UserItem
            key={user.id}
            user={user}
            index={index}
            removeUser={removeUser}
            updateName={updateName}
            updateAmount={updateAmount}
          />
        ))}
        {users.length === 0 && (
          <div className="py-10 text-center text-sm text-gray-400 dark:text-gray-500">
            Add people to start splitting the bill.
          </div>
        )}
      </div>

      <div className="px-5 py-3.5 border-t border-gray-100 dark:border-gray-800">
        <button
          onClick={addUser}
          className="w-full py-2.5 flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all border border-dashed border-primary-200 dark:border-primary-800/60 hover:border-primary-400 dark:hover:border-primary-600 text-sm cursor-pointer"
        >
          <Plus size={16} strokeWidth={2.5} />
          Add Person
        </button>
      </div>
    </div>
  );
}
