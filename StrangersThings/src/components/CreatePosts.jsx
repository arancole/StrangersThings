import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { createPost} from "../api/posts";
import useAuth from "../hooks/useAuth";


export default function NewPost() {
    const navigate = useNavigate();
    const {token} = useAuth();

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);

    return(
        <div>
            <h3> Make Post</h3>
            <form>
                <input 
                type="text"
                placeholder="title"
                value="title"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                ></input>
            </form>
            <form>
                <input 
                type="text"
                placeholder="description"
                value="description"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                ></input>
            </form>
            <form>
                <input 
                type="text"
                placeholder="price"
                value="price"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}