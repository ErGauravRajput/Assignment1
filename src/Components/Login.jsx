import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const Login = ({ setToken }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const validEmail = "eve.holt@reqres.in";
    const validPassword = "cityslicka";
  
    if (form.email !== validEmail || form.password !== validPassword) {
      setError("Invalid credentials. Please try again.");
      return;
    }
  
    try {
      const response = await axios.post("https://reqres.in/api/login", form);
      const token = response.data?.token;
  
      if (token) {
        localStorage.setItem("token", token);
        setToken(token);
        navigate("/users", { replace: true });
      } else {
        setError("Login failed. No token received.");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="login-error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
