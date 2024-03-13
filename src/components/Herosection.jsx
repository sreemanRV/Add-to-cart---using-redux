import Navbar from './Navbar.jsx'
import  Products  from './Prod.jsx'
import Slider from './carouseldata.jsx'
import { useState } from 'react'

function Herosection(){
       const [todo, setTodo] = useState("");
       const [todos, setTodos] = useState([]);

       const addTodo = ()=>{
        setTodos([...todos,todo]);
        setTodo("");
       }
       const deletetodo = (id)=>{
        const newtodos = todos.filter((todo)=> {return todo !== id});
        setTodos(newtodos);
       }
    return(
            <div>
            <Navbar />
            <section>
            <Slider />
            </section>
            <Products/>
            <div>
            <input placeholder="item name"
            name="todo" value={todo} onChange={(e)=>{setTodo(e.target.value)}}
      />

      {/* Add (button) */}
      <button onClick={addTodo}>Add</button>

      {/* 3. List of todos (unordered list) */}
      <ol>
       {todos.map((list, index)=>(
        <>

        <div key={index}>
        <li>{list}</li> <button onClick={()=>deletetodo(list)}>delete</button>
        </div>

        </>
       ))}
       </ol>
            </div>
     </div>
            );
}

export default Herosection;