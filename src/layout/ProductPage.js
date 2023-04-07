import React from 'react';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import { Outlet } from 'react-router-dom';

const ProductPage = () => {
    return (
        <div className='flex justify-center md:flex-row flex-col'>
            <div className='md:w-2/12 flex justify-center md:justify-end mt-5 md:mt-20'>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='md:w-7/12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProductPage;