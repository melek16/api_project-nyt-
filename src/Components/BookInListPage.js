import React from 'react'

const BookInListPage = ({book}) => {
    const {book_image,rank,description,contributor,title,rank_last_week,weeks_on_list,buy_links,publisher,sunday_review_link}=book
    const showBuy=(target)=>{
        target.style.display= target.style.display==='block'? 'none':'block'
    }
    const hideOnBlur=(target)=>{
        setTimeout(
            e=>{
                target.style.display='none'
            }
            ,100)
    }
    return (
        <div className="BookInListPage">
            <div className="BookInfo">
                <p className='rank'>{rank}</p>
               
                <p style={{fontSize:11,fontFamily:'nyt-franklin,helvetica,arial,sans-serif'}}>{rank_last_week ? `${weeks_on_list} WEEKS ON THE LIST` :"NEW THIS WEEK"}</p>
                <h6>{title}</h6>
                <p>{contributor}<span style={{fontWeight:400,color:'rgb(129, 128, 128)',margin:'0 2px'}}>|</span>{publisher}</p>
                <p className='description'>{description}</p>
                <div className='btnDiv'>
                <button onClick={e=>showBuy(e.target.nextSibling)} onBlur={e=>hideOnBlur(e.target.nextSibling)}>BUY <span style={{fontSize:18}}> &#x25BE;</span></button>
          <ul>
             {buy_links.map((c,i)=><li key={i}><a href={c.url} target="_blank" rel="noreferrer">{c.name}</a></li>)} 
          </ul>
          {sunday_review_link?<a href={sunday_review_link} target="_blank" rel='noreferrer'>Read Review</a>:null}
                </div>
               
            </div>
            <img alt="" src={book_image} height="135" width="90"/>
        </div>
    )
}

export default BookInListPage
