import React from "react"
import { Link } from "gatsby"

import Header from "../components/header.js"
import Hero from "../components/hero.js"
import Projects from "../home/projects.js"
import Developers from "../home/developers.js"
import Footer from "../components/footer.js"


const IndexPage = () => (
  <div>
    <Header/>
    <Hero/>
    <Projects/>
    <Developers/>
    <Footer/>
  </div>
)

export default IndexPage
