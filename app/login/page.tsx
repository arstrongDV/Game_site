"use client";

import React, { useState } from "react";
import style from "./style.module.css";
import useAuthStore from "../store/login";
import { useRouter } from "next/navigation";
import {AlertLogin} from "../components/Alerts/alerts";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || password === "") {
      setShowAlert(true); 
      setTimeout(() => {
        setShowAlert(false); 
      }, 4000);
    } else {
      setShowAlert(false);
      login();
      router.push("/");
    }
  };

  let PasswordTypeHiding = () => {
    setPasswordVisible(true);
  }

  let PasswordTypeOpen = () => {
    setPasswordVisible(false);
  }

  return (
    <div className={style.MainBlock}>
      {showAlert && <AlertLogin />}
      <div className={style.blockLogin}>
        <h1 className={style.Login}>LOGOWANIE</h1>
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit}>
            <img
              src="/assets/icons/LoginIcon.png"
              alt="Login Icon"
              className={style.inputIcon}
            />
            <input
              className={style.inputName}
              placeholder="Nazwa użytkownika"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <img
              src="/assets/icons/LoginEyeIcon.png"
              alt="Login Icon"
              className={style.inputIconEye}
              onClick={PasswordTypeHiding}
            />
            {isPasswordVisible && 
              <img
              src="/assets/icons/LoginEyeIcon.png"
              alt="Login Icon"
              className={style.inputIconEye}
              onClick={PasswordTypeOpen}
            />   }

            <input
              className={style.inputLogin}
              placeholder="Hasło"
              type={isPasswordVisible ? "text" : "password"} 
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={style.button} type="submit">Zaloguj się</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
