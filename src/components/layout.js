import * as React from "react"
// import { Link } from "gatsby"
import * as styles from './layout.module.scss'
import Header from './header'
import Footer from "./footer"

const Layout = ({ children }) => (
    <div className={styles.container}>
        <Header />

        <div>
            {children}
        </div>
        <Footer>
            First Gatsby Demo 2022
        </Footer>
    </div>
)

export default Layout