import React, { useState, useEffect } from 'react'
import { COLOR } from '../styles/Color'
import { FONT, HEIGHT } from '../styles/Dimension'
import { addTodo } from '../redux/actions/todoAction'
import { useSelector, useDispatch } from 'react-redux'
import { TodoCard } from '../components'
import { StyleSheet, Text, SafeAreaView, FlatList, ScrollView, View, TouchableOpacity } from 'react-native'
// import SelectDropdown from 'react-native-select-dropdown'
import SmallButton from '../components/IconButton'

const MainScreen = ({navigation}) => {
//   const [todoText, setTodoText] = useState('')
  const [currentDay, setCurrentDay] = useState('')
  const [complete_, setComplete_] = useState(0)
  const [inComplete_, setInComplete_] = useState(0)
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
   ];

  const todoList = useSelector(state => state.todoReducer.todoList)
  const dispatch = useDispatch()
//   const tags = ["finance", "sport", "shopping"]
 
  useEffect(() => {
    getCurrentDate()
    featchData()
  }, [])

  const featchData=()=>{

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => {
        var i = 0;
        for (let userObject of json) {
          if(i < 10){
              dispatch(addTodo(userObject.title))
              i++
          }else break;
        }
    })
    .catch((error) => console.error(error));
}
  const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    
    setCurrentDay(monthNames[month-1] + '  ' +date+', ' + year)
  }

  const editRow = (item) => {
    // alert(item)
    navigation.navigate('AddScreen', {
        item: item,
      });
  }

  const initCompleteText = () => {
    setComplete_(todoList.filter(item => item.completed === true).length)
    setInComplete_(todoList.filter(item => item.completed === false).length)

  }

//   const handleAddTodo = () => {
//     if (todoText.length > 0) {
//       dispatch(addTodo(todoText))
//       setTodoText('')
//     } else {
//       Alert.alert('No text entered...')
//     }
//   }
  return (
    <SafeAreaView style={styles.container}>
      <View>
          <ScrollView>
        <Text style={styles.titleText}>{currentDay}</Text>
        <Text style={styles.titleText3}>{inComplete_} incomplete, {complete_} completed</Text>
        <View style = {styles.line}></View>
        {/* <InputField
            placeholder='Write a task here...'
            value={todoText}
            onChangeText={(text) => setTodoText(text)}
        />
        <SelectDropdown
            data={tags}
            defaultButtonText = {"Select Tag"}
            buttonStyle = {{backgroundColor:'#fff'}}
            // renderDropdownIcon ={true}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                // alert(selectedItem)
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
        <Button text='Add Task' onPress={() => handleAddTodo()} /> */}

        <Text style={styles.titleText2}>Incompleted</Text>
        <FlatList
            data={todoList}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => {
                initCompleteText()
            return (
                <TouchableOpacity onPress={() => editRow(item)}>
                    <TodoCard data={item} checked = {true}/>
                </TouchableOpacity>
            )
            }}
        />

        <Text style={styles.titleText2}>Completed</Text>
        <FlatList
            data={todoList}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => {
                initCompleteText()
            return (
                <TodoCard data={item} checked = {false}/>
            )
            }}
        />
        </ScrollView>

        <View style={{
            flexDirection: 'row',
            marginRight: 15,
            backgroundColor:'#7500FA',
            borderColor:'#6A00FA',
            borderWidth:3,
            borderRadius:50,
            width:45,
            height:45,
            position: 'absolute',
            alignItems:'center',
            alignSelf:'flex-end',
            top: HEIGHT - 130, 
            flex: 1,
            justifyContent: "center",  
        }}>
            <SmallButton
                name='add'
                color={ COLOR.white}

                onPress={() => {
                    navigation.navigate('AddScreen');
                  }}
                />
        
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
  line:{
      height:1,
      backgroundColor:COLOR.grayish,
      marginTop:10
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

export default MainScreen

