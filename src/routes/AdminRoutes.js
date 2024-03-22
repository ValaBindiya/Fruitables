import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Product from '../admine/container/Product/Product';
import Layout from '../admine/component/Layout/Layout';
import Reviews from '../admine/container/Reviews/Reviews';
import Category from '../admine/container/Category/Category';

function AdminRoutes(props) {
    return (

        <Layout >
            <Routes >
                <Route exact path='/Product' element={<Product />} />
                <Route exact path='/Reviews' element={<Reviews />} />
                <Route exact path='/Category' element={<Category />} />
            </Routes>
        </Layout>

    );
}

export default AdminRoutes;