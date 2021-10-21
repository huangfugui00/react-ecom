import './ProductImage.scss'
import {React,useState,useEffect} from 'react'

const ProductImgLists = ({productImgs})=>{
    return(
        <div className="product-img-lists">
            {
            productImgs.map((productImg)=>
                <img src={productImg} alt={productImg} className="img-click"/>
            )}
        
        </div>
 
    )
}

const ProductImgDisplay = ({productImgs,productImgDisplay})=>{
    return(
        <div id="carouselProducts" class="carousel slide product-img-display" data-bs-ride="carousel">
            {/* {
                productImgs.map((productImg)=>
                    <div class="carousel-inner">
                        <div class={`carousel-item ${productImgDisplay}===${productImg} && active`}>
                            <img src={productImg} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                )
            } */}
            <div class="carousel-inner">
                <div class='carousel-item active'>
                    <img src='../../assests/images/product-detail-02.jpg' class="d-block w-100" alt="..."/>
                </div>
                <div class='carousel-item'>
                    <img src='../../assests/images/product-detail-03.jpg' class="d-block w-100" alt="..."/>
                </div>
            </div>
            <i class="bi bi-arrows-angle-expand"></i>
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
    return (
        <div className="row product-image">
            <div className="col-1" >
                <ProductImgLists productImgs={productImgs} />
            </div>
            <div className="col">
                <ProductImgDisplay productImgs={productImgs}/>
            </div>
        </div>
    )
}

export default ProductImage
