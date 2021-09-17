import React, { useState } from 'react';
import './App.css';

import ItemList from '../ItemList';
import NewItemForm from '../NewItemForm';

const App = () => {

  let defaultList = JSON.parse(localStorage.getItem('bookList'));
  let defMaxIndex = JSON.parse(localStorage.getItem('maxIndex'));

  if (!defaultList) { defaultList = [
    { id: 'a1', name: 'The Call of Cthulhu', author: 'H. P. Lovecraft', cover: ''},
    { id: 'a2', name: 'The Lord of the Rings', author: 'J. R. R. Tolkien', cover: '' },
    { id: 'a3', name: 'Solaris', author: 'Stanisław Lem', cover: '' },
    { id: 'a4', name: 'We', author: 'Yevgeny Zamyatin', cover: '' }
  ]; };

  const [ bookList, setBookList ] = useState(defaultList);

  if (!defMaxIndex) defMaxIndex = defaultList.length+1;

  const [ maxId, setMaxId ] = useState(defMaxIndex);

  const addBook = ( name, author, cover ) => {
    setBookList(
      (oldList) => {
        setMaxId(oldMax => oldMax+1);
        return [...oldList, { id: `a${maxId}`, name: name, author: author, cover: cover } ]
      }
    );
  };

  const deleteBook = (id) => {
    setBookList(
      (oldList) => {
        const bookIndex = oldList.findIndex((book)=> book.id === id);
        return [ ...oldList.slice(0, bookIndex), ...oldList.slice(bookIndex+1)];
      }
    );
  };

  const editBook = ( id, newName, newAuthor, newCover ) => {
    setBookList(
      (oldList) => {
        const bookIndex = oldList.findIndex((book)=> book.id === id);
        return [ ...oldList.slice(0, bookIndex),
          { id: id, name: newName, author: newAuthor, cover: newCover },
          ...oldList.slice(bookIndex+1)];
      }
    );
  };

  localStorage.setItem('bookList', JSON.stringify(bookList));
  localStorage.setItem('maxIndex', JSON.stringify(maxId));

  return (
    <div className='app-wrapper'>
      <NewItemForm addBook={addBook}/>
      <ItemList bookList={bookList} onDelete={deleteBook} onEdit={editBook} />
    </div>
  );
};

export default App;
