import React, { useEffect, useState } from 'react'
import BooksAminRow from './BooksAminRow';

function AdminPanel() {
    const [books,setBooks] = useState();
    const [loading,setLoading] = useState(true);
    const [searchText,setSearchText] = useState("");
    useEffect(() => {
        setLoading(true);
        (async function loadData() {
            const books = localStorage.getItem("books");
            const booksJSON = JSON.parse(books);
            console.log(booksJSON);
            setBooks(booksJSON);
            setLoading(false);
        })();
    },[])

    let filteredData = [];
    if(!loading) {
        filteredData = books;
        if(searchText) {
            filteredData = filteredData.filter((book) => book.bookName.toLowerCase().includes(searchText.toLowerCase()) || book.bookISBN.includes(searchText));
        }
    }

    return (
        loading ? <div>Loading...</div> :
        !books || books.length == 0 ? <div className='text-xl text-center text-red-500 mt-10'>No Data To Show Please Add Some Books</div> :
        <div>
            <div class="p-8 flex h-screen w-[100%] mt-4 justify-center">
                <div class="overflow-x-auto w-[100%] h-[100%]">
                <input onChange={(e) => setSearchText(e.target.value)} value={searchText} type="text" placeholder='Search Books' className='p-2 border border-black rounded-lg'></input>
                    <table class="min-w-full bg-white shadow-md rounded-xl">
                        <thead>
                            <tr class="bg-blue-gray-100 text-gray-700">
                                <th class="py-3 px-4 text-left">Book Name</th>
                                <th class="py-3 px-4 text-left">ISBN Number</th>
                                <th class="py-3 px-4 text-left">Book Category</th>
                                <th class="py-3 px-4 text-left">Row Number</th>
                                <th class="py-3 px-4 text-left">Book Count</th>
                                <th class="py-3 px-4 text-left">Price</th>
                                <th class="py-3 px-4 text-left">Availablity</th>
                                <th class="py-3 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody class="text-blue-gray-900">
                            {
                                filteredData.map((book) => {
                                    return <BooksAminRow row={book} books={books} setBooks={setBooks}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default AdminPanel