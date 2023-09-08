import { Link } from "react-router-dom";

export const TopicsCard = ({ topic }) => {

    return (
        <>
            <div className="topic-description">
                <div className="topic">
                    <p>Topic: {topic.slug}</p>
                </div>
                <div className="description">
                    <p>Description: {topic.description}</p>
                </div>
                <Link to={`/topics/${topic.slug}`} className="nav-link active">Find articles by topic: {topic.slug}</Link>
            </div>
        </>
    )
}