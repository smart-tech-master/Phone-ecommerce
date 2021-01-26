import React, { Component, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'
import Icon from 'react-web-vector-icons'
import { Link } from 'react-router-dom'

import SearchSelect from './SearchSelect'
import styles from './component.module.scss'

import LOGO_IMG from '../../../assets/images/profile_header.png'
import defImg from '../../../assets/images/1.jpg'

function Previews(props) {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })
  const thumbs =
    files.length === 0 ? (
      <div className={styles.thumb}>
        <div className={styles.thumbInner}>
          <img className={styles.img} src={defImg} alt="no_image" />
        </div>
      </div>
    ) : (
      files.map(file => (
        <div className={styles.thumb} key={file.name}>
          <div className={styles.thumbInner}>
            <img src={file.preview} className={styles.img} alt="file_preview" />
          </div>
        </div>
      ))
    )

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <div className={styles.previews}>
      <Link
        to=""
        side
        className={styles.thumbsContainer}
        style={{ width: '150px' }}
      >
        {thumbs}
      </Link>
      <div
        {...getRootProps({ className: 'dropzone' })}
        className={styles.dragedroppanel}
      >
        <input {...getInputProps()} />
        <p>Drag & drop your profile photo here or</p>
      </div>
    </div>
  )
}

const sourceHobbies = [
  { title: 'Sci-Fi' },
  { title: 'Gaming' },
  { title: 'Tech' },
  { title: 'Magazines' }
]
const plaholHobbies = 'Type your interests, Hit comma to add'
const sourceBrands = [
  { title: 'Apple' },
  { title: 'Beko' },
  { title: 'LG' },
  { title: 'Philips' },
  { title: 'Dyson' }
]
const plaholBrands = 'Enter your favourite brands, Hit comma to add'
const genderList = ['Female', 'Male', 'Transgender', "Haven't decide yet"]

export default class SelectProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: 'Female',
      checklist: [
        'Air Conditioners',
        'Air Flyers',
        'Augmented Reality',
        'Cameras',
        'Desktops',
        'Dish Washers',
        'Drones',
        'Dryers',
        'Electric Cars',
        'Hard Drives',
        'Headphones',
        'Laptops',
        'Microwaves',
        'Monitors',
        'Irons',
        'Speakers',
        'Tablets',
        'Tvs',
        'Toasters',
        'Vacuum Cleaners',
        'VR',
        'Washers',
        'Pressure Cookers',
        'Printers',
        'Projects',
        'Refrigerators',
        'Routers',
        'Smart Glasses',
        'Smartphones',
        'Smartwatches'
      ],
      leftcolum: [],
      middlecolum: [],
      rightcolum: [],

      checkCatego: [],
      checkCatego1: [],
      checkCatego2: [],
      checkCatego3: []
    }
    this.addCatego = this.addCatego.bind(this)
  }

  componentDidMount() {
    this.reSort()
  }
  componentWillMount() {
    this.reSort()
  }
  reSort() {
    let temp = this.state.checklist.sort()
    this.setState({
      checklist: temp,
      leftcolum: temp.slice(0, 10),
      middlecolum: temp.slice(10, 20),
      rightcolum: temp.slice(20, 30)
    })

    temp = this.state.checkCatego.sort()
    this.setState({
      checkCatego: temp,
      checkCatego1: temp.slice(0, 10),
      checkCatego2: temp.slice(10, 20),
      checkCatego3: temp.slice(20, 30)
    })
  }
  addCatego(item) {
    const newItem = item
    let checklist = this.state.checklist
    let checkCatego = this.state.checkCatego
    // If our input has a value
    if (newItem !== '') {
      // Add the new item to the end of our brandslist array
      var a = checklist.indexOf(newItem)
      checklist.splice(a, 1)
      checkCatego.push(newItem)
      // Then we use that to set the state for brandslist
      this.setState({
        checklist: checklist,
        checkCatego: checkCatego
      })
      this.reSort()
      // Finally, we need to reset the form
      //newItem.classList.remove("is-danger");
      //form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add('is-danger')
    }
  }
  removeCatego(item) {
    const newItem = item
    let checkCatego = this.state.checkCatego
    let checklist = this.state.checklist
    // If our input has a value
    if (newItem !== '') {
      // Add the new item to the end of our brandslist array
      var a = checkCatego.indexOf(newItem)
      checkCatego.splice(a, 1)
      checklist.push(newItem)
      // Then we use that to set the state for brandslist
      this.setState({
        checkCatego: checkCatego,
        checklist: checklist
      })
      this.reSort()
      // Finally, we need to reset the form
      //newItem.classList.remove("is-danger");
      //form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add('is-danger')
    }
  }

  render() {
    // const { isLoading, value, results } = this.state

    return (
      <div>
        <div className={styles.header}>
          <img src={LOGO_IMG} alt="" />
          <p className={styles.headertxt}>
            {' '}
            This is my profile. Fill as much as info that you can so we can
          </p>
        </div>
        <p className={styles.smalltitletxt}> Personal Details</p>
        <div className={styles.main}>
          <div className={styles.dragdrop}>
            <p className={styles.txt}> Profile Image</p>
            <div className={styles.dragdroppreview}>
              <Previews />
            </div>
          </div>
          <div className={styles.inputdata}>
            <div className="row">
              <div className="col-md-6">
                <p>First name</p>
                <input
                  type="text"
                  id="formGroupExampleInput"
                  className={styles.inptxt}
                  placeholder="Beverly"
                />
              </div>
              <div className="col-md-6">
                <p>Last name</p>
                <input
                  type="text"
                  className={styles.inptxt}
                  id="formGroupExampleInput"
                  style={{ backgroundColor: '#e9eef2' }}
                  placeholder="Hayes"
                />
              </div>
            </div>
          </div>
          <div className={styles.inputdata}>
            <div className="row">
              <div className="col-md-6">
                <p>Email</p>
                <input
                  type="text"
                  className={styles.inptxt}
                  id="formGroupExampleInput"
                  style={{ backgroundColor: '#e9eef2' }}
                  placeholder="Beverly.hayes@mail.com"
                />
              </div>
              <div className="col-md-6">
                <p>County</p>
                <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" className={styles.inptxt}>
                      <option>Singapore</option>
                      <option>China</option>
                      <option>HongKong</option>
                      <option>And So On</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
          <div className={styles.genderdata}>
            <p>Gender</p>
            <div className={styles.checkdiv}>
              {genderList.map((item, key) => (
                <div
                  key={key}
                  style={{ fontSize: '15px', margin: '10px', display: 'flex' }}
                >
                  <Link to="" onClick={() => this.setState({ gender: item })}>
                    <Icon
                      name={
                        this.state.gender === item
                          ? 'md-radio-button-on'
                          : 'md-radio-button-off'
                      }
                      font="Ionicons"
                      color="#00aaf0"
                      size={23}
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                  <p style={{ paddingLeft: '10px' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.interest}>
            <p>Your interests, hobbies</p>
            <SearchSelect
              source={sourceHobbies}
              placeholder={plaholHobbies}
              idname="hob"
            />
          </div>
          <div className={styles.interest}>
            <p>Your favourite brands</p>
            <SearchSelect
              source={sourceBrands}
              placeholder={plaholBrands}
              idname="bra"
            />
          </div>
          <div className={styles.categories}>
            <p>Categories that you are interested</p>
            <div className="row">
              <div className="col-sm-5">
                <div className="row">
                  <div className="col-sm">
                    {this.state.leftcolum.map(item => (
                      <div className={styles.categoItem} key={item}>
                        <Link
                          to=""
                          onClick={() => this.addCatego(item)}
                          style={{ cursor: 'pointer', fontSize: '12px' }}
                        >
                          {item} &nbsp;
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="col-sm">
                    {this.state.middlecolum.map(item => (
                      <div className={styles.categoItem} key={item}>
                        <Link
                          to=""
                          onClick={() => this.addCatego(item)}
                          style={{ cursor: 'pointer', fontSize: '12px' }}
                        >
                          {item} &nbsp;
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="col-sm">
                    {this.state.rightcolum.map(item => (
                      <div className={styles.categoItem} key={item}>
                        <Link
                          to=""
                          onClick={() => this.addCatego(item)}
                          style={{ cursor: 'pointer', fontSize: '12px' }}
                        >
                          {item} &nbsp;
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-sm-7">
                <div className={styles.dragcategories}>
                  <div className="row">
                    <div className="col-sm">
                      {this.state.checkCatego1.map(item => (
                        <div className={styles.addItem} key={item}>
                          <p
                            style={{
                              margin: '5px',
                              marginRight: '0px',
                              fontSize: '12px'
                            }}
                          >
                            {item} &nbsp;{' '}
                          </p>
                          <Link
                            to=""
                            onClick={() => this.removeCatego(item)}
                            style={{ margin: '3px', marginLeft: '0px' }}
                          >
                            <Icon
                              name="minuscircle"
                              font="AntDesign"
                              color="#baccd8"
                              size={16}
                              style={{ cursor: 'pointer' }}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="col-sm">
                      {this.state.checkCatego2.map(item => (
                        <div className="addItem" key={item}>
                          <p
                            style={{
                              margin: '5px',
                              marginRight: '0px',
                              fontSize: '12px'
                            }}
                          >
                            {item} &nbsp;{' '}
                          </p>
                          <Link
                            to=""
                            onClick={() => this.removeCatego(item)}
                            style={{ margin: '3px', marginLeft: '0px' }}
                          >
                            <Icon
                              name="minuscircle"
                              font="AntDesign"
                              color="#baccd8"
                              size={16}
                              style={{ cursor: 'pointer' }}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="col-sm">
                      {this.state.checkCatego3.map(item => (
                        <div className={styles.addItem} key={item}>
                          <p
                            style={{
                              margin: '5px',
                              marginRight: '0px',
                              fontSize: '12px'
                            }}
                          >
                            {item} &nbsp;{' '}
                          </p>
                          <Link
                            to=""
                            onClick={() => this.removeCatego(item)}
                            style={{ margin: '3px', marginLeft: '0px' }}
                          >
                            <Icon
                              name="minuscircle"
                              font="AntDesign"
                              color="#baccd8"
                              size={16}
                              style={{ cursor: 'pointer' }}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.submitbnt}>
            <button className={styles.savebnt}>Save Changes</button>
            <button className={styles.revertbnt}>Revert Changes</button>
          </div>
        </div>
      </div>
    )
  }
}
