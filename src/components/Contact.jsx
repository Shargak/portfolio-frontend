import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

 function handleSubmit(event) {
  event.preventDefault()

  if (!name || !email || !message) {
    return
  }

  console.log({
    name,
    email,
    message
  })

  setSuccess(true)

  setName('')
  setEmail('')
  setMessage('')
} function handleSubmit(event) {
    event.preventDefault()

    console.log({
      name,
      email,
      message
    })
    setSuccess(true)
  }

  return (
    <section id="contacto">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="message">Mensaje</label>

        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type="submit">
          Enviar
        </button>
        
        {success && (
  <p>Mensaje enviado correctamente.</p>
)}
      </form>
    </section>
  )
}

export default Contact