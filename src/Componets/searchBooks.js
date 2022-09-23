import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
function SearchPage ({books,changeShelf}) {
  const [matchedBooks,setBooks]=useState([]);
  const [SearchText,setquery]=useState('');

  function handleChange (event)  {
      event.preventDefault();
  
      setquery(event.target.value);
      fetchMatchedBooks(SearchText);
  }
   function fetchMatchedBooks  (SearchText)  {
        
        if (SearchText.length !==0) {
            BooksAPI.search(SearchText).then((matchedBooks) => {
               
                if (matchedBooks.error) {
                  setBooks( [] )
                } else {
                  setBooks(matchedBooks)
                    
                }
            }
            )
        } else {
          setBooks( [] )
        }
    }

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to="/"
                        className="close-search"
                    >Close</Link>
                
                    <div className="search-books-input-wrapper">
                        <input 
                        type="text"
                        placeholder="Search by title or author"
                        value={SearchText}
                        onChange={handleChange}
                        />
                    </div>
                </div>
            
            <div className="search-books-results">
              <ol className="books-grid">
                    {   
                       matchedBooks.map(matchedBook => {
                            
                            let shelf = "none"
                            
                            books.forEach(book => {
                                if (book.id !== matchedBook.id) {
                                    matchedBook.shelf = "none"
                                } else {
                                    shelf = book.shelf
                                }
                            })
                            
                            return(
                                <li key={matchedBook.id}>
                                <Book 
                                    book={matchedBook}
                                    changeShelf={changeShelf}
                                    currentShelf={shelf}
                                />
                            </li>

                            )
                        }
                        )
                    }
              </ol>
            </div>
            </div>
        );
    
}

export default SearchPage;