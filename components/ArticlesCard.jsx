import { Link } from "react-router-dom";
import moment from "moment";

export const ArticleCard = ({ article }) => {

    return (
        <>
            <div className="article-item">
                <h1 className="h1-article">{article.title}</h1>
                <div className="author-date">
                    <p>Author: {article.author}</p>
                    <p>Date: {moment(article.created_at).format("Do MMM YY")}</p>
                </div>
                <img className="article-img" src={article.article_img_url} alt={article.title}></img>
                <div className="article-details">
                    <p>Comments: {article.comment_count}</p>
                    <p>Votes: {article.votes}</p>
                    <Link to={`/articles/${article.article_id}`} className="nav-link active">Expand article</Link>
                </div>
            </div>
        </>
    )
}
