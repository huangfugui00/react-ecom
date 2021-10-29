import React from 'react'
import {commentContentType,commentType} from './ProductDetail'
import './Comments.scss'
type commentsProp ={
    tagButtonSel:string,
    commentContent:commentContentType,
}


type startOverallProp = {
    commentContent:commentContentType
}

const StartOverall = ({commentContent}:startOverallProp)=>{
    return(
        <div className="d-flex gap-4 comments-start-overall">
            <div id="overall-border">
                <p>Overall</p>
                <span>{commentContent.start5}</span>
            </div>
            <div id="overall-reviws">
                <p>Based on {commentContent.comments.length} Reviews</p>   
                <p>5 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/></p>
                <p>4 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/></p>
                <p >3 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/></p>
                <p >2 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/></p>
                <p >1 Start <i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/><i className="bi bi-star-fill"/></p>
            </div>
        </div>
    )
}

type commentListProp = {
    commentList:commentType[]
}
const CommentList = ({commentList}:commentListProp)=>{
    return(
        <div className="comments-commentlist">
            <p>first comment</p>
        </div>
    )
}



const AddComment = ()=>{
    return(
        <div className="comments-addcomment">
            <p>Add a review</p>
        </div>
    )
}



const Comments = ({tagButtonSel, commentContent}:commentsProp) : JSX.Element=> {
    const clickStyle: React.CSSProperties = {}
    const nullStyle: React.CSSProperties = {display:'none'}
    return (
        <div style={tagButtonSel==='comments'?clickStyle:nullStyle} className="row gap-2 comments" >      
            <div className="col">
                <StartOverall commentContent={commentContent}/>
                <CommentList commentList={commentContent.comments}/>  
            </div>
            <div  className="col">
                <AddComment/>
            </div>
        </div>
    )
}

export default Comments
