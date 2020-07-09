import React from "react"
// import { Link } from "gatsby"

// import {css} from '@emotion/core'
import Layout from "../components/layout"
// import Image from "../components/image"
import Intro from "./intro"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
  </Layout>
)

export default IndexPage
