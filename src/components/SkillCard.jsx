function SkillCard({ name, description }) {
  return (
    <article className="skill-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default SkillCard