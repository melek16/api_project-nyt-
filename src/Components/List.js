import axios from 'axios'
import axiosRetry from 'axios-retry'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import Book from './Book'
import { key } from './Books'

const List = ({display_name,list_name_encoded}) => {
        const [books, setBooks] = useState([])
        const [loader, setLoader] = useState(true)
       
useEffect(() => {
  const fetchBooksperList=async()=>{
    axiosRetry(axios, {
        retries: 100,
        retryCondition: (error) => {
          return error.response.status === 429
        },
        retryDelay: (retryCount) => {
            return retryCount * 5000;
          }
      })
      const res=await  axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${list_name_encoded}.json?api-key=${key}`)
         
          setBooks([...res.data.results.books])
          setLoader(false)
  }
  fetchBooksperList()
}, [list_name_encoded])
    return (
        <div className="list_with_title">
            <h1><Link to={{pathname:`/lists/${display_name}`,state:{books:[...books]}}}> {display_name}</Link> &#x276F;</h1>
            {loader? <div className="loader"><Loader type="ThreeDots" color="black" height={80} width={80} /> </div>: null}
          <div className='list'>
            {
                books.map((c,i)=>i<5?<Book book={c} key={i}/>:null)
            }
            </div>
            <p className='affiliate'>When you purchase an independently ranked book through our site, we earn an affiliate commission.</p>
        </div>
    )
}

export default List
