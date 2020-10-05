import React from 'react'
import {Route} from "react-router-dom";

import Home from './components/Home'
import Portfolio from "./components/Portfolio"
import NavBar from "./components/NavBar"
import Education from "./components/Education"

export default function App() {
    return (
        <>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={Home} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/aboutme" component={Education} />
        </>
    )
}
