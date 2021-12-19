import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLOR } from '../styles/Color'
import { WIDTH, HEIGHT, SIZE, FONT } from '../styles/Dimension'

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.style
      ]}
      onPress={props.onPress}
    >
      <Text
        style={{
          ...styles.font,
          ...props.style,
          ...FONT.button
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH * 0.41,
    height: HEIGHT * 0.055,
    borderRadius: WIDTH * 0.02,
    marginVertical: HEIGHT * 0.04,
    marginHorizontal:WIDTH*0.02,
    backgroundColor: COLOR.primary
  },
  font: {
    fontSize: SIZE.m,
    color: COLOR.white
  }
})
