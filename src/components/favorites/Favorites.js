import React from 'react'
import { Link } from 'react-router-dom';

const Favorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorite')) || [];

    return (
            <div className="container">
                <div className="row">   
                    {favorites.map(item => (
                        <div className="card mb-4" key={item.id}>
                            <img src={item.volumeInfo?.imageLinks?.thumbnail} className="card-img-top" alt={item.volumeInfo?.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.volumeInfo?.title}</h5>
                                <p className="card-text">{item.volumeInfo?.authors?.map(author => author)}</p>
                                {/* <p className="card-text">{item.volumeInfo?.description}</p> */}
                                {/* <span className="btn btn-danger mr-2"><i className="fas fa-heart"></i></span> */}
                                <Link to={`/details/${item.id}`} className="btn btn-outline-info">See More</Link>
                            </div>
                        </div>   
                    ))}
                </div>
            </div>
    )
}
// {JSON.parse(retrievedObject)}

export default Favorites