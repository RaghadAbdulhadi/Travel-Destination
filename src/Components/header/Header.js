import '../header/Header.css';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <>
            <div className = "header">
            <h1 className = "title">Travel Destination</h1>
            </div>
            
            <Navbar />
        </>
    )
}

export default Header;