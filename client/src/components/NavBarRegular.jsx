import { NavLink } from "react-router-dom"


export default function NavBarRegular() {



  return (
    <div className="invisible h-0 md:visible md:h-auto">
      <ul className="menu menu-horizontal bg-base-100 rounded-xl">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
        <li tabIndex={0}>
          <NavLink to="/services">
            Services
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </NavLink>
          <ul className="p-2 bg-base-100">
            <li><NavLink to="/web-development">Web Development</NavLink></li>
            <li><NavLink to="/audio">Audio</NavLink></li>
            <li><NavLink to="/video">Video</NavLink></li>
            <li><NavLink to="/graphic-design">Graphic Design</NavLink></li>
            <li><NavLink to="/entrepreneurship">Entrepreneurship</NavLink></li>
            <li><NavLink to="/fundraising">Fundraising</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  )
}