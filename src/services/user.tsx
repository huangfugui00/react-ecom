// const api = require('./api')
import api from './api'

const userServices = {
    register(username:string,email:string,password:string){
        const data={username,email,password}
        return api().post('/user',data)
    },
    login(email:string,password:string){
        const data={email,password}
        return api().post('/user/login',data)
    },
    getMe(){
        return api().get('/user/me')
    }

}


export default userServices