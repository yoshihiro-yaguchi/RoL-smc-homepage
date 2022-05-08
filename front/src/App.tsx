import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectGeneration, changeGeneration } from './redux/generation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Pzzhg000 } from './programs/pzzhg000/Pzzhg000'
import { Pzzhg001 } from './programs/pzzhg001/Pzzhg001'
import { Pzzhg002 } from './programs/pzzhg002/Pzzhg002'

export const GenerationPage = () => {
  const generation = useSelector(selectGeneration)
  const dispatch = useDispatch()
  return (
    <BrowserRouter>
      <div>
        <button type="button" onClick={() => dispatch(changeGeneration('First'))}>
          First Generation
        </button>
        <button type="button" onClick={() => dispatch(changeGeneration('Second'))}>
          Second Generation
        </button>
        <div>Generation is {generation}</div>
      </div>
      <Routes>
        <Route index element={<Pzzhg000 />} />
        <Route path="pzzhg001" element={<Pzzhg001 />} />
        <Route path="pzzhg00" element={<Pzzhg002 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default GenerationPage
