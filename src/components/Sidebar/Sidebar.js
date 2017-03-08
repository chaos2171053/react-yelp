import React, { Component, PropTypes } from 'react';
import Listing from '../Listing/Listing';
import styles from './styles.scss';
import classnames from 'classnames'

export class Sidebar extends Component {
  onClick(place, map, google) {
    if (this.props.onListItemClick) {
      place.place = place;
      this.props.onListItemClick(place, map, google)
    }
  }
  render() {
    return (
      <div className={classnames(styles.sidebar)}>
        <div className={classnames(styles.heading)}>
          <h1>{this.props.title}</h1>
        </div>
        <Listing 
            places = {this.props.places}
            onClick={this.onClick.bind(this)}/>
      </div>
    )
  }
}
Sidebar.propTypes = {
  places: React.PropTypes.array,
  title: React.PropTypes.string,
  onListItemClick: React.PropTypes.func
}

Sidebar.defaultProps = {
  title: 'Restaurants'
}

export default Sidebar;