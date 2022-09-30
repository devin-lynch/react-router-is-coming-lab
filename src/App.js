import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import House from "./components/pages/House"
import Houses from "./components/pages/Houses"
import Member from "./components/pages/Member"
import Header from "./components/partials/Header"

import gameOfThrones from './gameOfThrones'


export default function App() {
  // console.log(gameOfThrones)
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/houses' element={<Houses houses={gameOfThrones} />} />
        <Route path='/houses/:id' element={<House houses={gameOfThrones} />} />
        <Route path='/houses/:houseId/members/:memberId' element={<Member houses={gameOfThrones} />} />
      </Routes>
    </BrowserRouter>
  )
}