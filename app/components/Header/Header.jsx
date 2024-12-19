"use client";

import React, { useState } from "react";
import Link from "next/link";
import style from "./style.module.css";
import { usePathname } from "next/navigation";
import useAuthStore from "../../store/login";

const Header = () => {
  const pathname = usePathname();
  const { isLoggedIn, logout } = useAuthStore();
  const [isMobileActive, setIsMobileActive] = useState(false);

  const toggleMenu = () => {
    setIsMobileActive((prevState) => !prevState);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "List gier", href: "/games" },
    ...(isLoggedIn ? [{ name: "Twoja lista", href: "/list-todo" }] : []),
  ];

  const isLoginPage = pathname === "/login";

  return (
    <header className={style.header}>
      <img className={style.logo} src="/assets/icons/Logo.png" alt="Logo" />
      <div
        className={`${style.hamburger} ${isMobileActive ? style.active : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`${style.nav} ${isMobileActive ? style.mobileActive : style.mobileNotActive}`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.name}
              className={`${isActive ? style.linkActive : style.link}`}
            >
              {link.name}
            </Link>
          );
        })}
        {!isLoggedIn ? (
          <Link
            href="/login"
            className={`${isLoginPage ? style.siginActive : style.sigin}`}
          >
            Zaloguj się
          </Link>
        ) : (
          <span className={`${isLoginPage ? style.siginActive : style.sigin}`} onClick={logout}>
            Wyloguj się
          </span>
        )}
      </nav>
    </header>
  );
};

export default Header;
