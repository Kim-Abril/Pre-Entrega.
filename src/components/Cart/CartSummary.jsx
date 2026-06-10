import { useCart } from "../../context/CartContext";
export const CartSummary = () => {
    const {getCartTotal, checkout} = useCart();
    const total = getCartTotal();
    return (
    <>
        <p>Total a pagar: 👉🏼${total}</p>
        <button className="btn bg-succes primary" onClick={checkout}>
            Finalizar compra
        </button>
    </>
    );
};