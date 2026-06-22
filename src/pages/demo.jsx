import "./demo.css";
import "../styles/global.css";

import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

import Searchbar from "../components/searchbar/Searchbar";
import Card from "../components/card/Card";
import Notification from "../components/notification/Notification";
import Button from "../components/button/Button";

function Demo() {
  return (
    <div className="demo-view">

      {/* HEADER */}
      <Header variant="base" />

      {/* MENU */}
      <Menu />

      {/* CONTENIDO */}
      <main className="demo-main">

        {/* HERO */}
        <section className="demo-hero">
          <h1>Sede electrónica</h1>
          <p>
            Accede a los servicios electrónicos del Ayuntamiento de Logroño
          </p>

          <Searchbar withButton />
        </section>

        {/* ACCESOS RÁPIDOS */}
        <section className="demo-section">
          <h2>Accesos rápidos</h2>

          <div className="demo-grid">
            <Card
              title="Cita previa"
              description="Solicita cita para atención presencial."
            />

            <Card
              title="Pagos y recibos"
              description="Consulta y paga tus recibos municipales."
            />

            <Card
              title="Padrón municipal"
              description="Gestiones relacionadas con el padrón."
            />
          </div>
        </section>

        {/* NOTIFICACIÓN */}
        <section className="demo-section">
          <Notification
            variant="info"
            title="Aviso"
            description="La sede electrónica puede experimentar interrupciones puntuales."
          />
        </section>

        {/* TRÁMITES DESTACADOS */}
        <section className="demo-section">
          <h2>Trámites destacados</h2>

          <div className="demo-list">
            <Button variant="secondary">Solicitud de licencia</Button>
            <Button variant="secondary">Alta en padrón</Button>
            <Button variant="secondary">Pago de impuestos</Button>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Demo;