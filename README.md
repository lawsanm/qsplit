# 🧾 QSplit

A modern, responsive, and aesthetically pleasing web application (and Android app!) built to help groups of friends fairly split food order bills. QSplit seamlessly handles all the complex math for you, including proportional discounts, delivery fee splitting, and exact floor-rounding corrections with remainder distribution.

QSplit fairly distributes shared discounts based on how much each person spent. For example, if a Rs.500 offer is unlocked by a total order above Rs.2000, the discount is proportionally divided instead of equally split ensuring the person who spent more receives a fairer share of the discount. Similarly, rounding corrections are automatically applied to minimize individual impact and ensure the total collected cash matches the bill exactly.

---

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
- **📱 Android App Support:** QSplit is also available as a native Android application, thanks to the Android solution contributed by [Janagan](https://www.linkedin.com/in/janagan2k04).

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | [React](https://react.dev/) (powered by [Vite](https://vitejs.dev/)) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Icons | [Lucide-React](https://lucide.dev/) |
| Mobile (Android) | [Capacitor](https://capacitorjs.com/) + Native Android (Java) |
| Hosting / Deploy | Configured for any static host |

---

## 💻 Getting Started (Web)

### Prerequisites
Make sure you have **Node.js** and **NPM** installed on your system.

### Local Installation

1. **Clone the repository:**
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

---

## 📱 Getting Started (Android)

The Android solution is located in the `/android` directory, contributed by **Janagan** via pull request.

### Prerequisites
- [Android Studio](https://developer.android.com/studio)
- Node.js and NPM

### Android Build

1. **Build the web assets first:**
   ```bash
   npm run build
   ```

2. **Sync assets to the Android project:**
   ```bash
   npx cap sync android
   ```

3. **Open in Android Studio:**
   ```bash
   npx cap open android
   ```

4. **Run on device or emulator** directly from Android Studio.

---

## 💖 Credits

| Role | Contributor |
|---|---|
| 🎨 Web App Design & Development | **Laux** ([@lawsanm](https://lawsan.dev)) |
| 📱 Android Solution | **Janagan** ([@janagan2k04](https://github.com/janagan2k04))— contributed via pull request |

---

## 🌐 Live Demo

Visit the live web app at **[qsplit.vercel.app](https://qsplit.vercel.app)**
