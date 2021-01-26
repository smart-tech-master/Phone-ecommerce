//@flow
import React from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import './styles.css'
import SelectSearch from 'react-select-search'
import { GET_CB_FILTER_PRODUCTS } from 'common/constants'
type Props = {

  dispatch: ({ type: string, payload: any }) => any,
  optionList1: Object
}

type State = {
  options: Array<Object>
}

class Selector extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props)
    this.state = {

      options: [{ name: "Apple", value: "" }]
    }

  }

  // componentWillReceiveProps(nextProps) {

  //   var temp = []
  //   nextProps.optionList1.categories.categories.map((item, index) => {
  //     temp.push({ name: item.category_name, value: item.category_id })
  //   })
  //   console.log(temp)
  //   this.setState({ options: temp })

  // }

  onSelectedValue = (item) => {

    console.log("categoryyyyyyyyyyy....")
    console.log(item)

    this.props.dispatch({
      type: 'GET_CB_FILTER_PRODUCTS',
      payload: { url: GET_CB_FILTER_PRODUCTS, categoryID: item.value, brandID: "all" }
    })


  }

  render() {
    const { optionList1 } = this.props
    const optionlists = typeof optionList1.categories !== 'undefined' ? optionList1.categories : {}
    const temp = []
    optionlists.categories.map((item, index) => {
      temp.push({ name: item.category_name, value: item.category_id })
    })
    console.log(temp)
    return temp ? (
      <SelectSearch key="category_select" className="select-search-box" autofocus={false} height={200} options={temp} value="Air Conditioners" name="category_select" placeholder="CATEGORY" onChange={this.onSelectedValue} />
    ) : null
  }

}
const mapStateToProps = state => {
  return {

  }
}
export default connect(mapStateToProps)(Selector)