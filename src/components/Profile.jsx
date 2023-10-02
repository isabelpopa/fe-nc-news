import { UsersList } from "./users/UsersList";
import { UserContext } from "./context/users";
import { useContext } from "react";

export const Profile = () =>{
    const {user, setUser} = useContext(UserContext);
    return (
        <div>
            {user ? <h1>Currently logged in as: {user.username}</h1> : <h1>Login unsuccessful</h1>}
            <UsersList />
        </div>
    )
}