import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Routes makes sure only one page is shown on the browser at a time */}
          <Routes>
            {/* Exact looks for the path only to be '/' rather than anything containing '/' */}
            {/* Element is which component to load when the route is found */}
            {/* The "Link to=" element in Create.js is what triggers these routes to work */}
            <Route exact path="/" element={ <Home /> } />
            <Route path="/create" element={ <Create /> } />
            <Route path="/blogs/:id" element={ <BlogDetails /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
