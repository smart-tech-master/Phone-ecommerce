import * as React from 'react'
import { connect } from 'react-redux'
import { debounce } from 'lodash'
import './styles.scss'
import { CLOSE_IMG, GOLD_PHONE, ADD_IMG } from 'common/images'
import InputSearchBar from 'components/inputSearchBar'
import { trendingProductType } from 'common/types'
import { SEARCH_BY_NAME, GET_TRENDING_PRODUCTS, GET_CATEGORIES_PRODUCTS, GET_BRANDS, GET_DETAIL_PRODUCTION } from 'common/constants'
import SearchListForVs from 'components/serachlistforvs'
import CompareVSmodal from 'components/compare'
import { addItem, removeItem, resetItem } from "common/action"

type Props = {
  history: {
    push: (path: string) => any
  },
  dispatch: ({ type: string, payload: any }) => any,
  onCloseModal: (event: any) => any,
  onVSButtonClick: () => any,
  deviceByName: Array<Object>,
  additems: Array<Object>
}

type State = {
  isShortcutVisible: boolean,
  isAddModalVisible: boolean,
  totalItems: Array<Object>,
  isBorderBottomHidden: boolean,
  activeFilter: string
}

class SearchProductionModal extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      isShortcutVisible: false,
      isAddModalVisible: false,
      totalItems: [],
      additems: {},
      isBorderBottomHidden: true,
      activeFilter: 'Iphone X',
    }
    this.onAddItemClick = this.onAddItemClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.additems !== this.props.additems) {
      this.setState({ additems: this.props.additems })
    }
  }
  onAddItemClick = (itemObject, productid) => {

    this.setState({ isAddModalVisible: true })
    var buttonref = document.getElementById("button" + productid);
    var checkbuttonref = document.getElementById("checkedbutton" + productid);
    if (buttonref.classList.contains("checkedbutton")) {
      checkbuttonref.classList.add("checkedbutton");
      buttonref.classList.remove("checkedbutton");
    } else {
      buttonref.classList.add("checkedbutton");
      checkbuttonref.classList.remove("checkedbutton");
    }

    this.props.dispatch({
      type: 'ADD_ITEM',
      payload: addItem(itemObject)
    })

  }

  onRemoveItemClick = (productid, Objectitem) => {

    var buttonref = document.getElementById("button" + productid);
    var checkbuttonref = document.getElementById("checkedbutton" + productid);
    if (buttonref.classList.contains("checkedbutton")) {
      checkbuttonref.classList.add("checkedbutton");
      buttonref.classList.remove("checkedbutton");
    } else {
      buttonref.classList.add("checkedbutton");
      checkbuttonref.classList.remove("checkedbutton");
    }
    this.props.dispatch({
      type: 'REMOVE_ITEM',
      payload: removeItem(Objectitem.productId)
    })
  }

  /**
   * get device data by searching product name
   */
  getProductByName = debounce((productName) => {
    if (productName !== "") {
      this.setState({ isShortcutVisible: true })
      this.setState({ isBorderBottomHidden: false })
      this.props.dispatch({
        type: 'GET_DEVICE_BY_NAME',
        payload: { url: SEARCH_BY_NAME, name: productName }
      })
    }
    else {
      this.setState({ isShortcutVisible: false })
      this.setState({ isBorderBottomHidden: true })
      this.props.dispatch({
        type: 'RESET',
        payload: { type: 'GET_DEVICE_BY_NAME_RESET' }
      })
      this.props.dispatch({
        type: 'RESET_ITEM',
        payload: resetItem("reset")
      })
      this.setState({ isAddModalVisible: false })
    }
  }, 1000)

  handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      e.target.value = ''
      this.getProductByName("")
      this.props.dispatch({
        type: 'RESET_ITEM',
        payload: resetItem("reset")
      })
      this.setState({ isAddModalVisible: false })
    }
  }

  onResetItems = () => {

    this.props.dispatch({
      type: 'RESET_ITEM',
      payload: resetItem("reset")
    })

    var buttonclasses = document.getElementsByClassName("green_item");
    for (var i = 0; i < buttonclasses.length; i++) {
      buttonclasses[i].classList.add("checkedbutton")
    }
    var buttonclasses1 = document.getElementsByClassName("cstm_plust_search");
    for (var j = 0; j < buttonclasses.length; j++) {
      buttonclasses1[j].classList.remove("checkedbutton")
    }

  }
  onItemRemove = (productid) => {
    this.props.dispatch({
      type: 'REMOVE_ITEM',
      payload: removeItem(productid)
    })
    var buttonref = document.getElementById("button" + productid);
    var checkbuttonref = document.getElementById("checkedbutton" + productid);
    if (buttonref.classList.contains("checkedbutton")) {
      checkbuttonref.classList.add("checkedbutton");
      buttonref.classList.remove("checkedbutton");
    } else {
      buttonref.classList.add("checkedbutton");
      checkbuttonref.classList.remove("checkedbutton");
    }
  }

  onFilterButtonClick = (activeFilter: string) => {
    this.setState({ activeFilter: activeFilter })
    //this.setState({productName:activeFilter})
    if (activeFilter != '') {
      document.getElementById("vs_input").value = activeFilter
      this.props.dispatch({
        type: 'GET_DEVICE_BY_NAME',
        payload: { url: SEARCH_BY_NAME, name: activeFilter }
      })
    } else {
      this.props.dispatch({
        type: 'RESET',
        payload: { type: 'GET_DEVICE_BY_NAME_RESET' }
      })
    }
  }

  render() {
    const {
      isShortcutVisible,
      isAddModalVisible,
      isBorderBottomHidden,
      activeFilter
    } = this.state
    const { deviceByName, additems } = this.props
    const lists = Object.keys(additems)
    const count = additems.length
    return (
      <div className="vs_dialog left">
        <button onClick={this.props.onCloseModal} className="btn btn-primary close_btn">
          &times;
      <span>close</span>
        </button>
        <div className="search_part">
          <div className={isBorderBottomHidden ? "search-cont border_bottom container" : "search-cont container"}>
            <input type="text" id="vs_input" onChange={(e) => this.getProductByName(e.target.value)} placeholder="Type the product name here" onKeyDown={(e) => this.handleKeyDown(e)} />
            {
              isShortcutVisible && (
                <div className="clear_part">
                  <b className="esc_title">ESC</b>
                  <span className="clear_title">to clear</span>
                </div>
              )
            }
          </div>

          {
            /**get production list by searching product name
             * 
             * component: SearchListForVS
             *  
             */
            isShortcutVisible && (

              <SearchListForVs
                isAddModalVisible={isAddModalVisible}
                deviceByName={deviceByName}
                onAddItemClick={this.onAddItemClick}
                onRemoveItemClick={this.onRemoveItemClick}
                activeFilter={activeFilter}
                filterButtonList={deviceByName}
                onFilterButtonClick={this.onFilterButtonClick}
              />
            )
          }

        </div>
        <div className={count !== 0 && isAddModalVisible ? "add_item_part showitemmodal" : "add_item_part"}>
          <div className="add_title">
            {
              count < 5 && (
                <div className="count_part">
                  <b>{count} Item</b>
                  <p className="added_part">added</p>
                </div>
              )
            }
            {
              count == 5 && (
                <div>
                  <p className="added_part">You have added <b>Max</b> of the product.</p>
                </div>
              )
            }
            {
              count > 1 && (
                <p className="opcity_remove" onClick={this.onResetItems}>Remove All</p>
              )
            }

          </div>
          <ul className="item_ul">
            {
              additems.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="compare_titles">
                      <img className="image_size1" src={item.productImg || GOLD_PHONE} />
                      <div className="topic_part">
                        {count < 3 &&
                          (
                            <div>
                              <p className="brand_title">{item.aboutProduct}</p>
                              <b className="device_name">{item.productName}</b>
                            </div>
                          )
                        }
                      </div>
                      <button type="button" className="remove_item" onClick={() => this.onItemRemove(item.productId)}><i className="fa fa-minus"></i></button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          {
            count > 1 && (
              <button className="btn btn-primary add_button" onClick={this.props.onVSButtonClick}>VS</button>
            )
          }
          {
            count == 1 && (
              <button className="btn btn-primary add_button">Add to Compare</button>
            )
          }

        </div>


      </div>
    )
  }

}
const mapStateToProps = state => {

  return {
    deviceByName: state.deviceByName,
    additems: state.additems.additems
  }
}

export default connect(mapStateToProps)(SearchProductionModal)