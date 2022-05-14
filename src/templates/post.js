import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import * as styles from './post.module.scss'

const PostPage = ({data}) => {
   const post = data.markdownRemark

   return (
      <Layout>
         <div className={styles.container}>
            
            <Title title={post.frontmatter.title}/>
            <div style={{ width: '100%', height: '200px', backgroundColor: '#fafafa', backgroundImage: 'Url(https://source.unsplash.com/960x200/?' + post.frontmatter.keywords + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginBottom: '30px' }}></div>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
         </div>
      </Layout>
   )
}

export default PostPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`