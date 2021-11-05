import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TodoDataService from '../../api/todo/TodoDataService.js'

function TodoList() {
    const [todoList, setTodoList] = useState([]);
    
    const pathName = useLocation().pathname;
    const username = pathName.substring(pathName.lastIndexOf('/') + 1);    

    useEffect(() => {
        TodoDataService.executeTodoDataService(username)
            .then(response => setTodoList(response.data));
    }, []);

    // function deleteTodo(username, id) {
    //     TodoDataService.deleteTodo(username, id)
    //         .then(response => alert(response.data));
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
                                {/* <td><button onClick={deleteTodo(username, todo.id)}>Delete</button></td> */}
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TodoList;