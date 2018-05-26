import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.109988,
          longitude: 115.085897
        },
        title: 'RS. Kertha Usadha',
        subtitle: 'Jl. Cendrawasih No. 5 - 7, Kaliuntu, Kec. Buleleng, Singaraja, Bali 81116'
      },
      {
        key:2,
        latlng: {
          latitude:-8.122601,
          longitude: 115.070991
        },
        title: 'RS Umum Parama Sidhi',
        subtitle: 'Jl. A. Yani No.171, Kaliuntu, Kec. Buleleng, Kabupaten Buleleng, Bali 81116'
      },
      {
        key:3,
        latlng: {
          latitude:-8.177231,
          longitude: 114.999362
        },
        title: 'RS Pratama Tangguwisia',
        subtitle: 'Jl. Seririt- Singaraja, Tangguwisia, Kec. Buleleng, Kabupaten Buleleng, Bali 81152'
      },
      {
        key:4,
        latlng: {
          latitude:-8.122068,
          longitude: 115.094856
        },
        title: 'RS Umum Karya Dharma Husada Bros',
        subtitle: 'Jalan Yudistira No.7, Singaraja, Kendran, Kec. Buleleng, Kabupaten Buleleng, Bali 81117'
      },
      {
        key:5,
        latlng: {
          latitude:-8.119749,
          longitude: 115.092475
        },
        title: 'RS Umum Daerah Buleleng',
        subtitle: 'Jalan Ngurah Rai, Astina, Kendran, Kec. Buleleng, Kabupaten Buleleng, Bali 81113'
      },
      {
        key:6,
        latlng: {
          latitude:-8.113308,
          longitude: 115.091851
        },
        title: 'RS. TNI AD Wirasatya Singaraja',
        subtitle: 'Jl. Ngurah Rai No.70, Banjar Jawa, Kec. Buleleng, Singaraja, Bali 81113'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Rumah Sakit Di Buleleng
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> http://www.rey1024.com </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
