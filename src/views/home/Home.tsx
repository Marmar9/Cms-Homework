import './Home.scss';
import { Header, Slider, Boxes, Courses, Footer } from '../../components';
import { useContext } from 'react';
import { SliderContext } from '../../context/slider.context';
const Home = () => {
  const {slider} = useContext(SliderContext);
    console.log(slider)
    return (
        <div className="home-container">
            <Header/>
            {slider && <Slider/>}
            <Boxes/>
            <Courses/>
            <Footer/>
        </div>
    )
}
export default Home;