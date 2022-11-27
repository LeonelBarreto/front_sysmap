import Logo from '../../assets/logo.svg';
import './styles.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header-container'>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <Link to="/">
                        <img src={Logo} alt="Logo do Blog" />
                    </Link>
                    <Link to='/' className='navbar-title'>BLOG</Link>
                </div>
                <div className='navbar-menu'>
                    <Link to="/"> home </Link>
                    <Link to="/users">usuários</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;