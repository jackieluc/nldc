import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Navigation from './Navigation/Navigation';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Sponsors',
    path: '/sponsors',
  },
  {
    name: 'Y2B',
    path: '/youth2business',
  },
  {
    name: 'FAQ',
    path: '/faq',
  },
  {
    name: 'Contact',
    path: 'mailto:kkaren.ngo@aiesec.net',
  },
];

const Layout = ({ children }) => (
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
        <Navigation routes={routes} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
