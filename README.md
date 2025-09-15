Perfect — mentioning deployment on **Firebase Hosting** makes your project look production-ready and gives recruiters an easy way to try it.
Here’s the updated **README.md** with Firebase deployment included:

---

````markdown
# 📚 IT Bookstore – E-Commerce Web App

A front-end e-commerce web application inspired by Amazon, designed to sell IT books online.
Users can browse books, add them to their cart, and create accounts to save their progress.
Built with **React**, **Material UI**, and **Firebase** for authentication, data storage, and deployment.

🔗 **Live Demo:** [https://i-ff344.web.app/](https://i-ff344.web.app/)

---

## 🚀 Features

- **Browse IT Books**
  - View a catalog with cover images, descriptions, and prices
  - Search and filter by title, author, or category

- **Add to Cart**
  - Add/remove books from the cart
  - Adjust quantities dynamically
  - View real-time cart summary and total

- **User Authentication**
  - Sign up / log in with **Firebase Authentication**
  - Persist user sessions and cart data across refreshes

- **Responsive UI**
  - Styled with **Material UI** for a clean, modern look
  - Fully mobile-friendly experience

- **Payment (Coming Soon)**
  - Planned integration with **Stripe** for checkout and payments

- **Deployed on Firebase**
  - Hosted on **Firebase Hosting** for easy access and scalability

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router
- **UI Library:** Material UI (MUI v5)
- **State Management:** React Context API (or Redux if used)
- **Backend / Hosting:** Firebase Firestore (for book data & cart), **Firebase Hosting** (live deployment)
- **Authentication:** Firebase Auth (Email/Password, Google Sign-In)
- **Payments:** Stripe (planned, not implemented)

---


## 📦 Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/calvieTech/amazoni.git
cd it-bookstore
npm install
````

Create a `.env` file in the root directory and add your Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

Then run the app locally:

```bash
npm start
```

To deploy to Firebase Hosting (after installing the Firebase CLI):

```bash
firebase login
firebase init
firebase deploy
```

---

## 🔮 Future Improvements

* Complete **Stripe** payment integration
* Add order history and receipts
* Implement ratings & reviews for books
* Admin dashboard for adding/editing book listings

---

## 🤝 Contributing

Pull requests are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes and open a pull request

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Developed by **calvieTech** – [LinkedIn](https://linkedin.com/in/calThang) | [GitHub](https://github.com/calvieTech)
