import { BoxesBoxType } from "@ts/boxesContextTypes";
import styles from "./Box.module.scss";
import { ChangeEvent, useContext } from "react";
import { BoxesContext } from "@context/boxes.context";
import { checkIfChangesSaved } from "@utils/utils";
import { AppContext } from "@context/app.context";
export default function Box({ box }: { box: BoxesBoxType }) {
  const { boxes, setBoxes } = useContext(BoxesContext);
   const { setUnsavedChanges, unsavedChanges } = useContext(AppContext);
  const handleColourChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = boxes.map((elem) => {
      if (elem.id === box.id) {
        return { ...elem, color: e.target.value };
      }
      return elem;
    });
   //  console.log(newValue)
   //  console.log(checkIfChangesSaved(boxes, "boxes"))
    if (checkIfChangesSaved(boxes, "boxes")) {
      setBoxes(newValue);
      setUnsavedChanges(false);
    }
    else {
      setBoxes(newValue);
      setUnsavedChanges(true);
    }
   //  console.log(unsavedChanges)
  };

  return (
    <div className={styles.box}>
      <h3>{box.id}</h3>
      <input
        defaultValue={box.color}
        type="color"
        className={styles.colorPicker}
        onChange={(e) => handleColourChange(e)}
      />
    </div>
  );
}
