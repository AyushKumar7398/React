function Click(){
    console.log("Button was clicked");
}

function Bye(){
    console.log("bye");
}
function DblClicked(){
    console.log("Button is clicked double times");
}

function Button(){
    return (
        <>
          <div>
            <button onClick={Click}>Click me!</button>
            <p onMouseOver={Bye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequatur magni perspiciatis asperiores quasi fuga odio quae est reprehenderit, maiores neque vel, debitis voluptatum! Accusamus aliquam ducimus odit ex sequi!</p>

            <button onDoubleClick={DblClicked}>DoubleClick me!</button>
          </div>
        </>
    )
}
export {Button}