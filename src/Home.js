const Home = () => {
  let name= 'Keerthi';

  const handleClick =()=>
  {
    console.log("I'm working!");
  }
  const handleClickAgain = (name)=>
  {
    console.log("Hello"+name);
  }
    return (
        <div classname="home">
        <h2>Home Page</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=>handleClickAgain(' Keerthi')}>Click Me again</button>
        </div>
      );
}
 
export default Home;