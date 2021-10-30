import React from 'react'
import {commentType} from './ProductDetail'
import './Comments.scss'
type commentsProp ={
    tagButtonSel:string,
    comments:commentType[],
}


type startOverallProp = {
    comments:commentType[]
}

const StartOverall = ({comments}:startOverallProp)=>{
    return(
        <div className="d-flex gap-4 comments-start-overall">
            <div id="overall-border">
                <p id="overall-border-title">Overall</p>
                <span>4.2</span>
            </div>
            <div id="overall-reviws">
                <h5 id="overall-reviws-title">Based on {comments.length} Reviews</h5>   
                <span>5 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/> (5) </span><br/>
                <span>4 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star"/> (5)</span><br/>
                <span>3 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star"/><i className="bi bi-star"/> (15)</span><br/>
                <span >2 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star"/><i className="bi bi-star"/><i className="bi bi-star"/> (25)</span><br/>
                <span>1 Start <i className="bi bi-star-fill"/><i className="bi bi-star"/><i className="bi bi-star"/><i className="bi bi-star"/><i className="bi bi-star"/> (0)</span>
            </div>
        </div>
    )
}

type commentListProp = {
    comments:commentType[]
}
const CommentList = ({comments}:commentListProp)=>{
    return(
        <div className="comments-commentlist">
            {
                comments.map((comment)=>
                <div id="comment-item">
                    <div className="d-flex">
                        <img src={comment.thumbUrl} alt={comment.username}></img>
                        <div id="comment-username-start">
                            <h4>{comment.username}</h4>
                            <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/>
                        </div>
                    </div>
                    <p>{comment.content}</p>
                </div>
                )
            }
        </div>
    )
}



const AddComment = ()=>{
    return(
        <div className=" comments-addcomment">
            <h3>Add a review</h3>
            <span className="d-flex gap-4" >Your Rating:  
                <i id="add-rate-1" className="bi bi-star"/>
                <i id="add-rate-2" className="bi bi-star"/>
                <i id="add-rate-3" className="bi bi-star"/>
                <i id="add-rate-4" className="bi bi-star"/>
                <i id="add-rate-5" className="bi bi-star"/>
            </span>
            <form>
                <textarea placeholder="hello "></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}



const Comments = ({tagButtonSel, comments}:commentsProp) : JSX.Element=> {
    const clickStyle: React.CSSProperties = {}
    const nullStyle: React.CSSProperties = {display:'none'}
    return (
        <div style={tagButtonSel==='comments'?clickStyle:nullStyle} className="row gap-2 comments" >      
            <div className="col ">
                <StartOverall comments={comments}/>
                <hr/>
                <CommentList comments={comments}/>  
            </div>
            <div  className="col">
                <AddComment/>
            </div>
        </div>
    )
}

export default Comments
