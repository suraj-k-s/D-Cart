import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/App'
import Designer from './Designer/App'
import Company from './Company/App'
import User from './User/App'
import Guest from './Guest/App'
import PaymentClass from './Payment'
import PaymentClassNew from './PaymentCart'

export default function App() {
  return (

    <Routes>
      <Route path='/Admin/*' element={<Admin/>}/>
      <Route path='/Designer/*' element={<Designer/>}/>
      <Route path='/Company/*' element={<Company/>}/>
      <Route path='/User/*' element={<User/>}/>
      <Route path='/*' element={<Guest/>}/>
      <Route path='/Payment' element={<PaymentClass/>}/>
      <Route path='/PaymentCart' element={<PaymentClassNew/>}/>
    </Routes>
  )
}
