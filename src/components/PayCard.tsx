import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import {Token} from 'react-stripe-checkout'

type payCardProp = {
    price:number,
    payEvent:(token:Token)=>void
}
const PayCard = ({price,payEvent}:payCardProp) => {
    return (
        <div>
             <StripeCheckout
                stripeKey="pk_test_51JuxCuKbxfW8ZS8cPQej3cSP17GkiTuc7DlJXH3m0ymZTGbFeojfTfiaaQjEfMOdjL7QZUGlNfFNxz7Y4Q1pgNCx00KND8nzpT"
                token={payEvent}
                amount= {price*100}
                name="Order"
            />
        </div>
    )
}

export default PayCard
