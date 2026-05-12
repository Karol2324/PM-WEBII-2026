import ProductCard from '../components/ProductCard';
import data from '../components/products.json'; 

function Tienda({ agregarAlCarrito }) {
  return (
    <section className="container py-5">
      <header className="text-center mb-5">
        <h2 className="display-5 fw-bold" style={{ color: '#2d5a27' }}>
          CATÁLOGO BIENESTAR
        </h2>
        <p className="text-muted">Mary Kay • Rena Ware • Coaching</p>
      </header>
      
      {/* 'row' activa el sistema de rejilla y 'g-4' da espacio entre tarjetas */}
      <section className="row g-4 justify-content-center">
        {data.map((producto) => (
          /* col-lg-4 significa 3 columnas en pantallas grandes */
          <article className="col-12 col-md-6 col-lg-4" key={producto.id}>
            <ProductCard 
              title={producto.title}
              price={producto.price}
              brand={producto.brand}
              image={producto.image}
              onAdd={() => agregarAlCarrito(producto)}
            />
          </article>
        ))}
      </section>
    </section>
  );
}

export default Tienda;