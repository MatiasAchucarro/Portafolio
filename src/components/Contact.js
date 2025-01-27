import React from 'react'
import './Contact.css'
import { 
  Mail, 
  Linkedin, 
  Github, 
  MessageCircle 
} from 'lucide-react'

export const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail color="#fa4529" size={40} />,
      title: 'Email',
      link: 'mailto:matiasacevedo248@gmail.com',
      text: 'Enviar Correo'
    },
    {
      icon: <Linkedin color="#0A66C2" size={40} />,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/matias-achucarro-a94235233/',
      text: 'Perfil Profesional'
    },
    {
      icon: <Github color="black" size={40} />,
      title: 'Github',
      link: 'https://github.com/MatiasAchucarro',
      text: 'Repositorios'
    },
    {
      icon: <MessageCircle color="#25D366" size={40} />,
      title: 'WhatsApp',
      link: 'https://wa.link/aceuch',
      text: 'Enviar Mensaje'
    }
  ]
  return (
    <div className='page contact-page'>
    <h1 className='heading'>Contáctame</h1>
    
    <section className='contact-grid'>
      {contactLinks.map((contact, index) => (
        <article key={index} className='contact-card'>
          <div className='contact-icon'>
            {contact.icon}
          </div>
          <h2>{contact.title}</h2>
          <a 
            href={contact.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className='contact-link'
          >
            {contact.text}
          </a>
        </article>
      ))}
    </section>
  </div>


  )
}
