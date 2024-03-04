import "./Navigation.css";

import { Link } from "react-scroll";

function Navigation() {
  return (
    <>
      <nav>
        <div className="icons">
          <ul>
            <a href="https://github.com/elisha-et" target="_blank">
              <li>
                <i className="fa-brands fa-github"></i>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/elisha-etukudoh/"
              target="_blank"
            >
              <li>
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
            </a>
          </ul>
        </div>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <div className="name">Elisha Etukudoh</div>
        </Link>

        <div className="navs">
          <ul>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li>Skills</li>
            </Link>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li>Projects</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
