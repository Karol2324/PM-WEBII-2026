function Carrito({ productosSeleccionados, vaciarCarrito }) {
  const total = productosSeleccionados.reduce((acc, p) => acc + p.price, 0);

  const manejarFinalizarCompra = () => {
    alert("¡Compra realizada con éxito! Tu pedido llegará en 10 días calendario. 🌸✨");
    
    // 2. Llamamos a la función después de que el usuario da clic en "OK"
    vaciarCarrito(); 
  };

  return (
    <section className="container py-5" style={{ minHeight: '70vh' }}>
      <header className="mb-5 border-bottom pb-3">
        <h2 className="display-6 fw-bold text-dark">Tu Selección Premium</h2>
        <p className="text-muted">Revisa tus productos seleccionados de Bienestar Premium 360.</p>
      </header>

      {productosSeleccionados.length === 0 ? (
        <article className="text-center py-5">
          <i className="bi bi-bag-x display-1 text-muted mb-3 d-block"></i>
          <p className="lead text-muted">Tu carrito está vacío. ¡Explora el catálogo para comenzar!</p>
        </article>
      ) : (
        <section className="row">
          {/* LISTADO DE PRODUCTOS - Usamos section y article */}
          <section className="col-lg-8">
            {productosSeleccionados.map((item, index) => (
              <article key={index} className="d-flex align-items-center mb-3 p-3 border rounded shadow-sm bg-white">
                <figure className="m-0 me-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                    className="rounded" 
                  />
                </figure>
                
                {/* Aquí restauramos la descripción y el título */}
                <section className="flex-grow-1">
                  <h3 className="h6 fw-bold mb-1">{item.title}</h3>
                  <span className="badge bg-light text-dark border small">{item.brand}</span>
                </section>

                <aside className="text-end">
                  <p className="fw-bold mb-0 fs-5">${item.price.toLocaleString()}</p>
                </aside>
              </article>
            ))}
          </section>
          
          {/* RESUMEN DE PAGO */}
          <aside className="col-lg-4">
            <section className="card p-4 border-0 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
              <header>
                <h3 className="h5 mb-4 fw-bold">Resumen del Pedido</h3>
              </header>
              
              <footer className="border-top pt-3">
                <section className="d-flex justify-content-between align-items-center mb-4">
                  <span className="h5 mb-0">Total:</span>
                  <span className="h4 fw-bold mb-0" style={{ color: '#2d5a27' }}>
                    ${total.toLocaleString()}
                  </span>
                </section>
                <button 
                  onClick={manejarFinalizarCompra}
                  className="btn btn-dark w-100 py-3 fw-bold text-uppercase"
                >
                  Finalizar Compra
                </button>
              </footer>
            </section>
          </aside>
        </section>
      )}
    </section>
  );
}

export default Carrito;