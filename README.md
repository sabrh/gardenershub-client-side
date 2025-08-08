# 🌿 GardnersHub – A Gardening Community & Resource Hub

**Live Site URL**: [https://gardnershub-sabrh.netlify.app](https://gardnershub-sabrh.netlify.app)  
  
**Server GitHub Repo**: [https://github.com/sabrh/gardnershub-server](https://github.com/sabrh/gardenershub-server-side)

---

## 📄 Project Description

**GardnersHub** is a full-stack gardening community platform where users can share tips, explore gardening advice, attend events, and connect with fellow gardening lovers. The platform includes authentication, CRUD operations, filtering, liking tips, and a responsive UI.

---

## 🚀 Key Features

- 🔐 Firebase authentication with Google login and JWT-protected routes
- 📝 Share, update, delete garden tips (with public/private visibility)
- 🔍 Browse tips with filtering by difficulty level and like functionality
- 🌿 Explore gardener profiles with experience and status info
- 🎨 Custom 404 page + loading spinners
- 📈 Trending tips section showing most liked tips
- ⚙️ Role-based UI, environment variables, and responsive across all devices
- ✨ Integrated: Lottie React & React Awesome Reveal

---

## 🧪 Technologies Used

### 💻 Frontend
- React.js, React Router DOM
- Tailwind CSS, DaisyUI
- TanStack React Query
- Axios, Firebase, SweetAlert2
- Lottie React, React Awesome Reveal

### 🖥️ Backend
- Node.js, Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- CORS, Dotenv

---

## 📁 Environment Variables

Both client and server use `.env` files to store Firebase config, MongoDB URI, and Stripe keys. These are **excluded** from GitHub using `.gitignore`.

---

## 📱 Responsiveness

- ✅ Fully responsive on mobile, tablet, and desktop
- ✅ Reload-safe protected routes
- ✅ Maintains state after refresh
