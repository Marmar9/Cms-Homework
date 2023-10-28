/* eslint-disable */
import { createContext,  useState, ReactNode} from 'react';
import {IsLoggedContextType, UnavedChangesContextType} from "@ts/appContextTypes"




type AppContextType = IsLoggedContextType & UnavedChangesContextType

const defaultState = {
   isLogged: true,
   setIsLogged: (isLogged : boolean) => {},
   unsavedChanges : false,
   setUnsavedChanges: (unsavedChanges : boolean) => {},


} as AppContextType;

const AppContext = createContext<AppContextType>(defaultState)

interface AppContextProviderProps {
   children: ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
   let [isLogged, setIsLogged] = useState<boolean>(false);
   let [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
   let appContextValues = {
      isLogged,
      setIsLogged,
      unsavedChanges,
      setUnsavedChanges,
   }
 return (
   <AppContext.Provider value={appContextValues}> {children} </AppContext.Provider>
 )
};

export  { AppContext, AppContextProvider };
