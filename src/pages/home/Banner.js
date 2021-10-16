import './Banner.css'

const BannerItem = ({banner})=>{
    return(
        <div className="bannner-item-container"  >
            <img src={banner.img} alt="IMG-BANNER" className="w-100"/>
            <a href="product.html" class="banner-item-a  row justify-content-between">
                <div class="d-flex flex-column">
                    <span class="banner-item-content-category">
                        Women
                    </span>

                    <span class="banner-item-content-intro ">
                        Spring 2018
                    </span>
                </div>
               
                <div class="banner-item-content-shop">
                    Shop Now
                </div>       
            </a>
        </div>
    )
}


const Banner = ({banners}) => {

    return (
        <div className="row g-0">
            {banners.map((banner,index) =>
                <div key={index} className="col-lg-6 col-xxl-4">
                    <BannerItem banner={banner} />   
                </div>        
            )}
        </div>
    )
}

export default Banner
