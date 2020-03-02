import React from 'react'
import { Link } from "gatsby";
import {
  FaMapMarker,
  FaEnvelope,
  FaPencilAlt,
  FaWrench
} from "react-icons/fa";
import DarkMode from "../DarkMode";



const ListLink = props => (
  <li className="c-main-nav__elem">
    <Link
      to={props.to}
      className="c-main-nav__link"
      activeClassName="nav-current"
    >
      {props.children}
    </Link>
  </li>
);  


const Navigation = props => {

  const navLinks = [
    { to: "/", text: "Home", icon: FaMapMarker },
    { to: "/about", text: "Over mij", icon: FaWrench },
    { to: "/blog", text: "Blog", icon: FaPencilAlt },
    { to: "/contact", text: "Contact", icon: FaEnvelope }
  ];


	return (
    <header className="site-head">
      <div id="menu" className="site-head-container">
        <nav id="swup" className="site-head-left">
          <Link className="site-head-logo" to={`/`}>
            Simon<span> Resok</span>
          </Link>
        </nav>
        {/* <div className="site-head-center">
          <Link className="site-head-logo" to={`/`}>
            Simon Resok
          </Link>
        </div> */}
        <div className="site-head-right">
          <div className="social-links">
            {navLinks.map((navLink, i) => (
              <ListLink to={navLink.to} key={i}>
                <navLink.icon />

                <span className="c-main-nav__text">{navLink.text}</span>
              </ListLink>
            ))}

            {/* <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>Elements</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>Tags</Link>
              </li> */}
            {/* <li className="nav-home nav-current" role="menuitem">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="nav-about" role="menuitem">
              <Link to={`/about`}>Over mij</Link>
            </li>
            <li className="nav-blog" role="menuitem">
              <Link to={`/blog`}>Blog</Link>
            </li>
            <li className="nav-contact" role="menuitem">
              <Link to={`/contact`}>Contact</Link>
            </li> */}
            <li>
              <DarkMode />
            </li>
            {/* <a
                href="https://www.facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <Link
                to={`/rss.xml`}
                title="RSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </Link>
              <a
                href="https://github.com/SResok/simonresok.nl"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation