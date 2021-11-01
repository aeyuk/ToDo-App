import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TodoDataService from '../../api/todo/TodoDataService.js'

function TodoList() {
    const [description, setDescription] = useState("");
    const [targetDate, setTargetDate] = useState("10/20/1998");
    const [todoList, setTodoList] = useState([]);
    
    const pathName = useLocation().pathname;

    useEffect(() => {
        const name = pathName.substring(pathName.lastIndexOf('/') + 1);    
        TodoDataService.executeTodoDataService(name)
            .then(response => setTodoList(response.data));
    }, []);

    // function updateTodoList() {
    //     const newList = [
    //         ...todoList,
    //         {
    //             id: todoList.length + 1,
    //             description: description,
    //             targetDate: targetDate,
    //             done: false
    //         }
    //     ];

    //     setTodoList(newList);
    // } 

    return (
        <div>
            <h1>Todo List:</h1>
            <div className="container">
                <table className="table" style={{textAlign: "left"}}>
                    <thead>
                        <tr >
                            <th>description</th>
                            <th>target date</th>
                            <th>done?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td>{todo.done.toString()}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                {/* <div className="container" style={{float: "right", width: "50%"}}>
                    <input placeholder="Enter Todo" type="text" onChange={(e) => setTask(e.target.value)}></input>
                    <input placeholder="Enter Target Date" type="text" onChange={(e) => setTargetDate(e.target.value)}></input>
                    <button className="btn btn-success" onClick={updateTodoList}>Add</button>
                </div> */}

            </div>
        </div>
    );
}

export default TodoList;