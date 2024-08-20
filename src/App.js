import CryptoJS from "crypto-js";
import { Route, Routes } from "react-router-dom";
import "../src/index.css";
import "./App.css";
import "./assets/styles/main.css";
import ForgetPassword from "./pages/auth/login/ForgetPassword";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { routes } from "./routes";
import KimAbout from './Kimpages/KimAbout/KimAbout';
import KimContactUs from './Kimpages/KimContactus/KimContactUs';
import KimServices from './Kimpages/KimServices/KimServices';
import KimProject from './Kimpages/KimProject/KimProject';
import KimBlog from './Kimpages/KimBlog/KimBlog';
import KimHome from './Kimpages/KimHome/KimHome'
import Preloder from './Kimassets/component/Preloder';
import React, { useState, useEffect } from 'react';

const App = () => {
  const isAuthenticated =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null; // Check if the user is authenticated


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? <Preloder /> :




        <Routes>

          <Route path="/" element={<KimHome />} />
          <Route path="/Kim/aboutUs" element={<KimAbout />} />
          <Route path="/Kim/Contact" element={<KimContactUs />} />
          <Route path="/Kim/services" element={<KimServices />} />
          <Route path="/Kim/Project" element={<KimProject />} />
          <Route path="/Kim/Contact" element={<KimContactUs />} />
          <Route path="/Kim/blog" element={<KimBlog />} />
          <Route path="auth" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/register" element={<Register />} />
          {isAuthenticated ? (
            routes?.map((route, index) => {
              return (
                <Route key={index} path={route?.path} element={route?.component} />
              );
            })
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      }
    </>
  );
};

export default App;
