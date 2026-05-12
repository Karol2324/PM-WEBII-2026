import { Link } from 'react-router-dom'; // No olvides importar esto arriba

function Navbar({ cantidad }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white border-bottom">
      <section className="container">
       
      <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
         <img 
           src="https://yt3.googleusercontent.com/YsVye4MkzQti-mQqJBIuNhAGl-W89iobqVJkh9OOEGl2oCIimYV3FCeSor9-lmwRsgiTYxTC=s160-c-k-c0x00ffffff-no-rj"
           alt="Logo" 
           width="40" 
           height="40" 
           className="rounded-circle me-2 border" 
           />
        <section>
          <span style={{ color: '#2d5a27' }}>BIENESTAR</span> 
          <span style={{ color: '#c5a059' }}> PREMIUM 360</span>
        </section>
      </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal">
          <span className="navbar-toggler-icon"></span>
        </button>

        <section className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Usamos Link para que no se recargue la página */}
              <Link className="nav-link fw-semibold small text-uppercase" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold small text-uppercase" to="/productos">Productos</Link>
            </li>
                        <li className="nav-item">
              <Link className="nav-link fw-semibold small text-uppercase" to="/Mentorias">Mentorias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/carrito">
                <i className="bi bi-bag-heart fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                 {cantidad} 
                </span>
               </Link>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
}

export default Navbar;