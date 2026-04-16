import { useState } from "react"
import { useFormik } from 'formik';
 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = "username cannot be empty";
   } 
   if (!values.rating) {
     errors.rating = "rating cannot be empty";
   }
   if (!values.remarks) {
     errors.remarks = "remarks cannot be empty";
   }
 
   
   return errors;
 };
export default function CommentsForm({AddNewComment}){
    // let [formData,setFormData]=useState({
    //     username:"",
    //     remarks:"",
    //     rating:5,
    // });
    // let[isvalid,setIsValid]=useState(true);
    const formik = useFormik({
     initialValues: {
          username:"",
          remarks:"",
          rating:5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleInputChange = (event)=>{
    //     setFormData((currData)=>{
    //         return {...currData,[event.target.name]:event.target.value};
    //     })
    // }
     
    // let handleSubmit = (event)=>{
        // if(!formData.username){
        //     console.log("username is null");
        //     setIsValid(false);
        //     event.preventDefault();
        //     return;
        // }
        
    //     console.log(formData);
    //     event.preventDefault();
    //     AddNewComment(formData);
    //     setFormData({
    //         username:"",
    //         remarks:"",
    //         rating:5,
    //     })
    // }

    return(
        <div>
            <h4> Give a comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username :</label>
                <input type="text" placeholder="username" 
                   value={formik.values.username} 
                   onChange={formik.handleChange} 
                   id="username" name="username"/>
                {/* {!isvalid && <p style={{color:"red"}}>Username cannot be empty</p>} */}
                
                {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
                <br /><br /><br /><br />
                <label htmlFor="remarks">Remarks :</label>
                <textarea value={formik.values.remarks} placeholder="Add few remarks" onChange={formik.handleChange} id="remarks" name="remarks"></textarea>
                {formik.errors.remarks ? <p style={{color:"red"}}>{formik.errors.remarks}</p> : null}
                <br /><br /><br /><br />
                <label htmlFor="rating">Rating :</label>
                <input type="number" placeholder="rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} id="rating" name="rating"/>
                {formik.errors.rating ? <div style={{color:"red"}}>{formik.errors.rating}</div> : null}
                <br /><br /><br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}