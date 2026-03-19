import React from 'react';
import UserItem from './UserItem';
import { Plus } from 'lucide-react';

export default function UserList({ users, addUser, removeUser, updateName, updateAmount }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-6 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">People</h2>
        <span className="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold px-2 py-1 rounded-md">
          {users.length} {users.length === 1 ? 'person' : 'people'}
        </span>
      </div>
      
      <div className="space-y-1 mb-4">
        {users.map((user) => (
          <UserItem 
            key={user.id} 
            user={user} 
            removeUser={removeUser}
            updateName={updateName}
            updateAmount={updateAmount}
          />
        ))}
        {users.length === 0 && (
          <div className="text-center py-6 text-gray-400 text-sm">
            Add people to start splitting the bill.
          </div>
        )}
      </div>

      <button
        onClick={addUser}
        className="w-full py-3 flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-medium rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors border border-dashed border-primary-200 dark:border-primary-800/50"
      >
        <Plus size={20} />
        Add Person
      </button>
    </div>
  );
}
