function ProductCard({ title, price, brand, image, onAdd }) {
  return (
    <article className="card h-100 shadow-sm border-0">
      {/* Contenedor de imagen con altura fija para que todas sean iguales */}
      <figure className="m-0" style={{ height: '250px', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={title} 
          className="card-img-top h-100 w-100" 
          style={{ objectFit: 'cover' }}
        />
      </figure>

      <section className="card-body d-flex flex-column">
        <header>
          <span className="badge bg-light text-dark mb-2 border">{brand}</span>
          <h3 className="h5 card-title fw-bold text-dark">{title}</h3>
        </header>
        
        <p className="card-text fw-bold fs-5 mb-4" style={{ color: '#c5a059' }}>
          ${price}
        </p>

        <footer className="mt-auto">
          <button 
            onClick={onAdd} 
            className="btn btn-dark w-100 fw-semibold"
          >
            AÑADIR AL CARRITO
          </button>
        </footer>
      </section>
    </article>
  );
}

export default ProductCard;