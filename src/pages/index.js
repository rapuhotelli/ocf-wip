import React from "react"
import { Link, graphql } from "gatsby"
import { css, cx } from '@emotion/core'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const introScreenContainer = css`
  background: url("https://picsum.photos/id/811/400/600") no-repeat center center;
  background-size: cover;
  height: 80vh;
`

const titleCss = css`
  color: white;
  bottom: 20%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['OFC', 'open', 'climate', 'fix']} />
    <div css={introScreenContainer}>
      <h1 css={titleCss}>Test</h1>
    </div>
    <div css={introScreenContainer}>
      <h1>Test</h1>
    </div>
  </Layout>
)

export default IndexPage
  /*
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">A React page</Link>
    <br/>
    <Link to="/about">A markdown page</Link>
*/