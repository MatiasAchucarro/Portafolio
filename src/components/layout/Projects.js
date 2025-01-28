import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { job } from '../../data/job'
import './Projects.css'
export const Projects = () => {
  const [project, setProject] = useState(null)
  const params = useParams()

  useEffect(() => {
    const selectedProject = job.find(job => job.id === params.id)
    setProject(selectedProject)
  }, [params.id])

  if (!project) return <div>Cargando proyecto...</div>

  return (
    <div className='page project-detail'>
    <div className='project-header'>
      <h1 className='heading'>{project.nombre}</h1>
      <div className='project-meta'>
        <span className='project-technologies'>{project.lenguajes}</span>
      </div>
    </div>

    <div className='project-content'>
      <div className='project-image'>
        <img 
          src={`/images/${project.id}.png`} 
          alt={project.nombre} 
        />
      </div>

      <div className='project-description'>
        <h2>Descripción del Proyecto</h2>
        <p>{project.descripcion}</p>

        <div className='project-actions'>
          <a 
            href={`${project.url}`} 
            target='_blank' 
            rel='noopener noreferrer'
            className='project-link'
          >
            Ir al Proyecto
          </a>
          <Link to="/portafolio" className='back-link'>
            Volver al Portafolio
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
