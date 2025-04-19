# Track&Trust – Prototype Logistics System

**Track & Trust: Where Packages Find Their Way, Every Step of the Journey!**

A full-stack logistics tracking system designed to solve trust issues between customers and delivery agents, minimize parcel loss, and handle unclaimed parcels through real-time geolocation and geofencing technologies.

> 🚀 This is a forked version of a collaborative project.  
> I contributed to backend API optimization with NestJS and Prisma, real-time geofencing logic, frontend route integration, and UI enhancements for the tracking and delivery flow.

---

## 🧩 Problem Statement

Customers often face challenges in tracking packages, which leads to:

1. **Package loss**
2. **Trust issues with delivery personnel**
3. **Unclaimed parcels after failed delivery attempts**

---

## ⚖️ Legal Compliance – Location Tracking in UK & Canada

### 🇬🇧 United Kingdom (GDPR)

- Location tracking = employee monitoring
- Requires **consent**, **transparency**, and **purpose limitation**

### 🇨🇦 Canada (PIPEDA)

- Tracking must include **policy disclosure** and **employee consent**

---

## 🚀 Key Features

- **📍 Real-Time Package Tracking**

  - Last scanned location and live tracking via Google Maps

- **🛑 Geofencing**

  - Virtual delivery radius around a customer’s home
  - Notifies both customer and agent when entering the zone

- **📦 Unclaimed Parcel Handling**
  - After 2 failed attempts, customers reschedule delivery from the parcel facility

---

## 🔧 Project Breakdown & Tasks

### 📦 Issue: Package Loss

- ✅ Real-time scan tracking
- ✅ Inventory updates
- ✅ Location trace history

### 🧍 Issue: Customer-Delivery Trust

- ✅ Geofence triggers
- ✅ Proximity notifications

### 🕒 Issue: Unclaimed Deliveries

- ✅ User-based delivery scheduling
- ✅ Role-based parcel facility management

---

## 🛠️ Tech Stack

| Area          | Tech Used                                   |
| ------------- | ------------------------------------------- |
| **Frontend**  | React.js, JavaScript, SCSS, Google Maps API |
| **Backend**   | NestJS, TypeScript, Prisma ORM, PostgreSQL  |
| **Cloud/Dev** | Node.js, npm, REST APIs, Geofencing logic   |

---

## 📁 Folder Structure

```bash
TrackNTrust/
├── Backend/         # NestJS backend with Prisma
│   ├── src/
│   ├── prisma/
│   └── ...
├── Frontend/        # React frontend
│   ├── src/
│   └── ...
└── README.md
```

---

## ⚙️ Getting Started

### 🔄 Clone the Repository

```bash
git clone https://github.com/meetbhavsar99/TrackNTrust.git
cd TrackNTrust
```

---

### 🧠 Backend Setup

```bash
cd Backend
npm install
```

Run Prisma migration commands if needed:

```bash
npm run migrate
npm run generate
```

Then start the backend:

```bash
npm run start:dev
```

---

### 🎨 Frontend Setup

```bash
cd ../Frontend
npm install
npm run start
```

Access at: [http://localhost:3000](http://localhost:3000)

---

## 📚 Project Submission

This project was submitted for the **COMP-8117: Advanced Software Engineering** course in **Winter 2024**.  
It was also demonstrated during the semester’s scheduled project showcase.

---

## 🙌 Acknowledgment

This project was initially built as part of a group collaboration.  
I contributed to:

- 🛠️ Backend logic for geofencing & delivery scheduling (NestJS)
- 🎯 Optimizing Prisma-based queries and schema
- 🖥️ UI flow integration and dashboard improvements
- 📦 REST API endpoints for parcel tracking and delivery logic

---

## 📜 License

This project is licensed under the MIT License.

---

## 📫 Contact

**Meet Bhavsar**  
📧 [meetbhavsar99@gmail.com](mailto:meetbhavsar99@gmail.com)  
💼 [LinkedIn](https://www.linkedin.com/in/meet-bhavsar-0059ba1b5/)
