import api from './api'

type productType = {
    product:string,
    num:Number,
}
type createOrderProp = {
    products:productType[]
    deliver:string,
}

const orderServices = {
    createOrder({products,deliver}:createOrderProp){
        const data = {
            products,
            deliver
        }
        return api().post('/order',data)
    },
}

export default orderServices