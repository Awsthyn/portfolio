import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Detalles({data}) {
    return (
<div className="modal fade" id={"Modal"+data.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-center" id="exampleModalLabel">{data.title}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body p-4">
        <p className="text-center">{data.description}</p>
        <h6 className="text-center">Description & Achievements</h6>
        <ul>
        {data.achievements.map((achievement,i) => <span key={"achievement"+i}><li>{achievement}</li></span>)}
        </ul>
        <h6 className="text-center">Technologies </h6>
        <div className="text-center">{data.techs.map((tech, i) => i === data.techs.length - 1 ? <span key={"tech"+ i}>{tech + "."}</span> : <span key={"tech"+i}>{tech + ", "}</span>)}</div>
      </div>
      <div className="modal-footer">
        {data.deploy ? <button type="button" className="btn btn-info" onClick={() => window.open(data.deploy)}>Website</button> : null}
        {data.repo ? <button type="button" className="btn btn-dark" onClick={() => window.open(data.repo)}><FontAwesomeIcon icon={faGithub} /><span className="ml-2">Repository</span></button> : null}
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    )
}
