// import { Users } from "./Components/Users";
// import "./App.css";
// const App=()=>{
//   return (
//     <section className="main-section">
//        <Users/>
//     </section>
//  );
// }
// export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import { Users } from "./Components/Users";
import "./App.css";
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <Router>
      <section className="main-section">
      <Routes>
      
        <Route
          path="/"
          element={
            token ? <Navigate to="/users" replace /> : <Login setToken={setToken} />
          }
        />
        <Route
          path="/users"
          element={
            token ? <Users /> : <Navigate to="/" replace />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Routes>
      </section>
    </Router>
  );
};

export default App;