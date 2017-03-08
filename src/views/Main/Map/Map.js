import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Map, { GoogleApiWrapper, Marker } from 'google-maps-react'
import styles from './styles.scss'

export class MapComponent extends Component {
    renderChildren() {
        const { children } = this.props;
        if (React.Children.count(children) > 0) {
            return React.Children.map(children, c => {
                return React.cloneElement(c, this.props, {
                    map: this.props.map,
                    google: this.props.google
                })
            })
        } else {
            return this.renderMarkers();
        }

    }
    renderMarkers() {
        if (!this.props.places) { return; }
        return this.props.places.map(place => {
            return <Marker key={place.id}
                name={place.id}
                place={place}
                label={place.name}
                map={this.props.map}
                onClick={this.props.onMarkerClick.bind(this)}
                position={place.geometry.location}
            />
        })
    }
    render() {
        const { children } = this.props;
        return (
            <Map google={this.props.google}
                map={this.props.map}
                zoom={this.props.zoom}
                onClick={this.props.onClick}
                onRecenter={this.props.onMove}
                onDragend={this.props.onMove}
                visible={!children || React.Children.count(children) == 0}
                className={styles.map}>
                {this.renderChildren()}
            </Map>
        )
    }
}
MapComponent.propTypes = {
  onMarkerClick: React.PropTypes.func
}
const identity = (...a) => a;
MapComponent.defaultProps = {
  onMarkerClick: identity
}

export default MapComponent