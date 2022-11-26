import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div>
            books {books.length}
        </div>
    );
};

export default Category;