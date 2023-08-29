import styles from "../styles/profile.module.css";
import UserPosts from "./UserPosts";


function Profile({ user }) {
    return (
      <div >
        <div>
          <img src={logo} height={300} width={300} alt="Logo" />
        </div>
        <UserPosts user={user} />
  
        <div >
          <h2>Messages</h2>
        </div>
  
        <div>
          {user?.messages?.map((message) => {
            return (
              <div>
                <h3>{message.post.title}</h3>
                <div >{message.content}</div>
                <div >
                  {" "}
                  Sent by: {message.fromUser.username}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Profile;