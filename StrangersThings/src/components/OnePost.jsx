function OnePost() {
    const navigate = useNavigate();
    const { token, user } = useAuth();
    const { postId } = useParams();
    console.log("The postId is", postId);
    const [onePost, setOnePost] = useState({});
    const [content, setContent] = useState();
  
    useEffect(() => {
      async function getPostById() {
        const listing = await fetchOnePost(postId);
        setOnePost(listing);
      }
  
      getPostById();
    }, []);
  
    return (
      <div>
        <div >
          <h3 >{onePost.title}</h3>
          <h4>{onePost.description}</h4>
          <h5>Price: {onePost.price}</h5>
          {user?._id === onePost.author?._id && (
            <button
              onClick={async () => {
                await deletePostById(onePost._id, token);
                navigate("/");
              }}
            >
              Thanos Snap
            </button>
          )}
        </div>
        <div>
          {user?._id === onePost.author?._id && (
            <button
              onClick={async () => {
                navigate(`/Update/${onePost._id}`);
              }}
            >
              Edit
            </button>
          )}
        </div>
  
        <div >
          <h4>Leave a Message</h4>
          <h4>{singlePost.messages}</h4>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const result = await postMessages(onePost._id, token, content);
              console.log(result);
  
              navigate("/");
            }}
          >
            <input
              type="text"
              placeholder="Message"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></input>
            {user?._id !== onePost.author?._id && (
              <div>
                <button  type="submit">
                  {" "}
                  Submit
                </button>
              </div>
            )}
            {user?._id === OnePost.author?._id && (
              <h5>Cannot send messages to yourself</h5>
            )}
          </form>
        </div>
      </div>
    );
  }
  
  export default OnePost;