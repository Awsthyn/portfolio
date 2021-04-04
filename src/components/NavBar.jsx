import React from 'react'
import {useHistory} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {
  const history = useHistory()
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <span role="button" className="nav-link" onClick={()=>history.push('/portfolio')}>Home</span>
      </li>
      <li className="nav-item">
        <span role="button" className="nav-link" onClick={()=>history.push('/portfolio/portfolio')}>Portfolio</span>
      </li>
      <li className="nav-item">
        <span className="nav-link" role="button" onClick={()=>history.push('/portfolio/aboutme')}>About me</span>
      </li>
      <li className="nav-item">
        <span className="nav-link" role="button" onClick={()=>history.push('/portfolio/contact')}>Contact</span>
      </li>
    </ul>
  </div>
  <FontAwesomeIcon role="button" onClick={() => window.open('https://www.linkedin.com/in/agust%C3%ADn-wagner')}  className="mr-3 text-info" icon={faLinkedin} size="2x" />
  <FontAwesomeIcon role="button" onClick={() => window.open('https://github.com/Awsthyn')}  className="mr-3 text-white" icon={faGithub} size="2x" />
</nav>
    )
}
