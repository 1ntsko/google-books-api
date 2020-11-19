import React, {useState, useEffect} from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import { fetchBook } from '../../api/FetchBook'
import parse from 'react-html-parser';

const Details = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetchBook(id).then(res => {
            setBook(res)
            console.log(res)
            setIsLoaded(true)
          })
    }, [fetchBook])

    if (!isLoaded) {
        return (
          <div className="loader">
            <div className="item-1"><span></span></div>
            <div className="item-2"><span></span></div>
            <div className="item-3"><span></span></div>
            <div className="item-4"><span></span></div>
            <div className="item-5"><span></span></div>
            <div className="item-6"><span></span></div>
            <div className="item-7"><span></span></div>
            <div className="item-8"><span></span></div>
            </div>
        )
      }

    if (book.error) {
        return <p>Book not found</p>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="details">
                    <div className="image-area mr-4">
                        <img src={book.volumeInfo?.imageLinks?.thumbnail}/>
                    </div>
                    <div className="description">
                        <p className="gray">Title:</p>
                        <h2>{book.volumeInfo?.title}</h2>
                        <p className="gray">by <em>{book.volumeInfo?.authors?.map(author => author)}</em></p>
                        <p className="gray">Published:</p>
                        <p>{book.volumeInfo?.publishedDate}</p>
                        <p className="gray">Description:</p>
                        <p className="mt-1">{parse(book.volumeInfo?.description)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
 