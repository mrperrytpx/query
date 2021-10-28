import axios from "axios";
import { useQuery } from "react-query";

const getAllTasks = async () => {
    console.log("running getAllTasks");
    try {
        const response = await axios.get(`/todos`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};



const useFetchTodos = () => {
    return useQuery("todos", getAllTasks);
};

export default useFetchTodos;