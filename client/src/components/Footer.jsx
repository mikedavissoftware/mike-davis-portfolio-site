import { NavLink } from "react-router-dom"


export default function Header() {



  return (
    <div className="footer">
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <br />
        <NavLink to="/web-development">Web Development</NavLink>
        <NavLink to="/audio">Audio</NavLink>
        <NavLink to="/video">Video</NavLink>
        <NavLink to="/graphic-design">Graphic Design</NavLink>
        <br />
        <NavLink to="/entrepreneurship">Entrepreneurship</NavLink>
        <NavLink to="/fundraising">Fundraising</NavLink>
      </nav>

      <h2>MIKE DAVIS</h2>
      <h4>Software Engineer | Media Producer | Ethical Entrepreneur</h4>
    </div>
  )
}