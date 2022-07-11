import './animated-letters.styles.scss'

const AnimatedLetters = ({ letterClass, letterArray, idx }) => {
 return (
  <span>
   {letterArray.map((letter, id) => (
    <span key={letter + id} className={`${letterClass} _${idx + id}`}>
     {letter}
    </span>
   ))}
  </span>
 )
}

export default AnimatedLetters
