import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import AnimatedLetters from '../animated-letters/animated-letters.component'
import './about.styles.scss'

const About = () => {
 const [letterClass, setLetterClass] = useState('text-animate')
 const mountFlag = useRef(false)

 useEffect(() => {
  if (!mountFlag.current) {
   mountFlag.current = true
   setTimeout(() => {
    setLetterClass('text-animate-hover')
   }, 3000)
  }
 }, [])

 return (
  <div className="container about-page">
   <div className="text-zone">
    <h1>
     <AnimatedLetters
      letterClass={letterClass}
      letterArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
      idx={15}
     />
    </h1>
    <p>
     Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
     IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem
     IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem
     IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
    </p>
    <p>
     Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
     IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem
     IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem
     IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
    </p>
    <p>
     Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
     IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem
     IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem
     IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
    </p>
   </div>
  </div>
 )
}

export default About
