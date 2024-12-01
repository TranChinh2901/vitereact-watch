import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./sliderHomePage.module.css";


function SliderHomePage() {

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
    }

    return ( 
       <div className={styles.container}>
            <div className={styles.left} style={{lineHeight: "1.3"}}>
                <h3>Select your options</h3>
                <div className={styles.option}>
                    <i className="fas fa-mobile-alt"></i>
                <p className={styles.textOption}>Điện thoại</p>
                </div>
                <div className={styles.option}>
                    <i className="fas fa-laptop"></i>
                    <p className={styles.textOption}>Laptop</p>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className={styles.option}>
                    <i className="fas fa-headphones"></i>
                    <p className={styles.textOption}>Headphone</p>
                </div>
                <div className={styles.option}>
                    <i className="fas fa-camera"></i>
                    <p className={styles.textOption}>Camera</p>
                </div>
           
               <div className={styles.option}>
                    <i className="fas fa-mouse"></i>
                    <p className={styles.textOption}>Mouse</p>
                    <i className="fas fa-chevron-down"></i>
               </div>
               <div className={styles.option}>
                    <i className="fas fa-keyboard"></i>
                    <p className={styles.textOption}>Keyboard</p>
               </div>
            </div>

            <div className={styles.right}>
                <Slider {...settings}>
                 <div>
                <img src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/73/e7/73e7befc982b71fc57d83191ed6fdbfa.png" height={330} width="100%" alt="" />
            
                </div>
                <div>
                    <img src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/87/fd/87fd95176554cfe69e5e5a106afef232.png"  height={330} width="100%" alt=""/>
                </div>
                <div>
                    <img src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/71/8e/718ed4d126404228697c4d09dbc7917b.jpg"  height={330} width="100%" alt="" />
                </div>
                </Slider>
        </div>

       </div>
     );
}

export default SliderHomePage;