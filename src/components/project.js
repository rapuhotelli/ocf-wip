import React from "react"
import { css, cx } from "@emotion/core"

const style = props => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 25rem;
  height: 25rem;
  background: url("${props.image}");
  background-size: cover;
  color: white;
  text-decoration: none;
`

const nameStyle = css`
  padding: 2rem;
  text-align: center;
  color: white;
`

const readMoreStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: #088f66;
`

const Project = props => (
  <a href={props.link} css={style({ image: props.image })}>
    <h3 css={nameStyle}>{props.name}</h3>
    <span css={readMoreStyle}>Read more about the project</span>
  </a>
)

export default Project
