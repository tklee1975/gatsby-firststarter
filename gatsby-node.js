const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
    // console.debug("onCreateNode: called. node=", node);
    if (node.internal.type === 'MarkdownRemark') {
        // console.debug("onCreateNode: called. node=", node);
        console.debug("onCreateNode: called. actions=", actions);
        //console.debug("onCreateNode: called. getNode=", getNode);
        const { createNodeField } = actions

        // define the slug based on the filepath
        const slug = createFilePath({ node, getNode, basePath: 'markdown' })

        console.debug("onCreateNode: called. slug=", slug);
        // This add the slug to the node
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
}

// // Create post pages programmatically
exports.createPages = ({ graphql, actions }) => {
    // console.debug("createPages: called. actions=", actions);
    const { createPage } = actions

    return new Promise(resolve => {
        console.debug("****** RESOLVE *****");
        graphql(`
        {
           allMarkdownRemark {
              edges {
                 node {
                    fields {
                       slug
                    }
                 }
              }
           }
        }`
        ).then(result => {
            console.debug("***** RESULT *******");
            console.debug("result=", result.data.allMarkdownRemark.edges);
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/templates/post.js'),
                    context: {
                        slug: node.fields.slug,
                    },
                })
            })
            resolve()
        })
    })
}