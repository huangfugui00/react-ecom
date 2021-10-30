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


const ProductDetail = ({product}:productDetailProp) : JSX.Element=> {

    const [comments] = useState(
        [
            {
                username:"jock",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                start:5,
                thumbUrl:"/assests/images/thumb-01.jpg"
            },
            {
                username:"jock2",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                start:5,
                thumbUrl:"/assests/images/thumb-02.jpg"
            },
            {
                username:"jock3",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                start:5,
                thumbUrl:"/assests/images/slide-07.jpg"
            },
            {
                username:"jock4",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                start:5,
                thumbUrl:"/assests/images/product-01.jpg"
            },
            {
                username:"jock5",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                start:5,
                thumbUrl:"/assests/images/slide-07.jpg"
            }
        ] as commentType[]
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
                <TagContent tagButtonSel={tagButtonSel} product = {product} comments={comments}/>
            </div>
            
        </div>
    )

}

export default ProductDetail
