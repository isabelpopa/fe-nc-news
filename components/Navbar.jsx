import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid" id="navbar">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <Link to="/profile" className="nav-link active">Profile</Link>
                            <Link to="/articles" className="nav-link active">Articles</Link>
                            <Link to="/topics" className="nav-link active">Topics</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}