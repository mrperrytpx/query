import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteTask = async ({ id }) => {
    try {
        const data = await axios.delete(`/todos/${id}`);
        console.log("responded with", data.data);
        return data.data;
    } catch (error) {
        console.log("Couldn't delete", id);
    }
};

const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteTask, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos", { active: true });
        }
    });
};

export default useDeleteTodo;
