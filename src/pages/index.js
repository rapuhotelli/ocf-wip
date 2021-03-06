import React from "react"
import { Link, graphql } from "gatsby"
import { css, cx } from "@emotion/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project"

const introScreenContainer = css`
  background: url("https://picsum.photos/id/811/400/600") no-repeat center
    center;
  background-size: cover;
  height: 80vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  color: white;
  align-self: center;
  text-align: center;
  header {
    align-self: flex-start;
    padding: 1rem;
    h1 {
      text-decoration: underline;
    }
  }
`

const FirstScreen = () => (
  <div css={introScreenContainer}>
    <header>
      <h1>Open Climate Fix</h1>
    </header>
    <h2>
      An open and collaborative approach to achieving maximum climate impact
    </h2>
  </div>
)

const SecondScreen = () => (
  <div>
    <h2>Climate change is a complex problem</h2>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["OCF", "open", "climate", "fix"]} />
    <FirstScreen />
    <SecondScreen />

    <LongText />
  </Layout>
)

export default IndexPage

const container = css`
  margin: 2rem auto;
  max-width: 50rem;
`

const LongText = () => (
  <div css={container}>
    <h2>Climate change is a complex problem</h2>
    <p>
      Humanity has about 20 years to go from emitting 40 billion tonnes of CO2e
      per year to emitting zero tonnes per year (net). Business as usual is
      failing the climate: emissions are still rising.
    </p>
    <p>
      Climate change is a race against time and we need more intelligent
      solutions than we currently have. We already have a lot of data but we
      lack tools and scalable solutions which we can put to practice as soon as
      possible.
    </p>

    <h2>Our approach</h2>
    <p>
      We believe that technology can help us to get ourselves closer to our goal
      which is achieving maximum climate impact, as soon as possible. Being
      clear-eyed about what’s possible and desirable within our social,
      political and economic system is as important as our goal.
    </p>
    <p>
      Having open and collaborative approach is one of our core values. We need
      more sharing and teamwork to get our solutions to practise. Constantly
      reminding ourselves of the huge scale and urgency of the problem will keep
      us on track.
    </p>
    <p>
      Single products probably can't reduce emissions by billions of tonnes.
      Instead we’ll maximise our climate impact by catalysing system-wide
      change. We’ll enable the community to develop innovative solutions to
      impactful problems.
    </p>
    <p>
      We’ll be more open than most academic projects. We’ll talk openly about
      projects before we’ve started building them (because we want people to
      identify blind-spots early); and we’ll talk openly about failures (so
      others don’t repeat our mistakes). We’ll bring the best of open-science &
      open-source software development to climate change mitigation. We’ll build
      partnerships across academia and industry.
    </p>
    <p>
      By default we will publish code, ideas, results, and data. We’ll publish
      under a permissive license, which allows commercial use, and only requires
      attribution.
    </p>
    <p>
      So we won’t do business as usual. We’ll discard any ‘usual’ business
      practices which get in the way of achieving climate impact as quickly as
      possible.
    </p>

    <h2>First steps</h2>
    <p>
      Build the company my 7 year-old daughter would build. Total focus on
      building stuff that makes the world better. Optimistic and ambitious.
      Assume the best in people.
    </p>
    <p>
      The dream for the first few years is to build the world’s best solar PV
      nowcasting tool, in collaboration with the research community. Release all
      the code and data. Get state-of-the-art PV forecasts into the world’s grid
      control rooms ASAP. Also provide PV forecasts to anyone who wants them
      (e.g. battery schedulers). Paid for by research funding (e.g. NIA).
      Demonstrate carbon savings of more than a million tonnes per year; and
      sizable financial savings for consumers. Operate in a very open and
      collaborative way. Invite the research community to beat our nowcasting
      algorithm and, when they do, help them to get their better forecasts into
      grid control rooms.
    </p>

    <h2>Projects</h2>
    <Project
      name="Solar PV nowcasting"
      link="/page-2"
      image="https://picsum.photos/id/384/400/600"
    />
  </div>
)
