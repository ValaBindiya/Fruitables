import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Product from '../admine/container/Product/Product';

function AdminRoutes(props) {
    return (

            <Routes >
                <Route exact path='/Product' element={<Product />} />
            </Routes>
    );
}

export default AdminRoutes;