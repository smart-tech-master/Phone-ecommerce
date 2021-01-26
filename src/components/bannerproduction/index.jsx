import * as React from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import { PHONE_IMG, TV_IMG, STV_IMG, GOLD_PHONE, ICON_SLIDER_ARROWS } from 'common/images'
import { versusFooterData } from 'utils/metaData'

type State = {
  value: object,
}

type Props = {
  dispatch: ({ type: string, payload: any }) => any,
  phoneData: Array<Object>,
  onVSButtonClick: (value1: string, value2: string) => any,
  footerProducts: Object,

}
class BannerProduction extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: 0, max: 5 }
    this.handleChange = this.handleChange.bind(this);
    this.initScroll = this.initScroll.bind(this);
    // document.getElementById("typeinp").setAttribute('max', 600);
    window.addEventListener('resize', this.initScroll);
    // window.addEventListener('load', this.handleChange);


  }
  initScroll(){
    var element = document.getElementById("vs_scroll");
    var element1 = document.getElementById("scroll_control");
    var scroll = document.getElementById("typeinp");
    if (element !== null && element1 !== null) {
      this.setState({ max: element.scrollWidth - element1.offsetWidth });
      this.setState({ value: 0 });

      // var element = document.getElementById("vs_scroll");
      element1.scrollLeft = 0;
      document.getElementById("typeinp").value = 0;
    }
  }
  handleChange(event) {
    console.log(event);
      var element = document.getElementById("vs_scroll");
      var element1 = document.getElementById("scroll_control");
      var scroll = document.getElementById("typeinp");
      if (element !== null && element1 !== null) {
        this.setState({ max: element.scrollWidth - element1.offsetWidth });
        this.setState({ value: event.target.value });

        // var element = document.getElementById("vs_scroll");
        element1.scrollLeft = event.target.value;


    }

    // console.log(element.scrollWidth);
  }


  renderItem(item, index) {

  }

  render() {
    const { footerProducts } = this.props
    const bannerproducts = typeof footerProducts !== "undefined" ? footerProducts : []

    return (
      <div className="banner_outer">
        <div className="banner_box" id="scroll_control">
          <ul className="item_group_box" id="vs_scroll">
            {/* api integration part */}
            {
              bannerproducts.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="item_banner_box">
                      <div className="item_box">
                        <div className="banner_title">
                          <div className="banner_image">
                            <img src={item[0].featured_image.thumb || PHONE_IMG} className="image_size"></img>
                          </div>

                          <div className="margin_description">
                            <b className="brand_title">{item[0].v_brand_name}</b>
                            <p className="device_name">{item[0].device_name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="button_adjust">
                        <button className="vs_button btn btn-primary" onClick={() => this.props.onVSButtonClick(item[0].device_id, item[1].device_id)}>VS</button>

                      </div>

                      <div className="item_box">
                        <div className="banner_title">
                          <div className="banner_image">
                            <img className="image_size" src={item[1].featured_image.thumb || PHONE_IMG}></img>
                          </div>

                          <div className="margin_description">
                            <b className="brand_title">{item[1].v_brand_name}</b>
                            <p className="device_name">{item[1].device_name}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </li>
                )
              })
            }

          </ul>
        </div>
        <div className="range_part">
          <input
            id="typeinp"
            type="range"
            min="0" max={this.state.max}
            value={this.state.value}
            onChange={this.handleChange}
            step="1" className="slider" />
        </div>

      </div>

    )
  }


}



export default BannerProduction