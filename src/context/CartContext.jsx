import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const CartContext = createContext();
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart debe usarse en un CartProvider")
    }
    return (context)
};

export const CartProvider = ({children}) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const isInCart = (id) => {
        const inCart = cart.some(element => element.id === id);
        return inCart;
    };

    const addItem = (item) => {
        if (isInCart(item.id)){
            alert("El producto ya existe en el carrito")
            return;
        }
        setCart([...cart, item]);
        alert("Producto agregado al carrito 🤞")
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter((element) => element.id !== id);
        setCart(updatedCart);
        alert("Producto eliminado")
    }

    const getTotalItems = () => {
        return cart.length;
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price, 0);
    };

    const checkout = () => {
        const chequear = window.confirm("¿...?");        
        if (chequear) {
            clearCart();
        return;
        }
        navigate("/");
    };

    const values = {clearCart, addItem, removeItem, getTotalItems, getCartTotal, checkout}
    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>;
}
