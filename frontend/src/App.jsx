import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowCards from './Components/ShowCards'
import Form from './Components/Form'
import UpdateForm from './Components/UpdateForm'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowCards />} />
          <Route path='/form' element={<Form />} />
          <Route path='/update/:id' element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App