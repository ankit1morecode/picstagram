import React from 'react'

function CreatePost() {
  return (
    <section className='create-post-section'>
        <h1>
            Create Post
        </h1>
        <br /><br />
        <form action="">
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