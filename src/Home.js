import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
 
  const [blogs,setBlogs]=useState([
    {title: 'How to get and Internship', body:'To find...', author:'Keerthi',id:1},
    {title: 'How to sustain at job', body:'To find...', author:'Manasa',id:2},
    {title: 'Frontend and all you need to know about it', body:'To find...', author:'Sirsha',id:3}
  ]);
  const handleDelete= (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
  }
  
    return (
        <div classname="home">
          <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
          
        </div>
      );
}
 
export default Home;