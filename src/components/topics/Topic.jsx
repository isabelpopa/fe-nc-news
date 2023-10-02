import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../utils/api";
import { ArticleCard } from "../articles/ArticlesCard";
import { Loading } from "../Loading";

export const Topic = () => {
    const { topicSlug } = useParams();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const topicName = topicSlug.charAt(0).toUpperCase() + topicSlug.slice(1)

    useEffect(() => {
        setIsLoading(true)
        getArticlesByTopic(topicSlug)
            .then((articlesFromApi) => {
                setArticles(articlesFromApi);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
            })
    }, [topicSlug]);

    if (isError) return <p>Something went wrong!</p>;
    if (isLoading) return <Loading />;


    return (
        <>
            <h1>{topicName} articles</h1>
            <ul className="articles-list">
                {articles.map((article) => (
                    <li className="articles-card" key={article.article_id}>
                        <ArticleCard article={article} />
                    </li>
                ))}
            </ul>
        </>
    )
}