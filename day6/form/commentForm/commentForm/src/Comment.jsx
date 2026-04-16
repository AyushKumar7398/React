import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./CommentsForm";
export default function Comment(){
    let [comments,setComments]=useState([{
        username:"@ask",
        remarks:"great job",
        rating:4
    }]);

    let  AddNewComment=(comment)=>{
        setComments((currComments)=>[...currComments,comment])
        console.log("added");
    }
    return (
        <>
        <div>
            <h3>All comment</h3>
            {comments.map((comments,idx)=>(
                <div className="comment" key={idx}>
                    <span>{comments.remarks}!</span>
                     &nbsp;
                    <span>(rating={comments.rating})</span>
                    <p>{comments.username}</p>
                </div>
            ))}
            
        </div>
        
        <CommentsForm AddNewComment={AddNewComment}/>
      </> 
    );
    
}