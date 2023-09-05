import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleCard } from "./ArticlesCard";

export const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios
            .get(`https://nc-news-lb25.onrender.com/api/articles`)
            .then((response) => {
                setArticles(response.data.articles);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
            })
    }, []);

    if (isError) return <p>Something went wrong!</p>
    if (isLoading) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            </div>
    );

    return (
        <ul className="articles-list">
            {articles.map((article) => {
                return (
                    <li className="articles-card" key={article.article_id}>
                        <ArticleCard article={article}/>
                    </li>
                )
            })}
        </ul>
    )
}