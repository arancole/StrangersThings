import React from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {loginuser, registeruser} from "../api/index"

const Authenticate = ({setToken}) => {
    const {method} = useParams();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div>
            <form
            onSubmit={async (e) => {
                e.preventDefault();
                let result;
                if(method === 'register') {
                    result = await registerUser(username, password);
                } else {
                    result = await loginUser(username, password);
                }
                const token = result.data.token;
                localStorage.setItem("token",token)
                setToken(token);
                console.log(token);
                navigate("/user")
            }}
            >
            <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            />
            <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="password"
            />
            <button type="submit">
                {method === "register" ? "Register" : "Login"}
            </button>
            </form>
        </div>
    )
}