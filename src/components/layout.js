import * as React from 'react'
import {graphql, Link, useStaticQuery} from "gatsby";
import {container, heading, navLinkItem, navLinks, navLinkText, siteTitle} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    const metaData = useStaticQuery(graphql`
    query {
  site {
    siteMetadata {
      title
      description
    }
  }
}`)

    return (
        <div className={container}>
            <header className={siteTitle}>{metaData.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
