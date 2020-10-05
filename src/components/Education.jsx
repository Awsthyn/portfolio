import React from 'react'
import {formalEducation, courses} from "./data.js"



export default function Education() {
    return (
        <div className="p-4">
        <h3 className="text-center mb-4">Educación formal</h3>    
        {formalEducation.map(e => <div className="d-flex flex-row align-items-center justify-content-between shadow mb-3" style={{backgroundColor: "white", height: "50px",width: "95vw"}}>
        <h5 className="mt-1 pl-4" style={{width: "40vw"}}>{e.title}</h5>
        <h6 className="text-center" style={{width: "20vw"}}>{e.periodo}</h6>
        <h6 className="text-right" style={{width: "30vw"}}>{e.institution}</h6>
        <div>
        </div>
        </div>)}
        <h3 className="text-center mb-4">Cursos</h3>
        {courses.map(e => <div className="d-flex flex-row align-items-center justify-content-between shadow mb-3" style={{backgroundColor: "white", height: "50px",width: "95vw"}}>
        <h5 className="mt-1 pl-4" style={{width: "40vw"}}>{e.title}</h5>
        <h6 className="text-center" style={{width: "20vw"}}>{e.hours} hs.</h6>
        <h6 className="text-right" style={{width: "30vw"}}>{e.institution}</h6>
        <div>
        </div>
        </div>)}
        </div>
    )
}
