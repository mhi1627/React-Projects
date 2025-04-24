import { useState } from 'react'
import './App.css'
import NavBar from './Sections/Navbar/NavBar'
import Hero from './Sections/Hero/Hero'
import AboutUs from './Sections/AboutUs/AboutUs'
import Services from './Sections/Services/Services'
import Insights from './Sections/Insights/Insights'
import MoreInfo from './Sections/MoreInfo/MoreInfo'
import OurExpertise from './Sections/OurExpertise.jsx/OurExpertise'
import Other from './Sections/Other/Other'
import Testomonials from './Sections/Testimonials/Testimonials'
import Faq from './Sections/FAQ/Faq'
import InquiryForm from './Sections/InquiryForm/InquiryForm'
import Footer from './Sections/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <NavBar></NavBar>
  <Hero> </Hero>
  <AboutUs></AboutUs>
  <Services></Services>
  <Insights></Insights>
  <MoreInfo></MoreInfo>
  <OurExpertise></OurExpertise>
  <Other></Other>
  <Testomonials></Testomonials>
  <Faq></Faq>
  <InquiryForm></InquiryForm>
  <Footer></Footer>
    </>
  )
}

export default App
