import { NavLink } from "react-router-dom";

export default function Header(){

    return(
        <header className="header">
            <nav className="header-navs">
                <div className="logo">
                    <h1>Clarity News</h1>
                </div>
                <div className="nav-links">
                    <NavLink to="/" className="header--logo">Home</NavLink>
                    <NavLink to="technology" className="header--logo">Technology</NavLink>
                    <NavLink to="sports" className="header--logo">Sports</NavLink>
                    <NavLink to="business" className="header--logo">Business</NavLink>
                    <NavLink to="politics" className="header--logo">Politics</NavLink>
                    <NavLink to="health" className="header--logo">Health</NavLink>
                    <NavLink to="entertainment" className="header--logo">Entertainment</NavLink>
                </div>
            </nav>    
        </header>
    );
}