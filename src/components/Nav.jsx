import { TbMenu2 } from "react-icons/tb";
import { logo } from "../assets/images";

function Nav() {
  return (
    <nav>
      {/* <!-- Navbar Brand Logo --> */}
      <a href="/" className="logo">
        <img loading="lazy" decoding="async" src={logo} className="h-10" alt="Ryan Logo" />
      </a>

      {/* <!-- Mobile Menu Toggle Button (Offcanvas Button) --> */}
      <div className="lg:hidden flex items-center ms-auto px-2.5">
        <button
          className="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-white/20 bg-default-100/5"
          type="button"
          id="hs-unstyled-collapse"
          data-hs-collapse="#mobileMenu"
          data-hs-type="collapse"
        >
          <TbMenu2 />
        </button>
      </div>

      {/* <!-- Navigation Menu --> */}
      <div
        id="mobileMenu"
        className="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0"
      >
        <ul id="navbar-navlist" className="navbar-nav">
          {/* <!-- Home Page Link --> */}
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>

          {/* <!-- Portfolio Page Link --> */}
          <li className="nav-item">
            <a className="nav-link" href="/#/portfolio">
              Portfolio
            </a>
          </li>

          {/* <!-- About Page Link --> */}
          <li className="nav-item">
            <a className="nav-link" href="/#/about">
              About
            </a>
          </li>

          {/* <!-- Skills Page Link --> */}
          <li className="nav-item">
            <a className="nav-link" href="/#/skills">
              Skills
            </a>
          </li>

          {/* <!-- Services Page Link --> */}
          <li className="nav-item">
            <a className="nav-link" href="/#/services">
              Services
            </a>
          </li>

          {/* <!-- Contact Page Link --> */}
          <li className="nav-item">
            <a className="nav-link" href="/#/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
