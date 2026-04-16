import("./Product.css")
import Icon from "./Icon";

function Product(){
    return (
        <div className="Product">
            { <div className="icon"><Icon></Icon></div> }
            <div className="Text">
                <h3>Product title</h3>
                <h5 id="h5">Product  Description</h5>
                
            </div>
            
        </div>
    )
}

export { Product};