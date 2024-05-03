import React from 'react'
import { Route, Routes } from 'react-router'
import PageNotFound from '../pages/pageNotFound/PageNotFound'

const Router = () => {
    return (
        <Routes>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default Router