import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'features/header/Header'
import { Box } from '@mui/material'
import { About } from 'features/about/about'
import { Business } from 'features/business/business'
import { BlogSummary } from 'features/blog/blogSummary'
import { BlogContent } from 'features/blog/blogContent/blogContent'
import { Contact } from 'features/contact/contact'
import { RouteIndex } from 'features/routeIndex/routeIndex'

export const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ maxWidth: '1440px', margin: '0 auto' }}>
        <Header />
        <Routes>
          <Route index element={<RouteIndex />} />
          <Route path="about" element={<About />} />
          <Route path="business" element={<Business />} />
          <Route path="blogSummary" element={<BlogSummary />} />
          <Route path="BlogContent" element={<BlogContent />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}
