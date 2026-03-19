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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="pt-4 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto font-sans">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main className="animate-fade-in">
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

          <div className="flex gap-4 mb-8">
            <button
              onClick={resetAll}
              className="px-6 py-4 text-gray-500 dark:text-gray-400 font-semibold rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Reset
            </button>

            <button
              onClick={handleCalculate}
              className="flex-1 py-4 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-0.5"
            >
              <Calculator size={20} />
              Calculate Bill
            </button>
          </div>

          {result && <ResultsBreakdown result={result} />}

          <a
            href="https://github.com/lawsanm"
            target="_blank"
            rel="noreferrer"
            className="mt-12 text-center text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 font-medium flex items-center justify-center gap-1.5 transition-colors pointer-events-auto"
          >
            made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
            <span
              className="text-primary-600 dark:text-primary-400"
              style={{
                fontFamily: "Caveat, cursive",
                fontSize: "1.4rem",
                transform: "translateY(-2px)",
                display: "inline-block"
              }}
            >
              Laux
            </span>
          </a>
        </main>
      </div>
    </div>
  );
}
