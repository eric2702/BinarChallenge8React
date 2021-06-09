import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
            <div class="container-fluid">
                <Link to="/home" className="navbar-brand">Players</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/add" className="nav-link">Add</Link>
                        <Link to="/edit" className="nav-link">Edit</Link>
                        <Link to="/search" className="nav-link">Search</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header