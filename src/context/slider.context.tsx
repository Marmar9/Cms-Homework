/* eslint-disable */
import { createContext,  useState, ReactNode} from 'react';
import {
        ShowSliderContextType,
        SliderImagesContextType,
         SliderImageType} from "../types/sliderContext"
import Cookies from 'js-cookie';
type ContextType = SliderImagesContextType & ShowSliderContextType;

const defaultState = {
   slider: true,
   setSlider: (slider : boolean) => {},
   sliderImages : [{name : "", url : "" }],
   setSliderImages: (sliderImages : Array<SliderImageType>) => {}


} as ContextType;

const SliderContext = createContext<ContextType>(defaultState)

interface AppContextProviderProps {
   children: ReactNode;
}

const SliderContextProvider = ({ children }: AppContextProviderProps) => {
   // console.log("Local storage items: ",localStorage.getItem("sliderImages"))
   let [slider , setSlider] = useState<boolean>(true);
   let [sliderImages, setSliderImages] = useState<Array<SliderImageType>>(localStorage.getItem("sliderImages") ? JSON.parse(localStorage.getItem("sliderImages") as string) : [{name : "", url : "" , id: "asda"}]);
   
   let appContextValues = {
      slider,
      setSlider,
      sliderImages,
      setSliderImages
   }
 return (
   <SliderContext.Provider value={appContextValues}> {children} </SliderContext.Provider>
 )
};

export  { SliderContext, SliderContextProvider };
