import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => { 
  const [prevScrollpos, setPrevScrollpos] = useState()
  const [visible, setVisible] = useState(true)
  const handleScroll =  useCallback(
    () => {
            const prev=prevScrollpos
            const current=window.pageYOffset
            setVisible(prev>current);
            setPrevScrollpos(current)
    },[prevScrollpos]
  )
 
        window.addEventListener("scroll", handleScroll)

        useEffect(() => {
            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        }, [handleScroll])
    return (
        <div className={`navBar${visible?  '':' hidden'}`}  >
            <Link to='/'>The NewYork Times</Link>
        </div>
    )
}

export default NavBar
