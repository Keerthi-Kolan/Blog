import { useState } from "react";
const Home = () => {
 
  const [blogs,setBlogs]=useState([
    {title: 'How to get and Internship', body:'To find...', author:'Keerthi',id:1},
    {title: 'How to sustain at job', body:'To find...', author:'Manasa',id:2},
    {title: 'Frontend and all you need to know about it', body:'To find...', author:'Sirsha',id:3}
  ]);
  
  
    return (
        <div classname="home">
        {blogs.map((blog)=>(
          <div className = "blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
        </div>
      );
}
 
export default Home;