
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios.get(`https://mernback-xb91.onrender.com/api/blogs/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error('Error fetching blog details:', error));
  }, [id]);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt="Blog" style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '5px' }} />
      <div style={{overflow:"hidden"}}>
      <p>{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
