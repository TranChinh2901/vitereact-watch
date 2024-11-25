// import { useLocation } from "react-router-dom";

import { useEffect, useState } from 'react';

function CartPage() {
    // const location = useLocation();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const productsFromStorage = localStorage.getItem('selectedProducts');
        if (productsFromStorage) {
            setProducts(JSON.parse(productsFromStorage));
        }
    }, []);



    // const handleRemoveProduct = (index) => {
    //     const updatedProducts = products.filter((_, i) => i !== index);
    //     setProducts(updatedProducts);
    //     localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
    // }

    const handleQuantityChange = (index, change) => {
        const updatedProducts = products.map((product, i) => {
            if (i === index) {
                const newQuantity = Math.max(1, product.quantity + change); // Không cho phép số lượng < 1
                return { ...product, quantity: newQuantity };
            }
            return product;
        });
        setProducts(updatedProducts);
        localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
    };

    const handleDeleteProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
        localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
    };

    if (!products.length) {
        return <div>Không có sản phẩm nào được chọn</div>
    }
     


    const  totalPrices = products.reduce((total, product) => total + product.gia * product.quantity, 0);

    return(
        <div>
            <h1>Cart Page</h1>
            <div className="selected-products">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <p>{product.ten}</p>
                        <img src={product.anh} alt={product.ten} />
                        <p>{product.gia}</p>
                        <p>{product.title}</p>
                        <p>{product.danhgia}</p>
                        <div className="quantity-controls">
                            <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                            <span className="quantity">Số lượng: {product.quantity || 1}</span>
                            <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                        </div>
                        <p>{product.stock ? "Giảm giá 40%" : "Hết giảm giá"}</p>
                        <button 
                            className="delete-button" 
                            onClick={() => handleDeleteProduct(index)}
                        >
                            Xóa sản phẩm
                        </button>
                    </div>
                ))}
            </div>

            <h3> Tổng tiền: {totalPrices} </h3>
        </div>
    )
}

export default CartPage;