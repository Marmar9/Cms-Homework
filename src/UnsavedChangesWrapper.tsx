import { ReactNode, useEffect, useContext } from "react";
import { AppContext } from "./context/app.context";

const UnsavedChangesWrapper = ({children} : {children : ReactNode}) => {
   const {unsavedChanges} = useContext(AppContext)
   console.log(unsavedChanges)

   useEffect(()=> {
      function handleBeforeUnload(event : BeforeUnloadEvent) {
         // if (unsavedChanges) {
            event.returnValue = "You have unsaved changes, are you sure you want to leave?"
         // }
         // else {
         //    event.returnValue = null
         // }
      }
      if (unsavedChanges) {
         console.log("adding event listener")
         window.addEventListener("beforeunload", handleBeforeUnload, {capture : true})
      }
      else {
         console.log("removing event listener")
         window.removeEventListener("beforeunload", handleBeforeUnload)
      }
      return () => {
         window.removeEventListener("beforeunload", handleBeforeUnload)
      }
  }, [unsavedChanges])
      return (
         <>
               {children}
         </>
      )}

export default  UnsavedChangesWrapper;