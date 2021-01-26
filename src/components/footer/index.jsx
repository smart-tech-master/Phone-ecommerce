//@flow


import React from 'react'
import {
  LOGO_IMG
} from 'common/images'
import { Link } from 'react-router-dom'
import {
  footer_container,
  logo,
  rights,
  columns_cont,
  col_cont,
  link_cont
} from './footer.module.scss'

const Footer = () => {
  const columns = [
    {
      name: "Discover",
      links: [
        {
          name: 'Web app',
          path: ''
        },
        {
          name: 'Blog',
          path: ''
        },
        {
          name: 'Help',
          path: ''
        },
        {
          name: 'FAQ',
          path: ''
        }
      ]
    },
    {
      name: "Company",
      links: [
        {
          name: 'About',
          path: ''
        },
        {
          name: 'Team',
          path: ''
        },
        {
          name: 'Careers',
          path: ''
        },
        {
          name: 'Legal',
          path: ''
        },
        {
          name: 'Contact Us',
          path: ''
        },
        {
          name: 'Guidelines',
          path: ''
        },
      ]
    },
    {
      name: "Social",
      links: [
        {
          name: 'Facebook',
          path: ''
        },
        {
          name: 'Twitter',
          path: ''
        },
        {
          name: 'LinkedIn',
          path: ''
        },
        {
          name: 'Instagram',
          path: ''
        },
        {
          name: 'Github',
          path: ''
        }
      ]
    },
    {
      name: "Developers",
      links: [
        {
          name: 'API',
          path: ''
        },
        {
          name: 'Apps',
          path: ''
        },
        {
          name: 'Learning Spaces',
          path: ''
        },
        {
          name: 'Developer Page',
          path: ''
        }
      ]
    },
  ];

  return (
    <React.Fragment>
      <div className={footer_container}>
        <div className={logo}>
          <img src={LOGO_IMG} alt="logo"></img>
          <div className={rights}>© TechSpecs Ltd. All rights reserved.</div>
        </div>
        <div className={columns_cont}>
          {columns.map((col, cInd) => (
            <div className={col_cont} key={cInd}>
              <h2> {col.name}</h2>
              {col.links.map((link, lInd) => (
                <div className={link_cont} key={lInd}>
                  <Link to={link.path}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
