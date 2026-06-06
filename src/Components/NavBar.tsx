import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
    <nav className="site-nav" aria-label="Main navigation">
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
    </nav>
    )
}