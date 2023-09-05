import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { ArticleCard } from "./ArticlesCard";
import { Loading } from "./Loading";
import { Header } from "./Header";

export const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getArticles()
            .then((articlesFromApi) => {
                setArticles(articlesFromApi);
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
            <Header />
            <ul className="articles-list">
                {articles.map((article) => {
                    return (
                        <li className="articles-card" key={article.article_id}>
                            <ArticleCard article={article} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}