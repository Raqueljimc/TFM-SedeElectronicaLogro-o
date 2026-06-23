import "./demo.css";
import "../styles/global.css";

import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

import Card from "../components/card/Card";
import Notification from "../components/notification/Notification";
import Button from "../components/button/Button";
import List from "../components/list/List";

import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Demo() {
  const navigate = useNavigate();

  return (
    <div className="demo-view">

      {/* HEADER */}
      <Header variant="base" onConnect={() => navigate("/login")} />

      {/* MENU */}
      <Menu />

      {/* CONTENIDO */}
      <main className="demo-main">

        {/* ACCESOS RÁPIDOS */}
        <section className="demo-section">

          <div className="demo-bg-box">

            <div className="demo-text">
              <h3 className="h2-bienvenido-strong">Bienvenido a la Sede Electrónica del Ayuntamiento de Logroño,</h3>
              <h3 className="h2-bienvenido-light">aquí podrá realizar sus gestiones municipales de forma cómoda y segura.</h3>
            </div>

            <div className="demo-grid">
              <Card
                hoverable
                title="Cita previa"
                description="Solicita cita para atención presencial."
                showLink
              />
              <Card
                hoverable
                title="Pagos y recibos"
                description="Consulta y paga tus recibos municipales."
                showLink
              />
              <Card
                hoverable
                title="Padrón municipal"
                description="Gestiones relacionadas con el padrón."
                showLink
              />
              <Card
                hoverable
                title="Consulta de expedientes"
                description="Revisa el estado de tus trámites en curso."
                showLink
              />
            </div>

          </div>

        </section>

        {/* NOTIFICACIÓN */}
        <section className="section-notification">
          <Notification
            variant="info"
            title="Aviso"
            description="La sede electrónica puede experimentar interrupciones 
                        puntuales debido a su estado de mantenimiento."
          />
        </section>

        <div className="demo-divider" />

        {/* LISTA */}
        <section className="demo-list">
          <div className="demo-list-inner">
            <h2>Trámites destacados</h2>
            <List
              items={[
                { title: "Solicitud de licencia de obras", subtitle: "Urbanismo · Plazo: 3 meses" },
                { title: "Declaración de residuos", subtitle: "Medio ambiente · Plazo: 1 mes" },
                { title: "Recurso de multa de tráfico", subtitle: "Tráfico · Plazo: 20 días hábiles" },
                { title: "Solicitud de bonificación IBI", subtitle: "Tributos · Plazo: 2 meses" }
              ]}
            />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Demo;