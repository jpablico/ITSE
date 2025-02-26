import { useState } from "react";

function ProductList() {
    const [products, setProducts] = useState([
        { id: 1, title: "MacBook Air", price: 999.99 },
        { id: 2, title: "iPhone", price: 999.99 },
        { id: 3, title: "Airpods", price: 199.99 },
        { id: 4, title: "Apple Watch Ultra", price: 899.99 },
    ]);

    const addProduct = () => {
        const newProduct = {
            id: products.length + 1,
            title: `New Product ${products.length + 1}`,
            price: Math.floor(Math.random() * 600) + 50,
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