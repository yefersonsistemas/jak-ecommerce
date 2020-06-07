import React, { Component } from 'react';
import { View,Image, NativeModules } from 'react-native';
import load from '../assets/loadImage.gif'
import { modulo } from 'react-native-reanimated';


class AsyncImage extends Component {
  
  constructor(props) {
    super(props)
    this.state = { loaded: false };
  }
  render() {
    const {
        placeholderColor,
        style,
        source
    } = this.props;

    return (
      <View style={[style,{backgroundColor:"#0000",borderColor:"#0000"}]}>
        <Image
            source={source}
            resizeMode={'contain'}
            style={[
            style,
            {
                position: 'absolute',
                resizeMode: 'stretch'
            }
            ]}
            onLoad={this._onLoad} />
        {!this.state.loaded &&
            <Image
            source={load}
            style={[
                style,
                {
                backgroundColor: placeholderColor,
                position: 'absolute'
                }
            ]} />
        }
      </View>
    );
  }

  _onLoad = () => {
    this.setState(() => ({ loaded: true }))
  }
}

class AsyncImageCircle extends Component {
  
  constructor(props) {
    super(props)
    this.state = { loaded: false };
  }
  render() {
    const {
        placeholderColor,
        style,
        source
    } = this.props;

    return (
      <View style={[style,{backgroundColor:"#0000",borderColor:"#0000",borderRadius:25}]}>
        <Image
            source={source}
            resizeMode={'contain'}
            style={[
            style,
            {
                position: 'absolute',
                resizeMode: 'stretch',
                borderRadius:25
            }
            ]}
            onLoad={this._onLoad} />
        {!this.state.loaded &&
            <Image
            source={load}
            style={[
                style,
                {
                  backgroundColor: placeholderColor,
                  position: 'absolute',
                  borderRadius:25
                }
            ]} />
        }
      </View>
    );
  }

  _onLoad = () => {
    this.setState(() => ({ loaded: true }))
  }
}

module.exports = {
  AsyncImage:AsyncImage,
  AsyncImageCircle:AsyncImageCircle
}