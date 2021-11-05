import axios from 'axios';

class TodoDataService {

    executeTodoDataService(username) {
        return axios.get(`http://localhost:8080/todos/${username}`);
    }

    // executeTodoDataService(username, id) {
    //     return axios.delete(`http://localhost:8080/todos/${username}`, {
    //         data: {
    //             username: username,
    //             id: id
    //         }
    //     });
    // }
}

export default new TodoDataService;