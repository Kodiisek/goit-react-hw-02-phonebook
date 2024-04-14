import React from 'react';

const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Number:
        <input type="tel" name="number" value={number} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
