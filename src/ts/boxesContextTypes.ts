import { Dispatch, SetStateAction } from "react";

export interface BoxesBoxType {
   id : string;
   color : string;
}
export interface BoxesContextType {
   boxes: Array<BoxesBoxType>;
   setBoxes: Dispatch<SetStateAction<Array<BoxesBoxType>>>;
}
export interface ShowBoxesContextType {
   showBoxes: boolean;
   setShowBoxes: Dispatch<SetStateAction<boolean>>;
}
