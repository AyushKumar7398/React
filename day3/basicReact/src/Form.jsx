function Submit(event){
    // event.preventDefault();
    console.log("Form is submitted");
}
function Form(){
    return(
        <>
            <form onSubmit={Submit}>
                <input type="text" placeholder="Enter your text "/>
                <button>Submit</button>
                
            </form>
        </>
    )
}
export default Form;