import Banner from '../components/Banner'
import ImgBanner from '../images/banner_img_2.png'
import Collapse from '../components/Collapse'
import About from '../about.json'
import '../styles/sass/assets/css/about.css'

function AboutInfo() {
  return (
    <section>
      <Banner image={ImgBanner} />
      <div className='collapse__container'>
        {About.map((about, id) => (
          <Collapse key={id} title={about.title} description={about.description} />
        ))}
      </div>
    </section>
  )
}

export default AboutInfo
