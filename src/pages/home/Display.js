import {useState,useEffect} from 'react'
import './Display.css'

// nav bar 

const TabsTitle = ({displays,setActiveName})=>{
    return(
        <ul className="nav justify-content-center">
            {displays.map((display,index)=>
                    <li key={index} className="nav-item ">
                        {/* <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target={`#${display.displayName}`} type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button> */}
                        <a className="nav-link display-nav-li" onClick={()=>{setActiveName(display.displayName)}}>{display.displayName}</a>
                    </li>
                )
            }
        </ul>
    )
}

//nav contents

//one img
const TabDisplay = ({displayContent})=>{
    return(
            
             <div className="col-3  ">
                <div className="display-tab-div">
                    <img src={displayContent.img} className="w-100" ></img>
                    <div className="d-flex justify-content-between mt-2">
                    <span className="display-tab-img-intro">{displayContent.intro}</span>
                        <i className="bi-heart display-tab-img-icon" ></i>
                    </div>

                    <div className="d-flex">
                        <span className="display-tab-img-price ">{`$${displayContent.price}`}</span>
                    </div>
                
                </div>
            </div>  
        
    )
}
//tabs->tab->display
const TabContents = ({displays,activeName}) =>{
    return(
        
        displays.map ((display,index)=>
            <div className={`tab-pane fade show ${display.displayName==activeName && 'active' }`} id={display.displayName} role="tabpanel">
                <div className=" row g-0 display-tab m-auto "  key={index}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                         {/* //one Tab */}
                         <div className="carousel-inner">
                             {  display.displayContents.map((displayContent,index)=>
                            //one display
                            <TabDisplay displayContent={displayContent}/>
                            )}
                         </div>
                      
                        
                    </div>
                   
                </div>
            </div>
       
        
        )
    )
}



const Display = ({displays}) => {

    const [activeName,setActiveName] = useState('')
    useEffect(() => {
        setActiveName(displays[0].displayName)
      },[])

    return (
        <div className="text-center p-t-50 sec-product">
            <h2 className="display-title">Store Overview</h2>           
            <TabsTitle displays={displays} setActiveName={setActiveName}/> 
            <div className="tab-content">
                <TabContents displays={displays} activeName={activeName}/>   
            </div>
               
        </div>
    )
}

export default Display
