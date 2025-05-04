export default function CartItem({ name, price, quantity }) {
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-gray-600">{price} ₽/шт</p>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 bg-gray-100 rounded">-</button>
                    <span>{quantity}</span>
                    <button className="px-2 py-1 bg-gray-100 rounded">+</button>
                </div>
                <span className="font-bold">{(price * quantity).toFixed(2)} ₽</span>
            </div>
        </div>
    );
}