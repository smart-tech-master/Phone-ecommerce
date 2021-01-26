import React from 'react'
import './styles.scss'
import { CLOSE_IMG, GOLD_PHONE, ADD_IMG } from 'common/images'
type Props = {
  additems: Object
}

class CompareVSmodal extends React.Component<Props>{

  constructor(props: Props) {
    super(props)
    this.state = {
      additems: {}
    }
  }

  render() {
    const { additems } = this.props
    const lists = Object.keys(additems)
    const count = additems.length
    console.log(count)
    return lists ? (
      <div className="add_item_part animated fadeInRight">
        <div className="add_title">
          <b>{count} Item</b>
          <p className="added_part">added</p>
        </div>
        <ul className="item_ul">
          {
            lists.map((item, index) => {
              return (
                <li key={index}>
                  <div className="compare_titles">
                    <img className="image_size1" src={GOLD_PHONE} />
                    <div className="topic_part">
                      <p className="brand_title">AppLE</p>
                      <b className="device_name">iPhone X</b>
                    </div>
                    <button type="button" className="remove_item"><i className="fa fa-minus"></i></button>
                  </div>
                </li>
              )
            })
          }
        </ul>
        {
          count > 1 && (
            <button className="btn btn-primary add_button">VS</button>
          )
        }
        {
          count == 1 && (
            <button className="btn btn-primary add_button">Add to Compare</button>
          )
        }

      </div>

    ) : null

  }



}

export default CompareVSmodal