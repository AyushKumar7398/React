import Ludo from "./ludo";
import "./Borad.css"
function Board(){
    let color=["blue" ,"yellow","green","red"]
    return(
        <>
          <div className="board">
            
            <Ludo color={color} title="blue" idx={0}/>
            <Ludo color={color} title="blue" idx={1}/>
            <Ludo color={color} title="blue" idx={2}/>
            <Ludo color={color} title="blue" idx={3}/>
          </div>
        </>
    )

}

export default Board;