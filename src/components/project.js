import React from "react"
import { css, cx } from "@emotion/core"

const style = props => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 20rem;
  height: 20rem;
  background: url("${props.image}");
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
  color: white;
  text-decoration: none;
`

const Project = props => (
  <div css={style({ image: props.image })}>
    <h3 css={nameStyle}>{props.name}</h3>
    <a css={readMoreStyle} href={props.link}>
      Read more about the project
    </a>
  </div>
)

export default Project
