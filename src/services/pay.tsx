import api from './api'
import {Token} from 'react-stripe-checkout'
const payServices = {
    handleToken(token:Token,price:number){
        return api().post('/pay',{token,price})    
    },
}

export default payServices