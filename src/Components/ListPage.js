import React from 'react'
import { useLocation, useParams } from 'react-router'
import BookInListPage from './BookInListPage'

const ListPage = () => {
    const {display_name}=useParams()
    const {state}= useLocation()
    return (
        <div className="listPage">
           <h1>{display_name}</h1> 
           <p className='affiliate'>When you purchase an independently ranked book through our site, we earn an affiliate commission.</p>
           <div>{state.books.map(c=><BookInListPage book={c}/>)}</div>
        </div>
    )
}

export default ListPage
