import api from './api'

type productType = {
    product:string,
    numInCart:Number,
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
    },
    deleteOrder(id:string){
        return api().delete(`/order/${id}`)
    }
}

export default orderServices