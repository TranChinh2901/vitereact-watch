// import { useLocation } from "react-router-dom";
import styles from "./cartPage.module.css"
import { RiDeleteBin6Line } from "react-icons/ri";

import { useEffect, useState } from 'react';
// import Payment from "../payment/payment";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


function CartPage() {
    const [showOrder, setShowOrder] = useState(false)
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

        //thêm để lắng nghe sự kiện tăng số lượng item được chọn hoặc xoass
        window.dispatchEvent(new Event('cartUpdated')); 
    }

    const handleDeleteProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
        localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
        window.dispatchEvent(new Event('cartUpdated')); 
    };

    if (!products || products.length === 0) {
        return (
            <div className={styles.emptyCart}>
            <img className={styles.emptyCartImg} src="https://cdn.tgdd.vn/mwgcart/v2/vue-pro/img/empty-cart.4287ede6c3572a246c3db2b77.png"/>
                <h2>Giỏ hàng trống</h2>    
                <p className="error">Không có sản phẩm nào trong giỏ hàng</p> 
                 <Link to="/"> <button className={styles.btnHome}>Về trang chủ</button> </Link>
               
            </div>
        )
    }
    const totalPrices = products.reduce((total, product) => total + product.gia * product.quantity, 0);
    const totalQuatity = products.reduce((total, product) => total + product.quantity, 0)

    const hanldShowOrder=()=>{
        setShowOrder(true)
        
    }
    const handlHideOrder=()=>{
        setShowOrder(false)
    }


    return(
        <div className={styles.containerCart}>
            <h2 className={styles.titleCart}></h2>
            <div className={styles.wrapperCart}>
            <div className={styles.selectedProducts}>
                {products.map((product, index) => (
                    <div key={index} className={styles.productItem}>
                        <div><img src={product.anh} alt={product.ten} /></div>         
                        <h5>{product.ten}</h5>
                        <p>{product.gia}</p>
                        {/* <p>{product.title}</p>   */}
                        {/* <p>{product.danhgia}</p> */}
                        <div className={styles.quantityControls}>
                            <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                            <span className="quantity">SL: {product.quantity || 1}</span>
                            <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                        </div>
                        {/* <p>{product.stock ? "Giảm giá 40%" : "Hết giảm giá"}</p> */}
                        <button 
                            className={styles.deleteButton}
                            onClick={() => handleDeleteProduct(index)}
                        >
                            <RiDeleteBin6Line/>
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.payment}>
                <h1 className={styles.titlePayment}>Cart Summany</h1>
                <p className={styles.totalPrice}> Total price: <h3 style={{fontSize: " 20px"}}>{totalPrices} VND</h3> </p>
                <p>Không áp dụng mã giảm giá</p>
                <hr/>
                <h5>Hình thức thanh toán</h5>
                <div className={styles.thanhToan}>
                    <ul className={styles.phanThanhToan}>
                    <li className={styles.inputPayment}  >
                        <input type="radio" />
                        <label className={styles.iconBank}> <i className="fa-regular fa-money-bill-1"></i>  Thanh toán tiền mặt khi nhận hàng</label>
                    </li>

                    <li className={styles.inputPayment} >
                        <input type="radio"/>
                        <label className={styles.iconBank}> <i className="fa-solid fa-money-check-dollar"></i> Chuyển khoản ngân hàng</label>
                    </li>
                    <li className={styles.inputPayment} >
                        <input type="radio"/>
                        <lable className={styles.iconBank}><img className={styles.momo} src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Square.png" width={18} height={17}/>
                        Ví MoMo</lable>
                    </li>
                    <li className={styles.inputPayment} >
                        <input type="radio"/>
                        <label className={styles.iconBank}> <img className={styles.momo} src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg"  width={19} height={18}/>Qua VNPAY-QR</label>
                    </li>   
                    </ul>
                    <p className={styles.agree}>Tôi đồng ý với <a href="/" style={{textDecoration:"none"}}>Chính sách xử lý dữ liệu cá nhân</a> của Store</p>
                    <button className={styles.btnDatHang} onClick={hanldShowOrder}>Đặt hàng</button>

                   
                </div>
            </div>
            </div>
            

               
           <div className={styles.containerHide}>
           {showOrder ? (
                    <div className={`${styles.hide} ${styles.showOrder}`}>
                    
                   <div className={styles.displayOrder}>
                   {/* <i onClick={handlHideOrder} className="iconHide fa-solid fa-x" style={{justifyContent:"end"}}></i> */}
                   <div style={{ display: "flex", justifyContent: "flex-end", fontSize: "20px" }}>
    <i onClick={handlHideOrder} className="iconHide fa-solid fa-x"></i>
</div>
                   <h2 style={{textAlign:"center"}}>Strore thông báo</h2>
                        <p>Bạn chắc chắn muốn mua </p>
                        <hr/>
                        <p>Tổng số sản phẩm: {totalQuatity}</p>
                        <p>Tổng tiền: {totalPrices} VND</p>
                       
                        <div className={styles.checkBoxAgree}>
                        <input type="checkbox"/> 
                        <p>Tôi đồng ý với <a href="/" style={{textDecoration:"none"}}>điều khoản </a> của Store</p>
                        
                        </div>
                        <button className={styles.btnDatHang}>
                            <Link to="/" style={{textDecoration:"none", color:"white"}}>Đặt hàng</Link>
                        </button>
                    </div>
                   </div>
                   ) : (
                    <div className={`${styles.hide} ${styles.hideOrder}`}></div>
                   )}
           </div>
        </div>
        



        
    )
}

export default CartPage;