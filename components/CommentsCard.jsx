import moment from "moment";

export const CommentsCard = ({comment}) => {
    return (
        <>
            <div className="comment-item">
                <div className="author-date">
                    <p>Author: {comment.author}</p>
                    <p>Date: {moment(comment.created_at).format("Do MMM YY")}</p>
                </div>
                <div>
                    <p>{comment.body}</p>
                </div>
                <div className="comment-details">
                    {/* Will need to implement buttons functionality */}
                    <button className="vote-button">Vote up</button>
                    <button className="vote-button">Vote down</button>
                </div>
            </div>
        </>
    )
}