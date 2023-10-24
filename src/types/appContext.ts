import { Dispatch, SetStateAction } from 'react';

export interface IsLoggedContextType {
   isLogged: boolean;
   setIsLogged: Dispatch<SetStateAction<boolean>>;
}

export interface UnavedChangesContextType {
   unsavedChanges: boolean;
   setUnsavedChanges: Dispatch<SetStateAction<boolean>>;
}