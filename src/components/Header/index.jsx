import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './styles.css';

function Header() {
    return (
        <header className='header-container'>
            <nav>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Logo do Blog" />
                </Link>
                <h1>BLOG</h1>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/users'>Usuários</Link>

                </div>
            </nav>
        </header>
    );
};

export default Header;