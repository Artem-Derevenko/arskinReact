import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
 
const coords = {
  lat: 46.5146271,
  lng: 30.7226786
};
 
const params = {v: '3.exp', key: 'AIzaSyBITsApcVhKXVDrcfFElSVX7sZWdB7K4nY'};

class Maps extends React.Component {
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }

	render() { 
		return (
      <Gmaps
        width={'100%'}
        height={'380px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={''}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={''}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
		)
	}
}

export default Maps;