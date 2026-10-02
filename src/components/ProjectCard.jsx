function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  demo
}) {
  return (
    <article className="project-card">
      <img
        src={image}
        alt={`Captura del proyecto ${title}`}
        className="project-image"
      />

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tech-list">
        {technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={demo} target="_blank" rel="noreferrer"> 
          Ver demo
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard