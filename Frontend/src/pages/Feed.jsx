import React, { useEffect, useState } from "react";
import API from "../api/Api";

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {

            const res = await API.get("/post/feed");

            setPosts(res.data.posts);

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Feed</h1>

            {
                posts.map((post) => (
                    <div key={post._id}>
                        <h3>{post.title}</h3>

                        <img
                            src={post.image}
                            width="300"
                            alt=""
                        />

                        <p>{post.caption}</p>

                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default Feed;