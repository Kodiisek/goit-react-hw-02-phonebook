import React from 'react';
import './ContactItem.module.css';

const ContactItem = ({ contact, handleDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li>
      {name}: {number}
      <button className='deletebtn' onClick={() => handleDeleteContact(id)}>Delete</button>
    </li>
  );
}

export default ContactItem;
