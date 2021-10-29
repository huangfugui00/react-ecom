import './ProductDetail.scss'
import ProductImage from './ProductImage'
import ProductIntro from './ProductIntro'
import TagButtons from './TagButtons'
import TagContent from './TagContent'
import {productType} from '../../App'
import React,{useState} from 'react'

type productDetailProp={
    product:productType
}

export type commentType = {
    username:string,
    content:string,
    start:number,
    thumbUrl:string,
}

export type commentContentType={
    start5:number,
    start4:number,
    start3:number,
    start2:number;
    start1:number;
    comments:commentType[]
}

const ProductDetail = ({product}:productDetailProp) : JSX.Element=> {

    const [commentContent] = useState({
        start5:5,
        start4:4,
        start3:10,
        start2:1,
        start1:0,
        comments:[
            {
                username:"jock",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                start:5,
                thumbUrl:"img"
            },
            {
                username:"jock2",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                start:5,
                thumbUrl:"img"
            },
            {
                username:"jock3",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                start:5,
                thumbUrl:"img"
            },
            {
                username:"jock4",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                start:5,
                thumbUrl:"img"
            },
            {
                username:"jock5",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                start:5,
                thumbUrl:"img"
            }
        ]

    }  as commentContentType
        
    )

    const [tagButtonSel,setTagButtonSel] = useState('description')

    return (
        <div className="product-detail">
            <hr/>
            <div id="product-detail-content" className="row ">
                <div className="col-xl-8">
                    <ProductImage productImgs={product.imgs}/>
                </div>
                <div className="col-xl-4">
                    <ProductIntro product = {product}/>
                </div>
            </div>
            <div id="product-detail-data">
                <TagButtons setTagButtonSel={setTagButtonSel} tagButtonSel={tagButtonSel}/>
                <TagContent tagButtonSel={tagButtonSel} product = {product} commentContent={commentContent}/>
            </div>
            
        </div>
    )

}

export default ProductDetail
