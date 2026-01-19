# 🌱 GreenNest – Indoor Plant Care & Store

Live Site: [https://dazzling-crostata-2dc386.netlify.app/](https://dazzling-crostata-2dc386.netlify.app/)

---

## 📖 Overview

**GreenNest** is a responsive single-page web application (SPA) built for plant lovers.  
It allows users to explore indoor plants, read care tips, book expert consultations, and manage their profiles — all in a calming, minimalist design.  

The platform integrates **Firebase Authentication** for secure login/signup, supports Google Sign-In, and uses JSON data for plant listings. Protected routes ensure that sensitive pages like plant details and profile management are accessible only to authenticated users.

---

## 🚀 Features

- 🌿 **Elegant SPA Layout** with Navbar & Footer visible across all routes  
- 📊 **Plant Listings** fetched from `plants.json` with details like price, rating, and care level  
- 🔒 **Secure Authentication** using Firebase (Signup, Login, Google Sign-In, Forgot Password)  
- 🛡️ **Protected Routes** for Plant Details and Profile management  
- 🧑‍🌾 **Consultation Booking Form** with success toast notifications  
- 📝 **Profile Page** with real-time `updateProfile()` for name & photo updates  
- 💡 **Extra Homepage Section** (e.g., Plant of the Week / Eco Decor Ideas)  
- 🎨 **Responsive UI** with Tailwind CSS and smooth animations (Swiper.js / Framer Motion)  
- ✅ **Password Validation** (uppercase, lowercase, min length 6) + toggle show/hide  

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, DaisyUI (optional)  
- **Routing:** React Router DOM  
- **Authentication:** Firebase Authentication (Email/Password + Google)  
- **Animations:** Swiper.js, Framer Motion  
- **Notifications:** react-hot-toast  
- **Deployment:** Netlify  

---

## 📦 Dependencies

- `react`, `react-dom`, `react-router-dom`  
- `firebase` for authentication  
- `tailwindcss`, `daisyui` for styling  
- `swiper`, `framer-motion` for animations  
- `react-hot-toast` for toast notifications  

---
