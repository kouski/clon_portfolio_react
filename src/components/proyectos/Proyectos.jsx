import { useState } from "react";
import proyectos from '../../data';


export default function Proyectos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  

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
          {["Todos", "React-Angular","Vanilla JavaScript" ,"WordPress", "UX"].map(categoria => (
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


