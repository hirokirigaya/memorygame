import React from 'react'
import {FaGithubAlt as Github, FaLinkedin as Linkedin} from 'react-icons/fa'
import './styles.css'

function index() {
  return (
    <footer>
      <ul className='list'>
        <li><a href="https://github.com/hirokirigaya" target='_blank'><Github/></a></li>
        <li><a href="https://www.linkedin.com/in/daniel-junio-0832481bb/" target='_blank'><Linkedin/></a></li>
      </ul>
      <p className='version'>v.0.2A</p>
      <p className='copy'>Maked with &hearts; by <a href="https://github.com/hirokirigaya" target='_blank'>Daniel</a></p>
    </footer>
  )
}

export default index