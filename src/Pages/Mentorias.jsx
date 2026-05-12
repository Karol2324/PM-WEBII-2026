import { useState } from 'react';

function Mentorias() {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert("¡Hemos recibido tu solicitud! Un mentor se pondrá en contacto contigo en las próximas 24 horas para agendar tu asesoría personalizada vía WhatsApp. ✨");
    setEnviado(true);
    e.target.reset(); // Limpia el formulario
  };

  return (
    <main className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold" style={{ color: '#2d5a27' }}>Programas de Mentoría 360</h1>
        <p className="lead text-muted px-lg-5">
          Transforma tu realidad rompiendo ciclos generacionales y sanando tu relación con la abundancia.
        </p>
      </header>

      {/* SECCIÓN DE OPCIONES */}
      <section className="row g-4 mb-5">
        <article className="col-md-4">
          <section className="card h-100 border-0 shadow-sm p-4 text-center bg-light">
            <header>
              <i className="bi bi-bank fs-1 text-success"></i>
              <h2 className="h4 mt-3 fw-bold">Abundancia & Dinero</h2>
            </header>
            <p className="small text-muted">Sana tus creencias limitantes y abre las puertas a la prosperidad económica desde la consciencia.</p>
          </section>
        </article>

        <article className="col-md-4">
          <section className="card h-100 border-0 shadow-sm p-4 text-center bg-light">
            <header>
              <i className="bi bi-diagram-3 fs-1 text-primary"></i>
              <h2 className="h4 mt-3 fw-bold">Ciclos Generacionales</h2>
            </header>
            <p className="small text-muted">Identifica y rompe patrones familiares que hoy frenan tu crecimiento emocional y profesional.</p>
          </section>
        </article>

        <article className="col-md-4">
          <section className="card h-100 border-0 shadow-sm p-4 text-center bg-light">
            <header>
              <i className="bi bi-peace fs-1 text-warning"></i>
              <h2 className="h4 mt-3 fw-bold">Salud Mental & Emocional</h2>
            </header>
            <p className="small text-muted">Gestión de emociones y paz interior para una vida equilibrada en todas tus áreas.</p>
          </section>
        </article>
      </section>

      {/* SECCIÓN FORMULARIO */}
      <section className="row justify-content-center">
        <article className="col-lg-6">
          <section className="card border-0 shadow p-4 p-md-5">
            <header className="text-center mb-4">
              <h3 className="fw-bold">Solicitar Asesoría Personalizada</h3>
              <p className="text-muted small">Diligencia tus datos para recibir información por WhatsApp.</p>
            </header>
            
            <form onSubmit={manejarEnvio}>
              <fieldset className="mb-3">
                <label className="form-label small fw-bold">Nombre Completo</label>
                <input type="text" className="form-control" placeholder="Ej: Diana Hidalgo" required />
              </fieldset>
              
              <fieldset className="mb-3">
                <label className="form-label small fw-bold">Teléfono / WhatsApp</label>
                <input type="tel" className="form-control" placeholder="Ej: +57 300..." required />
              </fieldset>

              <fieldset className="mb-3">
                <label className="form-label small fw-bold">Correo Electrónico</label>
                <input type="email" className="form-control" placeholder="tu@correo.com" required />
              </fieldset>

              <fieldset className="mb-4">
                <label className="form-label small fw-bold">Programa de Interés</label>
                <select className="form-select" required>
                  <option value="">Selecciona una opción...</option>
                  <option value="dinero">Dinero y Abundancia</option>
                  <option value="ciclos">Ciclos Generacionales</option>
                  <option value="emocional">Salud Mental y Emocional</option>
                </select>
              </fieldset>

              <button type="submit" className="btn btn-dark w-100 py-3 fw-bold">
                ENVIAR SOLICITUD AHORA
              </button>
            </form>
          </section>
        </article>
      </section>
    </main>
  );
}

export default Mentorias;