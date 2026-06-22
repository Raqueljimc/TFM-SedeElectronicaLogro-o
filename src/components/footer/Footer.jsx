import "./Footer.css";
import Link from "../link/Link";
import logo from "/src/assets/logo-logroño-blanco.png";

export default function Footer() {
  return (
    <footer className="footer">

      {/* LINKS */}
      <div className="footer-columns">
        {[...Array(4)].map((_, colIndex) => (
          <div key={colIndex} className="footer-column">
            {[...Array(4)].map((_, i) => (
              <Link key={i} variant="default" weight="regular">
                Link
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* LÍNEA DIVISORIA */}
      <div className="footer-divider" />

      {/* LINKS abajo */}
      <div className="footer-legal">
        <Link variant="default">Inicio</Link>
        <Link variant="default">Aviso legal</Link>
        <Link variant="default">Política de cookies</Link>
        <Link variant="default">Política de privacidad</Link>
        <Link variant="default">Accesibilidad</Link>
        <Link variant="default">Mapa web</Link>
      </div>

      {/* DIRECCIÓN */}
      <p className="footer-address">
        Avda. de la Paz, 11 Bajo, 26071 Logroño (La Rioja) - Teléfono: 941 277 000 - Fax: 941 277 079
      </p>

      {/* LOGO Y NOMBRE */}
      <div className="footer-brand">
        <img src={logo} alt="Logroño" />
        <div className="footer-brand-separator" />
        <span>Sede electrónica del Ayuntamiento de Logroño</span>
      </div>

    </footer>
  );
}