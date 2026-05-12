import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* SECCIÓN HERO */}
      <section className="py-5 text-center bg-light border-bottom">
        <header className="container py-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#2d5a27' }}>
            Tu Bienestar es una Inversión, <br /> No un Gasto.
          </h1>
          <p className="lead text-muted mb-4 px-lg-5">
            Descubre el equilibrio perfecto con la mejor tecnología de <strong>Rena Ware</strong>, 
            el cuidado experto de <strong>Mary Kay</strong> y un acompañamiento de <strong>Coaching</strong> 
            diseñado para transformar tu vida 360°.
          </p>
          <footer className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/productos" className="btn btn-dark btn-lg px-4 gap-3 fw-bold">
              EXPLORAR CATÁLOGO
            </Link>
            <button className="btn btn-outline-success btn-lg px-4 fw-bold">
              CONÓCENOS
            </button>
          </footer>
        </header>
      </section>

      {/* PEQUEÑA SECCIÓN DE VALORES (Opcional pero ayuda a atrapar) */}
      <section className="container py-5">
        <section className="row g-4 text-center">
          <article className="col-md-4">
            <i className="bi bi-heart-pulse fs-1 text-success mb-3"></i>
            <h2 className="h4">Salud Vital</h2>
            <p className="text-muted">Agua pura y nutrición para tu familia.</p>
          </article>
          <article className="col-md-4">
            <i className="bi bi-stars fs-1 text-warning mb-3"></i>
            <h2 className="h4">Cuidado Personal</h2>
            <p className="text-muted">Resalta tu belleza natural con expertos.</p>
          </article>
          <article className="col-md-4">
            <i className="bi bi-lightning-charge fs-1 text-primary mb-3"></i>
            <h2 className="h4">Mentalidad 360</h2>
            <p className="text-muted">Transforma tus metas en resultados reales.</p>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Home;