import React, { Component } from 'react'
import { Link } from "gatsby"

import projectsStyles from '../modules/projects.module.scss'

export default class Projects extends Component {
    render() {
        return (
          <div>
          <section className={projectsStyles.beers}>
          <div className={projectsStyles.container}>
            <div className={projectsStyles.titleHeading}>
                <h3>Check out some of the things we've built</h3>
                <h1>Our Work</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <Link to = "/join" className={projectsStyles.btn}>Join Us</Link>
            </div>
            </div>
       </section>
  </div>  
    )
}
}