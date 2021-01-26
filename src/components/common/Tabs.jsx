//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

type TabListTypes = { tabName: string, status: string }

type Props = {
  onTabChange: (val: string, val: string, val: string) => any,
  tabList: Array<Object>,
  activeTab: string,
  wrapperClass?: string,
  productID: string,
}

const Tabs = (props: Props) => {
  const { onTabChange, tabList, wrapperClass, activeTab, productID } = props
  console.log(activeTab)
  return (
    <ul className={wrapperClass || 'nav nav-tabs'} role="tablist">
      {tabList.map((item, index) => {
        const itemObj = {
          versionID: item.version_id,
          versionSlug: item.slug,
          versionName: item.version_name
        }
        console.log(itemObj.versionName)
        return (
          <li key={index} className="nav-item curor_point nav-background">
            <a
              data-toggle="tab"
              className={
                itemObj.versionName === activeTab ? 'nav-link  active' : 'nav-link'
              }
              onClick={() => onTabChange(itemObj.versionID, itemObj.versionName, productID)}
            >
              {itemObj.versionName}
              {itemObj.is_new === "Yes" ? <div className="ipn-new">new</div> : null}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Tabs
