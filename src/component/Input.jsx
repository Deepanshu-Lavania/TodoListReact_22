import React, { useContext, useState } from "react";
import style from "./Input.module.css";
import { TodoItemContext } from "./StoreContextItem";

// export default function Input({onNewItems}) {
//     const [inputData, setinputData] = useState();
//     const [inputDate, setinputDate] = useState();
//     const handleChangeData=(event)=>{
//         // console.log(event.target.value);
//         setinputData(event.target.value);
//     }
//     const handleChangeDate=(event)=>{
//         // console.log(event.target.value);
//         setinputDate(event.target.value);
//     }
//     const handleChangefields = (event)=>{
//       console.log(event);
//         onNewItems(inputData,inputDate)
//         event.preventDefault();
//         setinputData('');
//         setinputDate('');
//     }
//   return (
//     <>
//       {/* <div className="col-12 d-flex gap-2 justify-content-center">
//         <input
//           type="text"
//           className="col-5 col-lg-4 "
//           placeholder="Enter your text..."
//           value={inputData}//this is two way binding to perform/set setinputData('');
//           onChange={handleChangeData}
//         />
//         <input type="Date" className="col-3 col-lg-3" 
//         value={inputDate}
//         onChange={handleChangeDate}
//         />
//         <button type="button" className={`col-2 col-lg-1 btn btn-outline-success  ${style.btn}`} onClick={handleChangefields} >
//           Add
//         </button>
//       </div> */}

//   {/* By form action */}
//       <form className="col-12 d-flex gap-2 justify-content-center" onSubmit= {handleChangefields}>
//         <input
//           type="text"
//           className="col-5 col-lg-4 "
//           placeholder="Enter your text..."
//           value={inputData}//this is two way binding to perform/set setinputData('');
//           onChange={handleChangeData}
//         />
//         <input type="Date" className="col-3 col-lg-3" 
//         value={inputDate}
//         onChange={handleChangeDate}
//         />
//         <button type="submit" className={`col-2 col-lg-1 btn btn-outline-success  ${style.btn}`} >
//           Add
//         </button>
//       </form>
//     </>
//   );
// }
export default function Input() {
  const {handleNewItem} = useContext(TodoItemContext);
    const [inputData, setinputData] = useState();
    const [inputDate, setinputDate] = useState();
    const handleChangeData=(event)=>{
        // console.log(event.target.value);
        setinputData(event.target.value);
    }
    const handleChangeDate=(event)=>{
        // console.log(event.target.value);
        setinputDate(event.target.value);
    }
    const handleChangefields = (event)=>{
      console.log(event);
      handleNewItem(inputData,inputDate)
        event.preventDefault();
        setinputData('');
        setinputDate('');
    }
  return (
    <>
      {/* <div className="col-12 d-flex gap-2 justify-content-center">
        <input
          type="text"
          className="col-5 col-lg-4 "
          placeholder="Enter your text..."
          value={inputData}//this is two way binding to perform/set setinputData('');
          onChange={handleChangeData}
        />
        <input type="Date" className="col-3 col-lg-3" 
        value={inputDate}
        onChange={handleChangeDate}
        />
        <button type="button" className={`col-2 col-lg-1 btn btn-outline-success  ${style.btn}`} onClick={handleChangefields} >
          Add
        </button>
      </div> */}

  {/* By form action */}
      <form className="col-12 d-flex gap-2 justify-content-center" onSubmit= {handleChangefields}>
        <input
          type="text"
          className="col-5 col-lg-4 "
          placeholder="Enter your text..."
          value={inputData}//this is two way binding to perform/set setinputData('');
          onChange={handleChangeData}
        />
        <input type="Date" className="col-3 col-lg-3" 
        value={inputDate}
        onChange={handleChangeDate}
        />
        <button type="submit" className={`col-2 col-lg-1 btn btn-outline-success  ${style.btn}`} >
          Add
        </button>
      </form>
    </>
  );
}
