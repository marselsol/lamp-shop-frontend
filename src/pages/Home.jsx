import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Добро пожаловать в LampShop</h1>
            <p className="text-lg text-gray-600 mb-8">
                Лучшие LED лампы для вашего дома
            </p>
            <Link
                to="/catalog"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
                Перейти в каталог
            </Link>
        </div>
    );
}