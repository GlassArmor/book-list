import React, { useState } from 'react';
import './Item.css';

const defaultImg = "data:image/jpeg;base64,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"
;
const Item = ({ name, author, id, cover, onDelete, onEdit }) => {

  const [ editing, setEditing ] = useState(false);
  const [ newName, setNewName ] = useState(name);
  const [ newAuthor, setNewAuthor] = useState(author);
  const [ newCover, setNewCover] = useState(cover);

  function getBase64(file) {
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     setNewCover(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
  };

  if (!cover) {
    cover = defaultImg;
  };

  let displayData = (
      <div>
        <div className='item-info'>
          <img className='item-cover' src={cover} alt='cover' />
          <div className='item-text'>
            <h3 className='item-header'>{ name }</h3>
            <p className='item-author'>Written by { author }</p>
          </div>
        </div>
        <button className='item-button item-button-delete' type='button' onClick={ () => onDelete(id) }>X</button>
        <button className='item-button item-button-edit' type='button' onClick={ () => setEditing(true) }>Edit</button>
      </div>
  );

  if(editing) {
    displayData = (

        <form onSubmit={
            (e) => {
              e.preventDefault();
              onEdit( id, newName, newAuthor, newCover );
              setEditing(false);
            }
          }>
          <input type='text' name='newName'
                 className='item-edit-input'
                 value={newName}
                 onChange={ (e) => { setNewName(e.target.value) } }
                 placeholder='New book name' required/>
          <input type='text' name='newAuthor'
                 className='item-edit-input'
                 value={newAuthor}
                 onChange={ (e) => { setNewAuthor(e.target.value) } }
                 placeholder='New author name' required/>
          <input className='item-edit-input'
                 accept="image/*"
                 type="file" onChange={
                     (e) => {
                       let files = e.target.files;
                       if (files.length > 0) {
                        getBase64(files[0]);
                       }
                     }
                    } />
          <button className='item-button item-button-edit' type='submit'>
            Ok
          </button>
        </form>

    );
  };

  return (
    <li className='item'>
      {displayData}
    </li>
  );
};

export default Item;
