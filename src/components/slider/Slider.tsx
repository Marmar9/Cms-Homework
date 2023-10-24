import styles from "./Slider.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useContext } from 'react';
import { SliderContext } from "../../context/slider.context";
const Slider = () => {
    const {sliderImages} = useContext(SliderContext);
    // console.log(sliderImages)
    return(
        <div >
            <Carousel>
                {sliderImages.map((image) => {
                    return <div key={image.id} className={styles.a}>
                                <p className="legend">{image.name}</p>
                                <img src={image.url} alt="" />
                           </div>
                })}
            </Carousel>
        </div>
    )
}

export default Slider;