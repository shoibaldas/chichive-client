import React from 'react';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import { Outlet } from 'react-router-dom';

const ProductPage = () => {
    return (
        <div className='flex md:flex-row flex-col'>
            <div className='md:w-3/12 flex justify-center'>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='md:w-9/12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProductPage;