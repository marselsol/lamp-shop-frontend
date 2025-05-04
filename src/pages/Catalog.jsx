import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';

export default function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(data => setProducts(data));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Каталог ламп</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        title={product.name}
                        price={product.price}
                        image={product.imageUrl}
                        sku={product.sku}
                    />
                ))}
            </div>
        </div>
    );
}