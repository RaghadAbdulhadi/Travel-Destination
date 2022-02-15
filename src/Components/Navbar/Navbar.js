import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <ul className = "nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/city/:id">Tours</Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar;