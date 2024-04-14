import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav id="nav">
            <ul class="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="nosotros">Nosotros</Link></li>
                <li><Link to="blog">Blog</Link></li>
                <li><Link to="contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;