import { Link } from 'react-router-dom';

const Navbar = () => {
	return ( 
		<nav className="navbar">
			<h1>Ronald's Blog</h1>
			<div className="links">
				{/* We change 'a' to 'Link' to make new pages switch with the react router rather than server requests */}
        <Link to="/">Home</Link>				
				<Link to="/create">New Blog</Link>
			</div>
		</nav>
	);
}
 
export default Navbar;