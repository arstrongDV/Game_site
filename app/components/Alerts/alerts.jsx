import React from "react";
import style from './style.module.css'

export const AlertLogin = () => {
  return (
    <div className={style.MainContainer}>
        <div className={style.alert_error}>
            <div className={style.alert_title}>Logowanie nieudane</div>
            Pole musi zostać wypełnione.
        </div>
    </div>
  );
};


export const AlerToDoList = () => {
  return (
    <div className={style.MainContainer}>
        <div className={style.alert_error}>
            <div className={style.alert_title}>Dodawanie elementu do listy nieudane</div>
            Pole musi zostać wypełnione.
        </div>
    </div>
  );
};