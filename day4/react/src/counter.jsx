import { useState } from "react"
import Ludo from "./ludo";
// function init(){
//         console.log("init was executed");
//         return Math.random();
// }

// export default function Counter(){
    
    
    
//     // let [count , setCount] = useState(0);
//     let [count , setCount] = useState(init);
    
//     let  incCount = ()=>{
//         // setCount(count+1);
//         // console.log(` inside incCount, count = ${count}`);
//         setCount((currCount)=>{
//             return currCount +1;
//         })
//         //  setCount((currCount)=>{
//         //     return currCount +1;
//         // })
//         // setCount(34);
//     }
    
//     return(
//         <>
//             <div>
//                 <h3>count={count}</h3>
                 
//                 <button onClick={incCount}>Increase Counter</button>
//             </div>
//         </>
//     )
// }
function Counter(){
  return(
    <>
        <Ludo/>
    </>
    
  )    
}

export default Counter