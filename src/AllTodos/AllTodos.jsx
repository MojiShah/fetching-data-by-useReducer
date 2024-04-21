import React, { useState, useEffect } from 'react';
import './AllTodos.css';
import Todo from './todo/Todo';
import { FaPlus } from "react-icons/fa";

export default function AllTodos() {
    const [todoInput, setTodoInput] = useState('');
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        getAllTodo();
    }, [todoItems])

    const getAllTodo = async () => {
        await fetch('http://localhost:4000/todos')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTodoItems(data);
            })
    }


    const addTodo = () => {

        const newTodoItem = {
            id: (Math.floor(100 * Math.random())).toString(),
            isDone: false,
            title: todoInput
        };

        fetch('http://localhost:4000/todos', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTodoItem)
        }).then(res => console.log(res));

    }

    const checkTodoHandler = id => {
        let targetTodo = todoItems.find(todoItem => todoItem.id == id);
        console.log('targetTodo', { ...targetTodo, isDone : !targetTodo.isDone})
        fetch(`http://localhost:4000/todos/${targetTodo.id}`,
            {
                method: 'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({
                    ...targetTodo,
                    isDone : !targetTodo.isDone
                })
            }
        ).then(res => res.json())
            .then(data => console.log('data', data))

            getAllTodo();
    }

    return (
        <>
            <form className='form'>
                <div className="form-content">
                    <input
                        type="text"
                        className='form-input'
                        value={todoInput}
                        onChange={e => setTodoInput(e.target.value)}
                    />
                    <button
                        className='add-btn'
                        type='submit-btn'
                        onClick={addTodo}
                    >
                        <FaPlus className='add-btn__content' />
                    </button>
                    <div className='selection'>
                        <select name='todos'>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="incompleted">Incompleted</option>
                        </select>
                    </div>
                </div>
            </form>

            <div className='todos'>
                <ul className="todo-items">
                    {
                        todoItems.map(todoItem => <Todo
                            key={todoItem.id}
                            todoContent={todoItem.title}
                            todoId={todoItem.id}
                            todoIsDone={todoItem.isDone}
                            checkTodo={checkTodoHandler}
                        />)
                    }
                </ul>
            </div>
        </>
    )
}
