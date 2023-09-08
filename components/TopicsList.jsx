import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Loading } from "./Loading";
import { TopicsCard } from "./TopicsCard";

export const TopicsList = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getTopics()
            .then((topicsFromApi) => {
                setTopics(topicsFromApi);
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
                <h1 className="h1-user">Topics:</h1>
                <ul className="topics-list">
                    {topics.map((topic) => {
                        console.log(topic);
                        return (
                            <li className="topics-card" key={topics.indexOf(topic) + 1}>
                                <TopicsCard topic={topic} />
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
};