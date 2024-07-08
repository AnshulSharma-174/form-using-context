import React from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import { FormProvider } from './context/FormContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'

const App = () => {
  return (
    <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route index element={<Page1 />} />
            <Route path='/Page2' element={<Page2 />} />
            <Route path='/Page3' element={<Page3 />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
  )
}
export default App