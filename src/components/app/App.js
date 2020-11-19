import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../header/Header';
import Books from '../books/Books';
import Footer from '../footer/Footer';
import Favorites from '../favorites/Favorites';
import Details from '../details/Details';
import ScrollToTop from '../ScrollToTop/Scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import {searchBook} from "../../api/Search"


const App = () => {
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
      searchBook().then(res => {
        setItems(res.items)
        setIsLoaded(true)
      })
  }, [])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()

    searchBook(searchTerm).then(res => {
      setItems(res.items)
    })
  }

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

  return (
         <Router>
          <div className="App">
                <Header
                  handleChange={handleChange}
                  searchTerm={searchTerm}
                  handleSubmit={handleSearch}
                />

                <Switch>
                    <Route path="/" exact>
                      <Books items={items}/>
                    </Route>

                    <Route path="/favorites" exact>
                      <Favorites />
                    </Route>

                    <Route path="/details/:id" exact>
                      <Details />
                    </Route>
                </Switch>
                <ScrollToTop />
                <Footer />
            </div>
         </Router>
  );
}


export default App;