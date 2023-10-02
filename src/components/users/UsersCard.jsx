// import { Link } from "react-router-dom";
// import moment from "moment";
import { useContext } from "react";
import { UserContext } from "../context/users";

export const UsersCard = ({ username }) => {
    const { user, setUser } = useContext(UserContext);

    const handleLogin = () => {
        setUser(username);
        alert(`Successfully logged in as ${username.username}`)
    }

    return (
        <>
            <div className="user-item">
                <div className="author-date">
                    <p>Username: {username.username}</p>
                </div>
                <img className="user-img" src={username.avatar_url} alt={`Profile image for ${username.username}`}></img>
                <div className="user-signin">
                    <button onClick={handleLogin} className="sign-in-button">Sign in</button>
                </div>
            </div>
        </>
    )
}