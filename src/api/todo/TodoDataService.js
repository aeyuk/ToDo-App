import axios from 'axios';

class TodoDataService {

    executeTodoDataService(username) {
        return axios.get(`http://localhost:8080/todos/${username}`);
    }
}

export default new TodoDataService;