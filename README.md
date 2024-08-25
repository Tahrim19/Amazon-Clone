# 🛒 Amazon Clone

Welcome to the Amazon Clone! This is a simplified version of Amazon built with modern web technologies. The project demonstrates core e-commerce functionalities like user authentication, product management, and a shopping cart system. 🚀

## 🌟 Features

### 🔐 User Authentication
- **Sign In / Sign Up:** Users can create an account or log in using their email and password, powered by Firebase Authentication. 
- **Sign Out:** Users can securely log out of their accounts with ease.

### 🛍️ Shopping Cart (Basket)
- **Add to Basket:** Users can add products to their shopping cart with a single click.
- **View Basket:** By clicking on the basket icon in the navbar, users can view the products they've added to their cart.
  
### 🗂️ Product Listings
- **Browse Products:** Users can browse available products on the homepage. Each product has an image, price, and a button to add it to the basket.
- **Product Details:** Clicking on a product in the basket allows users to see more details about the product.

### ❌ Search Functionality (Not Implemented Yet)
- Currently, the search feature is not implemented, but stay tuned for future updates! 🔍

## 🛠️ Tech Stack

- ReactJS
- Material UI
- Firebase
  

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
- Node.js & npm installed
- Firebase account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/amazon-clone.git
   cd amazon-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication (Email/Password).
   - Add your Firebase configuration to a `.env` file in the root of your project:
     ```bash
     REACT_APP_FIREBASE_API_KEY=yourapikey
     REACT_APP_FIREBASE_AUTH_DOMAIN=yourauthdomain
     REACT_APP_FIREBASE_PROJECT_ID=yourprojectid
     REACT_APP_FIREBASE_STORAGE_BUCKET=yourstoragebucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=yourmessagingsenderid
     REACT_APP_FIREBASE_APP_ID=yourappid
     ```

4. **Run the development server:**
   ```bash
   npm start
   ```
   The app will be running at `http://localhost:3000`.

## 📦 Deployment

This project is already deployed on Vercel. To deploy your own version:

1. Commit and push your changes to GitHub.
2. Link your GitHub repository to Vercel and deploy.

For detailed instructions, check out Vercel's documentation.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#) if you want to contribute.


## 🎉 Acknowledgments

- I followed this article: [link](https://medium.com/cleverprogrammer/amazon-clone-using-react-the-ultimate-guide-fba2b36f3458)
