##Overview
This ia a react project,  created a bookshelf app that allows the user to select and categorize books they have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that I used to persist information as the user interacts with the application.

##Specification
As a starting point, I was given a starter static template without any of the React code that was needed to complete the project. My job was be to add interactivity to the app by refactoring the static code in this template.

##How to run the project
To run the project, download and extract the file

Then run the following commands :
 - npm install
  - npm start
Please note that the backend server -against which the web app was developped- was provided by Udacity. The provided file BooksAPI.js contains the methods I used to perform necessary operations on the backend:

getAll
update
search
For more information on how these methods are used exactly, please refer to the original Udacity repository.

##App Functionality
In this application, the main page displays a list of "shelves" ,each of which contains a number of books. The three shelves are:
Currently Reading
Want to Read
Read

Each book has a control that lets the user select the shelf for that book. When the user select a different shelf, the book moves there.

The search page has a text input field that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets the user add the book to their library.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).