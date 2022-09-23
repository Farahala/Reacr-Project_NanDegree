import React, { Component } from 'react'

function Book({book,currentShelf,changeShelf}) {
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, 
                        height: 193, backgroundImage: `url("${book.imageLinks? book.imageLinks.thumbnail:"http://via.placeholder.com/128x193?text=No%20Cover"}")` }}></div>
                        <div className="book-shelf-changer">
                            <select
                                onChange={(e) => changeShelf(book, e.target.value)}
                                value={currentShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    
}

export default Book;