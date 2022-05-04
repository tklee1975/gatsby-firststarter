import * as React from "react"


import * as styles from "./404.module.scss"

console.debug("Testing: ", styles)

const NotFoundPage = () => (
  <div className={styles.content}>
    <h1 className={styles.header}>404: Not Found</h1>
    <p className={styles.errorMessage}>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
