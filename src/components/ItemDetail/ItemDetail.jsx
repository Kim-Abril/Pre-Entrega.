import { Item } from "../Item/Item"
import {useCart} from '../../context/CartContext'

export const ItemDetail = ({item}) => {
    const {addItem} = useCart();
    return (<Item {...item}>
        <button className="btn btn-link" onClick={() => addItem(item)}>Agregar al carrito</button>
    </Item>)
};