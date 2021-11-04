const api = require('./api')

const productServices = {
    getProducts(){
        return api().get('/product')
    },
}

module.exports = productServices
