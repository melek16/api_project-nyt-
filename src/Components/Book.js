import React from 'react'

const Book = ({book}) => {
    const {book_image,rank,description,contributor,title,rank_last_week,weeks_on_list,buy_links}=book
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
        <div className="book">
            <div className="book_image">
            <p>{rank}</p>
          <img alt="" src={book_image} height="170" width="112"/> 
          </div>
          <p style={{fontSize:11,fontFamily:'nyt-franklin,helvetica,arial,sans-serif'}}>{rank_last_week ? `${weeks_on_list} WEEKS ON THE LIST` :"NEW THIS WEEK"}</p>
          <h6>{title}</h6>
          <p>{contributor}</p>
          <p className="description">{description}</p> 
          <button onClick={e=>showBuy(e.target.nextSibling)} onBlur={e=>hideOnBlur(e.target.nextSibling)}>BUY <span style={{fontSize:18}}> &#x25BE;</span></button>
          <ul>
             {buy_links.map((c,i)=><li key={i}><a href={c.url} target="_blank" rel="noreferrer">{c.name}</a></li>)} 
          </ul>
          </div>
    )
}

export default Book
