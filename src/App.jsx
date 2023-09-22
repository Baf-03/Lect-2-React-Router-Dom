import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/NotFound/NotFound'
import ResponsiveAppBar from './Components/Navbar'
import Products from './Pages/Contact/Products/Products'

import SingleItems from './Pages/SingleItems/SingleItem'
import NestedRouting from './NestedRouting/NestedRouting'
import AdminAbout from './Pages/AdminAbout/AdminAbout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ResponsiveAppBar/> */}
    {/* <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Products' element={<Products/>} />
      <Route path='/SingleProducts/:productid' element={<SingleItems/>} /> */}
      {/* <Route path='*' element={<NotFound/>}/> */}

    {/* </Routes> */}
      <Routes>
      <Route path="admin">
          <Route path="about" element={<AdminAbout/>} />
          {/* <Route path="home" element={<Home />} /> */}
      </Route>
  </Routes>
    </>
  )
}

export default App
