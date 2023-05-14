import { NavLink } from "react-router-dom"


export default function NavBarServicesCollapse() {



  return (
    <div className="collapse collapse-arrow md:hidden">
      <input type="checkbox"/>
      <div className="collapse-title bg-base-100 rounded-lg px-1">
        <NavLink to="/services" className="block hover:text-[#646cff] text-white">Services</NavLink>
      </div>
      <div className="collapse-content">
        <ul className="menu bg-slate-600 rounded-b-xl">
          <li><NavLink to="/web-development" className="block">Web Development</NavLink></li>
          <li><NavLink to="/audio" className="block">Audio</NavLink></li>
          <li><NavLink to="/video" className="block">Video</NavLink></li>
          <li><NavLink to="/graphic-design" className="block">Graphic Design</NavLink></li>
          <li><NavLink to="/entrepreneurship" className="block">Entrepreneurship</NavLink></li>
          <li><NavLink to="/fundraising" className="block">Fundraising</NavLink></li>
        </ul>
      </div>
    </div>
  )
}