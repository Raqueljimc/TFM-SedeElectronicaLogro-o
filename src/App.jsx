import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import Button from "./components/button/Button";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Card from "./components/card/Card";
import Link from "./components/link/Link";
import CheckboxGroup from "./components/checkbox/Checkbox";
import Details from "./components/details/Details";
import FileUpload from "./components/fileUpload/FileUpload";
import Input from "./components/input/Input";
import Textarea from "./components/input/Textarea";
import InputSimple from "./components/input/InputSimple";
import List from "./components/list/List";
import Select from "./components/select/Select";
import Notification from "./components/notification/Notification";
import Pagination from "./components/pagination/Pagination";
import PaginationFooter from "./components/pagination/PaginationFooter";
import Searchbar from "./components/searchbar/Searchbar";
import Stepper from "./components/stepper/Stepper";
import Modal from "./components/modal/Modal";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Demo from "./pages/demo";
import Login from "./pages/login";

function App() {
  
  const [openModal, setOpenModal] = useState(false);

  return (
    <Routes>
      <Route path="/" element={

        <div className="app">

          {/* CABECERA */}
          <div className="hero">
            <span className="hero-eyebrow">TFM · Máster Universitario en Diseño y Desarrollo de Interfaz de Usuario Web (Front-End Design and Development)</span>
            <h1 className="hero-title">
              Diseño y desarrollo de un sistema de componentes<br />para la Sede Electrónica del Ayuntamiento de Logroño
            </h1>
            <p className="hero-subtitle">Biblioteca de componentes</p>
            <div className="hero-author">
              <div className="hero-avatar">RJ</div>
              <div>
                <p className="hero-name">Raquel Jiménez Castrillo</p>
                <p className="hero-role">Diseñadora Front-end</p>
              </div>
              <div className="hero-divider" />
              <p className="hero-year">UNIR · 2025–2026</p>
              <RouterLink className="hero-cta" to="/demo">
                Ver demo
                <ArrowRightIcon className="hero-cta-icon" />
              </RouterLink>
            </div>
            
          </div>

          {/* BOTONES */}
          <section className="section">
            <h1 className="title">Botones</h1>

            <div className="grid-2">
              
              <div className="group">
                <h2>Primary</h2>
                <div className="row">
                  <Button variant="primary" size="lg">Button</Button>
                  <Button variant="primary" size="base">Button</Button>
                  <Button variant="primary" size="sm">Button</Button>
                </div>
              </div>

              <div className="group">
                <h2>Secondary</h2>
                <div className="row">
                  <Button variant="secondary" size="lg">Button</Button>
                  <Button variant="secondary" size="base">Button</Button>
                  <Button variant="secondary" size="sm">Button</Button>
                </div>
              </div>

            </div>

            <div className="grid-2">

              <div className="group">
                <h2>Disabled</h2>
                <div className="row">
                  <Button variant="secondary" size="base" disabled>Button</Button>
                  <Button variant="primary" size="base" disabled>Button</Button>
                </div>
              </div>

              <div className="group">
                <h2>Con icono</h2>
                <div className="row">
                  <Button variant="primary" size="base" icon={ArrowLeftIcon}>
                    Primary
                  </Button>

                  <Button
                    variant="primary"
                    size="base"
                    icon={ArrowLeftIcon}
                    iconPosition="right"
                    rotate
                  >
                    Derecha
                  </Button>

                  <Button variant="primary" size="sm" icon={ArrowLeftIcon} />

                  <Button variant="secondary" size="lg" icon={ArrowLeftIcon}>
                    Secondary
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* LINKS */}
          <section className="section">
            <h1 className="title">Links</h1>

            <div className="grid-2">

              {/* VARIANTES */}
              <div className="group">
                <h2>Variantes</h2>

                <div className="column">
                  <Link>Default link</Link>

                  <Link variant="error">Error link</Link>

                  <Link variant="neutral">Neutral link</Link>
                </div>
              </div>

              {/* PESOS */}
              <div className="group">
                <h2>Peso</h2>

                <div className="column">
                  <Link weight="regular">Regular link</Link>

                  <Link weight="semibold">Semibold link</Link>

                  <Link weight="bold">Bold link</Link>
                </div>
              </div>
            </div>

            <div className="grid-2">

              {/* ESPECIALES */}
              <div className="group">
                <h2>Especiales</h2>

                <div className="column">
                  <Link external>Link externo</Link>

                  <Link weight="semibold" more>Ver más</Link>
                </div>
              </div>

              {/* COMBINACIONES */}
              <div className="group">
                <h2>Combinaciones</h2>

                <div className="column">
                  <Link variant="error" weight="bold">
                    Error bold
                  </Link>

                  <Link variant="neutral" external>
                    Neutral externo
                  </Link>

                  <Link weight="semibold" more>
                    Ver más semibold
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* BREADCRUMBS */}
          <section className="section">
            <h1 className="title">Breadcrumbs</h1>

            <div className="group">

              <div className="column">
                <Breadcrumbs items={["Section"]} />

                <Breadcrumbs items={["Section", "Subsection"]} />

                <Breadcrumbs items={["Section", "Section", "Subsection"]} />

                <Breadcrumbs
                  items={["Section", "Section", "Section", "Subsection"]}
                />

                <Breadcrumbs
                  items={[
                    "Section",
                    "Section",
                    "Section",
                    "Section",
                    "Subsection"
                  ]}
                />
              </div>
            </div>
          </section>

          {/* CARD */}
          <section className="section">
            <h1 className="title">Cards</h1>

            <div className="grid-2">

              {/* default */}
              <div className="group">
                <h2>Default</h2>
                <div className="column">

                  <Card
                    hoverable
                    title="Título"
                    subtitle="Subtítulo"
                    description="Lorem ipsum dolor sit amet, nsectetur adipiscing elit. Morbi vitae felis modo, ullamcorper orci vel, faucibus lectus. Phasellus venenatis turpis nec magna porta feugiat."
                    showLink
                  />

                </div>
              </div>

              {/* con imagen */}
              <div className="group">
                <h2>Con imagen</h2>
                <div className="column">

                  <Card
                    image
                    hoverable
                    title="Título"
                    subtitle="Subtítulo"
                    description="Lorem ipsum dolor sit amet, nsectetur adipiscing elit. Morbi vitae felis modo, ullamcorper orci vel, faucibus lectus. Phasellus venenatis turpis nec magna porta feugiat."
                    showLink
                  />

                </div>
              </div>

            </div>
          </section>

          {/* CHECKBOX + DETAILS */}
          <div className="grid-3">

            {/* CHECKBOX */}
            <section className="section">
              <h1 className="title">Checkboxes</h1>

              <div className="group">
                <CheckboxGroup
                  label="Etiqueta"
                  description="Pequeño texto descriptivo."
                  error="Posible mensaje de error."
                  options={[
                    { label: "Item" },
                    { label: "Item checked", checked: true },
                    { label: "Item disabled", disabled: true },
                    { label: "Item checked disabled", checked: true, disabled: true }
                  ]}
                />
              </div>
            </section>

            {/* DETAILS */}
            <section className="section">
              <h1 className="title">Details</h1>

              <div className="group-left">
                <Details>
                  Lorem ipsum dolor sit amet, consectetur ipiscing elit. Morbi vitae felis ommodo, 
                  ullamcorper orci, faucibus lectus. Sed hendrerit massa lectus. Phasellus enatis 
                  turpis nec magna porta feugiat lacinia euismod augue.
                </Details>
              </div>
            </section>

            {/* FILE UPLOAD */}
            <section className="section">
              <h1 className="title">File upload</h1>

              <div className="group-upload">
                <FileUpload error="Posible mensaje de error."/>
              </div>
            </section>  
          </div>

          {/* INPUTS */}
          <section className="section">
            <h1 className="title">Inputs</h1>

            <div className="grid-2">

              {/* INPUT TEXT */}
              <div className="group">
                <h2>Input text</h2>

                <div className="column">
                  <Input
                    label="Etiqueta"
                    description="Pequeño texto descriptivo."
                  />

                  <Input
                    label="Etiqueta"
                    description="Pequeño texto descriptivo."
                    error="Error: mensaje de error."
                  />
                </div>
              </div>

              {/* TEXTAREA */}
              <div className="group">
                <h2>Textarea</h2>

                <div className="column">
                  <Textarea
                    label="Etiqueta"
                    description="Pequeño texto descriptivo."
                    placeholder="Respuesta"
                  />

                  <Textarea
                    label="Etiqueta"
                    description="Pequeño texto descriptivo."
                    error="Error: mensaje de error."
                    placeholder="Respuesta"
                  />
                </div>
              </div>

            </div>

            {/* SIMPLE */}
            <div className="group">
              <h2>Input simple</h2>

              <div className="column">
                <InputSimple label="Etiqueta" /> 

                <InputSimple
                  label="Etiqueta"
                  error="Error"
                />
              </div>
            </div>
          </section>

          {/* LIST */}
          <section className="section">
            <h1 className="title">List</h1>

            <div className="group">
              <List
                items={[
                  { title: "Título", subtitle: "Subtítulo" },
                  { title: "Título", subtitle: "Subtítulo" },
                  { title: "Título", subtitle: "Subtítulo" },
                  { title: "Título", subtitle: "Subtítulo" }
                ]}
              />
            </div>
          </section>

          {/* SELECT */}
          <section className="section">
            <h1 className="title">Select</h1>

            <div className="grid-2">

              {/* SMALL */}
              <div className="group">
                <h2>Select small</h2>

                <div className="column">
                  <Select
                    size="sm"
                    options={[{ label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }]}
                  />

                  <Select
                    size="sm"
                    disabled
                    options={[{ label: "1", value: "1" }]}
                  />

                  <Select
                    size="sm"
                    error
                    options={[{ label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }]}
                  />
                </div>
              </div>

              {/* LARGE */}
              <div className="group">
                <h2>Select large</h2>

                <div className="column">
                  <Select
                    size="lg"
                    options={[{ label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }, { label: "Option 3", value: "3" }]}
                  />

                  <Select
                    size="lg"
                    disabled
                    options={[{ label: "Option 1", value: "1" }]}
                  />

                  <Select
                    size="lg"
                    error
                    options={[{ label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }, { label: "Option 3", value: "3" }]}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* NOTIFICATION */}
          <section className="section">
            <h1 className="title">Notifications</h1>

            <div className="grid-2">

              <div className="column">
                <Notification
                  variant="error"
                  title="Problemas encontrados"
                  description="Por favor, corrige los siguientes errores para continuar:"
                  items={["Error 1", "Error 2"]}
                  link="Link"
                />

                <Notification
                  variant="success"
                  title="Trámite realizado con éxito"
                  description="Los documentos han sido aprobados con éxito:"
                  items={["Documento 1", "Documento 2"]}
                  link="Link"
                />
              </div>

              <div className="column">
                <Notification
                  variant="warning"
                  title="Revisa tus documentos"
                  description="Puede que los siguientes documentos contengan errores:"
                  items={["Documento 1", "Documento 2"]}
                  link="Link"
                />

                <Notification
                  variant="info"
                  title="Información"
                  description="Información de interés sobre tu trámite:"
                  items={["Info 1", "Info 2"]}
                  link="Link"
                />
              </div>

            </div>
          </section>

          {/* PAGINATION + MODAL */}
          <div className="grid-2">

            {/* PAGINATION */}
            <section className="section">
              <h1 className="title">Pagination</h1>

              <div className="group">

                {/* simple */}
                <Pagination
                  pages={[1, 2, 3, 4, 5, 6]}
                  initialPage={2}
                />

                {/* con dots */}
                <Pagination
                  pages={[1, 2, 3, "...", 8, 9, 10]}
                  initialPage={2}
                />

                <PaginationFooter />
              </div>
            </section>

            {/* MODAL */}
            <section className="section">
              <h1 className="title">Modal</h1>

              <div className="group">
                <Button variant="primary" size="base" onClick={() => setOpenModal(true)}>
                  Abrir modal
                </Button>

                <Modal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                  onConfirm={() => {
                    console.log("Confirmado");
                    setOpenModal(false);
                  }}
                  title="Cerrar proceso"
                  description="¿Está seguro que desea cerrar el proceso 1356A antes de finalizar?"
                />
              </div>
            </section>
          </div>

          {/* SEARCHBAR */}
          <section className="section">
            <h1 className="title">Searchbar</h1>

            <div className="grid-2">

              {/* SIN BOTÓN */}
              <div className="group">
                <h2>Sin botón</h2>

                <div className="column">
                  <Searchbar />

                  <Searchbar error="Error: mensaje de error" />

                  <Searchbar disabled />
                </div>
              </div>

              {/* CON BOTÓN */}
              <div className="group">
                <h2>Con botón</h2>

                <div className="column">
                  <Searchbar withButton />

                  <Searchbar
                    withButton
                    error="Error: mensaje de error"
                  />

                  <Searchbar withButton disabled />
                </div>
              </div>

            </div>
          </section>

          {/* STEPPER */}
          <section className="section">
            <h1 className="title">Stepper</h1>

            <div className="group">
              <Stepper
                steps={[
                  { title: "Paso 1", description: "Descripción" },
                  { title: "Paso 2", description: "Descripción" },
                  { title: "Paso 3", description: "Descripción" },
                  { title: "Paso 4", description: "Descripción" }
                ]}
                initialStep={1}
              />
            </div>
          </section>

          {/* HEADER */}
          <section className="section">
            <h1 className="title">Header</h1>

            <div className="column">

              {/* BASE */}
              <Header variant="base" />

              {/* SECTION */}
              <Header
                variant="seccion"
                title="Título de la sección"
                subtitle="Subtítulo opcional"
              />

              <div className="parrafo">
                <p>Nota: El header se adapta a pantallas pequeñas de 
                  móvil con max-width: 360px.</p>
                <p>Minimiza la página para poder verlo.</p>
              </div>
            </div>
          </section>

          {/* MENU */}
          <section className="section">
            <h1 className="title">Menu</h1>

            <Menu />

            <div className="parrafo">
              <p>Nota: El menu se adapta a pantallas pequeñas con 
                max-width: 1200px.</p>
                <p>Minimiza la página para poder verlo.</p>
            </div>
          </section>

          {/* FOOTER */}
          <section className="section">
            <h1 className="title">Footer</h1>

            <Footer />

            <div className="parrafo">
              <p>Nota: El header se adapta a pantallas pequeñas de 
                móvil con max-width: 360px.</p>
              <p>Minimiza la página para poder verlo.</p>
            </div>
          </section>

        </div>
      } />

      {/* Página demo */}
      <Route path="/demo" element={<Demo />} />

      {/* Página login */}
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;