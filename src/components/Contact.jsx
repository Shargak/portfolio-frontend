import { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

function Contact() {
  const [state, handleFormspreeSubmit] = useForm('xkjonlwk')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (state.succeeded) {
      setName('')
      setEmail('')
      setMessage('')
    }
  }, [state.succeeded])

  async function handleSubmit(event) {
    event.preventDefault()

    if (!name || !email || !message) {
      return
    }

    await handleFormspreeSubmit(event)
  }

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-info">
        <p className="section-label">Contacto</p>

        <h2>¿Hablamos?</h2>

        <p>
          Si quieres contactar conmigo para una oportunidad laboral,
          colaboración o proyecto, puedes escribirme desde este formulario.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>

          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>

          <textarea
            id="message"
            name="message"
            rows="6"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />

          <ValidationError
            prefix="Mensaje"
            field="message"
            errors={state.errors}
          />
        </div>

        <ValidationError errors={state.errors} />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={state.submitting}
        >
          {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {state.succeeded && (
          <p className="success-message">
            Mensaje enviado correctamente.
          </p>
        )}
      </form>
    </section>
  )
}

export default Contact