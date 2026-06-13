import React from 'react';
import { Moon, Sun, Receipt } from 'lucide-react';

export default function Header({ toggleTheme, theme }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2.5 rounded-2xl text-white shadow-lg shadow-primary-500/30">
          <Receipt size={20} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-none tracking-tight">
            QSplit
          </h1>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Split bills, fairly</p>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 pl-2.5 pr-3.5 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-primary-300 dark:hover:border-primary-700 transition-all text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark'
          ? <Sun size={14} strokeWidth={2.5} />
          : <Moon size={14} strokeWidth={2.5} />}
        <span className="text-xs font-semibold">{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>
    </header>
  );
}
