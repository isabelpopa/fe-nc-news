import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import { Loading } from "./Loading";
import { CommentsCard } from "./CommentsCard";
import { CommentAdder } from "./CommentAdder"

export const CommentsList = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true)
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

    const updateComments = (comment) => {
        setComments((currentComments) => {
            return [comment, ...currentComments]
        })
    }


    if (isError) return <p>Something went wrong!</p>;
    if (isLoading) return <Loading />;

    return (
        <>
        <section>
            <h1>Comments</h1>
            <CommentAdder article_id={article_id} updateComments={updateComments}/>
            <ol className="comments-list">
                {comments.map((comment) => {
                    return (
                        <li className="comment-card" key={comment.comment_id}>
                            <CommentsCard comment={comment}/>
                        </li>
                    )
                })}
            </ol>
            </section>
        </>
    )
}