import React, { useState, useEffect } from "react";
import axios from "axios";
export default function TitleFetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    /**
     * @description this api call fetch the title of the user
     */
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {

        setPosts(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>1st api call fetching the list of all user title</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
