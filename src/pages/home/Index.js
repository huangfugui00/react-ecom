import { useState } from 'react';
import Header from '../../components/Header'
import Slider from './Slider'
import Banner from './Banner'
import Display from './Display'
import BlogDisplay from './BlogDisplay'
import Footer from '../../components/Footer'
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

    const [blogs] = useState([
        {
            author:"Tom",
            img:"/assests/images/blog-01.jpg",
            createdAt:"July 22, 2017 ",
            title:"8 Inspiring Ways to Wear Dresses in the Winter",
            content:"Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames;Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames.Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames"
        },
        {
            author:"Carrei",
            img:"/assests/images/blog-02.jpg",
            createdAt:"Mon 15, 2018 ",
            title:"8 Inspiring Ways to Wear Dresses in the Winter",
            content:"Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames;Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames.Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames"
        },
        {
            author:"Sally",
            img:"/assests/images/blog-03.jpg",
            createdAt:"Thu 23, 2017 ",
            title:"8 Inspiring Ways to Wear Dresses in the Winter",
            content:"Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames;Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames.Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames"
        }
    ])

    const [contact] = useState(
        {
            phone:"123456",
            address:"广州市番禺区"
        }
    )
    return (
        <div>
            <Header/>
            <Slider sliderPics={sliderPics}/>
            <Banner banners={banners}/>
            <Display displays={displays}/>
            <BlogDisplay blogs={blogs}/>
            <Footer contact={contact}/>
        </div>
    )
}

export default Index
