export default function ProductCard({ title, price, image, sku }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 mb-2">Артикул: {sku}</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{price} ₽</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
}