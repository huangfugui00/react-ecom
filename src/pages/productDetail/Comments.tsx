import React,{useState,useContext} from 'react'
import { useHistory } from 'react-router-dom'
import {commentType} from './ProductDetail'
import config from '../../config/config'
import {userContext} from '../../App'
import commentServices  from '../../services/comment'
import Alert from '../../components/Alert'

import './Comments.scss'


type startOverallProp = {
    comments:commentType[]
}

const StartOverall = ({comments}:startOverallProp)=>{
    const start = comments.map(comment=>comment.star).reduce((a,b)=>a+b,0)/comments.length
    return(
        
            <div className="d-flex gap-4 comments-start-overall" >
                <div id="overall-border">
                    <p id="overall-border-title">Overall</p>
                    <span>{start.toFixed(1)}</span>
                </div>
                <div id="overall-reviws">
                    <h5 id="overall-reviws-title">Based on {comments.length} Reviews</h5>   
                    <span>5 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/> ({comments.filter(comment=>comment.star===5).length}) </span><br/>
                    <span>4 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star"/> ({comments.filter(comment=>comment.star===4).length}) </span><br/>
                    <span>3 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star"/><i className="bi bi-star"/> ({comments.filter(comment=>comment.star===3).length}) </span><br/>
                    <span >2 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star"/><i className="bi bi-star"/><i className="bi bi-star"/> ({comments.filter(comment=>comment.star===2).length}) </span><br/>
                    <span>1 Start <i className="bi bi-star-fill"/><i className="bi bi-star"/><i className="bi bi-star"/><i className="bi bi-star"/><i className="bi bi-star"/> ({comments.filter(comment=>comment.star===1).length}) </span>
                </div>
            </div>
        
    )
}

type commentListProp = {
    comments:commentType[]
}
const CommentList = ({comments}:commentListProp)=>{
    const arr=[1,2,3,4,5]
    return(
        <div className="comments-commentlist">
            {
                comments.map((comment)=>
                <div id="comment-item">
                    <div className="d-flex">
                        <img src={`${config.api}/${comment.thumbUrl}`} alt={comment.username}></img>
                        <div id="comment-username-start">
                            <h4>{comment.username}</h4>
                            {
                                arr.map(x=>
                                    <i className={x<=comment.star?'bi bi-star-fill':'bi bi-star'}></i>)
                            }
                        </div>
                    </div>
                    <p>{comment.content}</p>
                </div>
                )
            }
        </div>
    )
}


type addCommentProp={
    productId:string,
    addCommentEvent:(newComment:commentType)=>void   
}


const AddComment = ({productId,addCommentEvent}:addCommentProp)=>{
    const [alertMessage,setAlertMessage]=useState('')
    const {user} = useContext(userContext)
    const arr = [1,2,3,4,5]
    const [star,setStar] = useState(5)
    const [text,setText] = useState('')
    const history = useHistory();


    const postComment =async (e:React.FormEvent)=>{
      
        if(!user.islogin){
            history.push('/')
        }
        e.preventDefault()
        const data={
            productId:productId,
            text:text,       
            rate:star
        }

        const result = await commentServices.createComment(data)
                        .catch(err=>err)
        if(result.status===1){
            addCommentEvent({username:user.username,thumbUrl:user.avatar,content:text,star:star})
            setAlertMessage('comment have add')
        }
        else{
            setAlertMessage('you have comment in this product')
        }

    }
    return(
        <div className="comments-addcomment">
            <h3>Add a review</h3>
            <span className="d-flex gap-2" >Your Rating:  
               {
                   arr.map(x=>
                    <i className={x<=star?'bi bi-star-fill':'bi bi-star'}
                    onClick={()=>setStar(x)}></i>)
               }
            </span>
            <form onSubmit={postComment}>
                <textarea placeholder="hello" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
                <button>Submit</button>
            </form>
            <Alert message={alertMessage}/>
        </div>
    )
}


type commentsProp ={
    tagButtonSel:string,
    productId:string,
    comments:commentType[],
    addCommentEvent:(newComment:commentType)=>void
}

const Comments = ({tagButtonSel,productId, comments,addCommentEvent}:commentsProp) : JSX.Element=> {
    const clickStyle: React.CSSProperties = {}
    const nullStyle: React.CSSProperties = {display:'none'}
    return (
        <div style={tagButtonSel==='comments'?clickStyle:nullStyle} className="row gap-2 comments" >      
            <div className="col" style={comments.length?clickStyle:nullStyle}>
                <StartOverall comments={comments}/>
                <hr/>
                <CommentList comments={comments}/>  
            </div>
            <div  className="col">
                <AddComment productId={productId} addCommentEvent={addCommentEvent}/>
            </div>
        </div>
    )
}

export default Comments
