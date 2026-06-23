import "./login.css";
import "../styles/global.css";

import { useState } from "react";

import certDni from "../assets/certifdnie.jpg";

import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Notification from "../components/notification/Notification";
import Footer from "../components/footer/Footer";
import Link from "../components/link/Link";
import Modal from "../components/modal/Modal";

function Login() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="login-view">

      {/* HEADER */}
      <Header variant="base" />

      {/* HERO */}
      <div className="login-hero">

        <h1>Acceso</h1>

        {/* TARJETAS */}
        <div className="login-cards">

          {/* LOGIN NORMAL */}
            <div className="login-box">
                <h3>Acceso usuario registrado</h3>

                <Input label="Identificador" />
                <Input label="Contraseña" type="password" />

                <Button
                    variant="primary"
                    size="base"
                    onClick={() => setOpenModal(true)}
                    >
                    Iniciar sesión
                </Button>

                <div className="login-links">
                    <Link>¿Olvidó su contraseña?</Link>
                    <Link weight="semibold" external>Alta sin certificado digital</Link>
                </div>
            </div>

          {/* CERTIFICADO */}
            <div className="login-box">
                <h3>Acceso con Certificado Digital</h3>

                <p>Accede mediante DNI electrónico o certificado digital.</p>

                <img src={certDni} alt="ImagenDniElectronico" />

                <Button 
                variant="secondary" 
                size="base"
                onClick={() => setOpenModal(true)}
                >
                    Acceder
                </Button>
            </div>

        </div>

      </div>

      {/* AVISO */}
      <section className="login-notification">
        <Notification
            variant="warning"
            title="Recordatorio"
            description="Se recomienda verificar la instalación del sistema de firma electrónica
            antes de iniciar cualquier trámite."
        />
      </section>

      {/* MODAL */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={() => {
            console.log("Login fallido");
            setOpenModal(false);
        }}
        title="Inicio de sesión"
        description="Algo ha fallado, intenta iniciar sesión de nuevo o reestablece tu contraseña."
        />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Login;