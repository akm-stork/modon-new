import Header from './sections/Header'
import ModonProps from './sections/ModonProps'
import ModonSlider from './sections/ModonSlider'
import LastPage from './sections/LastPage'
import SecondPage from './sections/SecondPage'
// import { useLayoutEffect } from 'react'
import ModonDesc from './sections/ModonDesc'
import Footer from './Footer/Footer'
import HorizontalScroll from './sections/HorizontalScroll'
const MainPage = () => {
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0)
// });
  return (
    <>
    {/* Last Push */}
     <Header />
     <SecondPage />
     <ModonDesc />
     <ModonProps />
     <ModonSlider />
     <LastPage />
     <HorizontalScroll />
     <Footer />
    </>
  )
}

export default MainPage