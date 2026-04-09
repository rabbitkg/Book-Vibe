import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListFromLocalDB, getAllReadListFromLocalDB } from '../utils/localDb';



export const BookContext = createContext();

const BookProvider = ({children}) => {



    const [readList, setReadList] = useState(()=> getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState([]);


    // useEffect(() => {
    //    const getReadListFromLocalDB = getAllReadListFromLocalDB();
    //    console.log(getReadListFromLocalDB, "getReadListFromLocalDB");
    //    setReadList(getReadListFromLocalDB);
    // }, [])


    const handleMarkAsRead = (currentBook) => {

        
        addReadListFromLocalDB(currentBook);

        const isExistBook = readList.find(
            (book) => book.bookId === currentBook.bookId,
        );
        
        if(isExistBook){
            toast.error("The book is already Exist in Read list.");
        }else{
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is added to Read list.`)
        }

        console.log(currentBook, readList, "book");
    };

    
    const handleWishList = (currentBook) => {


        const isExistInReadList = readList.find(
            (book) => book.bookId === currentBook.bookId,
        );
        
        const isExistBook = wishList.find(
            (book) => book.bookId === currentBook.bookId,
        );
        
        if(isExistInReadList){
            toast.error("This book is already in read list.");
            return;
        }

        if(isExistBook){
            toast.error("The book is already Exist in Wish list.");
        }else{
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to Wish list.`)
        }

        console.log(currentBook, readList, "book");
    };


    const data = {
        readList,
        setReadList,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    }
    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
    // <BookContext.Provider value={data}>
    //     {Children}
    // </BookContext.Provider>
};

export default BookProvider;