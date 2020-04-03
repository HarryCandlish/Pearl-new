import React, { Component } from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import projectsStyles from '../modules/projects.module.scss'

export default class Projects extends Component {
  constructor(props){
    super(props)
    this.state = {
        items:props.items.edges,
        projects:props.items.edges
    }
}
    render() {
        return (
          <section className={projectsStyles.projects}>
          <div className={projectsStyles.container}>
            <div className={projectsStyles.titleHeading}>
                <h3>Check out some of the things we've built</h3>
                <h1>Our Work</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <Link to = "/join" className={projectsStyles.btn}>Inquiries</Link>
            </div>
            </div>
            <div className={projectsStyles.grid}>
                    {this.state.projects.map(({node}) => {
                        return(
                            <div className={`${projectsStyles.gridItem} ${projectsStyles.craftBeer}`} key={node.id}>
                                <Link to=""><Img className={`${projectsStyles.image} ${projectsStyles.campass}`} fixed={node.project.fixed}/></Link>
                            </div>
                          );
        })}
                  </div>
       </section>

    )
}
}