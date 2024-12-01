import { Link } from "react-router-dom";
import styles from "./header.module.css";

import { useEffect, useState } from "react";

function Header() {
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const updateCartCount = () => {
            const products = JSON.parse(localStorage.getItem('selectedProducts') || '[]');
            const totalItems = products.reduce((sum, product) => sum + (product.quantity || 1), 0);
            setCartItemCount(totalItems);
        };

        // Cập nhật số lượng ban đầu
        updateCartCount();

        // Lắng nghe sự kiện storage change
        window.addEventListener('storage', updateCartCount);
        
        // Lắng nghe sự kiện cartUpdated
        window.addEventListener('cartUpdated', updateCartCount);



        // Lắng nghe sự kiện 

        // Cleanup
        return () => {
            window.removeEventListener('storage', updateCartCount);
            window.removeEventListener('cartUpdated', updateCartCount);
        };
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" className={styles.logoLink}>
                <h1> <strong className={styles.strong}>S</strong>tores</h1>
                </Link>
            </div>
           
            <div className={styles.headerContinue}>   
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/">Home</Link>
                    </li >
                    <li className={styles.li}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
                
                
            <div className={styles.search}>
                <input type="text" placeholder="Search" />
                <button type="submit">search</button>
            </div>
            </div>
            <div className={styles.headerCart}>
                <Link to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>{cartItemCount}</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;