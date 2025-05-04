// Режим разработки: true - мок-данные, false - реальные запросы
const DEV_MODE = true;

const mockProducts = [
    {
        id: 1,
        name: "LED 10 Вт",
        price: 99.9,
        imageUrl: "/placeholder-lamp.jpg",
        sku: "A60-10W-E27",
        stock: 50
    },
    {
        id: 2,
        name: "LED 15 Вт",
        price: 149.9,
        imageUrl: "/placeholder-lamp.jpg",
        sku: "A60-15W-E27",
        stock: 30
    }
];

export const fetchProducts = async () => {
    if (DEV_MODE) {
        await new Promise(resolve => setTimeout(resolve, 500)); // Имитация задержки
        return mockProducts;
    }

    try {
        const response = await fetch('http://localhost:8081/products?page=1&size=20');
        if (!response.ok) throw new Error('Ошибка загрузки');
        return response.json();
    } catch (error) {
        console.error('API Error:', error);
        return mockProducts; // Fallback
    }
};

export const addToCart = async (productId, quantity) => {
    if (DEV_MODE) {
        await new Promise(resolve => setTimeout(resolve, 300));
        return { success: true };
    }

    try {
        const response = await fetch('http://localhost:8082/cart/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token') || 'dev-token'}`
            },
            body: JSON.stringify({ product_id: productId, qty: quantity })
        });
        return response.json();
    } catch (error) {
        console.error('Cart API Error:', error);
        return { success: false };
    }
};