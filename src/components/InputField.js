import React, { useState } from 'react'
import { COLOR } from '../styles/Color'
import { WIDTH, HEIGHT, FONT } from '../styles/Dimension'
import { StyleSheet, TextInput, Platform, View, Text } from 'react-native'

const InputField = (props) => {
  const [onFocus, setOnFocus] = useState(false)
  const [height, setHeight] = useState(HEIGHT * 0.055)
  const handleFocus = () => {
    setOnFocus(true)
  }
  const handleBlur = () => {
    setOnFocus(false)
  }
  return (
    <View style={styles.container}>
      <Text style={FONT.inputFieldText}>{props.label}</Text>
      <TextInput
        value={props.value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={props.onChangeText}
        label={props.label}
        style={{
          ...FONT.placeholder,
          ...styles.input,
          borderColor: onFocus
            ? COLOR.primary
            : COLOR.secondary,
          height: !props.multiline
            ? HEIGHT * 0.055
            : Platform.OS === 'ios'
              ? height + HEIGHT * 0.0275
              : height
        }}
        placeholder={props.placeholder}
        placeholderTextColor={COLOR.secondary}
        underlineColorAndroid='transparent'
        onContentSizeChange={(e) =>
          setHeight(e.nativeEvent.contentSize.height)}
        {...props}
      />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
  container: {
    marginVertical: HEIGHT * 0.0075
  },
  input: {
    width: WIDTH * 0.9,
    padding: 10,
    borderWidth: 1.5,
    borderRadius: WIDTH * 0.02,
    backgroundColor: '#fafafa',
    paddingBottom: Platform.OS === 'android'
      ? HEIGHT * 0.007
      : HEIGHT * 0.012
  }
})
