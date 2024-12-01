    import { useState } from 'react';
    import styles from './xemthemHomePage.module.css'
    import { useLocation } from "react-router-dom";

    function XemThemHomePage() {
        const location = useLocation();
        const product = location.state.product;

        const [selectedImage, setSelectedImage] = useState(product.anh);


        const productImages =[
            product.anh,
            product.xemthema,
            product.xemthemb,
            product.xemthemc,
            product.xemthemd
        ]
        
        return (  
            <div className="container ">
                <h1 className={styles.h2ChiTiet}>Chi tiết sản phẩm </h1>     
                <div className={styles.flexChiTiet}>
                    <div className={styles.flexChiTietLeft} >
                        <img 
                            src={selectedImage} 
                            alt={product.ten} 
                            className={styles.anhXemThem}
                        />
                        <div className={styles.thumbnailContainer}>
                        {productImages.map((image, index) => (
                                <img 
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`${styles.thumbnail} ${selectedImage === image ? styles.active : ''}`}
                                    onClick={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.flexChiTietRight}>
                    <h2 className='fw-bold'>Tên sản phẩm</h2>
                        <h3>{product.ten}</h3>
                        <p className={styles.giaSp  }>Giá: <span className={styles.vnDGia}>{product.gia} VNĐ</span> </p>
                        <p className={styles.giaCu} style={{textDecoration: product.giacu ? "line-through" : "none",}}>Giá cũ: {product.giacu ? `${product.giacu} VND` : "Không tìm thấy giá SP"} </p>
                        <p>Mô tả: {product.title}</p>
                        <p>Đánh giá: This watch is a perfect blend of elegance and functionality. Its sleek design, durable build, and precise timekeeping make it an ideal accessory for both formal and casual occasions. A must-have for watch enthusiasts! </p>
                        
                    </div>
                </div>
            </div>
        );
    }

    export default XemThemHomePage;