import Logo from '../../assets/logo.svg'
import './styles.css';

function Header() {
    return (
        <header className='header-container'>
            <nav>
                <a href='/' className='logo'>
                    <img src={Logo} alt="Logo do Blog" />
                </a>
                <h1>BLOG</h1>
                <span></span>
            </nav>
        </header>
    );
};

export default Header;