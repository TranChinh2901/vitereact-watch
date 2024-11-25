import { Link } from "react-router-dom";
import styles from "./header.module.css";
function Header() {

  

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
                    <span>0</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;