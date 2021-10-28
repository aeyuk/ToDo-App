import { useState } from 'react';

function TodoList() {
    const [task, setTask] = useState("");
    const [targetDate, setTargetDate] = useState("1/1/2020");
    const [todoList, setTodoList] = useState(
        [
            {id: 1, task: "Learn React", targetDate: new Date(), done: true},
            {id: 2, task: "Learn Spring Boot", targetDate: new Date(), done: false},
            {id: 3, task: "Cry", targetDate: new Date(), done: false}
        ]);
    
    function updateTodoList() {
        const newList = [
            ...todoList,
            {
                id: todoList.length + 1,
                task: task,
                targetDate: targetDate,
                done: false
            }
        ];

        setTodoList(newList);
    } 

    return (
        <div>
            <h1>Todo List:</h1>
            <div className="container">
                <table className="table" style={{textAlign: "left"}}>
                    <thead>
                        <tr >
                            <th>id</th>
                            <th>task</th>
                            <th>target date</th>
                            <th>done?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.task}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td>{todo.done.toString()}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <div className="container" style={{float: "right", width: "50%"}}>
                    <input placeholder="Enter Todo" type="text" onChange={(e) => setTask(e.target.value)}></input>
                    <input placeholder="Enter Target Date" type="text" onChange={(e) => setTargetDate(e.target.value)}></input>
                    <button className="btn btn-success" onClick={updateTodoList}>Add</button>
                </div>

            </div>
        </div>
    );
}

export default TodoList;