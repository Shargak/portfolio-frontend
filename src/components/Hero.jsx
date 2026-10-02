function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <p className="hero-label">Hola, soy Antonio</p>

        <h1>
          Frontend Developer
          <span> especializado en React</span>
        </h1>

        <p className="hero-description">
          Desarrollo interfaces web modernas, responsive y fáciles de usar
          con JavaScript y React.
        </p>

        <div className="hero-actions">
          <a href="#proyectos" className="btn btn-primary">
            Ver proyectos
          </a>

          <a href="#contacto" className="btn btn-secondary">
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero