/* eslint-disable */
import { createContext,  useState, ReactNode} from 'react';
import {BoxesContextType, BoxesBoxType, ShowBoxesContextType} from "@ts/boxesContextTypes"
import { generateRandomId, getRandomHexColor } from '@utils/utils';



type ContextType = BoxesContextType & ShowBoxesContextType;

const defaultState = {
   boxes: [{id: "", color: ""}],
   setBoxes: (boxes : Array<BoxesBoxType>) => {},
   showBoxes: true,
   setShowBoxes: (showBoxes : boolean) => {}

} as ContextType;

const BoxesContext = createContext<ContextType>(defaultState)

interface BoxesContextProviderProps {
   children: ReactNode;
}

const BoxesContextProvider = ({ children }: BoxesContextProviderProps) => {
   let defaultValue = [{id: generateRandomId(), color: getRandomHexColor()}]
   if (localStorage.getItem("boxes")) {
      defaultValue = JSON.parse(localStorage.getItem("boxes") as string)
   }
   const [boxes, setBoxes] = useState<Array<BoxesBoxType>>(defaultValue);
   const [showBoxes, setShowBoxes] = useState<boolean>(true);

   
   let contextValues = {
   boxes, 
   setBoxes,
   showBoxes,
   setShowBoxes
   }
 return (
   <BoxesContext.Provider value={contextValues}> {children} </BoxesContext.Provider>
 )
};

export  { BoxesContext, BoxesContextProvider };
