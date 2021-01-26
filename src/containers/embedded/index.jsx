import React, { Component } from 'react'
import { connect } from 'react-redux'
import StarRatings from 'react-star-ratings'
import './styles.scss'
import ProductDescriptionTable from 'components/productDescriptionTable'
import TopSideBar from 'components/topsidebarforembedded'
import { GET_DETAIL_PRODUCTION } from 'common/constants'
import { LOGO_IMG } from 'common/images'
type Props = {
  history: {
    push: (path: string) => any
  },
  dispatch: ({ type: string, payload: any }) => any,
  smartPhoneDetails: Object,
  versionDetailState: Object,

}
class Embedded extends Component<Props> {

  constructor(props: Props) {
    super(props)
    this.state = {
      deviceId: 'aHFVTlpmaXQxTnY1eWVVZ2QraXZPZz09',
      activeTab: '',
      attributeItems: [],
      rating: 3,

    }
    props.dispatch({
      type: 'GET_SMARTPHONE_DETAILS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: this.state.deviceId }
    })
  }
  onhandleShow = (index) => {
    console.log(index);
    var paneref = "panepart" + index;
    var paneindex = document.getElementsByClassName("paneindex");
    for (var j = 0; j < paneindex.length; j++) {
      paneindex[j].classList.remove("pointer");
    }
    paneindex[index].classList.add('pointer');

    var object = document.getElementById(paneref);
    console.log(object)
    object.scrollIntoView({ block: 'end', behavior: 'smooth' });
    var session_objects = document.getElementsByClassName("session_title")
    for (var i = 0; i < session_objects.length; i++) {
      session_objects[i].classList.remove("pointer");
    }
    session_objects[index].classList.add("pointer")
  }
  render() {
    const { smartPhoneDetails, versionDetailState } = this.props
    console.log(smartPhoneDetails)
    const specfications = typeof smartPhoneDetails.smartPhoneDetails.result !== "undefined" ? smartPhoneDetails.smartPhoneDetails.result.specification : {};
    const menulist = Object.keys(specfications).length ? Object.keys(specfications) : []
    const images = typeof smartPhoneDetails.smartPhoneDetails.result !== "undefined" ? smartPhoneDetails.smartPhoneDetails.result.images : [];
    const device_name = typeof smartPhoneDetails.smartPhoneDetails.result !== "undefined" ? smartPhoneDetails.smartPhoneDetails.result.name : "Apple iphone X"
    const versions = typeof smartPhoneDetails.smartPhoneDetails.result !== "undefined" ? smartPhoneDetails.smartPhoneDetails.result.version : [];
    const versiondetail = typeof versionDetailState.versionDetailState.result !== "undefined" ? versionDetailState.versionDetailState.result.specification : {};
    return (
      <div className="App">
        <header className="main-header">
          <div className="container-fluid header_part">
            <div className="view_part">
              <b className="device_title">{device_name}</b>
              <div className="star_view">
                <StarRatings
                  rating={4.5}
                  starRatedColor="rgb(3, 169, 244)"
                  numberOfStars={5}
                  name='rating'
                  svgIconPath="M24.331,22.222a.468.468,0,0,0-.139.418l.719,4.245a1.7,1.7,0,0,1-2.459,1.809l-3.827-2.018a.491.491,0,0,0-.441,0l-3.827,2.018A1.7,1.7,0,0,1,11.9,26.884l.719-4.245a.489.489,0,0,0-.139-.418L9.392,19.206a1.729,1.729,0,0,1-.441-1.74,1.68,1.68,0,0,1,1.369-1.16l4.268-.626a.446.446,0,0,0,.348-.255l1.9-3.874a1.708,1.708,0,0,1,3.062,0h0l1.9,3.874a.446.446,0,0,0,.348.255l4.268.626a1.68,1.68,0,0,1,1.369,1.16,1.637,1.637,0,0,1-.441,1.74Z"
                  svgIconViewBox='7 7 30 30'
                  starHoverColor="rgb(3, 169, 244)"
                  starDimension="19"
                  starSpacing="0px"
                />
                <span className="review_part">Based on <b>32</b> reviews.</span>
              </div>
            </div>
            <TopSideBar
              specication={specfications}
              onhandleShow={this.onhandleShow}
            >
            </TopSideBar>
          </div>
        </header>
        <div className="description_part">
          <ProductDescriptionTable
            paneList={specfications}
            versionDetailState={versiondetail}
            attributeItems={this.state.attributeItems}
          />
        </div>

        <div className="modal_part">
          <b className="font_size">Powered by</b>
          <img className="image_size" src={LOGO_IMG} />
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

export default connect(mapStateToProps)(Embedded)



