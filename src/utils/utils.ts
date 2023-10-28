/* eslint-disable */
type AnyObject = {
   id : string;
   [key: string]: any;
 } ;
 export function generateRandomId(length? : number) {
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const timestamp = Date.now().toString(36); 
   const randomPrefix = generateRandomPrefix(4);
   const remainingLength = 12 - randomPrefix.length - timestamp.length;
   let randomId = randomPrefix + timestamp;
 
   for (let i = 0; i < remainingLength; i++) {
     const randomIndex = Math.floor(Math.random() * characters.length);
     randomId += characters.charAt(randomIndex);
   }
 
   return randomId;
 }
 
 function generateRandomPrefix(length : number) {
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let prefix = '';
 
   for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * characters.length);
     prefix += characters.charAt(randomIndex);
   }
 
   return prefix;
 }
 
export function getRandomHexColor() {
   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
   return `#${randomColor.padStart(6, '0')}`
}

export function checkIfChangesSaved(newValue : Array<AnyObject>, localStorageIndex : string) {

   // const newWithoutId = newValue.map((image)=> { return {name : image.name, url : image.url}})
   // const newArray = newValue.map(({ id, ...rest }) => rest);

   // const oldValue = localStorage.getItem("sliderImages") ? JSON.parse(localStorage.getItem(localStorageIndex) as string).map((image : SliderImageType)=> { return {name : image.name, url : image.url}}) : [{name : "", url : ""}];
   let localStorageValue : Array<AnyObject> | null = null; 

   if (localStorage.getItem(localStorageIndex)) {
      localStorageValue = JSON.parse(localStorage.getItem(localStorageIndex) as string);
   }

   if (localStorageValue === null) {
      return false
   }
   else {
      const oldValue = localStorageValue.map(({ id, ...rest }) => rest)
      const valueToCompare = newValue.map(({ id, ...rest }) => rest);
      return JSON.stringify(oldValue) === JSON.stringify(valueToCompare)

   }

}