export const fetchProducts = async () => {
    const response = await fetch('http://localhost:8081/products?page=1&size=20');
    if (!response.ok) throw new Error('Ошибка загрузки товаров');
    return response.json();
};

export const addToCart = async (productId, quantity) => {
    const response = await fetch('http://localhost:8082/cart/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ product_id: productId, qty: quantity })
    });
    return response.json();
};