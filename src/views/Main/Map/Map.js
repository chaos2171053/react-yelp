import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Map, { Marker } from 'google-maps-react'
import styles from './styles.scss'

export class MapComponent extends Component {
    renderChildren() {
        const { children } = this.props;

    }
    renderMarkers() {
        if (!this.props.places) { return null; }
        return this.props.places.map(place => {
            return <Marker key={place.id}
                name={place.id}
                place={place}
                onClick={this.props.onMarkerClick.bind(this)}
                position={place.geometry.location}
            />
        })
    }
    render() {
        return (
            <Map google={this.props.google}
                className={styles.map}>
                {this.renderChildren()}
            </Map>
        )
    }
}

export default MapComponent