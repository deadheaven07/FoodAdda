# 🍔 FoodAdda

FoodAdda is a full-stack food ordering platform built using the MERN stack. The project was developed to explore end-to-end web application development, covering user authentication, role-based administration, product management, and complete order management workflows.

Rather than focusing on isolated CRUD operations, the project implements complete business flows across both the frontend and backend while following a clean separation of concerns.

---

## Features

### Customer Features

- User Registration & Login
- Secure Authentication
- Browse Food Menu
- View Product Details
- Place Food Orders
- Manage Orders

### Admin Features

- Admin Authentication
- Product Management
- User Management
- Administrative Controls

---

## Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Authentication & Security

- bcrypt for secure password hashing

---

## Architecture

The application follows a typical client-server architecture.

```
React Frontend
       │
       ▼
 REST API (Express.js)
       │
       ▼
    MongoDB
```

The frontend communicates with the backend using REST APIs while MongoDB persists application data including users, products, and administrative information.

---

## Core Functionalities

### Authentication

- User Registration
- User Login
- Admin Login
- Password Encryption using bcrypt

### Product Management

- Browse Food Items
- Manage Products (Admin)

### Order Management

- Place Orders
- Manage Orders
- Update Order Information

---

## Engineering Highlights

- Full-stack MERN architecture
- RESTful API design
- Role-based authentication (User/Admin)
- Secure password hashing
- MongoDB document-based persistence
- Component-based frontend architecture
- Separation of frontend and backend concerns

---

## Project Structure

```
FoodAdda
├── backend/
│   ├── models/
│   ├── routes/
│   ├── db.js
│   └── index.js
│
├── public/
├── src/
│   ├── Components/
│   ├── Screens/
│   ├── images/
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/deadheaven07/FoodAdda.git
cd FoodAdda
```

### Install Dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

### Start the Application

Backend

```bash
npm start
```

Frontend

```bash
npm start
```

---

## Future Improvements

Some enhancements planned for future iterations include:

- JWT-based authentication
- Docker support
- Payment Gateway Integration
- Order Tracking
- Image Upload & Storage
- Redis Caching
- CI/CD Pipeline
- API Documentation (Swagger/OpenAPI)
- Unit & Integration Testing
- Cloud Deployment

---

## Repository

GitHub Repository

https://github.com/deadheaven07/FoodAdda

---

## Author

**Harsh Raghuwanshi**

Software Engineer | Backend & Full-Stack Development

GitHub: https://github.com/deadheaven07
