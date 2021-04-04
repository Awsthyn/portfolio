import React from 'react'
import {Route} from "react-router-dom";

import Home from './components/Home'
import Portfolio from "./components/Portfolio"
import NavBar from "./components/NavBar"
import Education from "./components/Education"
import EmailForm from "./components/EmailForm"

export default function App() {
    return (
        <>
    <Route path="/portfolio" component={NavBar} />
    <Route exact path="/portfolio" component={Home} />
    <Route exact path="/portfolio/portfolio" component={Portfolio} />
    <Route exact path="/portfolio/aboutme" component={Education} />
    <Route exact path="/portfolio/contact" component={EmailForm} />

        </>
    )
}
