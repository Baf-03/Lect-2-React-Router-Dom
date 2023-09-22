import React from 'react'
import { Route, Routes } from 'react-router-dom'

function NestedRouting() {
  return (
    <>
   
  
    <Routes>
        <Route path="admin">
            <Route path="about" element={<AdminAbout />} />
            {/* <Route path="home" element={<Home />} /> */}
        </Route>
    </Routes>
    </>
  )
}

export default NestedRouting