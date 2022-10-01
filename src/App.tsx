import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import TodoItem from './components/TodoItem';

import { todoType } from './types';

function App() {
  const [ todo, setTodo ] = useState<todoType[]>([])
  const [ isCompleted, setCompleted ] = useState<boolean>(false)
  const [ input, setInput ] = useState<string>("")
  const [ isEdited, setEdited ] = useState<boolean>(false)


  return (
    <div className="app">
      <h1 className="app__title">To-do app</h1>
      <section className="app__content">
        <Form 
          todo={todo} 
          setTodo={setTodo} 
          input={input} 
          setInput={setInput}
          isEdited={isEdited}
        />
        <ul className="app__list">
          {todo.map((item) => (
            <TodoItem key={item.id} 
              todoList={todo} 
              setTodo={setTodo} 
              data={item} 
              isCompleted={isCompleted} 
              setCompleted={setCompleted}
              setInput={setInput}
              setEdited={setEdited}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
