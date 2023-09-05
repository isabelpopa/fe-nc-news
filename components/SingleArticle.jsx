import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import { Loading } from "./Loading";
import { CommentsList } from "./CommentsList";
import moment from "moment";

export const SingleArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getArticle(article_id)
            .then((articleFromApi) => {
                setArticle(articleFromApi);
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
            <section className="single-article">
                <h1>{article.title}</h1>
                <div className="topic-author">
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                    <p>Date: {moment(article.created_at).format("Do MMM YY")}</p>
                </div>
                <p>{article.body}</p>
                <img className="article-image" src={article.article_img_url}></img>
                <div className="article-details">
                    <button className="vote-button">Vote up</button>
                    <button className="vote-button">Vote down</button>
                    <button className="comment-button">Comments</button>
                </div>
                <CommentsList />
            </section>
        </>
    )
}
