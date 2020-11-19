import React from 'react'
import './Books.css'
import { Link } from "react-router-dom";

const Books = ({items}) => {

    const addToFavorites = (item) => {
        const favorites = JSON.parse(localStorage.getItem('favorite')) || [];
        const newFavorites = [...favorites, item];
        localStorage.setItem('favorite', JSON.stringify(newFavorites));
    }

    
    return (
        <div className="container">
            <div className="row">   
                {items.map(item => (
                    <div className="card mb-4" key={item.id}>
                        <a href={item?.selfLink} target="_blank">
                        <img src={item.volumeInfo?.imageLinks?.thumbnail} className="card-img-top" alt={item.volumeInfo?.title} />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">{item.volumeInfo?.title}</h5>
                            <p className="card-text">{item.volumeInfo?.authors?.map(author => author)}</p>
                            <span onClick={(() => addToFavorites(item))} id="like" className="btn btn-outline-danger mr-2"><i className="fas fa-heart"></i></span>
                            <Link to={`/details/${item.id}`} className="btn btn-outline-info">See More</Link>
                        </div>
                    </div>   
                ))}
            </div>
        </div>

        
    )
}
export default Books