

export default function Formulario() {
  return (
    <>
    <div className="container py-3 min-vh-100 d-flex flex-column">

<div className="card-contact shadow rounded-3 my-auto">

  <div className="card-header p-3 h4">
    <h2 id="contacto" className="mb-2">Contacto</h2>
  </div>
  <div className="card-body p-4">
    <form name="formulario-contacto" className="row" data-netlify="true">
      <div className="form-group col-lg-4">
        <label className="form-control-label" htmlFor="form-group-input-name">Nombre</label>
        <input type="text" className="form-control" id="form-group-input-name" name="name" placeholder="Nombre y Apellidos" required />
      </div>
      <div className="form-group col-lg-4">
        <label className="form-control-label" htmlForr="form-group-input-email">Email</label>
        <input type="email" className="form-control" id="form-group-input-email" name="email" placeholder="xxxx@xxx.xx" required />
      </div>
      <div className="form-group col-lg-12">
        <label className="form-control-label" htmlFor="form-group-input">Comentarios</label>
        <textarea className="form-control" id="form-group-input" name="notes" rows="6" placeholder="Incluir comentario..." required></textarea>
      </div>
      <div className="form-group col-lg-12">
        <button id="enviar" type="submit" className="btn btn-danger float-end mt-2">Enviar Formulario</button>
      </div>
    </form>
  </div>
</div>
</div>
    
    </>
  )
}
