import SkillCard from './SkillCard.jsx'
import skills from '../data/skills.js'

function Skills() {
  return (
    <section id="skills">
      <h2>Tecnologías</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills