import React, { Component, } from 'react'
import styles from './component.module.scss';

import LOGO_IMG from '../../../assets/images/profile_header.png'

export default class SelectTemp extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {

    return (
      <div>
        <div className={styles.header}>
          <img src={LOGO_IMG} alt="" />
          <p className={styles.headertxt}> This is temp page. You can change this page</p>
        </div>
        <p className={styles.smalltitletxt}> Add new data</p>
        <div className={styles.main}>

          <div className={styles.submitbnt}>
            <button className={styles.savebnt}>
              Save Changes
                        </button>
            <button className={styles.revertbnt}>
              Revert Changes
                        </button>
          </div>
        </div>
      </div>
    )
  }
}
