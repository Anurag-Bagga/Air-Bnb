# 🏡 WanderLust — Vacation Rental & Property Listing Platform

A full-stack vacation rental and property listing web application inspired by Airbnb. WanderLust allows users to browse available properties, create and manage listings, authenticate securely, add reviews, and interact with location-based property information.

## 🚀 Live Demo

**Live Application:** https://air-bnb-h26r.onrender.com

**GitHub Repository:** https://github.com/Anurag-Bagga/Air-Bnb

---

## 📌 Overview

WanderLust is a full-stack web application built to understand and implement real-world web development concepts including:

* MVC architecture
* RESTful routing
* User authentication and authorization
* CRUD operations
* MongoDB database design
* Session management
* Server-side rendering
* Form validation
* Error handling
* Image upload and cloud storage
* Reviews and ratings
* Location-based property information

The application follows a structured backend architecture separating routes, controllers, models, views, and middleware.

---

## ✨ Features

### 👤 User Authentication

* User registration and login
* Logout functionality
* Session-based authentication
* Protected routes for authenticated users
* Login redirection for unauthorized access

### 🔐 Authorization

* Listing owners can edit and delete their own listings
* Users cannot modify listings belonging to other users
* Review authors can manage their own reviews
* Protected operations are handled through reusable middleware

### 🏠 Property Listings

* Browse available property listings
* View individual property details
* Create new listings
* Edit existing listings
* Delete listings
* Store listing information in MongoDB

### 🔎 Search & Categories

* Browse listings according to available categories
* Filter/search property listings based on the application's available listing categories

### ⭐ Reviews & Ratings

* Add reviews to listings
* Display reviews
* Delete reviews
* Validate review data before storing it
* Restrict review management to the review author

### 🖼️ Image Management

* Upload property images
* Store images using Cloudinary
* Integrate uploaded images with property listings

### 📍 Location

* Store property location information
* Display location-related information for listings
* Integrate property location with the application's map functionality

### ⚠️ Error Handling & Validation

* Custom application error handling
* Joi-based request validation
* Dedicated error page
* Handling of invalid routes
* Flash messages for user feedback

---

## 🛠️ Tech Stack

### Frontend

* EJS
* Bootstrap 5
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas
* Mongoose

### Authentication & Authorization

* Passport.js
* Passport Local
* Passport Local Mongoose
* Express Session
* Connect Mongo

### Cloud & Storage

* Cloudinary
* Multer
* Multer Storage Cloudinary

### Validation & Utilities

* Joi
* Method Override
* Connect Flash
* EJS Mate
* dotenv

---

## 🏗️ Architecture

The application follows the MVC (Model–View–Controller) architecture.

```text
                    ┌──────────────────┐
                    │      User        │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   EJS / Browser  │
                    │   Presentation   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │     Routes       │
                    │ Express Router   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   Middleware     │
                    │ Auth / Validation│
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   Controllers    │
                    │ Business Logic   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Mongoose Models  │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ MongoDB Atlas    │
                    └──────────────────┘
```

---

## 📂 Project Structure

```text
Air-Bnb/
│
├── controller/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   └── js/
│
├── router/
│   ├── listings.js
│   ├── review.js
│   └── user.js
│
├── util/
│   └── expressError.js
│
├── views/
│   ├── listings/
│   ├── users/
│   └── layouts/
│
├── app.js
├── middleware.js
├── schema.js
├── cloudConfig.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 🔑 Authentication Flow

The application uses Passport.js with a local authentication strategy.

```text
User
 ↓
Register / Login
 ↓
Passport Authentication
 ↓
Session Created
 ↓
Authenticated User
 ↓
Protected Routes
```

The authenticated user is made available to the application through the request/session lifecycle.

---

## 🔒 Authorization Flow

Authentication determines **who the user is**, while authorization determines **what the user is allowed to do**.

For example:

```text
User requests Edit Listing
          ↓
Is user logged in?
          ↓
        Yes
          ↓
Does user own the listing?
       ↙     ↘
     Yes      No
      ↓        ↓
   Allow     Reject
```

Reusable middleware is used to check whether the current user is authenticated and whether they own the relevant listing or review.

---

## 🗄️ Database

MongoDB Atlas is used as the primary database.

Mongoose is used for:

* Schema definition
* Data modeling
* Database queries
* Validation
* Relationships between application entities

Main entities include:

```text
User
Listing
Review
```

---

## 🔄 CRUD Operations

The application implements CRUD operations for property listings.

| Operation | Description                       |
| --------- | --------------------------------- |
| Create    | Add a new property listing        |
| Read      | View listings and listing details |
| Update    | Edit an existing listing          |
| Delete    | Remove a listing                  |

Reviews also support creation, viewing, and deletion with authorization checks.

---

## ☁️ Image Upload Pipeline

Property images are uploaded through the application and processed using Multer and Cloudinary.

```text
User selects image
       ↓
Multer
       ↓
Cloudinary
       ↓
Image URL
       ↓
MongoDB Listing Document
```

The database stores the relevant image information while Cloudinary handles cloud image storage.

---

## 🛡️ Validation & Error Handling

The application uses Joi schemas to validate listing and review data before processing requests.

A centralized error-handling approach is used to provide appropriate responses for application errors and invalid routes.

The application also uses flash messages to provide feedback to users during authentication and protected operations.

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Anurag-Bagga/Air-Bnb.git
```

### 2. Navigate to the project

```bash
cd Air-Bnb
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root.

Example:

```env
ATLAS_DB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

Use the exact environment-variable names expected by the current source code when configuring your local environment.

### 5. Start the application

```bash
node app.js
```

The application will run on the configured local port.

---

## 🔐 Environment Variables

Sensitive credentials should never be committed to GitHub.

The application uses environment variables for sensitive configuration such as:

* MongoDB Atlas connection
* Session secret
* Cloudinary credentials

Create your own `.env` file when running the project locally.

---

## 🧪 Testing & Debugging

Core application flows were manually tested during development, including:

* User authentication
* Listing creation
* Listing editing
* Listing deletion
* Review operations
* Authorization checks
* Form validation
* Error handling

---

## 📚 Key Concepts Demonstrated

This project demonstrates practical understanding of:

* Node.js
* Express.js
* MongoDB
* Mongoose
* MVC architecture
* RESTful routing
* CRUD operations
* Authentication
* Authorization
* Session management
* Middleware
* Form validation
* Error handling
* Cloud storage
* Server-side rendering
* Git & GitHub

---

## 🎯 Learning Outcomes

Through this project, I gained hands-on experience building and debugging a complete full-stack web application and learned how different application layers communicate with each other.

The project helped strengthen my understanding of backend architecture, database modeling, authentication, authorization, middleware, validation, RESTful APIs, and deployment.

---

## 👨‍💻 Author

**Anurag Bagga**

* GitHub: https://github.com/Anurag-Bagga
* Project Repository: https://github.com/Anurag-Bagga/Air-Bnb

---

## 📄 License

This project is intended for educational and portfolio purposes.
