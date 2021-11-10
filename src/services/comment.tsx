import api from './api'

const commentServices = {
    createComment(data:object){
        return api().post('/comment',data)    
    },
}


export default commentServices