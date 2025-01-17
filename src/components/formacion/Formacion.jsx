import { useEffect } from "react";


export default function Formacion() {

    useEffect(() => {
        // Selecciona los elementos del acordeón y los inicializa
        const accordionElements = document.querySelectorAll('[data-bs-toggle="collapse"]');
        accordionElements.forEach((accordionTriggerEl) => {
          new bootstrap.Collapse(accordionTriggerEl, {
            toggle: false, // No lo abra automáticamente
          });
        });
      }, []);

    return (
      <>
        <div className="container-fluid">
          <div id="projects" className="row d-flex">
            <h3 id="formacion" className="mt-5">Formación</h3>
            <div className="col me-5 ms-5">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                      style={{ fontSize: '1.50rem' }}
                    >
                      Estudios
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body" style={{ fontSize: '1.25rem' }}>
                      <ul>
                        <li>Licenciado en Derecho</li>
                        <li>Master en Calidad de los Servicios y satisfacción de clientes.(900h)</li>
                        <li>Bootcamp Front-end. Las Rozas Innova.(307h)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                      style={{ fontSize: '1.50rem' }}
                    >
                      Cursos
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body" style={{ fontSize: '1.25rem'}}>
                      <ul>
                        <li>Certificado en JavaScript (JSE 40-01)</li>
                        <li>Certificado profesional de Diseño de Experiencia del Usuario (UX) de Google</li>
                        <li>Figma</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Angular</li>
                        <li>React</li>
                        <li>Bootstrap5</li>
                        <li>Git</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                      style={{ fontSize: '1.50rem' }}
                    >
                      Idiomas
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body" style={{ fontSize: '1.25rem' }}>
                      <ul>
                        <li>Inglés nivel alto</li>
                        <li>Un año estudiando en EEUU. High School Senior Year.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="d-flex mt-5">
          <a className="mx-auto mb-5" href="/public/cv_Front_end.pdf" target="_blank">
            <button className="download-button">
              <div className="docs">
                <svg
                  className="css-i6dzq1"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line y2="13" x2="8" y1="13" x1="16"></line>
                  <line y2="17" x2="8" y1="17" x1="16"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>{" "}
                Curriculum Vitae
              </div>
              <div className="download">
                <svg
                  className="css-i6dzq1"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line y2="3" x2="12" y1="15" x1="12"></line>
                </svg>
              </div>
            </button>
          </a>
        </div>
  
        <hr />
  
        <section className="habilidades mt-5 mb-5">
          <div className="container">
            <div className="row">
              <h3 className="mb-3 mt-5">Habilidades</h3>
              <img
                className="skills mt-5 mb-5 mx-auto"
                src="/images/skills1.webp"
                alt="skills"
              />
            </div>
          </div>
        </section>
  
        <hr />
      </>
    );
  }

