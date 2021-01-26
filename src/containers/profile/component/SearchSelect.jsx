import _ from 'lodash'
import React, { Component } from 'react'
// import { Search, Grid, Header, Segment } from 'semantic-ui-react'
// import Icon, { FontAwesome, Feather, Fontisto } from 'react-web-vector-icons';
import { Search } from 'semantic-ui-react'
import Icon from 'react-web-vector-icons'
import styles from './component.module.scss'
import './searchSelect.scss'

export default class SearchSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      results: [],
      value: '',
      hobbieslist: [],
      source: this.props.source,
      placeholder: this.props.placeholder,
      idname: this.props.idname
    }
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
  }
  add(key) {
    let hobbieslist = this.state.hobbieslist
    const newItem = document.getElementById(this.state.idname)
    if (newItem.value !== '') {
      // Add the new item to the end of our hobbieslist array
      hobbieslist.push(newItem.value)
      // Then we use that to set the state for hobbieslist
      this.setState({
        hobbieslist: hobbieslist
      })
      this.setState({
        isLoading: false,
        results: [],
        value: ''
      })
    }
  }

  remove(item) {
    // Put our hobbieslist into an array
    const hobbieslist = this.state.hobbieslist.slice()
    // Check to see if item passed in matches item in array
    hobbieslist.some((el, i) => {
      if (el === item) {
        // If item matches, remove it from array
        hobbieslist.splice(i, 1)
        return true
      }
    })
    // Set state to hobbieslist
    this.setState({
      hobbieslist: hobbieslist
    })
  }

  handleResultSelect = (e, { result }) => {
    let hobbieslist = this.state.hobbieslist
    hobbieslist.push(result.title)
    this.setState({
      value: '',
      hobbieslist: hobbieslist
    })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1)
        return this.setState({
          isLoading: false,
          results: [],
          value: ''
        })

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.source, isMatch)
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <div>
        <Search
          className={styles.searchbar}
          input={{ icon: 'search', iconPosition: 'left' }}
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          results={results}
          value={value}
          {...this.props}
          onKeyDown={event => {
            if (event.keyCode === 13) {
              this.add(event)
            }
          }}
          id={this.state.idname}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true
          })}
          placeholder={this.state.placeholder}
        />
        <section className="section">
          <div className={styles.addPro}>
            {this.state.hobbieslist.map(item => (
              <div className={styles.addItem} key={item}>
                <p style={{ margin: '5px', marginRight: '0px' }}>
                  {item} &nbsp;{' '}
                </p>
                <a
                  onClick={() => this.remove(item)}
                  style={{ margin: '5px', marginLeft: '0px' }}
                >
                  <Icon
                    name="minuscircle"
                    font="AntDesign"
                    color="#baccd8"
                    size={20}
                    style={{ cursor: 'grab' }}
                  />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
}
