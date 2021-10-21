/* eslint-disable jsx-a11y/anchor-is-valid */
import './Categories.scss'

const Categories = ({categories,categorySel,clickCategorySelEvent}) => {
    return (
        <div className='shop-categories'>                     
            <ul className='row'>
                <li className='col' key='All' style={{'text-decoration':  'All'===categorySel && 'underline'}}>
                    <a onClick={()=>clickCategorySelEvent('All')}>All</a>
                </li>
                {
                    categories.map((category)=>
                        <li className='col' key={category}  style={{'text-decoration': category===categorySel && 'underline'  }}> 
                            <a  onClick={()=> clickCategorySelEvent(category)}>{category}</a>
                        </li>
                    )
                }
            </ul>                 
        </div>
    )
}

export default Categories
