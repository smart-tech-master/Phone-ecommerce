import React, { Component, } from 'react'

import Icon from 'react-web-vector-icons';
import styles from './component.module.scss';

import LOGO_IMG from '../../../assets/images/profile_header.png'

export default class SelectBlocks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: true,
      videos: false,
      QA: true,
    }
  }

  changeReviews() {
    let reviews = this.state.reviews;
    this.setState({ reviews: !reviews })
  }
  changeVideos() {
    let videos = this.state.videos;
    this.setState({ videos: !videos })
  }
  changeQA() {
    let QA = this.state.QA;
    this.setState({ QA: !QA })
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <img src={LOGO_IMG} alt="" />
          <p className={styles.headertxt}> This is blocks page. You can add / remove product page blocks</p>
        </div>
        <p className={styles.smalltitletxt}> Add / Remove Blocks</p>
        <div className={styles.main}>
          <div className={styles.selectdata}>
            <div>
              <p className={styles.psize3bold}>Reviews</p>
              <p className={styles.psize2}>See reviews and ratings from other users. Read critics, hidden features.</p>
            </div>
            <div>
              <a onClick={() => this.changeReviews()} style={{ margin: '3px', marginLeft: '0px' }}>
                {
                  this.state.reviews ?
                    (
                      <Icon
                        name='toggle-on'
                        font='FontAwesome'
                        color='#00a8ef'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : (
                      <Icon
                        name='toggle-off'
                        font='FontAwesome'
                        color='#baccd8'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    )
                }
              </a>
            </div>
          </div>
          <div className={styles.bottomboderdiv}></div>
          <div className={styles.selectdata}>
            <div>
              <p className={styles.psize3bold}>Videos</p>
              <p className={styles.psize2}>Watch tutorials, catch unboxing videos, hear first impressions from famous tech-bioggers.</p>
            </div>
            <div>
              <a onClick={() => this.changeVideos()} style={{ margin: '3px', marginLeft: '0px' }}>
                {
                  this.state.videos ?
                    (
                      <Icon
                        name='toggle-on'
                        font='FontAwesome'
                        color='#00a8ef'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : (
                      <Icon
                        name='toggle-off'
                        font='FontAwesome'
                        color='#baccd8'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    )
                }
              </a>
            </div>
          </div>
          <div className={styles.bottomboderdiv}></div>
          <div className={styles.selectdata}>
            <div>
              <p className={styles.psize3bold}>QA</p>
              <p className={styles.psize2}>Be a part of comunity. Ask or answer questions, share the global knowledge.</p>
            </div>
            <div>
              <a onClick={() => this.changeQA()} style={{ margin: '3px', marginLeft: '0px' }}>
                {
                  this.state.QA ?
                    (
                      <Icon
                        name='toggle-on'
                        font='FontAwesome'
                        color='#00a8ef'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : (
                      <Icon
                        name='toggle-off'
                        font='FontAwesome'
                        color='#baccd8'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    )
                }
              </a>
            </div>
          </div>
          <div className={styles.bottomboderdiv}></div>

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
