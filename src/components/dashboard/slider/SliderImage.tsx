import styles from "./SliderImage.module.scss"
import {  useSortable } from "@dnd-kit/sortable"
import {CSS } from "@dnd-kit/utilities"
import { useState, useEffect, useRef, useContext } from "react"
import { SliderContext } from "../../../context/slider.context"
import { AppContext } from "../../../context/app.context"
import { checkIfChangesSaved } from "./../../../utils/utils";

export default function SliderImage({image} : {image : {name : string, url : string, id : string}}) {
  const [disabled, setDisabled] = useState<boolean>(true)
  const componentRef = useRef<HTMLDivElement>(null);
  const {sliderImages, setSliderImages } = useContext(SliderContext);
  const {setUnsavedChanges, setIsLogged} = useContext(AppContext)

  // Handle disable 
  useEffect(() => {
    setIsLogged(true)
    // Handle outside clicks on mounted state
    function handleClickOutside(event : MouseEvent) {
      console.log("Clicked outside component")
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        setDisabled(true);
      }
    }

    function handleKeyDown(event : KeyboardEvent) {
      if (event.key === 'Escape' || event.key === 'Enter') {
        setDisabled(true);
        }
    }

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

// Handle drag and drop sorting
  const {setNodeRef
    ,attributes
    ,listeners
    ,transform
    ,transition
    
    } = useSortable({id: image.id,
      disabled: !disabled,
    })

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

   return (
     <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`${disabled && styles.disabled}`} onDoubleClick={()=> {
       setDisabled(false)
    }} >
     <div ref={componentRef} className={styles.element}>
    

    <div className={styles.left}>
     <div className={styles.name} >
       {/* Handle image name change*/}
     <input placeholder="name" type="text" defaultValue={image.name} disabled={disabled} onChange={(e) => {
        const newSliderImages = sliderImages.map((elemen)=> {
          if (elemen.id === image.id) {
            return {...elemen, name : e.target.value}
          }
          return elemen;
        })
        setSliderImages(newSliderImages);
          // Check if new value is the same as saved one 
          //  If true change state of unsaved to false
        if (checkIfChangesSaved(newSliderImages, "sliderImages")) {
          console.log("Changes saved")
          setUnsavedChanges(false)
        }
        else {
          console.log("Changes not saved")
          setUnsavedChanges(true)
        }

     }}/>
     </div>
     <div className={styles.url}>
       {/* Handle image url change */}
     <textarea placeholder="url" defaultValue={image.url} disabled={disabled} onChange={(e)=> {
      // Create new array with changed value
        const newSliderImages = sliderImages.map((elemen)=> {
          if (elemen.id === image.id) {
            return {...elemen, url : e.target.value}
          }
          return elemen;
        })

        setSliderImages(newSliderImages);
          // Check if new value is the same as saved one 
          //  If true change state of unsaved to false
        if (checkIfChangesSaved(newSliderImages, "sliderImages")) {
          console.log("Changes saved")
          setUnsavedChanges(false)
        }
        else {
          console.log("Changes not saved")
          setUnsavedChanges(true)
        }


     }}/>
     </div>
   </div>
   <img src={image.url} alt="" className={styles.right}/>
     </div>
     {/* Handle image delete */}
    <button onClick={()=> {
       const newSliderImages = sliderImages.filter((elemen)=> elemen.id !== image.id);
      // Check if new value is the same as saved one 
       setSliderImages(newSliderImages);
      //  If true change state of unsaved to false
        if (checkIfChangesSaved(newSliderImages, "sliderImages")) {
          console.log("Changes saved")
          setUnsavedChanges(false)
        }
        else {
          console.log("Changes not saved")
          setUnsavedChanges(true)
        }

    }} disabled={disabled} className={`${disabled && styles.disabled}`}>Delete</button>
    <input type="color" name="" className={styles["color-input"]} />
    </div>

)
}
