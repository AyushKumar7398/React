import("./Product.css")
import Icon from "./Icon";

// function Product({title,price=1, features1,features2}){
// function Product({title,price=1, features1}){
//     let list=features1.map((feature)=><li>{feature}</li>)
//     return (
//         <div className="Product">
//             { <div className="icon"><Icon></Icon></div> }
//             <div className="Text">
//                 <h3>{title}</h3>
//                 <h5 id="h5">Price:{price}</h5>
//                 {/* <p>{features1}</p> it is for simple array string procedure */}
//                 {/* <p>{features2.a}</p>  it is used for map*/}
//                 <p>{list}</p>
                
//             </div>
            
//         </div>
//     )
// }

// function Product({title,price=1}){
//        
//     if(price>=30000){
//         return (
//         <div className="Product" >
//             { <div className="icon"><Icon></Icon></div> }
//             <div className="Text">
//                 <h3>{title}</h3>
//                 <h5 id="h5">Price:{price}</h5>
//                 {/* <p>{features1}</p> it is for simple array string procedure */}
//                 {/* <p>{features2.a}</p>  it is used for map*/}
//                 <p>Discount of 5%</p>
                
//             </div>
            
//         </div>
//     );
//     }
//     else{
//          return (
//         <div className="Product">
//             { <div className="icon"><Icon></Icon></div> }
//             <div className="Text">
//                 <h3>{title}</h3>
//                 <h5 id="h5">Price:{price}</h5>
//                 {/* <p>{features1}</p> it is for simple array string procedure */}
//                 {/* <p>{features2.a}</p>  it is used for map*/}
                
                
//             </div>
            
//         </div>
//     );

//     }

// }

function Product({title,price=1}){
    let isDiscount=price>=30000;
    let styles= {backgroundColor :isDiscount?"pink":null};
    return (
        <div className="Product" style={styles}>
            { <div className="icon"><Icon></Icon></div> }
            <div className="Text">
                <h3>{title}</h3>
                <h5 id="h5">Price:{price}</h5>
                
                {/* {price>30000 ? <p>"dicount of 5%" </p>:<a href="/">Get discount</a>} */}
                {/* {price>30000 ? <p>"dicount of 5%" </p>:null} */}
                 {isDiscount && <p>dicount of 5%</p>}
                
            </div>
            
        </div>
    )
}
   

// export { Product};

// function Product({title,color}){
   
//     let styles= {backgroundColor :color};
//     return (
//         <div className="Product" style={styles}>
            
//             <div className="Text">
//                 <h3>{title}</h3>
               
                
//             </div>
            
//         </div>
//     )
// }
   

export { Product};