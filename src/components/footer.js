import React from 'react'

import footerStyles from "../modules/footer.module.scss"

// import facebook from "../../images/facebook.png"
// import instagram from "../../images/instagram.png"

export default function Footer() {
    return (
        <footer className={footerStyles.footer}>
            <div>
                <div>
                    <p>Pearl</p>
                    {/* <a href="https://www.facebook.com/HeydayBeerCo/" target="_blank"><img className={footerStyles.icon} src={facebook}/></a>
                    <a href="https://www.instagram.com/heydaybeerco/" target="_blank"><img className={footerStyles.icon} src={instagram}/></a> */}
                </div>
            </div>
        </footer>
    )
}