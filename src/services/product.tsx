// const api = require('./api')
import api from './api'

const productServices = {
    getProducts(){
        return api().get('/product')
    },
}

// module.exports = productServices
export default productServices