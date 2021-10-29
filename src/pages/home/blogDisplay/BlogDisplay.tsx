import React from 'react'
import './BlogDisplay.scss'
import {blogType} from '../Home'

type blogDivProp= {
    blog:blogType
}
const BlogDiv = ({blog}:blogDivProp) : JSX.Element=>{
    return(
        <div className="blog-div">
            <img src={blog.img} alt={blog.title} className="w-100"/>
            <p>By {blog.author} on {blog.createdAt}</p>
            <h3>{blog.title}</h3>
            <div className="" id="blog-content">
                {blog.content}
            </div>
        </div>  
    )
}




type blogDisplayProp= {
    blogs:blogType[]
}

const BlogDisplay = ({blogs}:blogDisplayProp) : JSX.Element=> {
    return (
        <div className="main">
            <h1>Our Blogs</h1>
            <div className="blogs-div row">          
                {                
                    blogs.slice(0,3).map((blog,index)=> 
                        <div className="col-xl-4 col-md-6" >
                                <BlogDiv blog={blog}/>
                        </div>
                    )
                }     
            </div>
        </div>
    )
}

export default BlogDisplay
