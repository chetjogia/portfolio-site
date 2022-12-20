import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro/Intro'


export default function Home() {
  return (
    <>
      <Header/>
      <Intro/>
      <Footer/>
    </>
  )
}
