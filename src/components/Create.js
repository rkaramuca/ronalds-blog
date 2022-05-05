import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ author, setAuthor ] = useState('mario');
  const [ isPending, setIsPending ] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    // prevents the page from refreshing after submit button is pressed
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      // navigate back home when a blog is submitted
      navigate('/');
    })
  }

  return (  
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={ handleSubmit }>
        <label>Blog title:</label>
        {/* Value is the displayed item in each box */}
        {/* onChange calls the set function for each state to update each box's value */}
        <input 
          type="text"
          required 
          value={ title }
          onChange={ e => setTitle(e.target.value) }
        />
        <label>Blog body:</label>
        <textarea
          required
          value={ body }
          onChange={ e => setBody(e.target.value) }
        ></textarea>
        <label>Blog author:</label>
        <select
          value={ author }
          onChange={ e => setAuthor(e.target.value) }
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {/* Check if the POST request is pending. If so, display a disabled button */}
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding blog...</button> }
      </form>
    </div>
  );
}
 
export default Create;
