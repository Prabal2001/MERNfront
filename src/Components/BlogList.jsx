
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch all blogs on component mount
    axios.get('https://mernback-xb91.onrender.com/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const deleteBlog = (id) => {
    axios.delete(`https://mernback-xb91.onrender.com/api/blogs/${id}`)
      .then(() => {
        console.log('Blog deleted successfully.');
        // Fetch updated blog list after deletion
        axios.get('https://mernback-xb91.onrender.com/api/blogs')
          .then(response => setBlogs(response.data))
          .catch(error => console.error('Error fetching blogs:', error));
      })
      .catch(error => console.error('Error deleting blog:', error));
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px'}}>
      <h2>Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id} style={{ marginBottom: '20px', textDecoration:"none", border: '1px solid #ccc', borderRadius: '5px', width: '100%', maxHeight: '400px', overflow: 'hidden' }}>
            <Link to={`/details/${blog._id}`} style={{ textDecoration: 'none' , display:'flex',justifyContent:'center',alignItems:'center'}}>
              <h3>{blog.title}</h3>
            </Link>
            <img
              src={blog.image}
              alt="Blog"
              style={{
                width:"70%",
                height: 'auto',
                maxHeight: '200px',  // Set a maximum height for the image
                marginBottom: '10px',
                marginLeft:'12px',
                marginRight:'12px',
                borderRadius: '5px',
                objectFit: 'cover', // Maintain aspect ratio and cover the container
              }}
            />
            <p style={{ textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis' }}>{truncateText(blog.description, 150)}</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <div>
                <Link to={`/update/${blog._id}`} style={{ textDecoration: 'none' }}>
                  <button style={{ padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor:'pointer',borderRadius: '5px', marginRight: '5px' }}>Update</button>
                </Link>
              </div>
              <div>
                <button onClick={() => deleteBlog(blog._id)} style={{ padding: '8px', backgroundColor: '#D9534F',cursor:'pointer',color: 'white', border: 'none', borderRadius: '5px' }}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
