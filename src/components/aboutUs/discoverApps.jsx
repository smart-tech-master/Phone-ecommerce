//@flow

import React from 'react'
import {
  text,
  description,
  discover_apps,
  our_apps,
  app,
  app_cont,
  vs1,
  explore,
  indiegogo,
  vs2,
  ces,
  kickstarter,
  app_name
} from './styles/discoverApps.module.scss'
import {
  INDIEGOGO_IMG,
  COMPARE_IMG,
  CES_IMG,
  EXPORE_IMG,
  KICKSTARTER_IMG,
} from 'common/images'

const DiscoverApps = () => {
  console.log(vs1)
  const apps = [
    {
      appName: 'VS',
      description: 'Compare two or more products on-demand.',
      img: COMPARE_IMG,
      className: `${app} ${vs1}`
    },
    {
      appName: 'Explore',
      description:
        'Explore Now sure what you’re looking for? Browse our entire collection of electronics products.',
      img: EXPORE_IMG,
      className: `${app} ${explore}`
    },

    {
      appName: 'Indiegogo',
      description: 'Indiegogo Explore all products funded with Indiegogo.',
      img: INDIEGOGO_IMG,
      className: `${app} ${indiegogo}`
    },
    {
      appName: 'VS',
      description: 'Compare two or more products on-demand.',
      img: COMPARE_IMG,
      className: `${app} ${vs2}`
    },
    {
      appName: 'CES',
      description:
        'CES DIscover the detailed tech specs of new products from more than 4,400 exhibiting companies.',
      img: CES_IMG,
      className: `${app} ${ces}`
    },
    {
      appName: 'Kickstarter',
      description: 'Kickstarter Explore all products funded with Kickstarter.',
      img: KICKSTARTER_IMG,
      className: `${app} ${kickstarter}`
    },
  ];

  return (
    <div className={discover_apps}>
      <div className={text}>
        <h1>Discover our apps.</h1>
        <div className={description}>
          We constantly develop and publish helper apps to improve our user’s experience on TechSpecs.
        </div>
      </div>
      <div className={our_apps}>
        {apps.map((app, index) => (
          <div className={app.className} key={index}>
            <div className={app_cont}>
              <img src={app.img} alt={app.appName} />
              <p>{app.appName}</p>
            </div>
            <p className={app_name}>{app.appName}</p>
            <div className={description}>
              {app.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiscoverApps
