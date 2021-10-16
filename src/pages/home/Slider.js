import React from 'react'
import './Slider.css';


const SlideContents = ()=>{
    return(
        <div class="my-padding row h-100  align-content-center  gap-4">
            <div class="">
                <span class="item-slick-male">
                    Men New-Season
                </span>
            </div>
                
            <div class="">
                <h2 class="item-slick-category">
                    Jackets & Coats
                </h2>
            </div>
                
            <div class="mt-4">
                <a href="product.html" class="item-slick-shop ">
                    Shop Now
                </a>
            </div>
        </div>
   
    )
}

const Slider = ({sliderPics}) => {
    const slideItems= sliderPics.map((sliderPic,index) =>
        <div key={index}
            className={`carousel-item ${sliderPic.active && 'active' } item-slick `}  
            style={{backgroundImage: `url(${sliderPic.img}) `}}
            >        
            <SlideContents/>
        </div>        
    );


    return (
        
        <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-inner ">
                {slideItems}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider
