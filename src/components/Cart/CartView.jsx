import {useCart} from '../../context/CartContext';
import { CartSummary } from './CartSummary';
import { CartList } from './CartList';
import { Link } from 'react-router-dom';
import './Cart.css';

export const CartView = () => {
    const {cart} = useCart()
    return (
        <section className='cart-container'>
            <h1>Tu carrito de compras 🛒</h1>
            {cart.length ? (
                <>
                <CartList/>
                <CartSummary/>
                </>
            ) : (
                <>
                <p className='empty-cart'>El carrito está vacio 😶</p>
                <Link to={'/'} className='btn btn-link'>
                    Volver
                </Link>
                </>
            )};
        </section>
    )
}