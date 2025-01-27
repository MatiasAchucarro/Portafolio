import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>© {new Date().getFullYear()} Matias Achucarro WEB</p>
        <div className='social-links'>
          <a href="https://github.com/MatiasAchucarro" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/matias-achucarro-a94235233/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
