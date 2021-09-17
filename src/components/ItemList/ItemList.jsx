import React from 'react';
import './ItemList.css';

import Item from '../Item';

const ItemList = ({ bookList, onDelete, onEdit }) => {

  const books = bookList.map( book => <Item name={book.name}
                                            key={book.id} id={book.id}
                                            author={book.author}
                                            cover={book.cover}
                                            onDelete={onDelete}
                                            onEdit={onEdit} /> );

  return (
    <ul className='item-list'>
      { books }
    </ul>
  );
};

export default ItemList;
