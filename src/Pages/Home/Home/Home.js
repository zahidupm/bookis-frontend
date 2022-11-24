import React from 'react';
import Addverites from '../Addverties/Addverites';
import Banner from '../Banner/Banner';
import PopularBooks from '../PopularBooks/PopularBooks';
import Secondhand from '../Secondhand/Secondhand';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularBooks></PopularBooks>
            <Addverites></Addverites>
            <Secondhand></Secondhand>
        </div>
    );
};

export default Home;