import {collection, addDoc, getDocs, getDoc, doc} from 'firebase/firestore';
import {db, app} from '../firebase/config';

const productsRef = collection(db, "products");
export const getProducts = async() => {
    try{
        const snapshot = await getDocs(productsRef);
        const productsFormat = snapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
        });
        return (productsFormat);
    } catch (err){
        console.error("Error al traer productos:", err);
        return [];
    };
};

export const getProductsById = async(id) => {
    try{
        const productsRef = doc (db, "products", id);
        const snapshot = await getDoc(productsRef);
        if (snapshot.exists()) {
            const product = {id: snapshot.id, ...snapshot.data()}
            return (product);
        } else {
            return (null);
        };
    } catch (err) {
        console.error("Error al traer el producto por id:", err);
        return (null);
    };
};

export const createProducts = async(productData) => {
    try {
        const docRef = await addDoc(productsRef, productData);
        return (docRef.id);
    } catch (err) {
        console.error("Error en el alta de producto:", err);
        throw error;
    };
};