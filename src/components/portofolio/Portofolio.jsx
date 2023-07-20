import './portofolio.css'
import IMG1 from '../../assets/urquotes.png'
import IMG2 from '../../assets/lofi-store.png'
import IMG3 from '../../assets/rsud.png'
import IMG4 from '../../assets/cyberpixels.png'
import IMG5 from '../../assets/netflix.png'
import IMG6 from '../../assets/virtual-mouse.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Urquotes | Website',
    github: 'https://github.com/Zulhaditya/urquotes',
    demo: 'https://urquotes.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Orbis Store | Website',
    github: 'https://github.com/Zulhaditya/orbis-store',
    demo: 'https://orbis-store.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'RSUD | Website',
    github: 'https://github.com/Zulhaditya/rsud-website',
    demo: 'https://rsudwonosari.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Cyberpixels | Game',
    github: 'https://github.com/Zulhaditya/cyberpixels-game',
    demo: 'https://drive.google.com/file/d/1IiOFReh1Cd_k3t_ha2MLiWRy4YiBds73/view?usp=sharing',
  },
  {
    id: 5,
    image: IMG6,
    title: 'Virtual Mouse | AI',
    github: 'https://github.com/Zulhaditya/virtual-mouse',
    demo: 'https://github.com/Zulhaditya/virtual-mouse',
  },
  {
    id: 6,
    image: IMG5,
    title: 'Netflix | Data Analysis',
    github: 'https://github.com/Zulhaditya/netflix-analysis',
    demo: 'https://github.com/Zulhaditya/netflix-analysis/blob/main/netflix.ipynb',
  },
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className='container portofolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portofolio__item'>
              <div className='portofolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portofolio__item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portofolio
