import './home.styles.scss'
import logoN from '../../assets/img/logoN.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../animated-letters/animated-letters.component'
import Logo from './logo/logo.component'
import { useRef } from 'react'

const Home = () => {
 const mountFlag = useRef(false)
 const [letterClass, setLetterClass] = useState('text-animate')
 const webDeveloper = [
  'W',
  'e',
  'b',
  ' ',
  'D',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
 ]
 const iAmJust = ['I', ' ', 'a', 'm', ' ', 'j', 'u', 's', 't', ' ']
 const ick = ['i', 'c', 'k']

 useEffect(() => {
  if (!mountFlag.current) {
   mountFlag.current = true
   setTimeout(() => {
    setLetterClass('text-animate-hover')
   }, 4000)
  }
 }, [])

 return (
  <div className="container home-page">
   <div className="text-zone">
    <h1>
     <span className="text-animate">H</span>
     <span className="text-animate _12">i,</span> <br />
     <AnimatedLetters
      letterClass={letterClass}
      letterArray={iAmJust}
      idx={13}
     />
     <img src={logoN} alt="web developer" />
     <AnimatedLetters letterClass={letterClass} letterArray={ick} idx={23} />
     <br />
     <AnimatedLetters
      letterClass={letterClass}
      letterArray={webDeveloper}
      idx={26}
     />
    </h1>
    <h2>Frontend Developer & Part-Time Fro-Yo Sommelier</h2>
    <Link className="flat-button" to="/contact">
     EMAIL ME
    </Link>
   </div>
   <Logo />
  </div>
 )
}

export default Home
