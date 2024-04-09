import React, { useEffect, useState } from "react";
import Title from "./Title";
import Input from "./Input";
import Item from "./Item";
import Messange from "./Messange";
import { TodoItemContext } from "./StoreContextItem";

// export default function Todo() {
//   // const initialTodoItems = [
//   //   {
//   //     name:Ghee,
//   //     dueDate:4/3/2024
//   //   },
//   //   {
//   //     name:Chips,
//   //     dueDate:5/8/2022
//   //   }
//   // ];
//   // const [todoItems, settodoItems] = useState(initialTodoItems);

//   const [todoItems, settodoItems] = useState([]);
//   const handleNewItem = (itemName, itemDueDate) => {
//     console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
//     const newtodoItems = [
//       ...todoItems,
//       { name: itemName, dueDate: itemDueDate },
//     ];
//     settodoItems(newtodoItems);
// // when multiple component sharing the data at the same time and they are dependent to each other
//     // settodoItems((currValue)=>{
//     //    const newtodoItems= [
//     //     ...currValue,
//     //     { name: itemName, dueDate: itemDueDate },
//     //    ];
//     //    return newtodoItems;
//     // })
//   };
//   const handleDeleteItem = (todoItemName)=>{
//     const newtodoItems = todoItems.filter((elem)=>{
//       return (
//         elem.name !== todoItemName
//       )
//       })
//     settodoItems(newtodoItems);
//     console.log(`Item Deleted:${todoItemName}`);
//   }
//   return (
//     <>
//       <Title heading={"Todo App"} react={"(ReactApp)"} />
//       <div className="row mt-4">
//         <Input onNewItems={handleNewItem} />
//       </div>
//       {/* {
// todoItems.length === 0 && <Messange />
//       } */}
//       <Messange msgTodoItems={todoItems}></Messange>
//       {/* now Messange is dependent on todoItems */}
//       <div className="row">
//         <Item todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
//       </div>
//     </>
//   );
// }
export default function Todo() {
  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);

    if (list) {
      //if data is get then return data but it is in the form of string
      try{
        return JSON.parse(list);
      }catch(err){
        console.log("Error parsing JSON from loval storage", err);
      }
    } else {
      return []; //if data not present then return empty array
    }
  };


  const [todoItems, settodoItems] = useState(getLocalItems);


  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newtodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    settodoItems(newtodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newtodoItems = todoItems.filter((elem) => {
      return elem.name !== todoItemName;
    });
    settodoItems(newtodoItems);
    console.log(`Item Deleted:${todoItemName}`);
  };
  // const defaultTodoItems = []
  // const defaultTodoItems = [{name:'Buy Ghee', dueDate:'Today'}]


  useEffect(()=>{
    localStorage.setItem('lists', JSON.stringify(todoItems))
  })
  return (
    <>
      {/* <TodoItemContext.Provider value={defaultTodoItems}> */}
      <TodoItemContext.Provider
        value={
          // {todoItems:todoItems,
          //   handleNewItem:handleNewItem,
          //   handleDeleteItem:handleDeleteItem}
          { todoItems, handleNewItem }
        }
      >
        {/* //Now state is avilable to the TodoItemContext , pass as a todoItems instead of passing an propss */}
        <Title heading={"Todo App"} react={"(ReactApp)"} />
        <div className="row mt-4">
          <Input />
        
        </div>
        <Messange></Messange>
        <div className="row">
          <Item onDeleteClick={handleDeleteItem} setTodoItems={settodoItems}/>
        </div>
      </TodoItemContext.Provider>
    </>
  );
}
