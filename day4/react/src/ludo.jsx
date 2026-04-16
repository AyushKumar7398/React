import { useState } from "react";
import "./ludo.css"



function Ludo({color,title,idx}){
   let [count,setcount]=useState(0)
   let incCount= ()=>{
     setcount(count+1);
      console.log(count);
      
      
   
   }

   
     return(
        <>
          <div>
            <h4>{title} moves:{count} </h4>
            <div style={{backgroundColor:color[idx]}} className="ludo" onClick={incCount}><b>+1</b></div>
          </div>
        </>
     )
}
export default Ludo;