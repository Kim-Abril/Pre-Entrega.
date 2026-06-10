import { Link } from 'react-router-dom';
import {useCart} from '../../context/CartContext'
import './Nav.css'
export const Nav = () => {
    const {getTotalItems} = useCart();
    const totalItems = getTotalItems();
    return (
        <nav>
            <ul className='nav-list'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>Carrito
                        {totalItems > 0 && <span className='incart'>{totalItems}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}