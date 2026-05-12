import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <section className="container text-center text-md-start">
        <section className="row">
          {/* Info de la Marca */}
          <article className="col-md-4 mb-4">
            <h4 className="text-uppercase fw-bold mb-4" style={{ color: '#c5a059' }}>
              Bienestar Premium 360
            </h4>
            <p className="small text-secondary">
              Liderazgo en bienestar integral. Representantes autorizados de Mary Kay y Rena Ware. Coaching de vida profesional.
            </p>
          </article>

          {/* Enlaces Rápidos */}
          <article className="col-md-2 mb-4">
             <h5 className="text-uppercase fw-bold mb-4 small">Navegación</h5>
             <ul className="list-unstyled">    
              <li>
                <Link to="/" className="text-secondary text-decoration-none small">Inicio</Link>
              </li>
              <li>
               <Link to="/productos" className="text-secondary text-decoration-none small">Productos</Link>
              </li>
              <li>
                <Link to="/Mentorias" className="text-secondary text-decoration-none small">Mentorías</Link>
              </li>
            </ul>
          </article>

          {/* Redes Sociales */}
          <article className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-4 small">Conecta con nosotros</h5>
            <section className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://wa.me/3133968297" target="_blank" className="btn btn-outline-light rounded-circle p-2">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/bienestarpremium360" target="_blank" className="btn btn-outline-light rounded-circle p-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@BienestarPremium360" target="_blank" className="btn btn-outline-light rounded-circle p-2">
                <i className="bi bi-youtube"></i>
              </a>
            </section>
          </article>
        </section>

        <hr className="mb-4 text-secondary" />

        <section className="row align-items-center">
          <article className="col-md-7 col-lg-8 text-center text-md-start">
            <p className="small text-secondary">
              © 2026 Todos los derechos reservados: <strong>Bienestar Premium 360</strong>
            </p>
          </article>
          <article className="col-md-5 col-lg-4 text-center text-md-end">
            <p className="small text-secondary">Diseñado por Diana Hidalgo</p>
          </article>
        </section>
      </section>
    </footer>
  );
}

export default Footer;