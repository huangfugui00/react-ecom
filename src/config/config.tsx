const api = 'http://localhost:3001'

const config = {
    api:`${api}`,
    thumb:`${api}/static/thumb`,
    prices:[[0,10],[10,20],[20,50],[50,100],[100]],
    sortTypes:['Popularity','Newness','Average rating','Price:Low to High','Price:High to Low'],
}

export default config