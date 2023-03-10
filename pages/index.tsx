import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro/Intro'
import Project from '../components/Projects/Projects'
import Carousel from '../components/Carousel/Carousel'
import Card from '../components/Card/Card'
import CV from '../components/CV/CV'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Header/>
      <Intro/>
      <Project/>
      <CV/>
      <Contact/>
      <Footer/>
    </>
  )
}
