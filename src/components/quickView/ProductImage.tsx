import './ProductImage.scss'
import React, {useState,useEffect} from 'react'
import config from '../../config/config'
// import Products from '../shop/Products'
type productImgListsProp={
    productImgs?:string[],
    productImgDisplay:string,
    clickProductImgEvent:(productImgDisplay:string)=>void,
}


const ProductImgLists = ({productImgs,productImgDisplay,clickProductImgEvent}:productImgListsProp): JSX.Element=>{
    if(productImgs!==undefined){
        return(
            <div className="product-img-lists">
                {
                    productImgs.map((productImg)=>
                    <img  src={`${config.api}/${productImg}`} alt={productImg} 
                    className={`${productImgDisplay===productImg   &&'img-click'}`}
                    onClick={()=>{clickProductImgEvent(productImg)}}
                    />
                )}        
            </div>
        )
    }
    return(
        <></>
    )
  
}



type productImgDisplayProp = {
    productImgDisplay:string,

}

const ProductImgDisplay = ({productImgDisplay}:productImgDisplayProp)=>{
    return(
        <div>
            <div className="product-img-display">
                <img src={`${config.api}/${productImgDisplay}`}  alt="..."/>
            </div>
        </div>
    )
}


type productImageProp ={
    productImgs?:string[]
} 

const ProductImage = ({productImgs}:productImageProp) => {

    useEffect(() => {
        if(productImgs&&productImgs.length>0){
            setProductImgDisplay(productImgs[0])    
        }
    }, [productImgs])
   
    const [productImgDisplay,setProductImgDisplay] = useState('')

    const clickProductImgEvent = (imgToDisplay:string)=>{
        setProductImgDisplay(imgToDisplay)
    }

    return (
        <div className="row product-image">
            <div className="col-1" >
                <ProductImgLists 
                productImgs={productImgs} 
                productImgDisplay={productImgDisplay} 
                clickProductImgEvent={clickProductImgEvent}
                />
            </div>
            <div className="col-10">
                <ProductImgDisplay 
                productImgDisplay={productImgDisplay} 
                />
            </div>
        </div>
    )
}

export default ProductImage
