import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-5 pb-4 text-lg mt-10">
            <div className="container mx-auto text-left">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/4 mt-3 text-gray-400 pt-10">
                        <h5 className="text-uppercase mb-4 font-bold">Get to know us</h5>
                        <p>
                            <a href="/about" className="text-white no-underline hover:underline">About us</a>
                        </p>
                        <p>
                            <a href="/" className="text-white no-underline hover:underline">Careers</a>
                        </p>
                        <p>
                            <a href="/" className="text-white no-underline hover:underline">Kiddo Mart cares</a>
                        </p>
                        <p>
                            <a href="/" className="text-white no-underline hover:underline">Contact Us</a>
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 mt-3 text-gray-400 pt-10">
                        <h5 className="text-uppercase mb-4 font-bold">Let us help you</h5>
                        <p>
                            <a href="/" className="text-white no-underline hover:underline">Payments</a>
                        </p>
                        <p>
                            <a href="/" className="text-white no-underline hover:underline">Shipping</a>
                        </p>
                        <p>
                            <a href="/" className="text-white no-underline hover:underline">Cancellation and Returns</a>
                        </p>
                        <p>
                            <a href="/" className="text-white no-underline hover:underline">Report an issue</a>
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 mt-3 text-gray-400 pt-10">
                        <h5 className="text-uppercase mb-4 font-bold">Policy</h5>
                        <p>
                            <a href="/" className="text-white no-underline hover:underline">Return policy</a>
                        </p>
                        <p>
                            <a href="/" className="text-white no-underline hover:underline">Time of use</a>
                        </p>
                        <p>
                            <a href="/" className="text-white no-underline hover:underline">Privacy</a>
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 mt-3 text-gray-400 pt-10">
                        <h5 className="text-uppercase mb-4 font-bold">Connect with us</h5>
                        <p>
                            <a href="https://www.facebook.com" className="text-white no-underline hover:underline">
                                <i className="fab fa-facebook-square"></i> Facebook
                            </a>
                        </p>
                        <p>
                            <a href="https://twitter.com" className="text-white no-underline hover:underline">
                                <i className="fab fa-twitter-square"></i> Twitter
                            </a>
                        </p>
                        <p>
                            <a href="https://instagram.com" className="text-white no-underline hover:underline">
                                <i className="fab fa-instagram-square"></i> Instagram
                            </a>
                        </p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    Copyright &copy; | Suhani Agarwal
                </div>
            </div>
        </footer>
    );
};

export default Footer;