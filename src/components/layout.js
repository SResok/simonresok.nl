import React, { useState } from "react";
import { Link } from "gatsby";
import Navigation from './Navigation';

const Layout = props => {
  const { title, children } = props;
  // const [toggleNav, setToggleNav] = useState(() => false);
  return (
    <div className={`site-wrapper`}>
    {/* <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}> */}
    <Navigation location={props.location} />
     <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  );
};

export default Layout;
