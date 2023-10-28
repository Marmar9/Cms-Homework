import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';
// Dashboards of app elements
import SliderDashboard from './slider/SliderDashboard';
import BoxesDashboard from './boxes/BoxesDashboard';
// 
import { useContext } from 'react';
import { AppContext } from '@context/app.context';
import { SliderContext } from '@context/slider.context';
import { BoxesContext } from '@context/boxes.context';
const Dashboard = () => {
    const { unsavedChanges, setUnsavedChanges } = useContext(AppContext)
    const { sliderImages } = useContext(SliderContext)
    const { boxes } = useContext(BoxesContext)

    const handleChangesSave = () => {
        localStorage.setItem('sliderImages', JSON.stringify(sliderImages))
        localStorage.setItem('boxes', JSON.stringify(boxes))
        setUnsavedChanges(false)
    }
    return(
        <div className={styles.container}>
            {/* Handle changes save */}
            <button onClick={handleChangesSave}
                    className={styles['save-changes']}
                    disabled={!unsavedChanges} >{unsavedChanges ? "Save Changes" : "All saved (:"}</button>
            <Link to={"/"}>Main</Link>
            <h1>Slider</h1>
            <SliderDashboard />
            <BoxesDashboard />
        </div>
    )
}

export default Dashboard;