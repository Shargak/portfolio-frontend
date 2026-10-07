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

          <a
            href="/docs/cv-antonio-baldallo.pdf"
            className="btn btn-secondary"
            download
          >
            Descargar CV
          </a>
        </div>

        <div className="hero-social">
          <a
            href="TU_URL_GITHUB"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="TU_URL_LINKEDIN"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero