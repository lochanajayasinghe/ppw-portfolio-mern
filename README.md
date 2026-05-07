# PPW Portfolio Website

A complete, modern MERN stack portfolio website for the PPW assignment.

## Student Details
- **Name:** J.L. Shasini Lochana
- **Student ID:** IT22555526
- **University:** SLIIT
- **Degree:** BSc (Hons) in Information Technology
- **Module:** IT4070 Preparation for Professional World / PPW

## Features
- Modern, clean, professional, and academic design
- Responsive layout (mobile, tablet, desktop)
- Smooth scrolling and animations
- Dynamic sections: Hero, About, Skills, Projects, Reflective Journal, Career Development Plan, CV, Certificates, GitHub
- Contact form connected to a backend MongoDB database

## Technologies Used
- **Frontend:** React.js, Vite, Tailwind CSS, Lucide React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas connection string)

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory (copy from `.env.example`) and add your MongoDB connection string:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ppw_portfolio
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

The frontend will usually run on `http://localhost:5173` and connect to the backend running on `http://localhost:5000`.


Portfolio Link:https://ppw-portfolio-mern-gxsp.vercel.app/
