import React, { Component, PropTypes } from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';
import {searchNearby} from '../../utils/googleApiHelpers'
import Header from '../../components/Header/Header';
import styles from './styles.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
export class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [],
            pagination: null
        }
    }
    onReady(mapProps, map) {
        //when the map is ready and mounted
        const { google } = this.props;
        const opts = {
            location: map.center,
            radius: '500',
            types: ['cafe']
        }
        searchNearby(google, map, opts)
            .then((results, pagination) => {
                // We got some results and a pagination object
                this.setState({
                    places: results,
                    pagination
                })
            }).catch((status, result) => {
                // There was an error
            })
    }
    // <div className={styles.content}>
    //                     {this.state.places.map(place => {
    //                         return (<div key={place.id}>{place.name}</div>)
    //                     })}
    //                 </div>
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    onReady={this.onReady.bind(this)}
                    visible={false}
                    className = {styles.wrapper}>
                    <Header/>
                    <Sidebar
                        title = {'Restaurants'}
                        places = {this.state.places}
                    />

                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyC6g4jYffxfZYckTRl-sFVTBT--CJwJpTI"
})(Container)