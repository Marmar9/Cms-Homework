import { Dispatch, SetStateAction } from "react";

export interface SliderImageType {
   name : string;
   url : string;
   color : string;
   id : string;
   
}

export interface SliderImagesContextType {
   sliderImages: Array<SliderImageType> ;
   setSliderImages: Dispatch<SetStateAction<Array<SliderImageType>>>;
}

export interface ShowSliderContextType {
   slider: boolean;
   setSlider: Dispatch<SetStateAction<boolean>>;
}

