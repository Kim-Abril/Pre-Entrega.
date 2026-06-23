export const validateProducts = (product) => {
    const errors = {};
    if (!product.name.trim()) {
        errors.name = "El nombre es obligatorio";
    }
    if (!product.price || product.price <= 0) {
        errors.price = "El precio debe ser mayor a 0";
    }
    if (!product.description.trim()) {
        errors.description = "Es obligatorio agregar una descripción";
    }
    if (!product.file) {
        errors.file = "Es obligatorio agregar una imagen";
    }
    return (errors);
};