import ProjectCard from './ProjectCard.jsx'
import projects from '../data/projects.js'

function Projects() {
  return (
    <section id="proyectos">
      <h2>Mis proyectos</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects