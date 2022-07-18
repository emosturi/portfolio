import emailjs from '@emailjs/browser'
import { useState, useEffect, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../animated-letters/animated-letters.component'
import './contact.styles.scss'

const ContactForm = () => {
 const position = [-32.92941, -71.52673]
 const [letterClass, setLetterClass] = useState('text-animate')
 const mountFlag = useRef(false)
 const formRef = useRef()

 useEffect(() => {
  if (!mountFlag.current) {
   mountFlag.current = true
   setTimeout(() => {
    setLetterClass('text-animate-hover')
   }, 3000)
  }
 }, [])

 const handleSubmit = (e) => {
  e.preventDefault()
  emailjs
   .sendForm(
    'portfolio',
    'template_gjlt22t',
    formRef.current,
    'acHZuwPan8mOcrpx9'
   )
   .then(
    () => {
     alert('Message sent successfully!')
     window.location.reload(false)
    },
    () => {
     alert('Failed to send the message, please try again')
    }
   )
 }

 return (
  <>
   <div className="container contact-page">
    <div className="text-zone">
     <h1>
      <AnimatedLetters
       letterArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
       idx={15}
       letterClass={letterClass}
      />
     </h1>
     <p>
      Do you feel like doing something special on your next Frontend Project...?
      Reach me I would love to contribute!
     </p>
     <div className="contact-form">
      <form ref={formRef} onSubmit={handleSubmit} action="">
       <ul>
        <li className="half">
         <input type="text" name="name" placeholder="Name" required />
        </li>
        <li className="half">
         <input type="email" name="email" placeholder="Email" required />
        </li>
        <li>
         <input type="text" name="subject" placeholder="Subject" required />
        </li>
        <li>
         <textarea name="messagee" placeholder="Message" required />
        </li>
        <li>
         <input type="submit" className="flat-button" value="SEND" />
        </li>
       </ul>
      </form>
     </div>
    </div>
    <div className="info-map">
     JUSTNICK - Headquarters
     <br />
     Chile,
     <br />
     Los Pinos 610, los Romeros <br />
     Concón <br />
     <span>nicsalb@gmail.com</span>
    </div>
    <div className="map-wrap">
     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
       <Popup>
        Here is where your app becomes real... <br /> ...Or where you can
        deliver your Fro-Yo.
       </Popup>
      </Marker>
     </MapContainer>
    </div>
   </div>
   <Loader type="line-scale-pulse-out-rapid" />
  </>
 )
}

export default ContactForm
