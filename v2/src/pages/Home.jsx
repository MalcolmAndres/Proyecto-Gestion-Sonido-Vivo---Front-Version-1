import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { INICIO_POR_ROL } from "../utils/roles";
import { getImagenCategoria } from "../utils/imagenesCategoria";

const CATEGORIAS = ["Guitarras", "Bajos", "Baterías", "Teclados", "Amplificadores", "Micrófonos", "Pedales", "Accesorios"];

const BENEFICIOS = [
  { titulo: "Catálogo actualizado", texto: "Precios y stock al día, sin preguntar por WhatsApp." },
  { titulo: "Despacho o retiro", texto: "Recibe en tu casa o retira en la tienda o en un punto de retiro." },
  { titulo: "Sigue tu pedido", texto: "Revisa el estado y el número de seguimiento desde tu cuenta." },
];

export default function Home() {
  const { usuario } = useAuth();
  // Si no ha iniciado sesión, los botones lo llevan a crear cuenta / iniciar sesión
  const destinoCatalogo = usuario ? "/catalogo" : "/login";

  return (
    <>
      <header className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand brand">Sonido Vivo</span>
          <div className="d-flex gap-2">
            {usuario ? (
              <Link className="btn btn-primario btn-sm" to={INICIO_POR_ROL[usuario.rol]}>Ir a mi cuenta</Link>
            ) : (
              <>
                <Link className="btn btn-outline-light btn-sm" to="/login">Iniciar sesión</Link>
                <Link className="btn btn-primario btn-sm" to="/registro">Crear cuenta</Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Portada: texto a la izquierda, imagen a la derecha (en celular la imagen se oculta) */}
      <section className="home-hero text-white">
        <div className="container py-5">
          <div className="row align-items-center g-4 py-lg-4">
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <span className="home-etiqueta">Tienda de música · Viña del Mar</span>
              <h1 className="display-5 fw-bold mt-3">
                Instrumentos y equipos <span className="text-primario">para músicos</span>
              </h1>
              <p className="lead text-white-50 mb-4">
                Más de 11 años en Viña del Mar. Ahora puedes ver el catálogo, comprar en línea
                y elegir despacho o retiro en tienda.
              </p>
              <div className="d-flex gap-2 justify-content-center justify-content-lg-start">
                <Link className="btn btn-primario btn-lg" to={usuario ? "/catalogo" : "/registro"}>
                  {usuario ? "Ver catálogo" : "Crear mi cuenta"}
                </Link>
                {!usuario && (
                  <Link className="btn btn-outline-light btn-lg" to="/login">Ya tengo cuenta</Link>
                )}
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block text-center">
              <img src="/img/tienda.jpg" alt="Tienda Sonido Vivo" className="home-hero-img" />
            </div>
          </div>
        </div>
      </section>

      <main className="container py-5">
        {/* Categorías */}
        <h2 className="h4 text-center mb-1">¿Qué encuentras en Sonido Vivo?</h2>
        <div className="home-linea mx-auto mb-4" />
        <div className="row g-3 justify-content-center mb-5">
          {CATEGORIAS.map((c) => (
            <div className="col-6 col-md-3" key={c}>
              <Link to={destinoCatalogo} className="card home-categoria text-center h-100">
                {getImagenCategoria(c) && (
                  <img
                    src={getImagenCategoria(c)}
                    alt={c}
                    className="card-img-top p-3"
                    style={{ height: 140, objectFit: "contain" }}
                  />
                )}
                <div className="card-body fw-semibold pt-0">{c}</div>
              </Link>
            </div>
          ))}
        </div>

        {/* Beneficios */}
        <div className="row g-4">
          {BENEFICIOS.map((b, i) => (
            <div className="col-12 col-md-4" key={b.titulo}>
              <div className="card home-beneficio h-100">
                <div className="card-body">
                  <span className="home-numero">{i + 1}</span>
                  <h3 className="h5 mt-3">{b.titulo}</h3>
                  <p className="text-muted mb-0">{b.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Llamado final, solo si no ha iniciado sesión */}
      {!usuario && (
        <section className="home-cta text-center text-white py-5">
          <div className="container">
            <h2 className="h4 mb-2">¿Listo para tu próximo instrumento?</h2>
            <p className="text-white-50 mb-4">Crea tu cuenta gratis y compra en minutos.</p>
            <Link className="btn btn-primario" to="/registro">Crear mi cuenta</Link>
          </div>
        </section>
      )}

      <footer className="bg-dark text-white-50 py-3 text-center small">
        Sonido Vivo · Viña del Mar, Región de Valparaíso
      </footer>
    </>
  );
}