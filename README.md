
# ⚛️ React Learning Journey

Welcome to my **React Learning Journey** repository.

This repository contains my daily practice, mini projects, and notes while learning **React.js** from beginner to advanced.

---

## 📌 Creating a React Project

### 🔹 Old Method (Create React App)

```bash
npx create-react-app my-app
```

---

### 🔹 Modern Method (Vite) ⚡

Create a new React project using Vite:

```bash
npm create vite@latest
```

Choose:
- Framework → **React**
- Variant → **JavaScript**

Move into the project folder:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🎨 Installing Tailwind CSS (Vite)

### Step 1️⃣ Install Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

---

### Step 2️⃣ Configure Vite

**vite.config.js**

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

### Step 3️⃣ Import Tailwind

**src/index.css**

```css
@import "tailwindcss";
```

---

## 🚀 Run the Project

```bash
npm run dev
```

Visit:

```text
http://localhost:5173
```

---

# 🚀 ReactJS Learning Journey

Welcome to my **ReactJS Learning Journey** repository!

This repository documents my progress as I learn React from the fundamentals to advanced concepts. Instead of only watching tutorials, I'm building mini projects and writing code to understand each concept practically.

---

## 📖 About

This repository contains all the practice code, mini projects, and experiments I build while learning React.

My goal is to strengthen my frontend development skills by learning React through consistent practice.

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- HTML5
- CSS3

---

# 📚 Learning Roadmap

## ✅ Phase 1 - React Basics
- React Introduction
- Project Setup using Vite
- JSX
- Components

---

## ✅ Phase 2 - Props
- Passing Props
- Receiving Props
- Reusable Components

---

## ✅ Phase 3 - Mini Projects with Props
- Hands-on practice
- Component communication

---

## ✅ Phase 4 - Tailwind CSS
- Installing Tailwind CSS
- Utility Classes
- Responsive Layout

---

## ✅ Phase 5 - Tailwind CSS Project
- UI Practice
- Layout Design

---

## ✅ Phase 6 - Functions
- Event Handling
- Arrow Functions
- Passing Functions

---

## ✅ Phase 7 - Hook Introduction
- Why Hooks?
- Why normal variables don't update UI

---

## ✅ Phase 8 - useState Hook
- State Management
- Counter Application
- Updating State

---

## ✅ Phase 9 - Practice useState
- Increase Counter
- Decrease Counter
- UI Practice

---

## ✅ Phase 10 - Advanced useState
- Object State
- Updating Object State
- Spread Operator
- Functional Updates

---

# 📅 Upcoming Topics

- Form Handling
- Two-Way Data Binding
- Notes App
- Local Storage
- API Calls
- useEffect Hook
- Gallery Project
- React Router
- Advanced Routing
- Context API
- Context API Project

---

# 📂 Repository Structure

```
REACTJS
│
├── phase-1 (Basics)
├── phase-2 (Props)
├── phase-3 (Mini Projects)
├── phase-4 (Tailwind CSS)
├── phase-5 (Tailwind Project)
├── phase-6 (Functions)
├── phase-7 (Hook Introduction)
├── phase-8 (useState Hook)
├── phase-9 (Practice useState)
├── phase-10 (Advanced useState)
```

---

# 🎯 Learning Philosophy

> **"The best way to learn React is by building projects, making mistakes, and improving every day."**

> "Learning by Building."

I believe the best way to master React is by writing code every day, experimenting with concepts, making mistakes, and improving through practice.

---

# 📈 Current Progress

- ✔ React Fundamentals
- ✔ Components
- ✔ Props
- ✔ Tailwind CSS
- ✔ Functions
- ✔ Hooks Introduction
- ✔ useState
- ✔ Advanced State Management

---

# 📌 Goals

- Build real-world React projects
- Learn modern React best practices
- Understand state management deeply
- Learn API integration
- Build scalable frontend applications

---

# 🤝 Feedback

If you have suggestions or best practices, feel free to open an issue or connect with me. I'm always open to learning from the developer community.

---

# ⭐ Support

If you found this repository helpful, consider giving it a ⭐.

It motivates me to keep learning and sharing my progress.

---

## 👨‍💻 Author

**Sanjib Ghosh**

- 🌐 Portfolio: https://sanjib.techknowlogia.in
- 💼 LinkedIn: https://www.linkedin.com/in/sanjibkarunachaitanyaghosh/

---

## 📜 License

This repository is created for educational purposes and personal learning.