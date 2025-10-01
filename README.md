# EduLearn

## Project Overview
**EduLearn** is a web application designed to help students from **grades 6 to 12** learn basic topics in an interactive and structured way. Currently, the app includes **Grade 6 Science** lessons with multiple levels and language support, and future enhancements will cover **all grades, multiple subjects, and additional features**.  

This project helps students learn at their own pace while allowing **parents to track their child's progress**. EduLearn aims to make learning fun, accessible, and measurable.

## Features
- **Grade 6 Science** lessons with 3 difficulty levels
- Support for **4 languages** (English, Hindi, etc.)
- **Future scope:** Cover grades 6–12 and all core subjects
- **Progress tracking:** Parents can view their child’s performance and completion status
- Interactive quizzes and exercises for better understanding
- Responsive design for desktop and mobile

## Problem Statement
Many students struggle to grasp basic concepts due to lack of structured guidance or personalized learning paths. EduLearn addresses this problem by providing **easy-to-understand lessons, practice exercises, and progress tracking**, ensuring both students and parents are involved in the learning process.

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Authentication & Progress Tracking:** JWT-based system for secure user sessions

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```
### 2. Backend Setup
cd backend
npm install

Create a .env file with:
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret


Run the backend:
npm run dev

### 3. Frontend Setup
cd frontend
npm install
npm start

The app will open at http://localhost:3000

## Folder Structure
edtech-mvp/
│
├── frontend/
│ └── src/
│ ├── components/
│ │ ├── Question.js
│ │ ├── Progress.js
│ │ └── Quiz.js
│ └── pages/
│ ├── Home.jsx
│ ├── Home.css
│ ├── App.js
│ ├── App.css
│ └── QuizPage.js
│
├── backend/
│ ├── models/
│ │ └── Question.js
│ ├── controllers/
│ │ └── quizController.js
│ ├── routes/
│ │ └── QuizRoutes.js
│ ├── server.js
│ └── .env
│
├── README.md
└── .gitignore


### Future Enhancements

Add grades 6–12 with all subjects

Expand language options

Gamification features like badges and rewards

Personalized learning recommendations

More detailed analytics for parents

## Contributor
Chadubula Vani – Aspiring Full Stack Developer
