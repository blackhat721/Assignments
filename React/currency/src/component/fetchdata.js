import react, { startTransition, useState,useEffect } from "react";


export default function FetchData(){
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
  
        


return(
    <>
    <h1>3.Fetch data from API</h1>
        <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>
               <div className="button">
               <div className="delete-btn">Delete</div>
               </div>
            </div>
         );
      })}
   </div>


    </>
    );
};

