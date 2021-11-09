import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import TodoDataService from '../../api/todo/TodoDataService.js'

function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [description, setDescription] = useState("");
    const [refresh, setRefresh] = useState(false);
    
    const pathName = useLocation().pathname;
    const username = pathName.substring(pathName.lastIndexOf('/') + 1);    

    const history = useHistory();

    useEffect(() => {
        TodoDataService.executeTodoDataService(username)
            .then(response => setTodoList(response.data));
    }, [username, refresh]);

    function deleteTodo(id) {
        TodoDataService.executeDeleteTodo(username, id)
            .then(response => setRefresh(!refresh));
    }

    function addTodo() {
        const defaultTargetDate = new Date();
        const defaultDone = false;
        TodoDataService.executeAddTodo(username, description, defaultTargetDate, defaultDone)
            .then(response => setRefresh(!refresh));
    }

    function updateTodo(id, oldDescription, oldTargetDate) {
        history.push({
            pathname: `/todos/update/${id}`,
            state: {
                id: id,
                description: oldDescription,
                targetDate: oldTargetDate
            }
        });
    }

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
                                <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                <td><button className="btn btn-info" onClick={() => updateTodo(todo.id, todo.description, todo.targetDate)}>Update</button></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <div className="container" style={{float: "right", width: "50%"}}>
                <input placeholder="Enter New Todo" onChange={(e) => setDescription(e.target.value)}></input>
                <button className="btn btn-success" onClick={() => addTodo()}>Add</button>
            </div>

        </div>
    );
}

export default TodoList;