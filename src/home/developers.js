import React, { Component } from 'react'
import { Link } from "gatsby"

import developersStyles from '../modules/developers.module.scss'

export default class Developers extends Component {
    render() {
        return (
          <div>
          <section className={developersStyles.beers}>
          <div className={developersStyles.container}>
            <div className={developersStyles.titleHeading}>
                <h3>Helping Juniors get experience</h3>
                <h1>Developers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <Link to = "/join" className={developersStyles.btn}>Join Us</Link>
            </div>
            </div>
       </section>
  </div>  
    )
}
}