import useFetch from '../hooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
  // data : blogs means grab data from useFetch but call it blogs in this context
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return ( 
    <div className="home">
      {/* Only display error if there is an error */}
      { error && <div>{ error }</div> }
      {/* Only display "Loading..." if the data isPending */}
      { isPending && <div>Loading...</div> }
      { /* Check that blogs is not null; only then output the blogs */ }
      { blogs && <BlogList blogs={ blogs } title="All Blogs!" /> }
      {/* <BlogList blogs={ blogs.filter(blog => blog.author === 'mario') } title="Mario's blogs" /> */}
    </div>
  );
}
 
export default Home;
