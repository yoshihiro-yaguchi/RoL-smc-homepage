import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'features/header/Header'
import { Pzzhg000 } from './features/pzzhg000/Pzzhg000'
import { Pzzhg001 } from './features/pzzhg001/Pzzhg001'
import { Pzzhg002 } from './features/pzzhg002/Pzzhg002'
import { Box } from '@mui/material'
import { About } from 'features/about/about'
import { Business } from 'features/business/business'
import { Blog } from 'features/blog/blog'
import { Contact } from 'features/contact/contact'
import { RouteIndex } from 'features/routeIndex/routeIndex'

export const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ width: '1024px', margin: '0 auto' }}>
        <Header />
        <Routes>
          <Route index element={<RouteIndex />} />
          <Route path="about" element={<About />} />
          <Route path="business" element={<Business />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}
