//@flow

import React from 'react'
import {
  text,
  description,
  background,
  integrate_part,
  platforms_container,
  container,
  text_container,
  link,
  wp,
  shopify,
  youtube,
  tech_specs
} from './styles/integrate.module.scss'
import {
  LOGO_YOUTUBE,
  LOGO_WORDPRESS,
  LOGO_SHOPIFY,
  LOGO1
} from 'common/images'
import { Link } from 'react-router-dom'

const Integrate = () => {
  const data = [
    {
      logo: LOGO_WORDPRESS,
      description: 'Automatically generate and embed specs, product videos into your blog or online store.',
      link: {},
      class: `${description} ${wp}`
    },
    {
      logo: LOGO_SHOPIFY,
      description: 'Automatically generate and embed specs and product videos into your shopify store.',
      link: {},
      class: `${description} ${shopify}`
    },
    {
      logo: LOGO_YOUTUBE,
      description: 'See the detailed tech specs of any product featured in a youtube video.',
      link: {
        text: 'See Example',
        path: ''
      },
      class: `${description} ${youtube}`
    },
    {
      logo: LOGO1,
      description: 'Access our simple api and documentation for your custom web and mobile app projects.',
      link: {
        text: 'Get API',
        path: ''
      },
      class: `${description} ${tech_specs}`
    }
  ]

  return (
    <div className={integrate_part}>
      <div className={text}>
        <h1>Integrate to<br></br> everywhere.</h1>
        <div className={description}>
          We support various of platforms for the integration of our API.
        </div>
      </div>
      <div className={platforms_container}>
        {data.map((item, index) => (
          <div key={index} className={container}>
            <img src={item.logo} />
            <div className={item.class}>
              <div className={background}></div>
              <div className={text_container}>
                <div className={text}>
                  {item.description}
                </div>
                {item.link && item.link.text && (
                  <Link to={item.link.path} className={link}>
                    {item.link.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Integrate
