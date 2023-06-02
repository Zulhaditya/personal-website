import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='#footer_section'>
      <a href='#footer' className='footer__logo'>
        Zulhaditya
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#footer'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portofolio'>Project</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/hapiz.haditya.5'>
          <FaFacebookF />
        </a>
        <a href='https://www.github.com/zulhaditya/'>
          <BsGithub />
        </a>
        <a href='https://www.instagram.com/zulhaditya/'>
          <FiInstagram />
        </a>
        <a href='https://www.linkedin.com/in/zulhaditya/'>
          <BsLinkedin />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Zulhaditya. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
