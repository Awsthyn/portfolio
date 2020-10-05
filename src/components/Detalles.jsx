import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Detalles({data}) {
    return (
<div className="modal fade" id={"Modal"+data.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        <h6 className="text-center">Tareas</h6>
        <ul>
        {data.achievements.map(e => <span key={e}><li>{e}</li></span>)}
        </ul>
        <h6 className="text-center">Tecnologías utilizadas </h6>
        <div className="text-center">{data.techs.map(e => <span key={e}>{e + ", "}</span>)}</div>
      </div>
      <div className="modal-footer">
        {data.deploy ? <button type="button" className="btn btn-info" onClick={() => window.open(data.deploy)}>Website</button> : null}
        {data.repo ? <button type="button" className="btn btn-dark" onClick={() => window.open(data.repo)}><FontAwesomeIcon icon={faGithub} /><span className="ml-2">Repositorio</span></button> : null}
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
    )
}
