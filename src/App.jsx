import React from 'react'
import { Route, Routes } from 'react-router'
import SurveyPage from './pages/SurveyPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<SurveyPage />} />
      </Routes>
    </div>
  )
}

export default App