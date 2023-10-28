import { BoxesBoxType } from "@ts/boxesContextTypes";
import styles from "./Box.module.scss";
export default function Box({ box }: { box: BoxesBoxType }) {
  return (
    <div className={styles.box} style={{ background: box.color }}>
      <h2>Kurs HTML</h2>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
    </div>
  );
}
