import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Api() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
    //   .get("http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",{ 
        
        .then((res) => {
            console.log(res.data);
             setPosts(res.data)
          })
          .catch((error) => {
            console.log(error);
          });
            },[]);
          
            return (
              <div className="App">
              
                <ul>
                  {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                  ))}
                </ul>
              </div>
            );
          }
          