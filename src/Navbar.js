import { Link} from 'react-router-dom';
const Navbar= () => {
    return (
        <nav className="navbar">
            <h1> Share your thoughts </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
    );
}
export default Navbar;