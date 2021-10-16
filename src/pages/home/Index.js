import { useState } from 'react';
import Header from '../../components/Header'
import Slider from './Slider'
import Banner from './Banner'
import Display from './Display'

const Index = () => {
    const [sliderPics] = useState(
        [{
            img:"/assests/images/slide-02.jpg",
          
        },
        {
            img:"/assests/images/slide-03.jpg",
            active:true
        },
        {
            img:"/assests/images/slide-04.jpg",
         
        }
    ])

    const [banners] = useState(
        [{
            img:"/assests/images/banner-04.jpg",
 
        },
        {
            img:"/assests/images/banner-05.jpg",
  
        },
        {
            img:"/assests/images/banner-06.jpg",
        
        }
    ])

    const [displays] = useState(
        [
        {
            displayName:"Best Seller",
            displayContents:[
                {
                    img:"/assests/images/product-01.jpg",
                    intro: "Esprit Ruffle Shirt",
                    price:"16.64",
                },
                {
                    img:"/assests/images/product-02.jpg",
                    intro: "Herschel supply",
                    price:"35.31",
                },
                {
                    img:"/assests/images/product-03.jpg",
                    intro: "Herschel supply",
                    price:"24.23",
                },
                {
                    img:"/assests/images/product-06.jpg",
                    intro: "Herschel supply",
                    price:"24.23",
                },
                {
                    img:"/assests/images/product-08.jpg",
                    intro: "Herschel supply",
                    price:"21.23",
                },
                
            ]
        },
        {
            displayName:"Top Rate",
            displayContents:[
                {
                    img:"/assests/images/product-11.jpg",
                    intro: "Esprit Ruffle Shirt",
                    price:"16.64",
                },
                {
                    img:"/assests/images/product-12.jpg",
                    intro: "Herschel supply",
                    price:"35.31",
                },
                {
                    img:"/assests/images/product-13.jpg",
                    intro: "Herschel supply",
                    price:"24.23",
                },
                {
                    img:"/assests/images/product-16.jpg",
                    intro: "Herschel supply",
                    price:"24.23",
                },
                {
                    img:"/assests/images/product-14.jpg",
                    intro: "Herschel supply",
                    price:"21.23",
                },
                {
                    img:"/assests/images/product-15.jpg",
                    intro: "Herschel supply",
                    price:"1.23",
                },
                
            ]
        },
        {
            displayName:"Man",
            displayContents:[
                {
                    img:"/assests/images/product-04.jpg",
                    intro: "Esprit Ruffle Shirt",
                    price:"16.64",
                },
                {
                    img:"/assests/images/product-05.jpg",
                    intro: "Herschel supply",
                    price:"35.31",
                },
            ]
        }
    ])

    return (
        <div>
            <Header/>
            <Slider sliderPics={sliderPics}/>
            <Banner banners={banners}/>
            <Display displays={displays}/>
        </div>
    )
}

export default Index
