// import './Boxes.scss';
import styles from './Boxes.module.scss';
import { useContext } from 'react';
import { BoxesContext} from '@context/boxes.context';
import Box from './Box';
const Boxes = () => {
    const {boxes} = useContext(BoxesContext);
        console.log(boxes);
    return(
        <div id="boxes" className="container">
            <div className={styles.boxes}>
                {boxes.map((box)=> <Box key={box.id} box={box}/>)}
            </div>
        </div>
    )
}

export default Boxes;