import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

const RatingIcon = (props) => (<span>★</span>)

export class Rating extends Component {
    render() {
        const { percentage } = this.props;
        const style = {
            width: `${(percentage || 0) * 100}%`
        }
        return (
            <div className={styles.sprite} >
                <div className={styles.top} style={style}>
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                </div>
                <div className={styles.bottom}>
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                </div>
            </div >
        )

    }
}

export default Rating