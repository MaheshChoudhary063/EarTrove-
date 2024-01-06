// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Welcome to the world of cutting-edge earbuds, crafted with passion and innovation by Me.
        At earTrove Earbuds, we believe in redefining your audio experience and enhancing your lifestyle with the power of technology.
      </p>

      <p>
         the visionary behind this venture, is a seasoned audio engineer with a profound love for music.
        With years of expertise, he set out on a mission to create the perfect earbuds that offer both superior sound quality and exceptional comfort.
      </p>

      <p>
        Our earbuds are meticulously designed and engineered in-house, using state-of-the-art technology and the finest materials.
        Every pair of earTrove Earbuds is a testament to our commitment to delivering immersive audio experiences for music lovers, gamers, and professionals alike.
      </p>

      <p>
        Whether you're on a call, enjoying your favorite music, or immersing yourself in gaming, our earbuds are tailored to meet your audio needs.
        earTrove Earbuds offer crystal-clear sound, seamless connectivity, and a comfortable fit, ensuring you're ready for any adventure.
      </p>

      <p>
        Thank you for choosing earTrove Earbuds. We're excited to be a part of your journey towards audio excellence.
        Experience the future of sound with us!
      </p>
    </div>
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Contact;
