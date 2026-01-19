import React from 'react';
import Navbar from '../components/navBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
          <Navbar></Navbar>
          <div className='min-h-[90vh] mt-17'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>

       <Toaster position="top-center" />
        </div>
    );
};

export default MainLayout;