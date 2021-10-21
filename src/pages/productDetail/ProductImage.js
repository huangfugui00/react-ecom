import './ProductImage.scss'
import {React,useState,useEffect} from 'react'

const ProductImgLists = ({productImgs,productImgDisplay,clickProductImgEvent})=>{
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

const ProductImgDisplay = ({productImgs,productImgDisplay,clickProductImgEvent})=>{
    return(
        <div id="carouselProducts" class="carousel slide product-img-display" data-bs-ride="carousel">
             <div class="carousel-inner">
                {
                    productImgs.map((productImg)=>
                            <div key={productImg} class={`carousel-item ${productImgDisplay===productImg && 'active'}`}>
                                <img src={productImg} class="d-block w-100" alt="..."/>
                            </div>
                    )
                }
               </div>
   
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselProducts" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Prev</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselProducts" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

const ProductImage = ({productImgs}) => {
    const [productImgDisplay,setProductImgDisplay ] = useState(productImgs[0])

    const clickProductImgEvent = (imgToDisplay)=>{
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
            <div className="col">
                <ProductImgDisplay 
                productImgs={productImgs}
                productImgDisplay={productImgDisplay} 
                clickProductImgEvent={clickProductImgEvent}
                />
            </div>
        </div>
    )
}

export default ProductImage
