import React from 'react'
import './Curriculum.css'
export const Curriculum = () => {
  return (
    <div className="page curriculum">
      <header className="curriculum-header">
        <h1 className="heading">Curriculum Vitae</h1>
      </header>

      <section className="skills-section">
        <h2>Conocimientos Técnicos</h2>
        <div className="skills-grid">
          <article className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Cairo</li>
            </ul>
          </article>

          <article className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>C#</li>
              <li>.NET</li>
              <li>Entity Framework</li>
            </ul>
          </article>

          <article className="skill-category">
            <h3>Bases de Datos</h3>
            <ul>
              <li>SQL Server</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="education-section">
        <h2>Educación</h2>
        <div className="education-timeline">
          <article className="education-item">
            <h3>Educación Secundaria</h3>
            <p>Escuela Técnica José Hernández N°7</p>
            <p>Título: Técnico en Programación</p>
            <time dateTime="2020">Completado</time>
          </article>

          <article className="education-item">
            <h3>Educación Superior</h3>
            <p>Universidad de Buenos Aires</p>
            <p>Carrera: Licenciatura en Ciencias de la Computación </p>
            <time dateTime="2025">En Curso</time>
          </article>
        </div>
      </section>
    </div>
  )
}
