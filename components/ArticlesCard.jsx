import { Link } from "react-router-dom";
import moment from "moment";

export const ArticleCard = ({ article }) => {
    return (
        <>
            <div className="article-item">
                <h1 className="h1-article">{article.title}</h1>
                <div className="author-date">
                    <li>Author: {article.author}</li>
                    <li>Date: {moment(article.created_at).format('LLL')}</li>
                </div>
                <p className="article-comment">Comments: {article.comment_count}</p>
                <img className="article-img" src={article.article_img_url}></img>
                <div className="article-details">
                    {/* Will need to implement buttons functionality */}
                    <button className="vote-button">Vote up</button>
                    <button className="vote-button">Vote down</button>
                    <button className="comment-button">Comments</button>
                </div>
                {/* Will need to display articles/:article_id page */}
                <Link to={`/articles/${article.article_id}`} className="nav-link active">expand article</Link>
            </div>
        </>
    )
}
