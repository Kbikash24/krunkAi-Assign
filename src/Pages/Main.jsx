import React from 'react'
import './main.css'
import Top from '../components/Top'
import Hero from '../components/Hero'
import Bottom from '../components/Bottom'

const Main = () => {
  return (
    <div className='main'><Top/>
    <Hero/>
    <Bottom/></div>
  )
}

export default Main