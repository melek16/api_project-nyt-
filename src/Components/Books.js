import axios from 'axios'
import axiosRetry from 'axios-retry'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetchBooks, handleShowMore } from '../Redux/state'
import List from './List'


export const key='gV2dHOxNVvAOaEBFzBQ3XCCxA3fopALe'
const Books = () => {
    const dispatch = useDispatch()
    const lists = useSelector(state => state.reducer.lists)
    const numberOfLists = useSelector(state => state.reducer.numberOfLists)
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        const fetchBooks= async ()=>{
            axiosRetry(axios, {
                retries: 100,
                retryCondition: (error) => {
                  return error.response.status === 429
                },
                retryDelay: (retryCount) => {
                    return retryCount * 10000;
                  }
              })
            let bookLists=await axios.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${key}`)
            
                dispatch(handleFetchBooks([...bookLists.data.results]))
                setLoader(false)
    }
        fetchBooks()
    }, [dispatch,numberOfLists])
    return (
        <div id="main">
            {loader ? <div className="loader"><Loader type="ThreeDots" color="black" height={80} width={80} /> </div>: null} 
            {
            lists.map((el,i)=>i<numberOfLists?<List display_name={el.display_name} list_name_encoded={el.list_name_encoded} key={i}/>:null)
            } 
            {numberOfLists<=lists.length? <button id="showMore" onClick={()=>dispatch(handleShowMore())}>SHOW MORE</button>:null}
        </div>
    )
}

export default Books
