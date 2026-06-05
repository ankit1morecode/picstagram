import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  let navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    let formData = new FormData(e.target);
    axios.post("http://localhost:3000/newpost",formData).then(()=>{
      navigate("/feed");
      alert("post created succesfully");
      e.target.reset();
    }).catch((e)=>{
      console.log(e);
      alert("error creating post");
    })
  }
  return (
    <section className='create-post-section'>
        <h1>
            Create Post
        </h1>
        <br /><br />
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept='image/*'/>
            <br /><br />
            <input type="text" name='caption' placeholder='enter caption here' required/>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default CreatePost