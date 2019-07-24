import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {useSpring, animated} from 'react-spring'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  let content;

  if (location && location.pathname === '/') {
    content = (
      <animated.div style={props}>
        {children}
      </animated.div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
            <link href="https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap" rel="stylesheet"></link>
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
