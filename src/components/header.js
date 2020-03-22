import { Link } from "gatsby"
import React from "react"

import headerStyles from "../modules/header.module.scss"

  export default function Header() {
    return(
  <header>
  <div className={headerStyles.container}>
  <nav>
    <div className={headerStyles.navBrand} >
      <a href="/home">
        {/* <img src="images/logo.png" alt=""/> */}
      </a>
    </div>
      <div className={`${headerStyles.menuIcons} ${headerStyles.open}`}>
          <i className={`${headerStyles.icon} ${headerStyles.ionMdMenu}`}></i>
      </div>
      <ul className={headerStyles.navList}>
        <div className={`${headerStyles.menuIcons} ${headerStyles.close}`} >
            <i className={`${headerStyles.icon} ${headerStyles.ionMdMenu}`}>
            </i>
          <h1>Pearl</h1>
        </div>
          <li className={headerStyles.navItem}>
              <a href="" className={`${headerStyles.navLink} ${headerStyles.current}`}>Home</a>
          </li>
          <li className={headerStyles.navItem}>
              <a href="#beer" className={headerStyles.navLink}>About</a>
          </li>
          <li className={headerStyles.navItem}>
              <a href="#food" className={headerStyles.navLink}>Developers & Designers</a>
          </li>
          <li className={headerStyles.navItem}>
              <a href="#events" className={headerStyles.navLink}>Projects</a>
          </li>
      </ul>
  </nav>
</div>
  </header>
    )}



