import './logo.styles.scss'
import logoN from '../../../assets/img/logoN.png'
import { useRef, useEffect } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
 const bgRef = useRef()
 const outlineLogoRef = useRef()
 const solidlogoRef = useRef()
 const mountFlag = useRef(false)

 useEffect(() => {
  if (mountFlag.current) return
  gsap.registerPlugin(DrawSVGPlugin)

  gsap
   .timeline()
   .to(bgRef.current, { duration: 1, opacity: 1 })
   .from(outlineLogoRef.current, {
    drawSVG: '50% 50%',
    duration: 7,
   })

  gsap.fromTo(
   solidlogoRef.current,
   {
    opacity: 0,
   },
   {
    opacity: 1,
    duration: 4,
    delay: 4,
   }
  )
  mountFlag.current = true
 })

 return (
  <div className="logo-container" ref={bgRef}>
   <img
    src={logoN}
    alt="N big logo"
    className="solid-logo"
    ref={solidlogoRef}
   />
   <svg version="1.0" width="1606" height="1765" viewBox="7 10 1620 1780">
    <g className="svg-container" transform="scale(1.002 1.002)" fill="none">
     <path
      ref={outlineLogoRef}
      d="M 10.812763,108.00683 V 1774.3511 H 418.18922 V 631.45984 L 1024.2359,1774.3511 h 479.9238 V 108.00683 H 1096.7809 V 1250.8981 L 490.73662,108.00683 120.48,107.74667 123.45976,1675.8788 H 530.83622 V 532.98754 L 1136.8829,1675.8788 h 479.9238 V 9.53453 H 1209.4279 V 1152.4258 L 603.38362,9.53453 H 123.45976 l 0.36691,98.21214 z"
      id="path928"
     />
    </g>
   </svg>
  </div>
 )
}

export default Logo
