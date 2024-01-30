
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateBlog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({ title: '', image: '', description: '' });

  useEffect(() => {
    // Fetch specific blog on component mount
    axios.get(`https://mernback-xb91.onrender.com/api/blogs/${id}`)
      .then(response => setBlogData(response.data))
      .catch(error => console.error('Error fetching blog details:', error));
  }, [id]);

  const updateBlog = () => {
    axios.put(`https://mernback-xb91.onrender.com/api/blogs/${id}`, blogData)
      .then(response => {
        console.log('Blog updated successfully:', response.data);
        // Redirect to the updated blog details page
        window.location.href = `/`;
      })
      .catch(error => console.error('Error updating blog:', error));
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Update Blog</h2>
      <label>Title:</label>
      <input type="text" value={blogData.title} onChange={e => setBlogData({ ...blogData, title: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
      <label>Image URL:</label>
      <input type="text" value={blogData.image} onChange={e => setBlogData({ ...blogData, image: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
      <label>Description:</label>
      <textarea value={blogData.description} onChange={e => setBlogData({ ...blogData, description: e.target.value })} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
      <br />
      <button onClick={() => updateBlog()} style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' , cursor:'pointer'}}>Update</button>
    </div>
  );
};

export default UpdateBlog;
