import { Link } from "gatsby"
import React from "react"

import heroStyles from "../modules/hero.module.scss"


  export default function Hero() {
    return(
        <section className={heroStyles.hero}>
        <div className={heroStyles.container}>
        <hero>
        <div className={heroStyles.container}>
            <nav>
              <div className={heroStyles.navBrand} >
                <a href="/home">
                  {/* <img src="images/logo.png" alt=""/> */}
                </a>
              </div>
               <div>
                   <h3 className={heroStyles.title}>Pearl</h3>
               </div>
                <ul className={heroStyles.navList}>
                  <div className={`${heroStyles.menuIcons} ${heroStyles.close}`} >
                      <i className={`${heroStyles.icon} ${heroStyles.ionMdMenu}`}></i>
                  </div>
                    <li className={heroStyles.navItem}>
                        <a href="" className={`${heroStyles.navLink} ${heroStyles.current}`}>Home</a>
                    </li>
                    <li className={heroStyles.navItem}>
                        <a href="#beer" className={heroStyles.navLink}>Projects</a>
                    </li>
                    <li className={heroStyles.navItem}>
                        <a href="#food" className={heroStyles.navLink}>Developers</a>
                    </li>
                    <li className={heroStyles.navItem}>
                        <a href="#events" className={heroStyles.navLink}>About</a>
                    </li>
                </ul>
            </nav>
        </div>
      </hero>
            <div className={heroStyles.mainMessage}>
                    <h3>Working within the community</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                    <Link to = "/enquiries" className={heroStyles.btn}>Join Us</Link>
            </div>
        </div>
    </section>
)}

