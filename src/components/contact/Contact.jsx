import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toast'

const Contact = () => {
  const form = useRef()

  // notification
  const success = () => toast.success('Message sent successfully!')
  const failed = () => toast.error('Failed to send message!')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_7zhtsfn',
        'template_5h5iuin',
        form.current,
        'zjL872JvSdIIGbGLU'
      )
      .then(
        (result) => {
          console.log(result.text)
          success()
        },
        (error) => {
          console.log(error.text)
          failed()
        }
      )

    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        {/* AWAL CONTACT OPTIONS */}
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>zulhaditya@gmail.com</h5>
            <a
              href='mailto:hapizulhaditya@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsGithub className='contact__option-icon' />
            <h4>GitHub</h4>
            <h5>Zulhaditya</h5>
            <a
              href='https://github.com/Zulhaditya'
              target='_blank'
              rel='noreferrer'
            >
              Visit Me
            </a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Zulhaditya</h5>
            <a
              href='https://www.linkedin.com/in/zulhaditya/'
              target='_blank'
              rel='noreferrer'
              className='btn__contact'
            >
              Contact Me
            </a>
          </article>
        </div>
        {/* AKHIR CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='from_name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
