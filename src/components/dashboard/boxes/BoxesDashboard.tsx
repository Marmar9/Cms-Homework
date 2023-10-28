import styles from "./BoxesDashboard.module.scss";
import {  useContext } from "react";
import { BoxesContext } from "@context/boxes.context";
import Box from "./Box";
export default function BoxesDashboard() {
  const { setBoxes, boxes} = useContext(BoxesContext);

  return (
    <div className={styles["boxes-dashboard"]}>
      <h1>Boxes</h1>
      <div className={styles["colors-pickers-container"]}>
        {boxes.map((box) => <Box key={box.id} box={box} />)}
      </div>
    </div>
  );
}
