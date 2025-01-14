import logo from '../../images/Component_1.png'

export default function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                <img
                  src={logo}
                  className="mt-5"
                  alt="Logo personal"
                />
                <p style={{ fontSize: "1.4rem" }} className="mt-2">
                  Óscar Gamarra
                  <br />
                  <span style={{ fontSize: "1rem" }}>
                    DESARROLLADOR FRONT-END
                  </span>
                  <br />
                  <span style={{ fontSize: "1rem" }}>DISEÑADOR UX/UI</span>
                </p>
              </a>
  
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#acerca">
                    Acerca de mí
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#proyectos">
                    Proyectos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
