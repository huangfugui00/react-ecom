import './Categories.scss'

const Categories = ({categories}) => {
    return (
        <div className='shop-categories '>                     
            <ul className='row'>
                <li className='col'>
                    <a>All</a>
                </li>
                {
                    categories.map((category,index)=>
                        <li className='col' key={index}> 
                            <a>{category}</a>
                        </li>
                    )
                }
            </ul>                 
        </div>
    )
}

export default Categories
