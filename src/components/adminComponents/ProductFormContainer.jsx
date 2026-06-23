import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProducts } from "../../utils/validateProducts";
import { createProducts } from "../../services/productsServices";
import './ProductFormContainer.css';
import { uploadImage } from "../../services/uploadImage";

export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "", price:"", description:"",});
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setFile(file);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        const newErrors = validateProducts({...product, file});
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setLoading(false);
                return;
            };

            try {
                const imageURL = await uploadImage(file);
                const productData = {
                    ...product,
                    price: Number(product.price),
                    image: imageURL, 
                };
                const id = await createProducts(productData);
                setProduct({name: "", price:"", description:"",});
                setFile(null);
                navigate(`/admin/products/success/${id}`, {replace:true});
            } catch (error) {
                setErrors({general: error.message});
            } finally {
                setLoading(false);
            }
        };
    
    return (
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
        />
    );
};