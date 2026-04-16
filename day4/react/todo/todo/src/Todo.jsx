import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let [todos,settodos]=useState([{task :"sample-task" ,id :uuidv4()}]);
    let [newTodo ,setNewTodo]=useState("");
   
    let addNewTask=()=>{
        settodos((prevTodods)=>{
            return [...prevTodods,{task:newTodo ,id:uuidv4()}]
        });
        setNewTodo("");
    }
    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value);
    }
    let deleteTodo =(id)=>{
        
       settodos((prevTodos) => {
             return prevTodos.filter((todo) => todo.id !== id);
        });
    }
    let upperCaseAll =()=>{
        settodos((prevTodods)=>{
            return prevTodods.map((todo)=>{
                  return {
                ...todo,
                task : todo.task.toUpperCase()


            } 
        })
    });
        
    }
      
    let UppercaseOne =(id)=>{
        settodos((prevTodods)=>{

            return prevTodods.map((todo)=>{
                if(todo.id==id){  return {
                    ...todo,
                    task : todo.task.toUpperCase()
                }
               


               } 
               else{
                    return todo;
                }
            })
        });
        
    }
    
    return(
        <> 
          
          <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br /><br /> 
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /> 
            <br /><br /> 
            <br /><br /> 
            <hr />
            <hr />
            <h4>Tasks To Do</h4>
            <ul>
                {
                  todos.map((todo)=>(
                     <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={ ()=>deleteTodo(todo.id)}>delete</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={ ()=>UppercaseOne(todo.id)}>Uppercase One</button>
                        </li>
                  ))  
                }
            </ul>  
            <br /><br /> 
            <button onClick={upperCaseAll}>Update All</button>            
          </div>
        </>
    )
}; 