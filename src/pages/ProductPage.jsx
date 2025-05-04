import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    // Заглушка данных
    useEffect(() => {
        setProduct({
            id: 1,
            name: 'LED 10 Вт',
            sku: 'A60-10W-E27',
            price: 99.9,
            description: 'Энергосберегающая светодиодная лампа с цоколем E27',
            imageUrl: '/placeholder-lamp.jpg'
        });
    }, [id]);

    if (!product) return <div>Загрузка...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full rounded-lg shadow-lg"
                />

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-2xl font-bold text-blue-600">{product.price} ₽</p>
                    <p className="text-gray-600">Артикул: {product.sku}</p>
                    <p className="text-gray-600">{product.description}</p>

                    <div className="flex space-x-4">
                        <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            className="border p-2 w-20"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}