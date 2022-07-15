import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import AnimatedLetters from '../animated-letters/animated-letters.component'
import './about.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
 faAngular,
 faCss3,
 faGitAlt,
 faHtml5,
 faJs,
 faPython,
 faReact,
} from '@fortawesome/free-brands-svg-icons'

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
     Great! you made it all the way here... Well guess I'll have to tell you a
     bit about me. I consider myself a self-taught developer although I received
     formal CS instruction, since I have learned more from solving real-life
     problems and working with other people than I ever had the opportunity
     sitting in a classroom. Now that I think about it, doesn't really sound
     like self-taught at all, let's say real-life-shaped developer.
    </p>
    <p>
     I have a pretty varied stack, including frameworks using JS, Python or
     Ruby. Although I can develop full-stack apps/solutions, I love to spend my
     time on the Frontend. That's where I thrive, and where I think I can give
     the most of me. I have this creative/techincal approach that always pushes
     me towards the UX (without being fanatic, I know "ready to deploy" means
     "ready to deṕloy").
    </p>
    <p>
     A couple of years ago I decided to jump into React JS. I think the paradigm
     of Components//efficienty/reusabillity is brilliant and finally a JS
     Framework (I know React is only a library ok! don't sweat it!) achieved to
     make it user friendly without tying the developer's hands. But nobody is
     perfect and React isn't the exception, that's why I decided to migrate all
     of my independent project to Solid JS. Because it just doesn't make sense
     to have so many libraries just to manage something as simple as state.{' '}
     <br />
     <br />
     Looking forward to meet you!
    </p>
   </div>
   <div className="stage-cube-cont">
    <div className="cubespinner">
     <div className="face1">
      <FontAwesomeIcon icon={faHtml5} color="#f06529" />
     </div>
     <div className="face2">
      <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
     </div>
     <div className="face3">
      <FontAwesomeIcon icon={faJs} color="#efd81d" />
     </div>
     <div className="face4">
      <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
     </div>
     <div className="face5">
      <FontAwesomeIcon icon={faPython} color="#0f0" />
     </div>
     <div className="face6">
      <FontAwesomeIcon icon={faGitAlt} color="#dd0031" />
     </div>
    </div>
   </div>
  </div>
 )
}

export default About
