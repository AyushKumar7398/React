import { useState } from "react"

// export default function LikeButton(){
//     let[like,setLike]=useState("fa-regular fa-heart");
    
//     function incLike(){
//             setLike("fa-solid fa-heart");
//     }

//     return(
//         <>
//         <div>
//             <p onClick={incLike}><i className={like}></i></p>
//         </div>
         
//         </>
//     )
// }

export default function LikeButton(){
    let[like,setLike]=useState(false);
    let[Count,seCount]=useState(0);
   
    function ToggleLike(){
            setLike(!like);
            seCount(Count+1);
            console.log(Count);
    }
    let likeStyle = {color:"red"}
    return(
        <>
        <div>
            <p onClick={ToggleLike}>
                {like ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                ):(
                    <i className="fa-regular fa-heart"></i>
                )
            }
            </p>
            
        </div>
         
        </>
    )
}

