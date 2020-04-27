import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Project = () => (
  <div className="intro">
    <Layout>
      <SEO title="Project" />
      <h1>Projects Coming Soon:</h1>
      <p>Stay tuned for my Latest Project i0no</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </div>
)

export default Project
