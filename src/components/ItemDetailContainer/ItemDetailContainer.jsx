import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../services/productsServices";

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect (() => {
        getProductsById(id)
        .then((data) => setItemDetail(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [id]);
    if (loading) return <p>Cargando...</p>
    if (!itemDetail) return <p>Producto no encontrado</p>
    return (
        <section>
            <h1>Detalles de los productos</h1>
            <div className="products-container">
                <ItemDetail item={itemDetail}/>
            </div>
        </section>
    );
};