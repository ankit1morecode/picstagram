import React, { useState } from "react";
import API from "../api/Api";

function CreatePost() {

    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("caption", caption);
        formData.append("image", image);

        try {

            const res = await API.post(
                "/post/create-post",
                formData
            );

            alert(res.data.message);

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Caption"
                    onChange={(e) => setCaption(e.target.value)}
                />

                <input
                    type="file"
                    onChange={(e) =>
                        setImage(e.target.files[0])
                    }
                />

                <button type="submit">
                    Create Post
                </button>
            </form>
        </div>
    );
}

export default CreatePost;