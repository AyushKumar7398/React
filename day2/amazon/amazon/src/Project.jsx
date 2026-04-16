import "./Project.css"
import Card from './Amazon'

function Product(){
    let title=["logitech Mx Player","Heavy Driver"," Mx Player","logitech Player"];
    let model=["800 DPI","800 DPI","800 DPI","800 DPI",];
    let description=["5 Progreammable Buttons","5 Progreammable Buttons","5 Progreammable Buttons","5 Progreammable Buttons"]
    let old=[1249,125,2495,1235];
    let latest=[8199,8949,899,999];
    return (
        <>
        <h1>Blockbuster Deals on Computer Accessories| Shop now</h1>
        <div className='main'>
            
             <Card  title={title} model={model} description={description} old={old} latest={latest} idx={0} />
             <Card  title={title} model={model} description={description} old={old} latest={latest} idx={1}/>
             <Card  title={title} model={model} description={description} old={old} latest={latest} idx={2}/>
             <Card  title={title} model={model} description={description} old={old} latest={latest} idx={3}/>
        </div>
         
        </>
    )
}

export{Product};