import React from 'react'
import { useContext } from 'react';
import { TodoItemContext } from './StoreContextItem';

export default function Message() {
  // const contextObj = useContext(TodoItemContext);
  // const ContexttodoItems = contextObj.todoItems
  const {todoItems}=useContext(TodoItemContext);
  return (
      todoItems.length ===0 &&  <h3 className='text-center mt-3'>Enjoy your Day</h3>
  )
}
