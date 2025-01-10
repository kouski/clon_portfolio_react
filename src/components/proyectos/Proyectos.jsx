import { useState } from "react";

export default function Proyectos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const proyectos = [
    {
      titulo: "Web de inscripción",
      descripcion: "Desarrollo personalizado desde cero siguiendo diseño del cliente, de páginas web de inscripción, multilenguaje. Html, Bootstrap5 y JavaScript",
      imagen: "/src/images/valluatravel.png",
      enlace: "https://calm-meringue-93fa32.netlify.app/castellano.html",
      categoria: "Vanilla JavaScript",
    },
    
    {
      titulo: "Landing page Naturquinoa",
      descripcion: "Desarrollo y diseño de una landing page para la Empresa Naturquinoa, utilizando Angular, TypeScript, Bootstrap5 y modo oscuro.",
      imagen: "/src/images/Web_naturquinoa.webp",
      enlace: "https://proyectonaturquinoa.netlify.app/",
      categoria: "React-Angular",
    },
    {
      titulo: "Web Fundación SYEI",
      descripcion: "Desarrollo y diseño de web para la Fundación SYEI, utilizando Wordpress con Elementor. Mantenimiento y actualización anual",
      imagen: "/src/images/fundacion.png",
      enlace: "https://www.saludyeducacionintegrales.org/",
      categoria: "WordPress",
    },
    {
      titulo: "Aplicación notas",
      descripcion: "Aplicación clon de Keeper, usando React y Vite",
      imagen: "/src/images/App-notas.png",
      enlace: "https://aplicacion-notas-react.netlify.app/",
      categoria: "React-Angular",
    },
    {
      titulo: "Web de diseño y desarrollo web",
      descripcion: "Desarrollo y diseño de página web para Empresa de desarrollo y diseño web, usando Wordpress y Elementor pro.",
      imagen: "/src/images/Gamarraweb.png",
      enlace: "https://gamarrawebdesign.com",
      categoria: "WordPress",
    },
    {
      titulo: "Aplicación seguimiento pacientes",
      descripcion: "Desarrollo y diseño de aplicación para seguimiento de pacientes de clínica veterinaria, usando React y Vite, y en css Bootstrap5",
      imagen: "/src/images/veterinaria.webp",
      enlace: "https://veterinariareact71.netlify.app/",
      categoria: "React-Angular",
    },
    {
      titulo: "Tienda Guitarra",
      descripcion: "Web venta de guitarras, usando React y Vite.",
      imagen: "/src/images/guitars.png",
      enlace: "https://tienda-cart-react.netlify.app/",
      categoria: "React-Angular",
    },
    {
      titulo: "Web Asociación vecinos",
      descripcion: "Desarrollo y diseño de web para la urbanización Molino de la Hoz, usando HTML5, CSS3,Bootstrap y JavaScript",
      imagen: "/src/images/molino_web.webp",
      enlace: "https://molinodelahoz.netlify.app/",
      categoria: "Vanilla JavaScript",
    },
    {
      titulo: "Juego de Cartas",
      descripcion: "Desarrollo y diseño de un juego de cartas, tipo carta más alta, usando HTML5, CSS3 y JavaScript",
      imagen: "/src/images/juego_cartas.webp",
      enlace: "https://cardgame71.netlify.app/",
      categoria: "Vanilla JavaScript",
    },
    {
      titulo: "Web bricolaje",
      descripcion: "Diseño de una web dedicada a proyectos de Bricolaje, usando Figma.",
      imagen: "/src/images/herramientas-de-bricolaje-848x477x80xX.webp",
      enlace: "/bricolaje.pdf",
      categoria: "UX",
    },
    {
      titulo: "App snacks en cine",
      descripcion: "Se diseña una aplicación para poder pedir comida desde el cine, usando Figma.",
      imagen: "/src/images/cine.webp",
      enlace: "/appcine.pdf",
      categoria: "UX",
    },
    {
      titulo: "Comida sana",
      descripcion: "Diseño de una web de comida sana, diseñada en distintos tamaños de pantalla, usando Figma.",
      imagen: "/src/images/comida_sana.webp",
      enlace: "/comidasana.pdf",
      categoria: "UX",
    },
  ];

  // Filtra proyectos según la categoría seleccionada
  const proyectosFiltrados = categoriaSeleccionada === "Todos"
    ? proyectos
    : proyectos.filter(proyecto => proyecto.categoria === categoriaSeleccionada);

  return (
    <>
      <div className="container mt-5">
        <h2 id="proyectos" className="mt-5 mb-5">Proyectos</h2>

        {/* Botones de filtro */}
        <div className="mb-4 text-center">
          {["Todos", "React-Angular", "WordPress", "UX","Vanilla JavaScript"].map(categoria => (
            <button
              key={categoria}
              className={`btn btn-outline-danger m-2 ${categoriaSeleccionada === categoria ? 'active' : ''}`}
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Proyectos */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {proyectosFiltrados.map((proyecto, index) => (
            <div className="col" key={index}>
              <article className="card h-100">
                <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="link-proyecto">
                  <img src={proyecto.imagen} className="card-img-top img-fluid" alt={proyecto.titulo} />
                  <div className="card-body">
                    <h3 className="card-title fs-4">{proyecto.titulo}</h3>
                    <p className="card-text lead">{proyecto.descripcion}</p>
                  </div>
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


