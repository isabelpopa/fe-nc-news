import { useContext, useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import { Loading } from "./Loading";
import { UsersCard } from "./UsersCard";

export const UsersList = () => {
    const [usernames, setUsernames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        getUsers()
            .then((usersFromApi) => {
                setUsernames(usersFromApi);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
            })
    }, []);

    if (isError) return <p>Something went wrong!</p>;
    if (isLoading) return <Loading />;

    return (
        <>
            <section>
                <ul className="users-list">
                    {usernames.map((username) => {
                        return (
                            <li className="users-card" key={username.username}>
                                <UsersCard username={username} />
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
};