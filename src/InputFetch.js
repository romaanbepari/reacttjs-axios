import React, { useState, useEffect } from "react";
import axios from "axios";
export default function InputFetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1)
  const [input, setInput] = useState(1)
  useEffect(() => {
    /**
     * @description in this api will fetch the data base on the user input
     */

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${input}`)
      //   .get("http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",{ 

      .then((res) => {

        setPost(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [input]);

  const handler = () => {
    setInput(id)
  }
  return (
    <div className="App">
      <h1> 2nd api fetching data by button click Id</h1>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handler}>fetchdata</button>
      <p>{post.title}</p>

    </div>
  );
}
