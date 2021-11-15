import React,{useState,useEffect,useContext} from 'react'
import {userContext} from '../App'
import { useHistory } from 'react-router-dom'
import './favorite.scss'
import favoriteServices from '../services/favorite'
type favoriteProp = {
    productId: string
}

const Favorite = ({productId}:favoriteProp) => {
    const history=useHistory()
    const {user} = useContext(userContext)
    const [favoriteId,setFavorite] = useState('')
    useEffect(() => {
        const checkFavrote = async()=>{
            const result = await favoriteServices.checkFavorite(productId)
            setFavorite('')
            if(result.status===1){
                if(result.data.exist){
                    setFavorite( result.data.favorite._id)
                }
            }
        }
        if(productId!==undefined && user.islogin){
            checkFavrote()
        }
    }, [productId])
    

    const unFavoriteEvent = async()=>{
        if(!user.islogin){
            history.push('/')
        }
        const result = await  favoriteServices.unFavorite(favoriteId)    
        if(result.status===1){
            setFavorite('')
        }
    }

    const favoriteEvent = async()=>{
       if(!user.islogin){
            history.push('/')
        }
        const result = await  favoriteServices.createFavorite(productId)    
        if(result.status===1){
            setFavorite( result.data._id)
        }
    }

    return (
        <div className="favorite-icon">
            {favoriteId===''?<i className="bi bi-heart" onClick={favoriteEvent}/>:<i className="bi bi-heart-fill" onClick={unFavoriteEvent}/>}
        </div>
    )
}

export default Favorite
