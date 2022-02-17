import axios from 'axios';
import React from 'react';

export const Posts = () => {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(async () => {
        // fetch posts
        const res = await axios.get('/api/posts');
        const data = await res.data;
        setPosts(data.posts);
    }, []);

    return (
        <div>
            Posts:
            {posts.map(post => (
                <div key={post.title}>
                    <h2>Title</h2>
                    <p>{post.title}</p>
                    <h2>Description</h2>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    )
};