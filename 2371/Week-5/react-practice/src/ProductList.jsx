import { useState } from "react";

function ProductList() {
    const [products, setProducts] = useState([
        { id: 1, title: "Laptop", price: 999 },
        { id: 2, title: "Phone", price: 499 },
        { id: 3, title: "Headphones", price: 199 },
        { id: 4, title: "Smartwatch", price: 299 },
        { id: 5, title: "Tablet", price: 399 },
        { id: 6, title: "Monitor", price: 249 },
        { id: 7, title: "Keyboard", price: 99 },
        { id: 8, title: "Mouse", price: 49 },
        { id: 9, title: "Speaker", price: 149 },
        { id: 10, title: "Charger", price: 29 },
    ]);

    const addProduct = () => {
        const newProduct = {
            id: products.length + 1,
            title: `New Product ${products.length + 1}`,
            price: Math.floor(Math.random() * 500) + 50,
        };
        setProducts([...products, newProduct]);
    };

    return (
        <div className="card">
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title} - ${product.price}
                    </li>
                ))}
            </ul>
            <button onClick={addProduct}>Add Product</button>
        </div>
    );
}

export default ProductList;