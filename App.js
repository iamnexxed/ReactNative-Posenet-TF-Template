/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TensorFlow.js template
 * https://github.com/Polarisation/react-native-template-tfjs
 *
 * @format
 * @flow
 */

import React, {useState, useEffect, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import * as posenet from '@tensorflow-models/posenet';

class App extends Component {
  async componentDidMount() {
    async function waitForTensorFlowJs() {
      console.log('Loading Backend.');
      await tf.setBackend('cpu');
      console.log('Getting TF ready.');
      await tf.ready();
      console.log('Loading Posenet.');
      const net = await posenet.load();
      console.log('Posenet loaded : ', net);
    }
    waitForTensorFlowJs();
  }

  render() {
    console.log('Render.');
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Button
          title="Press me"
          color={'#000'}
          style={styles.logo}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        
        <Image
          style={styles.logo}
          source={{
            uri:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 500,
    height: 500,
  },
  logo: {
    width: 66,
    height: 58,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default App;
