import './Banner.scss'
import {bannerType} from '../Home'

type bannerItemProps = {
    banner:bannerType
}

const BannerItem = ({banner}:bannerItemProps) : JSX.Element =>{
    return(
        <div className="bannner-item-container"  >
            <img src={banner.img} alt="IMG-BANNER" className="w-100"/>
            <a href="product.html" className="banner-item-a  row justify-content-between">
                <div className="d-flex flex-column">
                    <span className="banner-item-content-category">
                        Women
                    </span>

                    <span className="banner-item-content-intro ">
                        Spring 2018
                    </span>
                </div>
               
                <div className="banner-item-content-shop">
                    Shop Now
                </div>       
            </a>
        </div>
    )
}





type bannerProps = {
    banners:bannerType[],
}

const Banner = ({banners}:bannerProps): JSX.Element=> {
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
