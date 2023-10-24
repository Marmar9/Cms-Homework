// import { DndContext, closestCenter  } from '@dnd-kit/core';
// import styles from './Test.module.scss';
// import { useState, useEffect, useRef } from 'react';
// import { SortableContext } from '@dnd-kit/sortable';
// import { verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
// import {CSS } from "@dnd-kit/utilities"

// const data = [
//    {
//       id : "1",
//       name : "Name",
//    }  
// ]

// interface Item  {
//    id : string,
//    name : string,
// }
// const Item = ({item} : {item : Item}) =>{
//    const {setNodeRef
//          ,attributes
//          ,listeners
//          ,transform
//          ,transition
//          } = useSortable({id: item.id})

//          const style = {
//             transform: CSS.Transform.toString(transform),
//             transition,
//           };
// return <div ref={setNodeRef} style={style} {...attributes} {...listeners}className={styles.item}>
//       <h3>{item.name}</h3>
//       </div>
// }




// export default function Page( ) {
//    const [list, setList] = useState<Array<Item>>(data);
//       const [input , setInput] = useState<string>("");

//    const add = () => {
//       console.log('as')
//       const newItem : Item = {
//          id : Date.now().toString(),
//          name : input,
//       }
//       setList([...list, newItem]);
//    }


//    return (
//       <div className={styles.page}>
//          <div className={styles.top}>
//          <input type="text" className={styles.input} onChange={(e)=> setInput(e.target.value)}/>
//          <button className={styles.add} onClick={add}>Add</button>
//          </div>
//       <div className={styles.list}>
//          <MyComponent />
//          <DndContext collisionDetection={closestCenter} onDragEnd={(event)=> {
          
//          }}>
//             <SortableContext items={list} strategy={verticalListSortingStrategy} >
//         {list.map((item) => {
//            return <Item key={item.id} item={item} />
//         })}
//         </SortableContext>
//         </DndContext>
//       </div>
//       </div>
//    )
// }

// const parser = new  DOMParser();

// function MyComponent() {
//   const [clickedOutside, setClickedOutside] = useState(false);
//   const componentRef = useRef<HTMLDivElement>(null);
//    const uniqueElementRef = useRef<HTMLSpanElement>(null);

//    const date = new Date();
//   useEffect(() => {
//     // Function to handle document click event
//     function handleClickOutside(event) {
//       if (componentRef.current && !componentRef.current.contains(event.target)) {

//         setClickedOutside(true);
//       }
//     }

//     // Add the event listener when the component mounts
//     document.addEventListener('click', handleClickOutside);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div ref={componentRef}>
//       <span className={`${Math.random() * date.getMilliseconds()}`} ref={uniqueElementRef}/>
//       {clickedOutside ? (
//         <p>You clicked outside of the component.</p>
//       ) : (
//         <p>Click anywhere outside of this component.</p>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [isDirty, setIsDirty] = useState(false); // Track if there are unsaved changes

  useEffect(() => {
    // Add a beforeunload event listener to show a confirmation dialog
    const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';

    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.returnValue = confirmationMessage;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);

  // Function to handle changes
  const handleInputChange = () => {
    setIsDirty(true); // Mark changes as dirty
  };

  // Function to save changes
  const handleSave = () => {
    setIsDirty(false); // Mark changes as saved
  };

  return (
    <div>
      <h1>Your Component</h1>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default MyComponent;
