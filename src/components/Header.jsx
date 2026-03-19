import React, { useEffect, useState } from 'react';
import { Moon, Sun, Receipt } from 'lucide-react';

export default function Header({ toggleTheme, theme }) {
  return (
    <header className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2">
        <div className="bg-primary-600 p-2 rounded-xl text-white shadow-lg shadow-primary-500/30">
          <Receipt size={24} />
        </div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          QSplit
        </h1>
      </div>
      
      <button
        onClick={toggleTheme}
        className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
}
