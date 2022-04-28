const BlogList = ({ blogs, title, handleDelete }) => {
  // We can do the above destructuring instead of BlogList = (props) => ...
  // const blogs = props.blogs;
  // const title = props.title;

  return ( 
    <div className="blog-list">
      <h2>{ title }</h2>
      { blogs.map(blog => (
        // each root element in template we return in React, when looping, needs a unique key attribute
        <div className="blog-preview" key={ blog.id }>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <button onClick={ () => handleDelete(blog.id) }>delete blog</button>
        </div>
      )) }
    </div>
  );
}
 
export default BlogList;