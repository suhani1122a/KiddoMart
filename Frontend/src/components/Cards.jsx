import React from 'react';

const Card = ({ title, image, link, description }) => {
    return (
        <div className="w-full md:w-1/4 p-2">
            <div className="card mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <img src={image} className="w-full h-48 object-cover" alt={title} />
                <div className="p-4">
                    <h5 className="text-lg font-semibold">{title}</h5>
                    <p className="text-gray-600">{description}</p>
                    <a href={link} className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Check out
                    </a>
                </div>
            </div>
        </div>
    );
};

const Cards = () => {
    const products = [
        {
            title: 'Clothes',
            image: '/Home/baby-frock.jpg',
            link: '/',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            title: 'Books',
            image: 'Home/child-3045207_1280.jpg',
            link: '/',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            title: 'Skincare',
            image: 'Home/skincare.jpg',
            link: '/',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            title: 'Nursery Furniture',
            image: 'Home/nursery-1078923_1280.jpg',
            link: '/',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            title: 'Kids Toys',
            image: 'Home/istockphoto-864501328-612x612.jpg',
            link: '/',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            title: 'Feeding & Nursing',
            image: 'Home/ducks-1426008_1280.jpg',
            link: '/',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            title: 'Prams',
            image: 'Home/pram-1584471_960_720.jpg',
            link: '/',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            title: 'Top Deals',
            image: 'Home/offer-one.jpg',
            link: '/',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
    ];

    return (
        <section className="offer">
            <div className="text-center my-5">
                <h1 className="text-4xl font-bold">Buy Now</h1>
                <hr className="w-1/4 mx-auto" />
            </div>
            <div className="flex flex-wrap -mx-2 px-4">
                {products.map((product, index) => (
                    <Card
                        key={index}
                        title={product.title}
                        image={product.image}
                        link={product.link}
                        description={product.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Cards;