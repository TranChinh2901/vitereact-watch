import Slider from "react-slick";
import dataBottomSliderHomePage from "./dataSliderBottom";
import styles from "./sliderBottomHome.module.css";




function SliderBottomHomePage() {

    const settings = {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 250000,
    }



    return ( 
        <div className={styles.wrapContainer}>
            <Slider {...settings}>
                {dataBottomSliderHomePage.map((Items, item)=>{
                   return(
                    <div className={styles.container} key={item} >
                        <div className={styles.left}>
                            <img src={Items.anh} />
                        </div>

                        <div className={styles.right}>
                        <h2 className={styles.ten}>{Items.ten}</h2>
                    <p className={styles.gia}>{Items.gia}</p>
                    <h4 className={styles.title}>{Items.title}</h4>

                        </div>
                    </div>
                   )
                })}
            </Slider>
            </div>
     );
}

export default SliderBottomHomePage;