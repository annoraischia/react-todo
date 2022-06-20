import React from 'react';
import { MdDeleteOutline } from 'react-icons/md'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo } = props
  return (
    <div className={todo.completed ? 'todo-row complete' : 'todo-row' }>
        {todo.text}
        <div className='iconsContainer'>
        <IoMdCheckmarkCircleOutline className='icon' style={{marginRight:5}} onClick={() => completeTodo(todo.id)} />
        <MdDeleteOutline className='icon' onClick={() => removeTodo(todo.id)} />
        </div>
    </div>
  )
}
