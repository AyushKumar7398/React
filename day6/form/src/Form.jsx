import { useState } from "react"

export default function Form(){
    let [formData ,setFormData]=useState({
        fullName:"",
        username:"",
        password:""
    })
    
    // let handleNameChange =(event)=>{
    //     console.log(event.target.value);
    //     setFullName(event.target.value);
    // }
    // let handleUsername =(event)=>{
    //     console.log(event.target.value);
    //     setUserName(event.target.value);
    // }

    let handleInputChange =(event)=>{
       
        // console.log(fieldName);
        // console.log(newValue);
        setFormData((currData)=>{
          
            return{...currData,[event.target.name]:event.target.value};
        });
    }
    
    let  handleSubmit=(event)=> {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            username:"",
            password:"",
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name:</label>
            
            <input
             placeholder="enter full name" 
             type="text" 
             value={formData.fullName} 
             onChange={handleInputChange}
             id="fullName"
             name="fullName"
             />

             <br /><br />
             <label htmlFor="username">User Name: </label>
            
            <input
             placeholder="enter full name" 
             type="text" 
             value={formData.username} 
             onChange={handleInputChange}
             id="username"
             name="username"
             />
              <br /><br />
             <label htmlFor="password">password: </label>
            
            <input
             placeholder="enter full name" 
             type="password" 
             value={formData.password} 
             onChange={handleInputChange}
             id="password"
             name="password"
             />
             <br /><br />
            <button>Submit</button>
        </form>
    )
}