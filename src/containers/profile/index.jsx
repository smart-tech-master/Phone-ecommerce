import React, { Component, } from 'react';
import Header from 'components/header';

import BreadCrum from 'components/breadCrum';
import { breadCrumPorfileData } from 'utils/metaData';
import UserProfile from './component/SelectProfile';
import Blocks from './component/SelectBlocks';
import Temp from './component/SelectTemp';
import styles from './styles.module.scss';

const leftPanelString = [
  "Profile",
  "Apps",
  "Blocks",
  "Security",
];
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectTag: 'Profile'
    }
  }

  selectSetting(item) {
    this.setState({ selectTag: item })
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          onFeedBackClick={this.onFeedBackClick}
          headerClass={styles.header_wrapper}
        />
        <BreadCrum breadCrumData={breadCrumPorfileData} />
        <section>
          <div className="container">
            <div className={styles.vs_box}>
              <div className={styles.leftpanel}>
                {leftPanelString.map((item, key) => (
                  this.state.selectTag === item ?
                    (<div key={key} className={styles.selectpanel}>
                      <a className={styles.click} onClick={() => this.selectSetting(item)}>{item}</a>
                    </div>) :
                    (<div key={key} className={styles.unselectpanel}>
                      <a className={styles.click} onClick={() => this.selectSetting(item)}>{item}</a>
                    </div>)
                ))}
              </div>
              <div className={styles.vs_main}>
                {this.state.selectTag === "Profile" && <UserProfile />}
                {this.state.selectTag === "Apps" && <Temp />}
                {this.state.selectTag === "Blocks" && <Blocks />}
                {this.state.selectTag === "Security" && <Temp />}
              </div>
            </div>
          </div>
        </section>
      </div >
    )
  }
}

export default Profile
