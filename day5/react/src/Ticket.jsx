import TicketNum from "./TicketNum"
import "./Ticket.css"


export default function Ticket({ticket}){
    return(
    <div className="Ticket">
        <p>Tickets</p>
        <br />
       {
        ticket.map((num,idx)=>(
            <TicketNum num ={num} key={idx}/>
        ))
       }
    </div>)
}