import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { ImagePicker } from 'expo'
import PropTypes from 'prop-types'

class ImagePickerComponent extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    let { image } = this.props
    let imageDefault = require('../../assets/flower.jpg')

    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.pickImage}>
        { image
          ? <Image source={{ uri: image.uri }} style={{ width: 160, height: 160, borderRadius: 80 }} />
          : <Image source={imageDefault} style={{ width: 160, height: 160, borderRadius: 80 }} />
        }
        </TouchableOpacity>
      </View>
    )
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    console.log(result)

    if (!result.cancelled) {
      this.props.loadImageSignUp(result)
    }
  }
}

ImagePickerComponent.propTypes = {
  image: PropTypes.object,
  loadImageSignUp: PropTypes.func.isRequired
}

export default ImagePickerComponent