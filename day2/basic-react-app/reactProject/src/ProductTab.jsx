import { Product } from "./Product.jsx";
function ProductTab(){
    //let option1= [<li>"hii-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];
    // let option2= {a:"hii-tech",b:"durable",c:"fast"};
    let option1= ["hii-tech","durable","fast"];
    // return (
    //     <div>
    //         {/* <Product title="phone" price={2000} features1={option1} features2={option2}/> */}
    //        
    //         <Product title="phone" price={2000} features1={option1} />
    //         {/* <Product title="Earphone" price={123}/>
    //         <Product title="claci" price={200}/> */}
    //         {/* <Product title="pen" price={2000} features1={["lasting","rough","tough"]} features2={{a:"best"}}/> */}

    //     </div>
        
        
        
    // )

      return (
        <div>
             <Product title="hello" color="pink"/> 
            <Product title="hello"  color="yellow" />
            <Product title="hello"  color="brown" />
            {/* <Product title="Earphone" price={123}/>
            <Product title="claci" price={2200}/> 
           <Product title="car" price={200000000} /> */}

        </div>
        
        
        
    )
}
export default ProductTab;