
import Banner from '../components/Banner'
import RentalSection from '../components/RentalSection'
import ImgBanner from '../images/banner_img_1.png'

function Home() {
  return (
    <div>
      <Banner
        texteOne='Chez vous,'
        texteTwo=' partout et ailleurs'
        image={ImgBanner}
      />
      <RentalSection />
    </div>
  )
}

export default Home
