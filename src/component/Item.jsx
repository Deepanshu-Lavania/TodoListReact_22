import React, { useState, useContext } from "react";
import { TodoItemContext } from "./StoreContextItem";
import style from "./Input.module.css";

// export default function Item({ todoItems, onDeleteClick}) {

//   return (
//     <>
//       {todoItems.map((curElem,ind) => {
//         return (
//           <>
//             <div className="col-12 d-flex gap-2 justify-content-center mt-5" key={ind}>
//               <div className="col-4 col-lg-4 text-capitalize">{curElem.name}</div>
//               <div className="col-4 col-lg-3">{curElem.dueDate}</div>

//               <button className="col-2  col-lg-1 btn btn-outline-danger" onClick={()=>onDeleteClick(curElem.name)} >
//                 delete
//               </button>
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// }
export default function Item({ onDeleteClick, setTodoItems }) {
  // const ContextObj = useContext(TodoItemContext);
  // const TodoItems = ContextObj.todoItems;
  const { todoItems } = useContext(TodoItemContext); //objext destructring
  const [buttonText, setButtonText] = useState("CHECK LIST");

  const changeButtonText = (text) => {
    setButtonText(text);
  };

  const removeItems = () => {
    console.log("removeItems function called");
    // settodoItems([]);
    setTodoItems([]);
  };
  return (
    <>
      {todoItems.map((curElem, ind) => {
        return (
          <>
            <div className="col-12 d-flex gap-2 justify-content-center mt-5">
              <div className="col-4 col-lg-4 text-capitalize" key={ind}>
                {curElem.name}
              </div>
              <div className="col-4 col-lg-3">{curElem.dueDate}</div>

              <button
                className="col-2  col-lg-1 btn btn-outline-danger"
                onClick={() => onDeleteClick(curElem.name)}
              >
                delete
              </button>
            </div>
          </>
        );
      })}
      <div className=  "text-center mt-4">
        <button  className={`${style.showbtn}`}
          onDoubleClick={removeItems}
          onMouseOver={() => changeButtonText("Remove All")}
          onMouseOut={() => changeButtonText("CHECK LIST")}
        >
          {buttonText}
        </button>
      </div>
      ;
    </>
  );
}
