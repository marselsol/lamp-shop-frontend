import { Link } from 'react-router-dom';
import {addToCart} from "../services/api.js";

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
            {/* Оберните изображение и название в Link */}
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover cursor-pointer"
                />
                <h3 className="font-semibold text-lg mb-2 p-4 hover:text-blue-600">
                    {product.name}
                </h3>
            </Link>

            <div className="p-4">
                <p className="text-gray-600 mb-2">Артикул: {product.sku}</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{product.price.toFixed(2)} ₽</span>
                    {/* Оставим кнопку отдельно, чтобы она не была частью ссылки */}
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={() => addToCart(product.id, 1)}
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
}