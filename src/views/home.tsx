import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import HomePage from '../components/homePage/homePage'
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default Home
