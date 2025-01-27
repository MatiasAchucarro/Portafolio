import React from 'react'
import './Services.css'

export const Services = () => {
  const servicesList = [
    {
      title: 'Diseño Web',
      description: 'Transformo tu visión en un diseño web atractivo y funcional.',
      details: [
        'Diseño responsive',
        'Interfaz intuitiva',
        'Estética moderna',
        'Optimización visual'
      ]
    },
    {
      title: 'Desarrollo Web',
      description: 'Construyo tu sitio web desde cero, adaptado a tus necesidades.',
      details: [
        'Desarrollo frontend',
        'Desarrollo backend',
        'Integración de sistemas',
        'Soluciones personalizadas'
      ]
    },
    {
      title: 'Optimización SEO',
      description: 'Mejoro la visibilidad de tu sitio web en motores de búsqueda.',
      details: [
        'Análisis de keywords',
        'Optimización de contenido',
        'Mejora de rendimiento',
       
      ]
    }
  ]

  return (
    <div className='page services-page'>
      <h1 className='heading'>Mis Servicios</h1>

      <section className='services-grid'>
        {servicesList.map((service, index) => (
          <article key={index} className='service-card'>
            <div className='service-content'>
              <h2>{service.title}</h2>
              <p className='service-description'>{service.description}</p>
              <ul className='service-details'>
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
