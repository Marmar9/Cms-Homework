import {  useContext } from "react"
import styles from './SliderDashboard.module.scss'
import { SliderContext } from "../../../context/slider.context";
import SliderImageComponent from "./SliderImage";
import { DndContext, closestCenter  } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable"
import {restrictToVerticalAxis} from "@dnd-kit/modifiers"
import { AppContext } from "../../../context/app.context";
import { SliderImageType } from "../../../types/sliderContext";

// If you return to old value you dont need to save
export function checkIfChangesSaved(newValue : Array<SliderImageType>) {
  const newWithoutId = newValue.map((image)=> { return {name : image.name, url : image.url}})
  const oldValue = localStorage.getItem("sliderImages") ? JSON.parse(localStorage.getItem("sliderImages") as string).map((image)=> { return {name : image.name, url : image.url}}) : [{name : "", url : ""}];
  console.log("Old value: ",oldValue)
  console.log("New value: ",newWithoutId)

  return JSON.stringify(oldValue) === JSON.stringify(newWithoutId)
}

export default function SliderDashboard() {
    const {sliderImages, setSliderImages } = useContext(SliderContext);
    const {setUnsavedChanges} = useContext(AppContext)
    function swapElementsById(active : string , over : string) {

      const activeIndex = sliderImages.findIndex((image)=> image.id === active);
      const overIndex = sliderImages.findIndex((image)=> image.id === over);
      
      setSliderImages(arrayMove(sliderImages, activeIndex, overIndex))
    }
    console.log(sliderImages)
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
          <button onClick={()=> {
            const newValue = [...sliderImages, {name : "", url : "", id : `${Math.random()}`}]
            setSliderImages(newValue )
               // Check if new value is the same as old value  
                //  If true change state of unsaved to false
            if (checkIfChangesSaved(newValue)) {
              console.log("Changes saved")
              setUnsavedChanges(false)
            }
            else {
              console.log("Changes not saved")
              setUnsavedChanges(true)
            }
          }}>Add image</button>
        </div>
   </div>
   </>
      )
}

