import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';
import SliderDashboard from './slider/SliderDashboard';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { SliderContext } from '../../context/slider.context';
const Dashboard = () => {
    const {unsavedChanges, setUnsavedChanges} = useContext(AppContext)
    const {sliderImages} = useContext(SliderContext)
    
    return(
        <div className={styles.container}>
            {/* Handle changes save */}
            <button onClick={()=> {

              localStorage.setItem("sliderImages", JSON.stringify(sliderImages))
                


              setUnsavedChanges(false)
            }} className={styles['save-changes']} disabled={!unsavedChanges} >{unsavedChanges ? "Save Changes" : "All saved (:"}</button>
            <Link to={"/"}>Main</Link>
            <SliderDashboard />
        </div>
    )
}

export default Dashboard;