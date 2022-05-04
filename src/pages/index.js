import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

const IndexPage = ({data}) => (
    <Layout>
        <Title title={data.site.siteMetadata.title}/>
        <div>Hello Gatsby</div>
    </Layout>
)
export default IndexPage;

// --- Query ---
export const query = graphql`query {
    site {
        siteMetadata {
            title
        }
    }
}`