import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Rating from '../Rating/Rating';
import styles from './styles.scss';

export class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false
        }
    }
    onClick(e) {
        this.props.onClick(this.props.place);
    }

    render() {
        const { place } = this.props;
        return (
            <div
                onClick={this.onClick.bind(this)}
                className={classnames(styles.item, {
                    [styles.itemHovered]: this.state.hovered
                })}>
                <h1 className={classnames(styles.title)}>{place.name}</h1>
                <Rating className={styles.rating}
                    percentage={(place.rating / 5)} />
            </div>
        )
    }
}

Item.propTypes = {
  place: React.PropTypes.object.isRequired,
  onHighlight:React.PropTypes.func,
}

Item.defaultProps = {
  onHighlight: () => {},
  offHighlight: () => {}
}
export default Item;