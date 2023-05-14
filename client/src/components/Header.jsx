
import NavBarRegular from "./NavBarRegular"
import NavBarCollapse from "./NavBarCollapse"


export default function Header() {



  return (
    <div className="header">
      <h1>MIKE DAVIS</h1>
      <h3>Software Engineer | Media Producer | Ethical Entrepreneur</h3>

      <NavBarCollapse />
      <NavBarRegular />
    </div>
  )
}