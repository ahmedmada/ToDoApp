import React from 'react'
import { WIDTH } from '../styles/Dimension'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

Icon.loadFont();

const IconButton = ({ style, name, onPress, color }) => {
  
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
    >
      <Icon
        name={name}
        color={color}
        size={WIDTH * 0.045}
      />
    </TouchableOpacity>
  )
}

export default IconButton
