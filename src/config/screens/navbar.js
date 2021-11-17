import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar-return-div-nav-1">
            <div className="navbar-return-div-nav-2">
                <div className="nav-img-div-1">
                    <NavLink to="/">
                    <img className="nav-img-div-img-span-1" src="https://www.coronatracker.com/_nuxt/img/262cfac.png" />
                    </NavLink>
                    
                    <div className="nav-img-div-span">
                        <span className="nav-img-div-span-1">Corona</span>
                        <span className="nav-img-div-span-2">Tracker</span>
                    </div>
                     {/* <NavLink to="/about/:id">about</NavLink>  */}
                </div>
            </div>
        </div>
    )
}
export default Navbar


