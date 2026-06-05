import React,{useState} from 'react'

function Feed() {
    const [posts,setPosts] = useState([{
        _id : 101,
        imgUrl : "https://images.unsplash.com/photo-1773332611514-238856b76198?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption : "Nice smartPhone"
    }]);
  return (
    <section className='feed-section'>
        {
            posts.length> 0 ?(
                posts.map((post)=>{
                    return <div key={post._id} className='post-card'>
                        <img src={post.imgUrl} alt={post.caption} />
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