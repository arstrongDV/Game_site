"use client";

import React from 'react'
import style from './style.module.css'

const Footer = () => {
  return (
    <footer className={style.FooterContainer}>
      <div className={style.footerText}>
        <p>Privacy Policy</p>
        <p>Term & Conditions</p>
      </div>
      <div className={style.footerText2}>
        <p>Copyright  © <span style={{ color: 'white' }}> Grux</span></p>
      </div>
    </footer>
  )
}

export default Footer
