import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Заглушка для тестирования
    useEffect(() => {
        setCartItems([
            { id: 1, name: 'LED 10 Вт', price: 99.9, qty: 2 },
            { id: 2, name: 'LED 15 Вт', price: 149.9, qty: 1 }
        ]);
    }, []);

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Корзина</h1>

            <div className="space-y-4 mb-8">
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.qty}
                    />
                ))}
            </div>

            <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Итого:</span>
                    <span className="text-2xl font-bold">{total.toFixed(2)} ₽</span>
                </div>

                <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                    Перейти к оплате
                </button>
            </div>
        </div>
    );
}