# 🚀 NASA APOD Explorer

NASA APOD Explorer is a web application that allows users to explore NASA's **Astronomy Picture of the Day (APOD)**. Users can view today's image, select past dates, and explore a gallery of recent APODs.

---

## 🌐 Live Preview (Local)

- **Backend API**: `http://localhost:3000`  
- **Frontend App**: `http://localhost:3001`

---

## 📦 Features

### Web Service (Backend)
- Fetches APOD data from NASA API
- Exposes simplified endpoints for the frontend:
  - `GET /api/health` → health check
  - `GET /api/apod/today` → today's APOD
  - `GET /api/apod?date=YYYY-MM-DD` → APOD for a specific date
  - `GET /api/apod/recent?count=N` → recent APODs
- Caches responses with **expiry & max size**
- Handles API keys securely using `.env`
- Follows RESTful API practices

### Frontend (React)
- Dashboard showing today's APOD
- Date picker to view past APODs
- Gallery view of recent images
- Detailed view for each image (title, explanation, copyright)
- Responsive and attractive UI/UX with playful design

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, dotenv, LRU cache
- **Frontend:** React, HTML, CSS
- **API:** NASA APOD API ([https://api.nasa.gov](https://api.nasa.gov))

---

## 🚀 Installation & Running Locally

### Backend
```bash
cd backend
npm install
npm run dev
