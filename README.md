# 🧾 QSplit

A modern, responsive, and aesthetically pleasing web application built to help groups of friends fairly split food order bills. QSplit seamlessly handles all the complex math for you, including proportional discounts, delivery fee splitting, and exact floor-rounding corrections with remainder distribution.

## ✨ Features

- **Dynamic Member Tracking:** Easily add and manage multiple people participating in the split via animated UI cards.
- **Advanced Cost Distribution Rules:** 
  - Applies a custom percentage discount.
  - Implements a maximum discount cap (e.g., maximum Rs. 500 limit).
  - Enforces minimum order requirements before applying discounts.
- **Fair Proportional Allocation:** Discounts are distributed proportionally based on each person's individual order value, ensuring 100% fairness across the board. Delivery fees are split equally among all members.
- **Precise Rounding Protocol:** Prevents messy currency rounding issues by enforcing floor precision on payable amounts, automatically distributing any `+1` / `-1` remainders to the lowest spenders. The collected cash perfectly matches the target order total!
- **Dark Mode Support:** A sleek, fully featured Dark Mode toggle that persists preferences seamlessly in your browser's local storage.
- **Responsive & Modern UI:** Designed with premium fintech-grade aesthetics, featuring tailored custom colors, micro-animations, input focus glows, and polished rounded layouts.

## 🚀 Tech Stack

- **Frontend Framework:** [React](https://react.dev/) (powered by [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide-React](https://lucide.dev/)
- **Hosting / Deploy:** Configured for any static host.

## 💻 Getting Started

### Prerequisites
Make sure you have **Node.js** and **NPM** installed on your system.

### Local Installation

1. **Navigate to the project directory** (or clone via Git if hosted):
   ```bash
   git clone https://github.com/lawsanm/qsplit.git
   cd qsplit
   ```

2. **Install all project dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   *The app will be accessible at `http://localhost:5173/`.*

4. **Build for production:**
   ```bash
   npm run build
   ```

## 💖 Credits

Designed, coded, and **made with ❤️ by Laux**.
