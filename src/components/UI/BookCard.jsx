import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({book}) => {
    return (
        <div className="card bg-base-100 shadow-sm border border-gray-700 p-2">
                        <figure className='p-6 bg-gray-800'>
                            <img
                                src={book.image}
                                alt={book.bookName} className='rounded-xl h-[250px]' />
                        </figure>
                        <div className="card-body">
                            <div className='flex items-center gap-2'>
                                {book.tags.map((tag, ind) => (<div key={ind} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>))}
                            </div>
                            <h2 className='card-title font-bold text-2xl'>{book.bookName}</h2>
                            <p className='font-semibold text-lg'>{book.author}</p>

                            <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-400 text-xl">
                                <div className="font-semibold">{book.category}</div>
                                <div className="flex gap-2 items-center ">{book.rating} <FaRegStar />
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default BookCard;