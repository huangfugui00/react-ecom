import './ProductImage.scss'
import React, {useState} from 'react'

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
                    <img  src={productImg} alt={productImg} 
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
        <div  className=" product-img-display">
            <div>
                <img src={productImgDisplay} className="d-block w-100" alt="..."/>
            </div>
        </div>
    )
}


type productImageProp ={
    productImgs?:string[]
} 

const ProductImage = ({productImgs}:productImageProp) => {
  
    const initValue = productImgs!==undefined?productImgs[0]:""
    const [productImgDisplay,setProductImgDisplay] = useState(initValue)

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
