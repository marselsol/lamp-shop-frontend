export default function Checkout() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Оформление заказа</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Контактные данные</h2>
                    <input
                        type="text"
                        placeholder="Имя"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="tel"
                        placeholder="Телефон"
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Способ оплаты</h2>
                    <div className="border p-4 rounded">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="payment" defaultChecked />
                            <span>Банковская карта</span>
                        </label>
                    </div>

                    <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
                        Подтвердить заказ
                    </button>
                </div>
            </div>
        </div>
    );
}