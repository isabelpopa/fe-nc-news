import { useState, useContext } from "react";
import { postComment } from "../../utils/api";
import { UserContext } from "../context/users";

export const CommentAdder = ({ article_id, updateComments }) => {
    const [newComment, setNewComment] = useState("");
    const { user, setUser } = useContext(UserContext);

    const handleChange = (event) => {
        setNewComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newComment.length < 1 || newComment === " ") {
            alert("Your comment is empty!");
            return;
        }
        const comment = { body: newComment, username: user.username, votes: 0, created_at: new Date().toISOString() };
        postComment(article_id, comment)
            .then((comment) => {
                updateComments(comment);
                setNewComment("");
                alert("Your comment has been successfully added!")
            })
            .catch((error) => {
                console.log(error);
                alert("Your comment could not be added!")
            })
    }


    return (
        <form className="comment-form" onSubmit={handleSubmit} >
            <textarea id="comment" value={newComment} onChange={handleChange} className="comment-bar" placeholder="Add a comment"></textarea>
            <button className="add-comment">Submit</button>
        </form>
    )
};