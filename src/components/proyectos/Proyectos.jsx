import React from 'react'

export default function Proyectos() {
  return (
    <>
    
    <div className="container mt-5">
    <h2 id="proyectos" className="mt-5 mb-5">Proyectos</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">

      <div className="col">
        <article className="card h-100">
          {/* Enlace que envuelve toda la tarjeta */}
          <a href="https://calm-meringue-93fa32.netlify.app/castellano.html" target="_blank" className="link-proyecto">
            {/* Contenido de la tarjeta */}
            <img src="./images/valluatravel.png" class="card-img-top img-fluid"
              alt="Imagen de formulario con una imagen de ebook de cocina."/>

            <div className="card-body">
              <h3 className="card-title fs-4">Web de inscripción</h3>
              <p className="card-text lead">Desarrollo personalizado desde cero siguiendo diseño del cliente, de páginas web de inscripción, multilenguaje.Html, Bootstrap5 y JavaScript</p>
            </div>
          </a>
        </article>

      </div>
      <div className="col">
        <article className="card h-100">
          {/* Enlace que envuelve toda la tarjeta */}
          <a href="https://proyectonaturquinoa.netlify.app/" target="_blank" className="link-proyecto">
            {/* Contenido de la tarjeta */}
            <img src="./images/Web_naturquinoa.webp" className="card-img-top img-fluid"
              alt="Imagen de formulario con una imagen de ebook de cocina."/>

            <div className="card-body">
              <h3 className="card-title fs-4">Landing page Naturquinoa</h3>
              <p className="card-text lead">Desarrollo y diseño de una landing page para la Empresa Naturquinoa, utilizando
                Angular, TypeScript, Bootstrap5 y modo oscuro.</p>
            </div>
          </a>
        </article>

      </div>
      <div className="col">
        <article className="card h-100">
          {/* Enlace que envuelve toda la tarjeta */}
          <a href="https://www.saludyeducacionintegrales.org/" target="_blank" className="link-proyecto">
            {/* Contenido de la tarjeta */}
            <img src="./images/fundacion.png" className="card-img-top img-fluid"
              alt="Imagen de formulario con una imagen de ebook de cocina."/>

            <div className="card-body">
              <h3 className="card-title fs-4">Web Fundación SYEI</h3>
              <p className="card-text lead">Desarrollo y diseño de web para la Fundación SYEI, utilizando
                Wordpress con Elementor. Mantenimiento y actualización anual</p>
            </div>
          </a>
        </article>

      </div>
      <div className="col">

        <article className="card h-100">
          <a href="https://gamarrawebdesign.com" target="_blank" className="link-proyecto">
            <img src="./images/Gamarraweb.png" className="card-img-top img-fluid"
              alt="Imagen de formulario con una imagen de ebook de cocina"/>

            <div className="card-body">
              <h3 className="card-title fs-4">Web de diseño y desarrollo web</h3>
              <p className="card-text lead">Desarrollo y diseño de página web para Empresa de desarrollo y diseño web,usando Wordpress y Elementor pro.</p>
            </div>
          </a>
        </article>
      </div>
      <div className="col">

        <article className="card h-100">
          <a href="https://molinodelahoz.netlify.app/" target="_blank" className="link-proyecto">
            <img src="./images/molino_web.webp"
              className="card-img-top img-fluid" alt="Imagen de formulario con una imagen de ebook de cocina"/>

          <div className="card-body">
            <h3 className="card-title fs-4">Web Asociación vecinos</h3>
            <p className="card-text lead">Desarrollo y diseño de web para la urbanización Molino de la Hoz, usando HTML5, CSS3,Bootstrap y JavaScript</p>
          </div>
        </a>
        </article>
      </div>
      <div className="col">

        <article className="card h-100">
          <a href="https://veterinariareact71.netlify.app/" target="_blank" className="link-proyecto">
            <img src="./images/veterinaria.webp"
              className="card-img-top img-fluid" alt="Imagen de formulario con una imagen de ebook de cocina"/>

          <div className="card-body">
            <h3 className="card-title fs-4">Aplicación seguimiento pacientes</h3>
            <p className="card-text lead">Desarrollo y diseño de aplicación para seguimiento de pacientes de clínica
              veterinaria, usando React y Vite, y en css Bootstrap5</p>
          </div>
        </a>
        </article>
      </div>
      <div className="col">

        <article className="card h-100">
          <a href="https://cardgame71.netlify.app/" target="_blank" className="link-proyecto">
            <img src="./images/juego_cartas.webp"
              className="card-img-top img-fluid" alt="Imagen negra y dorada de juego de cartas"/>

          <div className="card-body">
            <h3 className="card-title fs-4">Juego de cartas</h3>
            <p className="card-text lead">Desarrollo y diseño de un juego de cartas, tipo carta más alta, usando HTML5, CSS3 y JavaScript.
            </p>
          </div>
        </a>
        </article>
      </div>
      <div className="col">

        <article className="card h-100">
          <a href="bricolaje.pdf" target="_blank" className="link-proyecto">
            <img src="./images/herramientas-de-bricolaje-848x477x80xX.webp"
              className="card-img-top img-fluid" alt="Foto herramientas bricolaje"/>

          <div className="card-body">
            <h3 className="card-title fs-4">Web bricolaje</h3>
            <p className="card-text lead">Diseño de una web dedicada a proyectos de Bricolaje, usando Figma.</p>
          </div>
        </a>
        </article>
      </div>
      <div className="col">
      <article className="card h-100">
          <a href="comidasana.pdf" target="_blank" className="link-proyecto">
            <img src="./images/comida_sana.webp" className="card-img-top img-fluid"
              alt="foto pechuga de pollo con ensalada"/>

          <div className="card-body">
            <h3 className="card-title fs-4">Comida sana</h3>
            <p className="card-text lead">Diseño de una web de comida sana, diseñada en distintos tamaños de pantalla, usando Figma.</p>
          </div>
        </a>
        
        </article>
      </div>
      <div className="col">
        <article className="card h-100">
          <a href="appcine.pdf" target="_blank" className="link-proyecto">
            <img id="cine" src="./images/cine.webp" className="card-img-top img-fluid"
              alt="cine y palomitas"/>

          <div className="card-body">
            <h3 className="card-title fs-4">App snacks en cine</h3>
            <p className="card-text lead">Se diseña una aplicación para poder pedir comida desde el cine,usando Figma.</p>
          </div>
          </a>
        </article>
      </div>
      <div className="col">


        
      </div>
    </div>

  </div>
    
    </>
  )
}
