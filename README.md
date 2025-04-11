# Login Users App

A simple React application with login authentication and user list display using the [Reqres.in](https://reqres.in) API.

## 🔧 Features

- Login screen with email/password validation.
- Protected Users List screen.
- Token stored in `localStorage`.
- Conditional redirection based on authentication state.

## 🚀 How to Run

### 1. Clone the Repo

```bash
git clone https://github.com/ErGauravRajput/Assignment1.git
cd Assignment1
bun install
bun run dev
App will be running at: http://localhost:3000

📝 Assumptions
Only one valid login is accepted (eve.holt@reqres.in, cityslicka) since Reqres is a mock API.

Manual validation is done to prevent login with the wrong password.

Token is stored in localStorage to manage session state.

🔗 Live Demo
👉https://assignment1-two-ashen.vercel.app/
