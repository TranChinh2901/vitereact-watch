import styles from "./sliderCenterHomePage.module.css";
import Slider from "react-slick";
import dataSliderHomePage from "./dataSliderHomePage";

function SliderCenterHome() {
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


  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className={styles.containerSlider}>
      <div className="text-center mt-4">
        <h2>Below are the best options for you</h2>
      </div>
      <Slider {...settings}>
        {dataSliderHomePage.map((Items, item)=>{
            return(
                <div key={item} className={styles.item}>
                    <img src={Items.anh} alt={Items.ten} className={styles.anh}/>
                    <h2 className={styles.ten}>{Items.ten}</h2>
                    <p className={styles.gia}>{Items.gia}</p>
                    <h4 className={styles.title}>{Items.title}</h4>
                    <button className="btn btn-warning"  onClick={() => handlerBuy(Items)}>Add to cart</button>
                </div>
            )
        })}
      </Slider>
    </div>
  );
}

export default SliderCenterHome;
