import React from 'react';
import '../about/About.css'; // Importing the CSS file

const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">About Kiddo Mart</h2>
            <p className="about-description">
                Welcome to Kiddo Mart, your one-stop shop for all your kids' needs! We are dedicated to providing a safe, fun, and engaging shopping experience for children and parents alike.
            </p>

            <h3 className="about-subtitle">What We Provide:</h3>
            <ul className="about-list">
                <li className="about-list-item dark:bg-slate-900 dark:text-white">
                    <strong>Quality Products:</strong> We ensure that all our products meet the highest safety standards and are made from non-toxic materials.
                </li>
                <li className="about-list-item dark:bg-slate-900 dark:text-white">
                    <strong>Best Prices:</strong> We strive to offer competitive prices and regular discounts to make shopping affordable for families.
                </li>
                <li className="about-list-item dark:bg-slate-900 dark:text-white">
                    <strong>Wide Selection:</strong> From toys to clothing, we have a wide variety of products to cater to all your children's needs.
                </li>
                <li className="about-list-item dark:bg-slate-900 dark:text-white">
                    <strong>Fast Delivery:</strong> We offer quick and reliable delivery services to ensure your orders arrive on time.
                </li>
                <li className="about-list-item dark:bg-slate-900 dark:text-white">
                    <strong>Satisfaction Guarantee:</strong> If you're not happy with your purchase, we offer hassle-free returns and exchanges.
                </li>
                <li className="about-list-item dark:bg-slate-900 dark:text-white">
                    <strong>Customer Support:</strong> Our friendly customer support team is always ready to assist you with any inquiries or concerns.
                </li>
            </ul>

            <h3 className="about-subtitle">Our Mission:</h3>
            <p className="about-mission">
                At Kiddo Mart, our mission is to provide a delightful shopping experience for children and parents, ensuring that every product we offer is safe, fun, and affordable. We believe in creating lasting memories for families through quality products and exceptional service.
            </p>
        </div>
    );
};

export default About;