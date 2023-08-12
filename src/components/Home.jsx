import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../Hero/Hero"
import About from "../components/About/About"
import Projects from "../components/Projects"
import Volunteer from './Volunteer/Volunteer'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/footer'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Volunteer />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home