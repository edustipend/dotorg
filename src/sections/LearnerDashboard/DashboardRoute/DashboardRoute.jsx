import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import Submissions from '../Submissions'

export const DashboardRoute = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='dashboard/' element={<Home />} />
            <Route path='dashboard/submissions' element={<Submissions />} />
            <Route path='dashboard/account' element={<MyAccount />} />
            <Route path='*' element={<p>Error component</p>} />
        </Routes>
    )
}
