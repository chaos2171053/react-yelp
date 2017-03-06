import React, { Component } from 'react';
import Listing from '../Listing/Listing';
import styles from './styles.scss';

export class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.heading}>
          <h1>{this.props.title}</h1>
        </div>
        <Listing places = {this.props.places}/>
      </div>
    )
  }
}
export default Sidebar;