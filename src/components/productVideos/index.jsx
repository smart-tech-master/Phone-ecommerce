//@flow

import React from 'react'
import { VIDEO1 } from 'common/images'
import { VIDEO2 } from 'common/images'
import { VIDEO3 } from 'common/images'
import { VIDEO4 } from 'common/images'
import { VIDEO5 } from 'common/images'
import { VIDEO6 } from 'common/images'
import { AVATAR1 } from 'common/images'
import { PLAY } from 'common/images'
import { BIG_VIDEO } from 'common/images'
import { BLUR } from 'common/images'
import './modalStyles.scss'
import {
  video_content,
  video_label,
  video_container,
  video,
  blur,
  override,
  autor,
  about,
  date,
  name,
  watch_button,
  time,
  close_modal,
} from './productVideos.module.scss'
import Modal from 'components/common/Modal'

type ProductVideosState = {
  isModalOpen: any;
}

class ProductVideos extends React.Component<{}, ProductVideosState> {
  state = {
    isModalOpen: false
  }

  modalWatchVideo = () => {
    const isModalOpen = !this.state.isModalOpen;
    this.setState({ isModalOpen: isModalOpen });
  }

  render() {
    let { isModalOpen } = this.state;
    return (
      <div className={video_content}>
        <h1 className={video_label}>Videos</h1>
        <div className={video_container}>

          <div className={video}>
            <img src={VIDEO1} alt="VIDEO1" />
            <img src={BLUR} alt="BIG_VIDEO" className={blur} />
            <div className={override}>
              <div className={autor}>
                <img src={AVATAR1} alt="AVATAR1" />
                <div className={about}>
                  <div className={date}> 2 weeks ago</div>
                  <div className={name}>TechSpecs</div>
                </div>
              </div>
              <div className={watch_button} onClick={this.modalWatchVideo}>
                Watch  <img src={PLAY} />
              </div>
              <div className={time}>
                11:59
            </div>
            </div>
            <h3>iPhone X Keynote</h3>
          </div>

          <div className={video}>
            <img src={VIDEO2} alt="VIDEO2" />
            <img src={BLUR} alt="BIG_VIDEO" className={blur} />
            <div className={override}>
              <div className={autor}>
                <img src={AVATAR1} alt="AVATAR1" />
                <div className={about}>
                  <div className={date}> 2 weeks ago</div>
                  <div className={name}>TechSpecs</div>
                </div>
              </div>
              <div className={watch_button} onClick={this.modalWatchVideo}>
                Watch  <img src={PLAY} />
              </div>
              <div className={time}>
                11:59
            </div>
            </div>
            <h3>iPhone X Keynote</h3>
          </div>

          <div className={video}>
            <img src={VIDEO3} alt="VIDEO3" />
            <img src={BLUR} alt="BIG_VIDEO" className={blur} />
            <div className={override}>
              <div className={autor}>
                <img src={AVATAR1} alt="AVATAR1" />
                <div className={about}>
                  <div className={date}> 2 weeks ago</div>
                  <div className={name}>TechSpecs</div>
                </div>
              </div>
              <div className={watch_button} onClick={this.modalWatchVideo}>
                Watch  <img src={PLAY} />
              </div>
              <div className={time}>
                11:59
            </div>
            </div>
            <h3>iPhone X Keynote</h3>
          </div>

          <div className={video}>
            <img src={VIDEO4} alt="VIDEO4" />
            <img src={BLUR} alt="BIG_VIDEO" className={blur} />
            <div className={override}>
              <div className={autor}>
                <img src={AVATAR1} alt="AVATAR1" />
                <div className={about}>
                  <div className={date}> 2 weeks ago</div>
                  <div className={name}>TechSpecs</div>
                </div>
              </div>
              <div className={watch_button} onClick={this.modalWatchVideo}>
                Watch <img src={PLAY} />
              </div>
              <div className={time}>
                11:59
            </div>
            </div>
            <h3>iPhone X Keynote</h3>
          </div>

          <div className={video}>
            <img src={VIDEO5} alt="VIDEO5" />
            <img src={BLUR} alt="BIG_VIDEO" className={blur} />
            <div className={override}>
              <div className={autor}>
                <img src={AVATAR1} alt="AVATAR1" />
                <div className={about}>
                  <div className={date}> 2 weeks ago</div>
                  <div className={name}>TechSpecs</div>
                </div>
              </div>
              <div className={watch_button} onClick={this.modalWatchVideo}>
                Watch  <img src={PLAY} />
              </div>
              <div className={time}>
                11:59
            </div>
            </div>
            <h3>iPhone X Keynote</h3>
          </div>

          <div className={video}>
            <img src={VIDEO6} alt="VIDEO6" />
            <img src={BLUR} alt="BIG_VIDEO" className={blur} />
            <div className={override}>
              <div className={autor}>
                <img src={AVATAR1} alt="AVATAR1" />
                <div className={about}>
                  <div className={date}> 2 weeks ago</div>
                  <div className={name}>TechSpecs</div>
                </div>
              </div>
              <div className={watch_button} onClick={this.modalWatchVideo}>
                Watch  <img src={PLAY} />
              </div>
              <div className={time}>
                11:59
            </div>
            </div>
            <h3>iPhone X Keynote</h3>
          </div>

          <Modal isOpen={isModalOpen} className="modal_watch_video" classShow="show">
            <img src={BIG_VIDEO} alt="BIG_VIDEO" />
            <div onClick={this.modalWatchVideo} className="close_modal">X</div>
          </Modal>

        </div>
      </div >
    )
  }
}

export default ProductVideos;
