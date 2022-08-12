import "./App.css";
import "../src/components/stylesheets/header.css";
import "../src/components/stylesheets/card.css";
import "../src/components/stylesheets/footer.css";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <Header titulo="Galería de Imágenes para React" />

      <div className="container-gallery">
        <Card
          name="Antena en una noche cualquiera"
          subname="Urbana Nocturna"
          image="01"
          description="Foto de una antena iluminada con colores de tono violeta."
        />

        <Card
          name="Foto aérea de ciudad densificada"
          subname="Urbana Diurna"
          image="02"
          description="Las ciudades no cuentan con áreas de recreación"
        />

        <Card
          name="Muelle y sus actividades festivas"
          subname="Costera Diurna"
          image="04"
          description="Todos los veranos la comunidad pasa las fiestas en el muelle"
        />
      </div>

      <Footer mensaje="Todos los Derechos Reservados" />
    </div>
  );
}

export default App;
