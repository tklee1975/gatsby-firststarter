import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"

// --- Query ---
// Note: can get the code from graphQL tool ()
export const query = graphql`query IndexPageQuery{
    site {
        siteMetadata {
            title
        }
    }
}`

const IndexPage = ({data}) => (
    <Layout>
        <Title title={data.site.siteMetadata.title}/>
        <div>Hello Gatsby</div>
        
        <ArticleList />
        
        <div>End</div>
    </Layout>
);

export default IndexPage;

