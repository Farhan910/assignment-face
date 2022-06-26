import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import RequireAuth from "./Components/RequareAuth";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home/>
            </RequireAuth>
          }
        />
         <Route
          path="about"
          element={
            <RequireAuth>
              <About/>
            </RequireAuth>
          }
        />
       
        <Route path="login" element={<Login/>} />
        <Route path="signUp" element={<SignUp/>} />
        <Route path="*" element="Not Found" />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
