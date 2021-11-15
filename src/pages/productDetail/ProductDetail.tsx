import React,{useState,useEffect} from 'react'
import { RouteComponentProps,Redirect} from "react-router-dom";
import ProductImage from './ProductImage'
import ProductIntro from './ProductIntro'
import TagButtons from './TagButtons'
import TagContent from './TagContent'
import BestSeller from './BestSeller'
import {productType} from '../../App'
import productServices from '../../services/product'
import './ProductDetail.scss'


type productDetailProp={
    id:string
}

export type commentType = {
    username:string,
    content:string,
    star:number,
    thumbUrl:string,
}


const ProductDetail = ({ match,history }: RouteComponentProps<productDetailProp>) : JSX.Element=> {
    useEffect(() => {
        const fetchProduct = async()=>{
            let result = await productServices.getProduct(match.params.id)
                .catch(err=>err)
            if(result.status===0){
               return history.replace('/')
            }
            const product = result.data
            product.category = product.category?product.category.title:''
            setProduct(product)

            result = await productServices.getProducts(product.category?`category=${product.category}`:'')
                .catch(err=>err)
            if(result.status===1){
                setBestSellers(result.data)
            }
           
            //to comments
            for(let i = 0 ;i< product.comments.length;i++){
                product.comments[i].username =  product.comments[i].userId.username
                product.comments[i].thumbUrl =  product.comments[i].userId.avatar
                product.comments[i].star = product.comments[i].rate
                product.comments[i].content = product.comments[i].text
            }
            setComments(product.comments)
            //to BestSellers
        }
        
        fetchProduct()

        
    }, [])

    const [product,setProduct] = useState({} as productType)

    const [comments,setComments] = useState(
        [] as commentType[]
    )

    const [bestSellers,setBestSellers]= useState( [] as productType[])

    const [tagButtonSel,setTagButtonSel] = useState('comments')

    const addCommentEvent = (comment:commentType)=>{
        setComments([...comments,comment])
    }

    return (
        <div className="product-detail ">
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
                <TagContent tagButtonSel={tagButtonSel} product = {product} comments={comments} addCommentEvent={addCommentEvent}/>
            </div> 
            <div id="product-detail-best-seller">
                <BestSeller bestSellers={bestSellers}/>
            </div>    
        </div>
    )

}

export default ProductDetail
