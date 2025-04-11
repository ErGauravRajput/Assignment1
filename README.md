# Login Users App

A simple React application with login authentication and user list display using the [Reqres.in](https://reqres.in) API.

## 🔧 Features

- Login screen with email/password validation.
- Protected Users List screen.
- Token stored in `localStorage`.
- Conditional redirection based on authentication state.

## 🚀 How to Run

### Clone the Repo

```bash
git clone https://github.com/ErGauravRajput/Assignment1.git
cd Assignment1
bun install
bun run dev
App will be running at: http://localhost:3000
```
## 📝 Assumptions
Only one valid login is accepted (eve.holt@reqres.in, cityslicka) since Reqres is a mock API.

Manual validation is done to prevent login with the wrong password.

Token is stored in localStorage to manage session state.

## 🔗 Live Demo
👉https://assignment1-two-ashen.vercel.app/

## 📂 Project Structure
```bash
ASSIGNMENT/
├── public/
├── src/
│   ├── Api/
│   │   └── PostApi.jsx
│   ├── assets/
│   ├── Components/
│   │   ├── EditUser.jsx
│   │   ├── Login.css
│   │   ├── Login.jsx
│   │   └── Users.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```

## 📸 Screenshots
| Page | Screenshot |
|------|-----------|
| *Login Page* | ![Login](https://github.com/user-attachments/assets/a32ee430-237a-42f9-8060-f356453f7b6e)|
| *User List 1* | ![Users](https://github.com/user-attachments/assets/26ba6448-45d3-4d81-b5e7-7150db20db82)|
| *User List 2* | ![Users](https://github.com/user-attachments/assets/80db5283-40cb-40d9-89e5-e608e1622472)|


