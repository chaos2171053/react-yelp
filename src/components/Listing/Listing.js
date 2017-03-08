import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Item from './Item';
import styles from './styles.scss';

export class Listing extends Component {
    render() {
        return (
            <div className={classnames(styles.container)}>
                {this.props.places.map(place => {
                    return (
                        <Item place={place}
                            onClick={this.props.onClick}
                            onHighlight={this.props.onHighlight}
                            offHighlight={this.props.offHighlight}
                            key={place.id} />
                    )
                })}
            </div>
        )
    }
}
Listing.propTypes = {
  places: React.PropTypes.array.isRequired,
  onHighlight: React.PropTypes.func,
  offHighlight: React.PropTypes.func,
  onClick: React.PropTypes.func
}

Listing.defaultProps = {
  onHighlight: () => {},
  offHighlight: () => {},
  onClick: () => {},
}

export default Listing