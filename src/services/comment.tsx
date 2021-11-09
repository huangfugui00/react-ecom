import api from './api'

const commentServices = {
    createComment(data:object){
        return api().post('/comment',data)    
    },
}


// module.exports = productServices
export default commentServices