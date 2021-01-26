import React from 'react'
import { connect } from 'react-redux'
import StarRatings from 'react-star-ratings'
import Header from 'components/header'
import { WHITE_VS_ICN, SEARCH_IMG, CLOSE_IMG, BANNER } from 'common/images'
import './styles.scss'
import StandardSideBar from 'components/standardsidebar'
import Tabs from 'components/common/Tabs'
import { GET_DETAIL_PRODUCTION } from 'common/constants'
import ProductDescriptionTable from 'components/productDescriptionTable'

type Props = {
  history: {
    push: (path: string) => any
  },
  dispatch: ({ type: string, payload: any }) => any,
  sideBarMenu: Array<string>,
  smartPhoneDetails: Object,
  versionDetailState: Object,
}

type State = {
  deviceId: string,
  activeTab: string,
  attributeItems: Array<string>,
  rating: number,
  closebutton: boolean
}

class StandardDetailPage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      deviceId: 'aHFVTlpmaXQxTnY1eWVVZ2QraXZPZz09',
      activeTab: '',
      attributeItems: [],
      rating: 3,
      closebutton: false
    }

    props.dispatch({
      type: 'GET_SMARTPHONE_DETAILS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: this.state.deviceId }
    })
  }

  onProductTabChange = (versionID: string, activeTab: string, productID: string) => {

    this.setState({ activeTab: activeTab })
    this.props.dispatch({
      type: 'GET_VERSION_SPECIALFICATION',
      payload: { url: GET_DETAIL_PRODUCTION, productId: productID, versionId: versionID }
    })
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.smartPhoneDetails.smartPhoneDetails !==
      this.props.smartPhoneDetails.smartPhoneDetails
    ) {
      let activeTTab =
        typeof nextProps.smartPhoneDetails.smartPhoneDetails.result.version !== 'undefined' && nextProps.smartPhoneDetails.smartPhoneDetails.result.version.length > 0
          ? nextProps.smartPhoneDetails.smartPhoneDetails.result.version[0]
            .version_name : ""

      this.setState({ activeTab: activeTTab })
    }
  }
  getAttributeByName = value => {
    // if (this.state.attributeItems !== "undefined" || this.state.attributeItems.length != 0) {
    //   var count = 0;
    //   var check = this.state.attributeItems.includes(value);
    //   if (check) {
    //     var object = document.getElementById(value);
    //     object.scrollIntoView(true, { behavior: 'smooth' });
    //   } else {
    //     var object = document.getElementById("panepart0");
    //     object.scrollIntoView(true, { behavior: 'smooth' });
    //   }

    // }

    if (value !== "") {
      this.setState({ closebutton: true })
    }
    else {
      this.setState({ closebutton: false })

    }
  }


  closeClick = () => {

    document.getElementById("input_text").value = "";
    this.setState({ closebutton: false })
  }

  render() {
    const { sideBarMenu, smartPhoneDetails, versionDetailState } = this.props
    const { closebutton } = this.state
    const specfications = typeof smartPhoneDetails.smartPhoneDetails.result !== "undefined" ? smartPhoneDetails.smartPhoneDetails.result.specification : {};
    const images = typeof smartPhoneDetails.smartPhoneDetails.result !== "undefined" ? smartPhoneDetails.smartPhoneDetails.result.images : [];
    const versions = typeof smartPhoneDetails.smartPhoneDetails.result !== "undefined" ? smartPhoneDetails.smartPhoneDetails.result.version : [];
    const versiondetail = typeof versionDetailState.versionDetailState.result !== "undefined" ? versionDetailState.versionDetailState.result.specification : {};
    console.log(versions)
    return (
      <div className="standard_wrapper" >
        <Header />
        <div className="container">
          <div className="grid-container">
            <div className="banner">
              <img src={BANNER} />
              <div className="banner_title">
                <p>Welcome to <b>TechSpecs</b>. Sign up here or login to your account to start using it with full features.</p>
                <div className="signupbutton">
                  <button className="btn btn-primary signup">SIGN UP</button>
                  <p>Login to Your Account</p>
                </div>
                <img className="image_position" src={CLOSE_IMG} />
              </div>
            </div>
            <div className="side_menubar">
              <StandardSideBar
                Menus={specfications}
                onhandleShow={this.onhandleShow}
                deviceImage={typeof images[0] !== "undefined" ? images[0].name.original : ""}
              />
            </div>
            <div className="device_header">
              <span className="device_name">Apple iPhone X</span>
              <div className="space"></div>
              <div>
                <StarRatings
                  rating={this.state.rating}
                  starRatedColor="rgb(3, 169, 244)"
                  numberOfStars={5}
                  name='rating'
                  svgIconPath="M24.331,22.222a.468.468,0,0,0-.139.418l.719,4.245a1.7,1.7,0,0,1-2.459,1.809l-3.827-2.018a.491.491,0,0,0-.441,0l-3.827,2.018A1.7,1.7,0,0,1,11.9,26.884l.719-4.245a.489.489,0,0,0-.139-.418L9.392,19.206a1.729,1.729,0,0,1-.441-1.74,1.68,1.68,0,0,1,1.369-1.16l4.268-.626a.446.446,0,0,0,.348-.255l1.9-3.874a1.708,1.708,0,0,1,3.062,0h0l1.9,3.874a.446.446,0,0,0,.348.255l4.268.626a1.68,1.68,0,0,1,1.369,1.16,1.637,1.637,0,0,1-.441,1.74Z"
                  svgIconViewBox='7 7 30 30'
                  starHoverColor="rgb(3, 169, 244)"
                  starDimension="30"
                  starSpacing="0px"
                />
                <span>Based on <b>32</b> reviews.</span>
              </div>
            </div>
            <div className="item5">
              <div className="spec-container">
                <div className="iphn-tab tab_background">
                  <Tabs
                    tabList={versions}
                    onTabChange={this.onProductTabChange}
                    activeTab={this.state.activeTab}
                    productID={typeof smartPhoneDetails.smartPhoneDetails.result !== "undefined" ? smartPhoneDetails.smartPhoneDetails.result.product_id : ""}
                  />
                  <div className="search_box">
                    <img className="search_icon" src={SEARCH_IMG} />
                    <input type="text" id="input_text" className="searchTerm" placeholder="Find a Spec..." onChange={(e) => this.getAttributeByName(e.target.value)} />
                    {
                      closebutton && (
                        <img className="close_size" src={CLOSE_IMG} onClick={this.closeClick} />
                      )
                    }

                  </div>
                  <ProductDescriptionTable
                    paneList={specfications}
                    versionDetailState={versiondetail}
                    attributeItems={this.state.attributeItems}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>


    )
  }

}

const mapStateToProps = state => {

  return {
    smartPhoneDetails: state.smartPhoneDetails,
    versionDetailState: state.versionDetail
  }
}

export default connect(mapStateToProps)(StandardDetailPage)


