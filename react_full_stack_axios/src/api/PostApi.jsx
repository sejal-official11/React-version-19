import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPost = () => {

    // get Method
    return api.get("/posts");
}


// delete method

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}
