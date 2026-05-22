import { Link } from 'react-router-dom'
import {Item} from '../Item/Item'
import './ItemList.css'
export const ItemList = ({products}) => {
    if (!products.length) {
        return (<p>No hay productos</p> )
    }
    return(
        <div className='products-container'>
            {products.map((prod) => (
                <Link to={`/product/${prod.id}`} key={prod.id}>
                    <Item {...prod}/>
                </Link>
            ))}
        </div>
    );
};