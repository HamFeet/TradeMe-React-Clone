## 📌 Project Overview

The **TradeMe React Clone** is a web application built using React that mimics the layout, navigation, and browsing experience of TradeMe.

The purpose of this project was to:
- Practice modern React development
- Build reusable components
- Implement client-side routing
- Integrate a frontend application with a backend and database
- Replicate a real-world marketplace-style UI

> ⚠️ This is a **non-commercial clone** created for educational purposes only and is not affiliated with TradeMe.

---

## ✨ Features

- Homepage inspired by the TradeMe layout
- Item listing cards with images and dynamic data
- Item detail pages with descriptions, specifications, and seller information
- Compare listings page
- User-submitted item questions
- Navigation and routing between listings
- Responsive UI components

---

## 🛠 Tech Stack

**Frontend**
- React
- JavaScript (ES6+)
- HTML5 & CSS3
- React Router
- React Context API

**Backend**
- Node.js
- Express
- MongoDB
- Mongoose

**Other**
- Docker (optional setup)
- npm

---

## 👤 My Contribution

I was a core contributor to this project, working across both the frontend and backend. My contributions focused on application architecture, data flow, backend integration, and feature development.

### Backend & Data Architecture
- Built and integrated the backend server, including item and seller schemas
- Implemented MongoDB connection management using a global connection pattern
- Created data sanitization and validation for items, sellers, and user-submitted questions
- Added backend routes to support new features such as item questions
- Enabled CORS and aligned environment configuration between frontend and backend

### Frontend Features & State Management
- Implemented React Context (`useContext`) for global state management
- Added local storage persistence to retain state across page refreshes
- Built navigation logic to track and display the currently selected listing
- Refactored components to populate seller and item data dynamically from the database
- Fixed state-related bugs using `useEffect` to prevent data loss on refresh

### UI & Component Enhancements
- Added dynamic images to listing cards
- Refined CSS and layout to better match the TradeMe-style design
- Integrated backend data into UI components such as AboutTheSeller
- Improved card layouts and consistency across pages

### Collaboration & Workflow
- Opened and merged multiple pull requests
- Resolved merge conflicts and kept feature branches aligned with `main`
- Contributed to project setup and repository initialization

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB (local or cloud instance)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/HamFeet/TradeMe-React-Clone.git
   cd TradeMe-React-Clone

2. **Install dependencies**
   ```bash
   npm install

3. **Set up environment variables**
   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=3001

4. **Start the application**
   ```bash
   npm start

5. **Open your browser at:**
   ```bash
    http://localhost:3000