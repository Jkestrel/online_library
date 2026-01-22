# 📚 Online Library System

An online library system built using **React**, **Vite**, **React Router**, and **Redux Toolkit**.  
This application allows users to browse books by category, search for books, view detailed information, add new books, and gracefully handle invalid routes.

---

## 🚀 Features

### 🏠 Home Page
- Welcome message
- List of book categories
- Popular books displayed as cards
- Navigation bar with links to Home, Browse Books, and Add Book

### 📖 Browse Books
- Displays books filtered by category using **dynamic routing**
- Search functionality to filter books by **title or author**
- Each book includes a **View Details** link

### 🔍 Book Details Page
- Displays detailed information about a selected book:
  - Title
  - Author
  - Category
  - Rating
  - Description
- Includes a **Back to Browse Books** link

### ➕ Add Book Page
- Form to add a new book to the library
- Uses **Redux** for global state management
- Form validation to ensure all fields are filled
- Newly added book appears **at the top** of the list
- Automatically redirects to Browse Books after submission

### ❌ 404 Page
- Handles undefined routes
- Displays the invalid URL
- Does **not** include the Navbar
- Includes a link back to the Home page

---

## 🛠️ Tech Stack

- **React** (with Vite)
- **React Router DOM**
- **Redux Toolkit**
- **React Redux**
- **CSS**

---

## ▶️ How to Run the Project

Follow the steps below to run the project on your local machine:

### 1️⃣ Clone the Repository
Open a terminal and run:
git clone <github-repository-link>


### 2️⃣ Navigate to the Project Folder
cd online-library



### 3️⃣ Install Dependencies
Make sure **Node.js** is installed on your system.  
Then run:
npm install

This will install all required packages.


### 4️⃣ Start the Development Server
Run : npm run dev


### 5️⃣ Open the Application in Browser
After running the above command, open your browser and go to the link specified (commonly http://localhost:5173/)


## Github Repo Link : https://github.com/Jkestrel/online_library

## Github : https://github.com/Jkestrel
