import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import House from "./components/pages/House"
import Houses from "./components/pages/Houses"
import Member from "./components/pages/Member"
import Header from "./components/partials/Header"

import gameOfThrones from './gameOfThrones'


export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
      
      </Routes>
    </BrowserRouter>
  )
}