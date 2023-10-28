/* eslint-disable */
import { generateRandomId, getRandomHexColor } from '@utils/utils';

import { createContext,  useState, ReactNode} from 'react';
import {
        ShowSliderContextType,
        SliderImagesContextType,
         SliderImageType} from "../ts/sliderContextTypes"
type ContextType = SliderImagesContextType & ShowSliderContextType;

const defaultState = {
   slider: true,
   setSlider: (slider : boolean) => {},
   sliderImages : [{name : "", url : "", color: "" }],
   setSliderImages: (sliderImages : Array<SliderImageType>) => {}

} as ContextType;


const SliderContext = createContext<ContextType>(defaultState)



interface AppContextProviderProps {
   children: ReactNode;
}

const SliderContextProvider = ({ children }: AppContextProviderProps) => {
   let defaultValue = [{name : "", url : "" , id: generateRandomId() , color: getRandomHexColor()}]
   // Check if there is saved value in local storage
   if (localStorage.getItem("sliderImages")) {
      defaultValue = JSON.parse(localStorage.getItem("sliderImages") as string)
   }
   let [slider , setSlider] = useState<boolean>(true);
   let [sliderImages, setSliderImages] = useState<Array<SliderImageType>>(defaultValue);
   let contextValues = {
      slider,
      setSlider,
      sliderImages,
      setSliderImages
   }
 return (
   <SliderContext.Provider value={contextValues}> {children} </SliderContext.Provider>
 )
};

export  { SliderContext, SliderContextProvider };
