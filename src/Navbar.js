import React from 'react'
import { Link } from 'react-router-dom'
import { linkbutton } from './PredefinedClasses'
function Navbar() {
    return (
        <div className='shadow-lg top-0 left-0 sticky w-full h-[80px] bg-white flex items-center justify-between p-4'>
            <img className='h-[50px] w-[50px]' src='https://banner2.cleanpng.com/20180327/tpq/kisspng-scythe-don-t-get-caught-book-computer-icons-clip-a-store-shelf-5ab9e4f04332c2.4928392715221322082753.jpg' />
            <div className='space-x-4'>
                <Link to="/addbook">
                    <button className={linkbutton}>Add Book</button>
                </Link>
                <Link to="/adminPanel">
                    <button className={linkbutton}>Admin Panel</button>
                </Link>
                <Link to="/books">
                    <button className={linkbutton}>All Books</button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar