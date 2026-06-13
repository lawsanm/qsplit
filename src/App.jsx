import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import SettingsPanel from './components/SettingsPanel';
import ResultsBreakdown from './components/ResultsBreakdown';
import { calculateSplit } from './utils/calculator';
import { Calculator } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('qsplit-users');
    return saved ? JSON.parse(saved) : [{ id: '1', name: '', amount: '' }];
  });

  const [deliveryFee, setDeliveryFee] = useState(() => {
    return localStorage.getItem('qsplit-delivery') || '';
  });

  const [rules, setRules] = useState(() => {
    const saved = localStorage.getItem('qsplit-rules');
    return saved ? JSON.parse(saved) : { minOrder: '', discountPercentage: '', maxDiscount: '' };
  });

  const [result, setResult] = useState(null);

  // Theme observer
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Save state to local storage
  useEffect(() => {
    localStorage.setItem('qsplit-users', JSON.stringify(users));
    localStorage.setItem('qsplit-delivery', deliveryFee);
    localStorage.setItem('qsplit-rules', JSON.stringify(rules));
  }, [users, deliveryFee, rules]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  const addUser = () => {
    setUsers([...users, { id: crypto.randomUUID(), name: '', amount: '' }]);
  };

  const removeUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const updateName = (id, newName) => {
    setUsers(users.map(u => u.id === id ? { ...u, name: newName } : u));
  };

  const updateAmount = (id, newAmount) => {
    setUsers(users.map(u => u.id === id ? { ...u, amount: newAmount === '' ? '' : Number(newAmount) } : u));
  };

  const handleCalculate = () => {
    const calculated = calculateSplit(users, deliveryFee, rules);
    setResult(calculated);
  };

  const resetAll = () => {
    setUsers([{ id: crypto.randomUUID(), name: '', amount: '' }]);
    setDeliveryFee('');
    setRules({ minOrder: '', discountPercentage: '', maxDiscount: '' });
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main className="animate-fade-in space-y-4">
          <SettingsPanel
            rules={rules}
            updateRules={(newRules) => setRules({ ...rules, ...newRules })}
            deliveryFee={deliveryFee}
            setDeliveryFee={setDeliveryFee}
          />

          <UserList
            users={users}
            addUser={addUser}
            removeUser={removeUser}
            updateName={updateName}
            updateAmount={updateAmount}
          />

          <div className="flex gap-3">
            <button
              onClick={resetAll}
              className="px-5 py-3.5 text-gray-500 dark:text-gray-400 font-semibold rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-pointer text-sm"
            >
              Reset
            </button>

            <button
              onClick={handleCalculate}
              className="flex-1 py-3.5 flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold rounded-2xl shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/35 active:translate-y-0 cursor-pointer"
            >
              <Calculator size={18} />
              Calculate Bill
            </button>
          </div>

          {result && <ResultsBreakdown result={result} />}

          <div className="pt-6 pb-2 flex flex-col items-center gap-1">
            <a
              href="https://github.com/lawsanm"
              target="_blank"
              rel="noreferrer"
              className="text-center text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              made with <span className="text-red-400 animate-pulse">❤️</span> by{" "}
              <span
                className="text-primary-500 dark:text-primary-400"
                style={{ fontFamily: "Caveat, cursive", fontSize: "1.35rem", transform: "translateY(-1px)", display: "inline-block" }}
              >
                Laux
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/janagan2k04/"
              target="_blank"
              rel="noreferrer"
              className="text-center text-xs text-gray-400 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 font-medium flex items-center justify-center transition-colors"
            >
              Android Solution by{" "}
              <span
                className="ml-1 text-primary-500 dark:text-primary-400"
                style={{ fontFamily: "Caveat, cursive", fontSize: "1.1rem", display: "inline-block" }}
              >
                Janagan
              </span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
