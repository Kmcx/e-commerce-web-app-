# 🛒 E-Commerce Landing Page (React + Express)

A responsive e-commerce web application built with **React**, **Express.js**, **SQLite**, and **Bootstrap**.  
The app includes rotating product sliders, campaign quick links, and personalized product suggestions.

---

## ✨ Features

### 🖥️ Frontend (React)
- **Sticky responsive navbar** with category and submenu support
- **12 Quick Links** displayed as small square campaign buttons
- **Main Slider** for rotating campaigns (data from backend)
- **"Elektronik Fırsatlar"**: 3-product carousel, rotating every 3 seconds
- **"Sana Özel Öneriler"**: Horizontally scrolling product cards with price & rating
- **"Gezilen Ürünler"**: Tracks visited products using **Redux**
- **Responsive layout** using Bootstrap Grid

### 🔧 Backend (Express.js)
- **SQLite database** (no in-memory data)
- RESTful API:
  - `GET /api/products?type=special` – Special electronic deals
  - `GET /api/products?type=recommendation` – Personalized suggestions
  - `GET /api/slider-items` – Slider content
  - `GET /api/quick-links` – Campaign quick link data
  - `GET /api/products/:id` – Product detail

---

## 🗂️ Tech Stack

| Area       | Tech                        |
|------------|-----------------------------|
| Frontend   | React, React Router DOM     |
| Styling    | Bootstrap 5, Custom CSS     |
| State Mgmt | Redux Toolkit               |
| Backend    | Node.js, Express.js         |
| Database   | SQLite                      |
| Dev Tools  | Axios, Nodemon              |

---


#### Backend
```bash
cd backend
npm install
