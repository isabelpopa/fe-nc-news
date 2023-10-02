import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, updateArticleVoteDown, updateArticleVoteUp } from "../../utils/api";
import { Loading } from "../Loading";
import moment from "moment";
import { CommentsList } from "../comments/CommentsList";

export const SingleArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [votes, setVotes] = useState(0);

    useEffect(() => {
        setIsLoading(true)
        getArticle(article_id)
            .then((articleFromApi) => {
                setArticle(articleFromApi);
                setVotes(articleFromApi.votes);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
            })
    }, [article_id]);

    const handleVoteUp = () => {
        updateArticleVoteUp(article_id)
            .then(() => {
                setVotes((currentVotes) => currentVotes + 1)
            })
            .catch((error) => {
                setVotes((currentVotes) => currentVotes - 1)
                setIsLoading(false);
                alert("Something went wrong, your vote up could not be added");
            });
    };

    const handleVoteDown = () => {
        updateArticleVoteDown(article_id)
            .then(() => {
                setVotes((currentVotes) => currentVotes - 1)
            })
            .catch((error) => {
                setVotes((currentVotes) => currentVotes + 1)
                setIsLoading(false);
                alert("Something went wrong, your vote down could not be added");
            });
    };


    if (isError) return <p>Something went wrong!</p>;
    if (isLoading) return <Loading />;

    return (
        <>
            <section className="single-article">
                <h1>{article.title}</h1>
                <div className="topic-author">
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                    <p>Date: {moment(article.created_at).format("Do MMM YY")}</p>
                </div>
                <p>{article.body}</p>
                <img className="article-image" src={article.article_img_url} alt={article.title}></img>
                <div className="article-details">
                    <p>Votes: {article.votes}</p>
                    <button onClick={handleVoteUp} className="vote-button">Vote up</button>
                    <button onClick={handleVoteDown} className="vote-button">Vote down</button>
                </div>
               <CommentsList />
            </section>
        </>
    )
}
