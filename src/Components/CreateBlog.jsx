
import React, { useState } from 'react';
import axios from 'axios';
const CreateBlog = () => {
  const [blogData, setBlogData] = useState({ title: '', image: '', description: '' });

  const createBlog = () => {
    axios.post('https://mernback-xb91.onrender.com/api/blogs', blogData)
      .then(response => {
        console.log('Blog created successfully:', response.data);
        // Redirect to the homepage after successful creation
                 window.location.href="/";
      })
      .catch(error => console.error('Error creating blog:', error));
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Create Blog</h2>
      <label>Title:</label>
      <input type="text" value={blogData.title} onChange={e => setBlogData({ ...blogData, title: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} required/>
      <label>Image URL:</label>
      <input type="text" value={blogData.image} onChange={e => setBlogData({ ...blogData, image: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} required/>
      <label>Description:</label>
      <textarea value={blogData.description} onChange={e => setBlogData({ ...blogData, description: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} required/>
      <br />
      <button onClick={() => createBlog()} style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px',cursor:'pointer'}}>Create</button>
    </div>
  );
};

export default CreateBlog;
