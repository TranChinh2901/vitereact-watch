import styles from "./footer.module.css"
function Footer() {
    return ( 
        <div className={styles.footer}>
                <div className={styles.footerLeft}>
                    <h2>Stores</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                    <div className={styles.buttonFooter}>

                        <button> <i className="fa-brands fa-google-play"></i> Google Play</button>
                        <button> <i className="fa-brands fa-apple"></i> View Stores</button>
                    </div>
                </div>
                <div className={styles.footerCenterA}>
                    <h3>About Us</h3>
                    <p>Careers</p>
                    <p>Our Stores</p>
                    <p>Our Cares</p>
                    <p>Delivery</p>
                    <p>Orders</p>
                </div>

                <div className={styles.footerCenterB}>
                    <h3>Contact Us</h3>
                    <p>18/06/02b Pham Nhu Tang</p>
                    <p>0763723475</p>
                    <p>chinh@example.com</p>
                </div>
                <div className={styles.footerRight}>
                    <h3>Social Media</h3>
                    <p> <i className="fa-brands fa-facebook"></i> Facebook</p>
                    <p> <i className="fa-brands fa-instagram"></i> Instagram</p>
                    <p> <i className="fa-brands fa-twitter"></i> Twitter</p>
                </div>
        </div>
    );
}

export default Footer;