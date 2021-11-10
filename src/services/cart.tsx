import api from './api'

const cartServices = {
    addToCart(productId:string,numToCart:number){
        const data ={
            productId,
            numToCart,
        }
        return api().post('/cart',data)    
    },

    deleteFromCart(productId:string){
        return api().delete(`/cart/${productId}`)
    },

    getCarts(){
        return api().get('/cart');
    }
}


export default cartServices