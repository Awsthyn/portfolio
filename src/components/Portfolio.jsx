import React from 'react'
import Detalles from "./Detalles"
import {projects} from "./data.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Portfolio() {
    return (
        <div className="p-4">
        {projects.map((e, i) => <div key={`project-${i}`} className="d-flex flex-row align-items-center justify-content-between shadow mb-3" style={{backgroundColor: "white", height: "50px",width: "95vw"}}>
        <h5 className="mt-1 pl-4" style={{width: "60vw"}}>{e.title}</h5>
        <div>
        <span data-toggle="modal" data-target={"#Modal"+ e.id} className="mr-2 btn btn-info" ><FontAwesomeIcon icon={faInfoCircle} size="lg" /></span>
        {e.repo ? <span className=" mr-2 btn btn-dark" onClick={() => window.open(e.repo)}><FontAwesomeIcon icon={faGithub} size="lg" /></span> : null}
        </div>
        <Detalles data={e} />
        </div>)}
        

        </div>

    )
}
