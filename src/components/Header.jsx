import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <nav className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        LampShop
                    </Link>

                    <div className="flex items-center space-x-4">
                        <Link
                            to="/cart"
                            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
                        >
                            <ShoppingCartIcon className="h-6 w-6" />
                            <span>Корзина</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}