import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

const headerCss = css`
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;
  > div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
`

const headerLinkCss = css`
  color: white;
  text-decoration: none;
`
const headerWrapperCss = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <header css={headerCss}>
    <h1>
      <Link to="/" css={headerLinkCss}>
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
