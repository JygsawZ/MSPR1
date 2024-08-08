// src/components/PostList.jsx
import React, { useEffect, useState } from 'react';
import fetchPosts from '../services/apiservice.js'; // Corrected path

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsData = await fetchPosts();
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        getPosts();
    }, []);

    return (
        <React.Fragment>
            <div>
                <h1>Posts</h1>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title.rendered}</li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default PostList;