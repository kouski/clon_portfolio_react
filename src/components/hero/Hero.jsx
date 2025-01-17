

export default function Hero() {
  return (
    <>
    <div className="container-fluid">
    <div className="card-hero bg-dark text-white border border-white animate__animated animate__zoomInDown">
      <img src="/images/ux-ui-design.webp" className="card-img img-fluid" alt="fondo con mujer de mano diseñando" style={{height: '400px'}}/>
    </div>
  </div>

  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <h1 className="mb-5">Bienvenido a mi portfolio</h1>

      </div>
    </div>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col">
        <div className="card-acerca border-0 bg-body">
          <div className="card-body">
            <h2 id="acerca" className="text-center">Acerca de mí</h2>
            <p className="card-text">Me llamo Óscar Gamarra y llevo muchos años trabajando para conseguir la satisfacción de
              los clientes
              y desde la pandemia como desarrollador web y diseñador de experiencia de usuario e interfaz de usuario. Mi enfoque se centra en valores fundamentales: simplicidad, eficacia y accesibilidad, que considero esenciales para lograr la plena satisfacción del usuario final.</p>

          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
