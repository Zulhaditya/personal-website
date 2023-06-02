import profile from '../../assets/profile.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={profile} download className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let&#39;s Talk
      </a>
    </div>
  )
}

export default CTA
