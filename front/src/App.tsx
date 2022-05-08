import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Pzzhg000 } from './features/pzzhg000/Pzzhg000'
import { Pzzhg001 } from './features/pzzhg001/Pzzhg001'
import { Pzzhg002 } from './features/pzzhg002/Pzzhg002'

export const GenerationPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Pzzhg000 />} />
        <Route path="pzzhg001" element={<Pzzhg001 />} />
        <Route path="pzzhg002" element={<Pzzhg002 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default GenerationPage
