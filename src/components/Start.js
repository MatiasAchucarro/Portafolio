import React from 'react'
import { Link } from 'react-router-dom'
import { ListJobs } from './ListJobs'
import './Start.css'
export const Start = () => {
  return (
    <div className="start-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="main-heading">
            Hola, soy <span className="highlight">Matias Achucarro</span>
          </h1>
          <h2 className="sub-heading">Desarrollador Web</h2>
          <p className="hero-description">
            Especializado en crear experiencias web atractivas y funcionales. 
            Mi pasión por el aprendizaje continuo y la innovación impulsa cada proyecto que desarrollo.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-btn">
              Contactar
            </Link>
            <Link to="/portafolio" className="secondary-btn">
              Ver Proyectos
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <p>C#, .NET, Entity Framework</p>
          </div>
          <div className="skill-card">
            <h3>Bases de Datos</h3>
            <p>SQL Server</p>
          </div>
        </div>
      </section>

      <section className="recent-work">
        <h2>Proyecto Reciente</h2>
        <div className="recent-work-showcase">
          <ListJobs limite={1} />
        </div>
      </section>
    </div>

   
  )
}
