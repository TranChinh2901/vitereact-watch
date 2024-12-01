import getData from "../../data";
// import "./style.css";
import styles from "./homePage.module.css"
import SliderBottomHomePage from "./sliderBottomHome/sliderBottomHome";
import SliderCenterHome from "./sliderCenterHomePage/sliderCenterHome";
import SliderHomePage from "./sliderHomePage";
import { useNavigate } from "react-router-dom";

function HomePage() {
    //chuyen huong den trang xemthem kem theo san pham
    const navigate = useNavigate();

    const handlerXemThem = (product) => {
        navigate('/xemthem', { state: { product } });
    }

    const handlerBuy = (product) => {
       
        const existingProducts = JSON.parse(localStorage.getItem('selectedProducts') || '[]');
        
        // Kiểm tra xem sản phẩm đã tồn tại chưa
        const existingProductIndex = existingProducts.findIndex(p => p.ten === product.ten);
        
        let updatedProducts;
        if (existingProductIndex !== -1) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng
            updatedProducts = existingProducts.map((p, index) => {
                if (index === existingProductIndex) {
                    return {
                        ...p,
                        quantity: (p.quantity || 1) + 1
                    };
                }
                return p;
            });
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm mới với số lượng là 1
            updatedProducts = [...existingProducts, { ...product, quantity: 1 }];
        }   
        
        localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
        // navigate('/about', { state: { selectedProducts: updatedProducts } });
        window.dispatchEvent(new Event('cartUpdated'));
    }

    return (  
        <>
         
        <div className={styles.container}>
        <SliderHomePage/>  
        <SliderCenterHome/>
            <h1 className={styles.title}>This is home page</h1>
            <div className="row"> 
                {
                    getData.map((product, item) =>{
                        return(
                            <div className="col-md-3" key={item}>
                                <div className={styles.card}>
                                    <div className={styles.cardItem}>
                                        <p className={product.stock ? styles.discountLabel : styles.stockLabel}>
                                            {product.stock ? "Giảm giá 40%" : "Hết giảm giá"}
                                        </p>
                                        <i className={`fas fa-eye ${styles.eyeIcon}`} onClick={() => handlerXemThem(product)}></i>
                                        <img className={styles.cardImg} src={product.anh} alt={product.ten} />
                                        <div className={styles.cardBody}>
                                            <h4 className={styles.nameCard}>{product.ten}</h4>
                                            <p className={styles.titleCard}>{product.title}</p>
                                            <div className={styles.flexCard}>
                                                <p className={styles.priceCard}>{product.gia} VND</p>
                                                <button className={styles.btnCard} onClick={() => handlerBuy(product)}>
                                                   <i className="fa-solid fa-plus" style={{fontSize:"25px"}}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <SliderBottomHomePage/>
        </div>
        </>
    );
}

export default HomePage;