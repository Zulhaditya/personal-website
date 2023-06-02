import CTA from './CTA'
import './header.css'
import Typewritter from 'typewriter-effect'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <Typewritter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello, I'm")
              .pauseFor(2500)
              .deleteAll()
              .start()
          }}
        />
        <h1>Muhammad Zulhaditya Hapiz</h1>
        <h5 className='text-light'>Backend Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header
