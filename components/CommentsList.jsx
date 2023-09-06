import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import { Loading } from "./Loading";
import { CommentsCard } from "./CommentsCard";

export const CommentsList = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        console.log(article_id)
        getComments(article_id)
            .then((commentsFromApi) => {
                setComments(commentsFromApi);
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
            <h1>Comments:</h1>
            <ul className="comments-list">
                {comments.map((comment) => {
                    return (
                        <li className="comment-card" key={comment.comment_id}>
                            <CommentsCard comment={comment} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}