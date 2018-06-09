import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { ImagePicker } from 'expo'

export default class ImagePickerComponent extends React.Component {
  state = {
    image: null,
  }

  render() {
    let { image } = this.state
    let imageDefault = require('../../assets/flower.jpg')
    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this._pickImage}>
        { image
          ? <Image source={{ uri: image}} style={{ width: 160, height: 160, borderRadius: 80 }} />
          : <Image source={imageDefault} style={{ width: 160, height: 160, borderRadius: 80 }} />
        }
        </TouchableOpacity>
      </View>
    )
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    console.log(result)

    if (!result.cancelled) {
      this.setState({ image: result.uri })
    }
  }
}
