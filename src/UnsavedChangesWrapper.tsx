import { ReactNode, useEffect, useContext } from "react";
import { AppContext } from "./context/app.context";

const useConfirmTabClose = (isUnsafeTabClose: boolean) => {

   useEffect(() => {
     const confirmationMessage = "You have unsaved changes. Continue?";
 
     const handleBeforeUnload = (event: BeforeUnloadEvent) => {
       if (isUnsafeTabClose) {
         event.returnValue = confirmationMessage;
         return confirmationMessage;
       }
     };
 
     
     window.addEventListener("beforeunload", handleBeforeUnload);
     return () => window.removeEventListener("beforeunload", handleBeforeUnload);
   }, [isUnsafeTabClose]);
 };


 const UnsavedChangesWrapper = ({ children }: { children: ReactNode }) => {

   const { unsavedChanges } = useContext(AppContext);
 
   useConfirmTabClose(unsavedChanges);
   return <>{children}</>;
 };


export default UnsavedChangesWrapper;
