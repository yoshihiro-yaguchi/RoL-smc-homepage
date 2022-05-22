import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'features/header/Header'
import { Pzzhg000 } from './features/pzzhg000/Pzzhg000'
import { Pzzhg001 } from './features/pzzhg001/Pzzhg001'
import { Pzzhg002 } from './features/pzzhg002/Pzzhg002'
import { Box } from '@mui/material'

export const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ width: '1024px', margin: '0 auto' }}>
        <Header />
        <Routes>
          <Route index element={<Pzzhg000 />} />
          <Route path="pzzhg001" element={<Pzzhg001 />} />
          <Route path="pzzhg002" element={<Pzzhg002 />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}
