import {  useContext } from "react"
import styles from './SliderDashboard.module.scss'
import { SliderContext } from "../../../context/slider.context";
import SliderImageComponent from "./SliderImage";
import { DndContext, closestCenter  } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable"
import {restrictToVerticalAxis} from "@dnd-kit/modifiers"
import { AppContext } from "../../../context/app.context";
import {getRandomHexColor, generateRandomId  } from "../../../utils/utils"
import { checkIfChangesSaved } from "./../../../utils/utils";
// If you return to old value you dont need to save

export default function SliderDashboard() {
    const {sliderImages, setSliderImages } = useContext(SliderContext);
    const {setUnsavedChanges} = useContext(AppContext)
    function swapElementsById(active : string , over : string) {

      const activeIndex = sliderImages.findIndex((image)=> image.id === active);
      const overIndex = sliderImages.findIndex((image)=> image.id === over);
      
      setSliderImages(arrayMove(sliderImages, activeIndex, overIndex))
    }
    function handleNewImage() {
      const newValue = [...sliderImages, {name : "", url : "", color : getRandomHexColor(),id : `${generateRandomId()}`}]
            setSliderImages(newValue )
               // Check if new value is the same as old value  
                //  If true change state of unsaved to false
            if (checkIfChangesSaved(newValue, "sliderImages")) {
              console.log("Changes saved")
              setUnsavedChanges(false)
            }
            else {
              console.log("Changes not saved")
              setUnsavedChanges(true)
            }
    }
return ( <>

   <div className={styles["slider-dashboard"]}>
      
      <div>
      <span>Show slider</span>
      <input type="checkbox" name="" id="" />
      </div>
        <div className={styles["images-list"]}>

          <DndContext modifiers={[restrictToVerticalAxis]}  collisionDetection={closestCenter} onDragEnd={(event)=> {
            const active =  String(event.active.id);
            const over = String(event.over?.id);

            if (active !== over) {
              swapElementsById(active, over)
            }
          } }>

            <SortableContext items={sliderImages} strategy={verticalListSortingStrategy}>

          {sliderImages.map((image) => {
            // console.log(image)
            return <div key={image.id} onDoubleClick={()=> console.log("aa")}><SliderImageComponent key={image.id} image={image} /></div>
          })}
          </SortableContext>
          </DndContext>
          {/* Handle new image */}
          <button onClick={handleNewImage}>Add image</button>
        </div>
   </div>
   </>
      )
}

