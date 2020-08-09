import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Profile from '../pages/Profile'
import Repo from '../pages/Repo'

import Header from '../components/Header'
import PageNotFound from '../pages/PageNotFound'

const Router: React.FC = () => (
  <Routes>
    <Header />
    <Route path="/" element={<Profile />} />
    <Route path="/:username" element={<Profile />} />
    <Route path="/:username/:reponame" element={<Repo />} />
    <Route element={<PageNotFound />} />
    {/* <Footer /> */}
  </Routes>
)

export default Router
