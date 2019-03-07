import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

import MapView, {
  Callout,
  Marker,
} from 'react-native-maps';

export default class App extends Component {
  componentDidMount() {
    this.mapView.fitToElements(true);
  }
  render() {
    return (
      <MapView
        ref={(c) => { this.mapView = c;}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        >
          <Callout>
            <Text
              style={styles.calloutText}
            >Marker with a callout</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 37.787614,
            longitude: -122.431123,
          }}
        >
          {/* <Callout tooltip /> */}
        </Marker>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  calloutText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
