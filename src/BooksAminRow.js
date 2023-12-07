import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaP, FaPen } from "react-icons/fa6";
import { useState } from 'react';
import { inputStyle, inputStyleForRow } from './PredefinedClasses';
import { IoMdSave } from "react-icons/io";
import { Link } from 'react-router-dom';
function BooksAminRow({ row, books, setBooks }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [book,setBook] = useState(row);

    const handleDelete = () => {
        const newBooks = books.filter((boo) => boo.bookISBN != row.bookISBN);
        setBooks(newBooks);
        localStorage.setItem("books", JSON.stringify(newBooks));
    }

    const handleUpdateSave = () => {
        setEditMode(false);
        const bookss = localStorage.getItem("books");
        const bookJSON = JSON.parse(bookss);
        console.log(bookJSON);
        const newBookJSON = [];
        for(let i=0;i<bookJSON.length;i++) {
            if(bookJSON[i].bookISBN === book.bookISBN) {
                newBookJSON.push(book);
            } else {
                newBookJSON.push(bookJSON[i]);
            }
        }
        localStorage.setItem("books",JSON.stringify(newBookJSON));
    }

    const handleEdit = () => {
        setEditMode(true);
    }
    return (
        editMode === false ? <tr class="border-b border-blue-gray-200" key={book.bookISBN}>
            <Link to={`/book?isbn=${book.bookISBN}`}><td class="py-8 px-4 hover:text-sky-500">{book.bookName}</td></Link>
            <td class="py-3 px-4">{book.bookISBN}</td>
            <td class="py-3 px-4">{book.bookCateg}</td>
            <td class="py-3 px-4">{book.bookRno}</td>
            <td class="py-3 px-4">{book.numCopies}</td>
            <td class="py-3 px-4">{book.price}</td>
            <td class="py-3 px-4">{book.availability}</td>
            <td class="py-3 px-4 space-x-4">
                <button className='p-2 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white' onClick={handleDelete}><MdDeleteOutline /></button>
                <button className=' data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium text-sm px-5 py-2.5 text-center p-2 border border-Black rounded-lg hover:bg-black hover:text-white' onClick={handleEdit} data-toggle="modal" data-target="#exampleModalCenter"><FaPen /></button>
            </td>
        </tr> :
            <tr class="border-b border-blue-gray-200" key={book.bookISBN}>
                <td class="py-3 px-4"><input className={inputStyleForRow} type='text' value={book.bookName} onChange={(e) => setBook(() => {
                    return {
                        ...book,
                        bookName: e.target.value
                    }
                })}/></td>
                <td class="py-3 px-4">{book.bookISBN}</td>
                <td class="py-3 px-4"><input className={inputStyleForRow} type='text' value={book.bookCateg} onChange={(e) => setBook(() => {
                    return {
                        ...book,
                        bookCateg: e.target.value
                    }
                })}/></td>
                <td class="py-3 px-4"><input className={inputStyleForRow} type='text' value={book.bookRno} onChange={(e) => setBook(() => {
                    return {
                        ...book,
                        bookRno: e.target.value
                    }
                })}/></td>
                <td class="py-3 px-4"><input className={inputStyleForRow} type='text' value={book.numCopies} onChange={(e) => setBook(() => {
                    return {
                        ...book,
                        numCopies: e.target.value
                    }
                })}/></td>
                <td class="py-3 px-4"><input className={inputStyleForRow} type='text' value={book.price} onChange={(e) => {
                    return {
                        ...book,
                        price: e.target.value
                    }
                }}/></td>
                <td class="py-3 px-4"><input className={inputStyleForRow} type='text' value={book.availability} onChange={(e) => setBook(() => {
                    return {
                        ...book,
                        availability: e.target.value
                    }
                })}/></td>
                <td class="py-3 px-4 space-x-4">
                    <button className='p-2 border border-black rounded-lg hover:bg-black hover:text-white' onClick={handleUpdateSave}><IoMdSave /></button>
                </td>
            </tr>
    )
}

export default BooksAminRow