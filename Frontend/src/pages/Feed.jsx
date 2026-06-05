import React,{useState,useEffect} from 'react'
import axios, { Axios } from "axios";

function Feed() {
    const [posts,setPosts] = useState([{
        _id : 101,
        image : "https://images.unsplash.com/photo-1773332611514-238856b76198?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption : "Nice smartPhone"
    }]);
    useEffect(()=>{
        axios.get("http://localhost:3000/feed").then((result)=>{
            setPosts(result.data.posts);
        }).catch((e)=>{
            console.log(e);
        })
    },[]);
  return (
    <section className='feed-section'>
        {
            posts.length> 0 ?(
                posts.map((post)=>{
                    return <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                })):(
                    <h1>No post availaible</h1>
                )
        }
    </section>
  )
}

export default Feed