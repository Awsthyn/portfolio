import React from 'react';
import './Home.css';
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faNodeJs, faReact, faHtml5, faCss3Alt, faJs, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons'


function Home() {
  return (
    <div>
      <Header />
      <div className="d-flex flex-row justify-content-center" style={{
          width: "100%",
          position: "absolute",
          top: "66%",
					zIndex: 1,
				}}>
      <FontAwesomeIcon className="mr-3" icon={faHtml5} size="3x" />
      <FontAwesomeIcon className="mr-3" icon={faCss3Alt} size="3x" />
      <FontAwesomeIcon className="mr-3" icon={faJs} size="3x" />
      <FontAwesomeIcon className="mr-3" icon={faNodeJs} size="3x" />
      <FontAwesomeIcon className="mr-3" icon={faReact} size="3x" />
      <FontAwesomeIcon className="mr-3" icon={faBootstrap} size="3x" />
      <FontAwesomeIcon className="mr-3" icon={faGithub} size="3x" />
      <FontAwesomeIcon className="mr-3" icon={faDatabase} size="3x" />
      <FontAwesomeIcon className="mr-3" icon={faPython} size="3x" />


      </div>
    </div>
  );
}

export default Home;
