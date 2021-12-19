import React, { useState, useEffect } from 'react'
import { COLOR } from '../styles/Color'
import { FONT } from '../styles/Dimension'
import { addTodo, deleteTodo } from '../redux/actions/todoAction'
import { useDispatch } from 'react-redux'
import { InputField, Button } from '../components'
import { StyleSheet, SafeAreaView, Alert, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

const AddScreen = ({route,navigation}) => {
  const [todoText, setTodoText] = useState('')
  const [tag, setTag] = useState('')
  const [isUpdate, setIsUpdate] = useState(true)
  

  const dispatch = useDispatch()
  const tags = ["finance", "sport", "shopping"]
 
  useEffect(() => {
    try{
      const { item } = route.params;
      setTodoText(item.title)  
      setTag(item.tag)
    } catch(e){
      setIsUpdate(false)
    }
    
    // setTodoText(item.item.title)
  }, [])

  const handleCancel = () => {
    navigation.navigate('MainScreen');
  // alert(navigation.getParams("item"))
//   const { item } = route.params;
// setTodoText(item.title)
  // alert(item.title)

  }

  const handleAddTodo = () => {
    if (todoText.length > 0) {
      dispatch(addTodo(todoText,tag))
      if(isUpdate){
        const { item } = route.params;
        dispatch(deleteTodo(item.id))
      }
      handleCancel()
    } else {
      Alert.alert('No text entered...')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>

        <InputField
            placeholder='Write a task here...'
            value={todoText}
            onChangeText={(text) => setTodoText(text)}
        />
        <SelectDropdown
            data={tags}
            defaultButtonText = {isUpdate?tag : "Select Tag"}
            buttonStyle = {{backgroundColor:'#fff',alignSelf:'center'}}
            // renderDropdownIcon ={true}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setTag(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
        <View style={{flexDirection:'row'}}>
          <Button text='Add Task' onPress={() => handleAddTodo()} />
          <Button text='Cancel' onPress={() => handleCancel()} />
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  titleText: {
    ...FONT.h0,
    color: COLOR.black2,
    marginTop:10
  },
  titleText2: {
    ...FONT.h2,
    color: COLOR.black,
    marginTop:10,
  },
  titleText3: {
    ...FONT.h5,
    color: COLOR.black,
    marginTop:10,
  }

})

export default AddScreen

