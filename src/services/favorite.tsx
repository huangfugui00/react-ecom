// const api = require('./api')
import api from './api'

const favoriteServices = {
    getFavorites(){
        return api().get('/favorite')
    },
    checkFavorite(productId:string){
        const data ={
            productId
        }
        return api().post('/favorite/check',data)    
    },
    unFavorite(productId:string){
        return api().delete(`/favorite/${productId}`)
    },
    createFavorite(productId:string){
        const data = {
            productId
        }
        return api().post('/favorite',data)
    },
}

export default favoriteServices