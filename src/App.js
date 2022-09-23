import React, { Component, useEffect, useState } from 'react'
import SearchforBooks from './Componets/searchBooks'
import HomePage from './Componets/Main'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css';

function BooksApp()  {
  const [books,setBooks]=useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books))
    .then(books => setBooks(books))
  },[books])


  
  
 function changeShelf (book, shelf)  {
    BooksAPI.update(book, shelf)

  
    BooksAPI.getAll().then((books) => {
      setBooks( books )
    }
    )
  }

 
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <HomePage
            books={books}
            changeShelf={changeShelf}
          />
        )}/>

        <Route exact path="/search" render={() => (
          <SearchforBooks
          changeShelf={changeShelf}
          books={books}
          />
        )}/>
        
      </div> 
    )
  
}

export default BooksApp