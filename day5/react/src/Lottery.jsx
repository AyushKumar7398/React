import Button from "./button";
import { genTicket,sum } from "./helper";
import "./lottery.css"
import Ticket from "./Ticket";

import { useState } from "react"

export default function Lottery({n=3,winCondition}){
    
    let [ticket,setTicket]= useState(genTicket(n));
    let isWinning=winCondition(ticket);
    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }

    return (
        
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <Ticket ticket={ticket} />
                
            </div>
            <Button action={buyTicket}/>
            
            <h3>{isWinning && "congratulation, you won! "}</h3>
        </div>
        
    )
}