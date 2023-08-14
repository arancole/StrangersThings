const COHORT_NAME = "2302-ACC-ET-WEB-PT-B";
const BASE_URL = "https://strangers-things.herokuapp.com/api/${COHORT_NAME}"

export const fetchAllPost = async () => {
    try{
        // request our response
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        console.log(result.data.posts)
        return (result.data.posts)
    } catch (error){
        console.error("Error getting posts")
    }
};


export const registerUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers:  {"Content-Type": "application/json"},
            body: JSON.stringify({
                user: {
                    username,
                    password,
                },
            })
        }),
        const result = await response.json();
        console.log ("Register User", result);
        return result;
    } catch (error) {
        console.error("error/ Post registering user, error")
    };
};

export const loginUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers:  {"Content-Type": "application/json"},
            body: JSON.stringify({
                user: {
                    username,
                    password,
                },
            })
        }),
        const result = await response.json();
        //console.log ("LoginUser", result);
        return result;
    } catch (error) {
        console.error("error/ Post registering user, error")
    };
};

export const makePost = async (title, description, price, willDeliver) => {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price,
                    willDeliver,
                }
            })
        });
        const result = await response.json();
    return result;
    } catch (err){
        console.error("error/ Post")
    }
};

export const deletePost = async (token,id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
        const result = await response.json();
        return result
    } catch (err) {
        console.error("error/ DELETE")
    }
}

export const postMessage = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${id}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content, 
                },
            }),
        });
        const result = await response.json();
        return result 
    } catch (err){
        console.error(err);
    }
}

export const userInfo = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

        }),
    }catch (error){

    }
}