import React from 'react'
import Header from '../header'
import Footer from '../footer/index'
import BrandStyle from './brandstyle.jsx'
import LogoUsage from './logousage.jsx'
import LogoColor from './logocolor'
import DownloadBrand from './downloadbrand'
import BrandMark from './brandmark'
import BrandPicture from './brandpicture'
import Typography from './typograph'
import PrimaryColor from './primarycolor'
import BrandFont from './brandfont'
import BrandText from './brandtext'
import TryTechSpecs from './trytechspecs'

const BrandGuideLines = () => {
  const onFeedBackClick = () => { };
  return (

    <React.Fragment>
      <Header onFeedBackClick={onFeedBackClick} />
      <BrandStyle />
      <LogoUsage />
      <LogoColor />
      <DownloadBrand />
      <BrandMark />
      <BrandPicture />
      <Typography />
      <PrimaryColor />
      <BrandFont />
      <BrandText />
      <TryTechSpecs />
      <Footer />
    </React.Fragment>

  )
}

export default BrandGuideLines;