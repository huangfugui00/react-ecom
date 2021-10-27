import {useState,useEffect} from 'react'
import './Display.scss'
import {displayType,displayContentType} from './Index'

// nav bar 
type tabsTitleProp={
    displays:displayType[],
    setActiveName: (name: string) => void;
}

const TabsTitle = ({displays,setActiveName}:tabsTitleProp)=>{
    return(
        <ul className="nav justify-content-center display-ui">
            {displays.map((display,index)=>
                    <li key={index} className="nav-item ">
                        <a className="nav-link display-nav-li" onClick={()=>{setActiveName(display.displayName)}}>{display.displayName}</a>
                    </li>
                )
            }
        </ul>
    )
}

//nav contents

//one img
type  tabDisplayProp = {
    displayContent:displayContentType
}

const TabDisplay = ({displayContent}:tabDisplayProp)=>{
    return(
           
        <div className=" col-xl-3 col-md-6" >
            <div className="display-tab-div">
                <div className="display-tab-image d-flex flex-columm justify-content-center">
                    <img src={displayContent.img} className="w-100" alt={displayContent.intro}></img>  
                    <a href="/#" >
                        Quick View
                    </a>
                </div>
                
                <div className="d-flex justify-content-between mt-2">
                <span className="display-tab-img-intro"><a>{displayContent.intro}</a></span>
                    <i className="bi-heart display-tab-img-icon" ></i>
                </div>

                <div className="d-flex">
                    <span className="display-tab-img-price ">{`$${displayContent.price}`}</span>
                </div>
            
            </div>
        </div>             
        
    )
}

type tabContentsProp = {
    displays:displayType[],
    activeName:string,
}
//tabs->tab->display
const TabContents = ({displays , activeName}:tabContentsProp):JSX.Element =>{
    
    const carousels = (displayContents:displayContentType[])=>{
        const num =Math.ceil( displayContents.length/4);
        var indents = [];
        for(let i = 0;i<num;i++){
            indents.push( <div className={`carousel-item  ${i==0 && 'active'} ` }>
                    <div className='row'>
                        {displayContents.slice(i*4,(i+1)*4).map((displayContent,index)=>
                                            //one display
                                            <TabDisplay displayContent={displayContent}/>
                                            )}
                    </div>               
                </div>
            )
        }
        return indents
    }

    return(
        <div>
            {   displays.map ((display,index)=>
                <div className={`tab-pane fade show ${display.displayName==activeName && 'active' }`} id={display.displayName} role="tabpanel">
                    <div className="display-tab m-auto "  key={index}>
                        <div id={`carousel${index}`} className="carousel slide" data-ride="carousel">
                            {/* //one Tab */}
                            <div className="carousel-inner">
                                {carousels(display.displayContents)}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next " type="button" data-bs-target={`#carousel${index}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button> 
                        </div>
                    </div>
                </div>
            )}
        </div>
     
    )
}


type displayProp={
    displays:displayType[]
}


const Display = ({displays}:displayProp) => {
    const [activeName,setActiveName] = useState('')

    useEffect(() => {
        if(typeof(displays) !== "undefined"){
            setActiveName(displays[0].displayName);
        } 
      },[])

    return (
        <div className="text-center display">
            <h2 className="display-title">Store Overview</h2>           
            <TabsTitle displays={displays} setActiveName={setActiveName}/> 
            <div className="tab-content">
                <TabContents displays={displays} activeName={activeName}/>   
            </div>
               
        </div>
    )
}

export default Display
