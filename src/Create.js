
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [ title,setTitle]=useState('');
    const [ body,setBody]=useState('');
    const[author,setAuthor]=useState('Keerthi');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

       fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(blog)
       }).then (()=>
       {console.log("New Blog added");
       setIsPending(false);
       //history.go(-1);
       history.push('/');
    })
       
    }
    return ( 
        <div className="create">
            <h2>Add a new Component</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author:</label>
                <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;