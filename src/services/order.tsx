import api from './api'

type productType = {
    product:string,
    num:Number,
}


const orderServices = {
    createOrder(products:productType[],deliver:string){
        const data = {
            products,
            deliver   
        }
        return api().post('/order',data)
    },
    updateOrder(id:string,status:string){
        const data={
            status
        }
        return api().put(`/order/${id}`,data)
    },
    getOrder(){
        return api().get('/order')
    }
}

export default orderServices