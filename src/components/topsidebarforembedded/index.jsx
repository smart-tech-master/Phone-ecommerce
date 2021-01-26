import React from 'react'


type Props = {
  specication: Object,
  onhandleShow: (index: number) => any,
}

const TopSideBar = (props: Props) => {
  const { specication, onhandleShow } = props
  const menulist = Object.keys(specication).length ? Object.keys(specication) : []

  return (
    <div className="menubar">
      <ul>
        {
          menulist && menulist.map((menu, index) => {
            return (
              <li key={index} id={index} className={index == 0 ? 'paneindex  pointer' : 'paneindex'} onClick={() => onhandleShow(index)}><a>{menu}</a></li>
            )
          })
        }

      </ul>
    </div>
  )
}

export default TopSideBar