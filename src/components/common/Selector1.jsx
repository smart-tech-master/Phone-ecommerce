//@flow
import React from 'react'
import './styles.scss'
import './styles.css'
import SelectSearch from 'react-select-search'
type Props = {
  optionList: Object
}

type State = {
  options: Array<Object>
}

class Selector1 extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props)
    this.state = {

      options: [{ name: "Apple", value: "" }, { name: "Apple", value: "" }]
    }

  }

  // componentWillReceiveProps(nextProps) {
  //   var temp = []
  //   nextProps.optionList.brands.brands.map((item, index) => {
  //     temp.push({ name: item.brand_name, value: item.brand_id })
  //   })
  //   console.log(temp)
  //   this.setState({ options: temp })

  // }
  onSelectedValue = (item) => {
    console.log("selected value...................")
    console.log(item)

  }

  render() {
    const { options } = this.state
    const { optionList } = this.props
    const optionlists = typeof optionList.brands !== 'undefined' ? optionList.brands : {}
    const temp = []
    optionlists.brands.map((item, index) => {
      temp.push({ name: item.brand_name, value: item.brand_id })
    })
    return temp ? (
      <SelectSearch key="brand_select" className="select-search-box" search={true} multiple={false} autofocus={false} height={200} options={temp} value="id" name="brand" placeholder="BRAND" onChange={this.onSelectedValue} />
    ) : null
  }

}

export default Selector1
