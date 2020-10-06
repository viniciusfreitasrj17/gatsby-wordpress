import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            title
            content
            date
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Page two" />
      
      {data.allWordpressPost.edges.map(n => (
        <div>
          <h1> {n.node.title} </h1>
          <p> {n.node.content} </p>
          <p> {n.node.date} </p>
        </div>
      ))}

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
