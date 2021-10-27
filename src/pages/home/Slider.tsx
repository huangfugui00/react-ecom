import React from 'react'
import {sliderPicType} from './Index'
import './Slider.css';


const SlideContents = (): JSX.Element=>{
    return(
        <div className="my-padding row h-100  align-content-center  gap-4">
            <div className="">
                <span className="item-slick-male">
                    Men New-Season
                </span>
            </div>
                
            <div className="">
                <h2 className="item-slick-category">
                    Jackets & Coats
                </h2>
            </div>
                
            <div className="mt-4">
                <a href="product.html" className="item-slick-shop ">
                    Shop Now
                </a>
            </div>
        </div>
   
    )
}

type sliderProp = {
    sliderPics:sliderPicType[]
}
const Slider = ({sliderPics}:sliderProp) => {
    
    const slideItems= sliderPics.map((sliderPic,index) =>
        <div key={index}
            className={`carousel-item ${sliderPic.active && 'active' } item-slick `}  
            style={{backgroundImage: `url(${sliderPic.img}) `}}
            >        
            <SlideContents/>
        </div>        
    );


    return (
        
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner ">
                {slideItems}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider
