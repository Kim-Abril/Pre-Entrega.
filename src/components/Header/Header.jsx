import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg'
import { Nav } from '../Nav/Nav';
export const Header = () => {
    return (
        <header>
            <Link to={"/"}>
                <div className="logo-container"></div>
                <img src={logo} alt="logo de React" />
                <span>Logo</span>
            </Link>
            <Nav/>
        </header>
    );
};