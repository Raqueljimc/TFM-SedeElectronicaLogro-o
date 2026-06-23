import "./Header.css";
import Button from "../button/Button";
import logo from "/src/assets/logo-logroño-blanco.png";
import { useState, useEffect } from "react";

export default function Header({
  variant = "base", // base | seccion
  title = "Sede electrónica",
  subtitle,
  onConnect,
  children
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 360px)");

  const handleChange = (e) => {
    setIsMobile(e.matches);
  };

  setIsMobile(mediaQuery.matches);

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
}, []);

  return (
    <header className={`header ${variant}`}>

      {/* IZQUIERDA */}
      <div className="header-left">

        {/* LOGO */}
        <div className="header-logo">
          <img src={logo} alt="Logroño" />
        </div>

        {/* TEXTO */}
        <div className="header-texts">

          {variant === "base" ? (
            <h1 className="header-title">
              Sede electrónica
            </h1>
          ) : (
            <>
              <h1 className="header-title">{title}</h1>
              {subtitle && (
                <p className="header-subtitle">{subtitle}</p>
              )}
            </>
          )}

        </div>

      </div>

      {/* BOTÓN */}
      
      <Button 
        className="header-button" 
        variant="primary" 
        size={isMobile ? "sm" : "base"}
        onClick={onConnect}
        >
        Conectar
      </Button>

    </header>
  );
}