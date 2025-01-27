import React, { useState } from 'react'
import { job } from '../data/job'
import { Link } from 'react-router-dom'
import './BriefcaseListJobs.css'

export const ListJobs = ({limite = 10}) => {
  const [filter, setFilter] = useState('Todos')
  
  const technologies = ['Todos', ...new Set(
    job
      .flatMap(j => j.lenguajes.split(', '))
      .filter((tech, index, self) => self.indexOf(tech) === index)
  )]
  
  const filteredJobs = filter === 'Todos' 
    ? job 
    : job.filter(j => j.lenguajes.includes(filter))
  return (
    <>
    <div className='job-filters'>
      {technologies.map(tech => (
        <button 
          key={tech}
          className={`filter-btn ${filter === tech ? 'active' : ''}`}
          onClick={() => setFilter(tech)}
        >
          {tech}
        </button>
      ))}
    </div>

    <section className='works-grid'>
      {filteredJobs.slice(0, limite).map(job => (
        <article key={job.id} className='work-item'>
          <div className='work-image-container'>
            <img 
              src={`/images/${job.id}.png`} 
              alt={job.nombre} 
              className='work-image'
            />
            <div className='work-overlay'>
              <Link 
                to={`/proyecto/${job.id}`} 
                className='view-project-btn'
              >
                Ver Proyecto
              </Link>
            </div>
          </div>
          <div className='work-details'>
            <span className='work-category'>{job.categorias}</span>
            <h2 className='work-title'>
              <Link to={`/proyecto/${job.id}`}>{job.nombre}</Link>
            </h2>
            <h3 className='work-technologies'>{job.lenguajes}</h3>
          </div>
        </article>
      ))}
    </section>
  </>
  )
}
