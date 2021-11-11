import api from './api'
import {cartProductType} from '../pages/shopCart/ShopCart'

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

    getCart(){
        return api().get('/cart');
    },

    syncCart(cartProducts:cartProductType[]){
        const data = cartProducts.map(cartProduct=>{return {id:cartProduct.product._id,numInCart:cartProduct.numInCart}})
        return api().put('/cart',{data:data})
    }


}


export default cartServices