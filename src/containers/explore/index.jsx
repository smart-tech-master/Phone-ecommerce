//@flow

import React, { Component } from 'react'
import Header from 'components/header'
import BreadCrum from 'components/breadCrum'
import ExploreSidebar from 'components/exploreSidebar'
import MainContent from './mainContent'
import RightSidebar from './rightSidebar'

import {
  breadCrumDataExplore,
  exploreProducts,
  exploreProducts1
} from 'utils/metaData'

import { vs_box } from './styles.module.scss'
import { Hidden } from '@material-ui/core'

type Props = {
  onFeedBackClick: () => any,
}

class Explore extends Component<Props> {

  constructor(props: Props) {
    super(props);
    this.state = {
      exploreTitle: "All Products",
      exploreProducts: exploreProducts
    }
    // console.log("WWWWWWWWWWWWWWW")
    // document.body.scrollTop = 0;
    // document.body.style.overflow = "hidden";
    document.body.id = "explore-page";
  }

  callBackFunction = (data) => {
    if (data === 0) {
      this.setState({ exploreProducts: exploreProducts1 });
      this.setState({ exploreTitle: "Results" });
    }
    if (data === -1) {
      this.setState({ exploreProducts: exploreProducts });
      this.setState({ exploreTitle: "All Products" });
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);

  }

  componentWillUnmount() {
    document.body.style.overflow = null;
  }
  render() {
    const {
      onFeedBackClick,
    } = this.props
    return (
      <div className="wrapper">
        <Header
          onFeedBackClick={onFeedBackClick}
          headerClass="header-wrapper"
        />
        <BreadCrum breadCrumbData={breadCrumDataExplore} />
        <section>
          <div className={vs_box}>
            <ExploreSidebar />
            <MainContent
              exploreTitle={this.state.exploreTitle}
              exploreProducts={this.state.exploreProducts}
            />
            <RightSidebar
              parentCallback={this.callBackFunction}
            />
          </div>
        </section>
      </div>
    )
  }
}

export default Explore
