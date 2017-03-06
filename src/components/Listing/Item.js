import React, { Component } from 'react';
import classnames from 'classnames';
import Rating from '../Rating/Rating';
import styles from './styles.scss';

export class Item extends Component {
    render() {
        const { place } = this.props;
        return (
            <div
                className={styles.item}>
                <h1 className={classnames(styles.title)}>{place.name}</h1>
                <Rating className={styles.rating}
                  percentage={(place.rating/5)} />
            </div>
        )
    }
}
export default Item;