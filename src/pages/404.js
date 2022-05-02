import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./404.module.scss"

console.debug("Testing: ", styles)

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className={styles.content}>
      <h1 className={styles.header}>404: Not Found</h1>
      <p className={styles.errorMessage}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
