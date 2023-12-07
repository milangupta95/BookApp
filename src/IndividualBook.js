import React from 'react'
import { useSearchParams } from 'react-router-dom'
import QRCode from "qrcode.react";

function IndividualBook() {
    const [params] = useSearchParams();
    const isbn = params.get('isbn');
    const books = JSON.parse(localStorage.getItem("books"));
    let book = {};
    for (let i = 0; i < books.length; i++) {
        if (books[i].bookISBN === isbn) {
            book = books[i];
        }
    }

    const downloadQR = () => {
        const canvas = document.getElementById(book.bookISBN);
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${book.bookISBN}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div><div className="bg-white p-8 rounded shadow-md w-[80%] mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Book Information</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <span className="font-semibold">Book Name:</span> <span className="text-gray-700">{book.bookName}</span>
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Book ISBN:</span> <span className="text-gray-700">{book.bookISBN}</span>
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Book Category:</span> <span className="text-gray-700">{book.bookCateg}</span>
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Book Rack Number:</span> <span className="text-gray-700">{book.bookRno}</span>
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Number of Copies:</span> <span className="text-gray-700">{book.numCopies}</span>
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Price:</span> <span className="text-gray-700">{book.price}</span>
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Availability:</span>{' '}
                    <span className={`text-${book.availability === 'available' ? 'green' : 'red'}-700`}>{book.availability}</span>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className='h-[200px] w-[200px] flex flex-col items-center justify-center'>
                    <QRCode
                        id={book.bookISBN}
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={`http:localhost:3000/book?q=${book.bookISBN}`}
                        viewBox={`0 0 256 256`}
                        level={"H"}
                        includeMargin={true}
                    />
                    <a className='cursor-pointer' onClick={downloadQR}> Download QR </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default IndividualBook