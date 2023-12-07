import React from 'react'
import { useReducer } from 'react'
import { inputStyle, centeredHeading, textlabelgroup, labelClass } from './PredefinedClasses'
function AddBookForm() {
    const bookReducer = (state, action) => {
        switch (action.type) {
            case 'changeBookName':
                return {
                    ...state,
                    bookName: action.value
                }
            case 'changeBookISBN':
                return {
                    ...state,
                    bookISBN: action.value
                }
            case 'changeBookCateg':
                return {
                    ...state,
                    bookCateg: action.value
                }
            case 'changeBookrno':
                return {
                    ...state,
                    bookRno: action.value
                }
            case 'changeNumCopies':
                return {
                    ...state,
                    numCopies: action.value
                }
            case 'changePrice':
                return {
                    ...state,
                    price: action.value
                }
            case 'changeAvailability':
                return {
                    ...state,
                    availability: action.value
                }    
            default:
                return state
        }
    }

    const intialBookState = {
        bookName : "",
        bookISBN : "",
        bookCateg: "",
        bookRno: null,
        numCopies: null,
        price: null,
        availability: "available"
    }

    const handleBookSave = (e) => {
        if(!book.bookName
            || !book.bookISBN || !book.bookCateg 
            || !book.price || !book.availability 
            || !book.bookRno || !book.numCopies
        ) {
            e.preventDefault();
            window.alert("Some Field are missing");
            return;
        }

        const books = localStorage.getItem("books");
        if(books) {
            const booksJSON = JSON.parse(books);
            const newBookSet = [
                ...booksJSON,
                book
            ]
            localStorage.setItem("books",JSON.stringify(newBookSet));
        } else {
            const newBooks = [book];
            localStorage.setItem("books",JSON.stringify(newBooks));
        }
        window.alert("Book Saved Successfully");
    }

    const [book,dispatch] = useReducer(bookReducer,intialBookState);

    return (
        <div className='flex flex-col space-y-8 shadow-md rounded-lg w-[60%] mt-10 p-8 mx-auto'>
            <h1 className={centeredHeading}>Enter Details of the Book</h1>
            <div className='flex items-center justify-between'>
                <div className={textlabelgroup}>
                    <label className={labelClass}>Enter Book Name</label>
                    <input type="text" className={inputStyle} placeholder='Book Name' value={book.bookName} onChange={(e) => dispatch({type: 'changeBookName',value: e.target.value})}/>
                </div>

                <div className={textlabelgroup}>
                    <label className={labelClass}>Enter Book ISBN</label>
                    <input type="text" className={inputStyle} value={book.bookISBN} onChange={(e) => dispatch({type: 'changeBookISBN',value: e.target.value})} placeholder='Book ISBN Number' />
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className={textlabelgroup}>
                    <label className={labelClass}>Enter Book Category</label>
                    <input type="text" className={inputStyle} value={book.bookCateg} placeholder='Category of the book'  onChange={(e) => dispatch({type: 'changeBookCateg',value: e.target.value})}/>
                </div>

                <div className={textlabelgroup}>
                    <label className={labelClass}>Enter Book Row Number</label>
                    <input type="text" value={book.bookRno} className={inputStyle} placeholder='Row Number in which book is placed' onChange={(e) => dispatch({type: 'changeBookrno',value: e.target.value})}/>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className={textlabelgroup}>
                    <label className={labelClass}>Number of Copies Available</label>
                    <input type="number" min={0} value={book.numCopies} onChange={(e) => dispatch({type: 'changeNumCopies',value: e.target.value})} className={inputStyle}  placeholder='Copies Available' />
                </div>

                <div className={textlabelgroup}>
                    <label className={labelClass}>Price of Each Book</label>
                    <input type="number" min={0} value={book.price} onChange={(e) => dispatch({type: 'changePrice',value: e.target.value})} className={inputStyle} placeholder='Price of Book' />
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className={textlabelgroup}>
                    <select className={inputStyle} value={book.availability} onChange={(e) => dispatch({type: 'changeAvailability',value: e.target.value})}>
                        <option value="available">Available</option>
                        <option value="notavailable">Not Available</option>
                    </select>
                </div>

                <div className={textlabelgroup}>
                    <button onClick={handleBookSave} className='h-[50px] text-white w-[100%] text-center bg-sky-500 rounded-lg p-2'> Add Book </button>
                </div>
            </div>
        </div>
    )
}

export default AddBookForm