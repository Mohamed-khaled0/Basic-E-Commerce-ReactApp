import React from 'react';

const Contact = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="lead text-center">
        We would love to hear from you! If you have any questions, comments, or feedback, 
        please feel free to reach out to us. 
        You can contact us via the following methods:
      </p>
      <ul className="list-unstyled text-center">
        <li>Email: support@yourstore.com</li>
        <li>Phone: +1 (555) 123-4567</li>
        <li>Address: 123 Your Store Ave, City, State, Zip</li>
      </ul>
      <h4 className="text-center mt-4">Follow us on social media:</h4>
      <div className="d-flex justify-content-center">
        <a href="#" className="btn btn-primary mx-2">Facebook</a>
        <a href="#" className="btn btn-info mx-2">Twitter</a>
        <a href="#" className="btn btn-danger mx-2">Instagram</a>
      </div>
    </div>
  );
};

export default Contact;
