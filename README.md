# 🏡 StayNest – Find Your Perfect Stay

**StayNest** is a full-stack web application inspired by Airbnb. It allows users to explore beautiful property listings, host their own spaces, and enjoy a seamless booking experience. Built with a modern tech stack and clean UI, StayNest offers both functionality and simplicity.

---

## 🚀 Tech Stack

* **Frontend:** HTML, CSS, Bootstrap, EJS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose)
* **Authentication:** Passport.js
* **Templating Engine:** EJS
* **Deployment:** Render

---

## ✨ Features

* 🗺️ Browse and filter property listings
* 🏘️ Host and list your own properties
* 📷 Upload images with each listing
* 🔐 User authentication (Sign Up / Login / Logout)
* 🛡️ Session management and secure routing
* 🧠 Dynamic server-side rendering
* 📁 Seed sample data with owner association

---

## 📂 Folder Structure

```
/init           → DB seeding script
/models         → Mongoose schemas
/routes         → Express route logic
/views          → EJS templates (pages)
/public         → Static assets (CSS, JS, Images)
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/yourusername/staynest.git
cd staynest
npm install
```

### ✏️ Add Environment Variables

Create a `.env` file in the root directory:

```
ATLAS=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
```

### 🌐 Run the Application

```bash
npm run dev
```

Go to: `http://localhost:8080`

---


## 🙌 Acknowledgements

* [Airbnb](https://www.airbnb.com/) – For the concept and inspiration
* [Bootstrap](https://getbootstrap.com/) – UI components
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) – Database hosting
* [Font Awesome](https://fontawesome.com/) – Icons

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Made with ❤️ by [Prasad Waster](https://github.com/prasad-waster)
