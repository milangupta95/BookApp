import React from 'react'
import QRCode from "qrcode.react";
import { Link } from 'react-router-dom';
function BooksPageRow({ book }) {
    return (
        <tr class="border-b border-blue-gray-200" key={book.bookISBN}>
            <Link to={`/book?isbn=${book.bookISBN}`}><td class="py-8 px-4 hover:text-sky-500">{book.bookName}</td></Link>
            <td class="py-3 px-4">{book.bookISBN}</td>
            <td class="py-3 px-4">{book.bookCateg}</td>
            <td class="py-3 px-4">{book.bookRno}</td>
            <td class="py-3 px-4">{book.price}</td>
            <td class="py-3 px-4">
                <div className='h-[70px] w-[70px] flex items-center justify-center'>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={`http:localhost:3000/book?q=${book.bookISBN}`}
                    viewBox={`0 0 256 256`}
                />
            </div></td>

        </tr>
    )
}

export default BooksPageRow