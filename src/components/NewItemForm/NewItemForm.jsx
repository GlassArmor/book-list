import React, { useState } from 'react';
import './NewItemForm.css';

const NewItemForm = ({ addBook }) => {

  const [ inputName, setInputName ] = useState('');
  const [ inputAuthor, setInputAuthor ] = useState('');
  const [ cover, setCover ] = useState('');

  function getBase64(file) {
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     setCover(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
  };

  return (
    <div className='item-form'>
      <form onSubmit={ (e) => {
          e.preventDefault();
          addBook( inputName , inputAuthor, cover );
          setInputName('');
          setInputAuthor('');
        } }>
        <input type='text' name='bookName'
               value={inputName}
               className='item-form-input'
               onChange={ (e) => { setInputName(e.target.value) } }
               placeholder='Type book name' required/>
        <input type='text' name='bookAuthor'
               value={inputAuthor}
               className='item-form-input'
               onChange={ (e) => { setInputAuthor(e.target.value) } }
               placeholder='Type book author' required/>
             <input className='item-form-add_cover'
                    accept="image/*"
                    type="file" onChange={
                 (e) => {
                   let files = e.target.files;
                   if (files.length > 0) {
                    getBase64(files[0]);
                   }
                 }
               } />
             <button type='submit' className='item-form-button'>
               Add
             </button>
      </form>
    </div>
  )
};

export default NewItemForm;
