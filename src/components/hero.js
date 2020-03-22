import { Link } from "gatsby"
import React from "react"

import heroStyles from "../modules/hero.module.scss"

  export default function Hero() {
    return(
        <section className={heroStyles.hero}>
        <div className={heroStyles.container}>
            <div className={heroStyles.mainMessage}>
                <h1>Pearl</h1>
                    <h3>Working within the community</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                    <Link to = "/enquiries" className={heroStyles.btn}>Join Us</Link>
            </div>
        </div>
    </section>
)}

