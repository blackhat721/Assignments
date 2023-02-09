import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import users from './component/users.json'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Currency from './component/currency';
import FetchData from './component/fetchdata';

function App() {

const [userdata,setUserdata]=useState(users);


function sortbydate(){
  const sortedData=[...userdata].sort((a,b)=>a.birthday>b.birthday?1:-1)
  
  setUserdata(sortedData);
}

function sortbyname(){
  const sortedData=[...userdata].sort((a,b)=>a.name>b.name?1:-1)
  
  setUserdata(sortedData);
}



const mystyle={
  width:"50%",
display:"flex",
justifyContent:"space-between",
flexDirection:"row"
}



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



  return (
   <>
   <h2>1.Sort By birthday or names</h2>
{
  userdata
  .map(({name,birthday,id})=>(
<div key={id}>

<div style={mystyle}>

<h2>{birthday}</h2>

<h2>{name}</h2>

</div>

</div>
  ))
}

<div style={mystyle}>
   
<Button onClick={sortbydate} variant="outline-primary">Sort By Date</Button>
<Button onClick={sortbyname} variant="outline-primary">Sort By Name</Button>
</div>

<Currency/>

<FetchData/>
   </>



  );
}

export default App;
