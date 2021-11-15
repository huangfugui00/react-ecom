// const api = require('./api')
import api from './api'



const deliverServices = {
    createDeliver(address:string,person:string,phone:string){
        const data = {
            address,
            person,
            phone
        }
        return api().post('/deliver',data)
    },
    getDefaultDeliver(){
        return api().get('/deliver?default=true')
    },
    updateDeliver(id:string,address:string,person:string,phone:string){
        const body  = {
            address,
            person,
            phone
        }
        return api().put(`/deliver/${id}`,body)
    }
}

export default deliverServices