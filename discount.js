/*
if ticket number is less then 100, per ticket price is 100.
if ticket number is more then 100 but less then 200, first 100 ticket will be 100/ticket and rest ticket will be 90 taka per piece.
if you parches more then 200 tickets:
       100-----100tk,
       101-200-----90tk,
       200+--------70tk.
*/

function ticketPrice(ticketQuantity){
    const first100Ticket = 100;
    const second100Ticket = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Ticket;
        return price;
    } 
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Ticket;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Ticket;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Ticket;
        const second100Price = 100 * second100Ticket;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        return restTicketPrice;
    }
}

const totalTicketPrice = ticketPrice(203);
console.log(totalTicketPrice);