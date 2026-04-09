// import React, { use } from 'react';
// import { useState } from 'react';

import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';
import { FaRegStar } from 'react-icons/fa';


// const booksPromise = fetch('/booksData.json').then(res => res.json())

const BookDetails = () => {
    const { bookId: bookPramsID } = useParams()
    // console.log(typeof bookPramsID, "bookId")

    // const books = use(booksPromise);

    const books = useLoaderData();
    // console.log(books, "books");
    const expectedBook = books.find((book) => book.bookId === Number(bookPramsID));
    // console.log(expectedBook, "expectedBook");
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

    const { handleMarkAsRead, handleWishList } = useContext(BookContext);
    // console.log(handleMarkAsRead, storeBook, "BookContext");




    return (
        <div>
            <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-10">
                <figure className='w-full flex items-center justify-center bg-gray-800 rounded-xl'>
                    <img
                        src={image}
                        alt="Album"
                        className='h-[550px]' />
                </figure>

                <div className="card-body space-y-3">
                    <div>
                        <h2 className='text-3xl font-bold'>{bookId}.</h2>
                    </div>
                    <div className="card-actions justify-between pt-1 border-gray-400 text-xl">
                        <h2 className="card-title text-3xl">{bookName}</h2>
                        <div className="flex gap-2 items-center ">{rating} <FaRegStar />
                        </div>
                    </div>

                    <h2 className="card-title">By: {author}</h2>
                    <p className='py-2 border-y'>{category}</p>
                    <p>Review: {review}</p>
                    <div className='flex items-center gap-2'>
                        {tags.map((tag, ind) => (<div key={ind} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>))}
                    </div>

                    <div className="border-t space-y-3">
                        <div className='flex justify-between items-center gap-2'>

                            <span>Number of pages: </span> <span>{totalPages}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>

                            <span>Publisher: </span> <span>{publisher}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>

                            <span>Publish Time: </span> <span>{yearOfPublishing}</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <button className="btn" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
                            <button className="btn btn-primary" onClick={() => handleWishList(expectedBook)}>Add to Wishlist</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;