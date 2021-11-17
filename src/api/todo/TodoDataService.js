import axios from 'axios';

class TodoDataService {

    executeTodoDataService(username) {
        return axios.get(`http://localhost:8080/todos/${username}`);
    }

    executeDeleteTodo(username, id) {
        return axios.delete(`http://localhost:8080/todos/${username}/delete/${id}`, {
            data: {
                username: username,
                id: id
            } //try removing this to see what happens
        });
    }

    executeAddTodo(username, description, targetDate, done) {
        return axios.post(`http://localhost:8080/todos/${username}/add`, {
            username: username,
            description: description,
            targetDate: targetDate,
            done: done
        });
    }

    executeUpdateTodo(username, id, description, targetDate) {
        return axios.put(`http://localhost:8080/todos/${username}/update/${id}`, {
            description: description,
            targetDate: targetDate
        });
    }
}

export default new TodoDataService();