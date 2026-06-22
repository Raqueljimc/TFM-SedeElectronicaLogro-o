import { useState } from "react";
import "./Menu.css";
import { ChevronDownIcon, ChevronUpIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Menu() {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  console.log("Estado isOpen:", isOpen);

  const items = [
    {
      label: "Información general",
      dropdown: [
        "Firma electrónica",
        "Calendario fiscal",
        "Fecha y hora oficial",
        "Interrupción del servicio",
        "Quejas y sugerencias"
      ]
    },
    { 
      label: "Procedimientos",
      dropdown: [
        "Formación y empleo",
        "Medio ambiente",
        "Dominio público",
        "Tráfico",
        "Padrón municipal"
      ]
    },
    { 
      label: "Normativa", 
      dropdown: [
        "Ordenanzas",
        "Leyes y Reales Decretos",
        "Modificaciones"
      ]
    },
    { 
      label: "Seguridad y privacidad", 
      dropdown: [
        "Protección de datos",
        "Sistemas de firma",
        "Certificado",
        "Sello electrónico",
        "Accesibilidad"
      ]
    },
    { 
      label: "Ayuda", 
      dropdown: [
        "Enlaces de interés",
        "Preguntas frecuentes",
        "Vídeos"
      ]
    },
    { 
      label: "Servicios", 
      dropdown: [
        "Verificación de documentos",
        "Autodeclaraciones",
        "Cita previa",
        "Contratación",
        "Pagos y justificantes",
        "Contador aguas",
        "Recibos IBI",
        "Simulación plusvalía"
      ]
    }
  ];

  const handleClick = (label) => {
    setActive(active === label ? null : label);
  };

  return (
    <nav className="menu">

      {/* BOTÓN HAMBURGUESA */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon />
      </button>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="menu-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* CONTENIDO */}
      <div 
        className={`menu-container ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()} //para cerrar al hacer click fuera
      >

        {/* BOTÓN CERRAR */}
        <button
          className="menu-close"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon />
        </button>

        {/* ITEMS */}
        <div className="menu-row">
          {items.map((item) => (
            <div key={item.label} className="menu-item-wrapper">

              <button
                className={`menu-item ${
                  active === item.label ? "active" : ""
                }`}
                onClick={() => handleClick(item.label)}
              >
                {item.label}

                {active === item.label
                  ? <ChevronUpIcon />
                  : <ChevronDownIcon />
                }
              </button>

              {active === item.label && item.dropdown && (
                <div className="menu-dropdown">
                  {item.dropdown.map((opt, i) => (
                    <div key={i} className="menu-option">
                      {opt}
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

    </nav>
  );
}