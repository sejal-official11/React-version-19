import { useState } from "react";

export const ContactForm = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState({
    username: "",
    email: "",
    message: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({
      ...prev,
      // jo existing key hai agar usse match kar gaya toh bas usi ki value ko wo update karta hai, baaki ko as it is rakhta hai
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const contactData = {
    //     username,
    //     email,
    //     message,
    // }
    console.log(contacts);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={contacts.username}
            onChange={handleInputChange}
          />

          <br />
          <br />

          <label htmlFor="email" required autoComplete="off">
            Email :
          </label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            value={contacts.email}
            onChange={handleInputChange}
          />

          <br />
          <br />

          <label htmlFor="message">Message :</label>
          <textarea
            type="message"
            name="message"
            required
            autoComplete="off"
            rows="6"
            value={contacts.message}
            onChange={handleInputChange}
          />

          <br />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
