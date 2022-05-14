import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Article from '../components/article'

/**
 * ken: Query the articles from the database using QueryML
 */
const ArticleList = () => (
   <StaticQuery

      query={graphql`query {
         allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
           totalCount
           edges {
             node {
               id
               frontmatter {
                 title
                 image
                 keywords
                 date(formatString: "MMMM YYYY")
               }
               excerpt
             }
           }
         }
       }`

      }

      render={data => (

         <div>
            {/* <pre>
            {JSON.stringify(data, '', 2)}
            </pre> */}

            {/* {

               data.allMarkdownRemark.edges.map(edge => {
                  return (
                     <pre>{JSON.stringify(edge, '', 2)}</pre>
                  )
               })
            } */}

            {data.allMarkdownRemark.edges.map(({ node }) => (
               <Article id={node.id}
                  to='/'
                  keywords={node.frontmatter.keywords}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  excerpt={node.excerpt} />
            ))}
         </div>
      )}

   />
)

export default ArticleList;