// const api = require('./api')
import api from './api'

const productServices = {
    getProducts(param:string=''){
        if(param){
            return api().get(`/product?${param}`)
        }
        return api().get(`/product?${param}`)
       
    },
    getProduct(id:string){
        return api().get(`/product/${id}`)
    }
}


// module.exports = productServices
export default productServices