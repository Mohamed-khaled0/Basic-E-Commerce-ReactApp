import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p>
                            Your company description goes here. Briefly explain your mission, vision, or what products you offer.
                        </p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/about" className="text-white">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white">Contact Us</a>
                            </li>
                            <li>
                                <a href="/" className="text-white">Home</a>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">Facebook</a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
