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

