import React from 'react'
import SmallButton from './IconButton'
import { COLOR } from '../styles/Color'
import { useDispatch } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { WIDTH, FONT } from '../styles/Dimension'
import { deleteTodo, completeTodo } from '../redux/actions/todoAction'

const TodoCard = ({ data ,checked }) => {
  const dispatch = useDispatch()
  const { id, title, completed, tag } = data
  const onDeleteTodo = (todoId) => dispatch(deleteTodo(todoId))
  const onCompleteTodo = (todoId) => dispatch(completeTodo(todoId))
  return (
    <View style={{
      ...styles.taskContainer,
      height: (checked!==completed) ? null : 0,
      padding: (checked!==completed) ? WIDTH * 0.015 : 0,

    }}
    >
      <View style={{
        flexDirection: 'row',
        marginRight: 15,
        borderColor:COLOR.grayish,
        borderRadius:(checked!==completed) ? 5 : 0,
        borderWidth:(checked!==completed) ? 1.5 : 0
      }}
      >
        <SmallButton
          name='checkmark'
          color={completed ? COLOR.black2 : COLOR.white}
          onPress={() => onCompleteTodo(id)}
        />
       
      </View>
      <View style={{
        maxWidth: '70%'
      }}
      >
        <Text style={{
          ...styles.textDefault,
          color: completed ? COLOR.grayish : COLOR.black
        }}
        >
          {title}
        </Text>
        {checked && 
          <Text style={{
            ...styles.textsmall,
            color: COLOR.grayish
          }}
          >
            {tag}
          </Text>
        }
      </View>
    </View>
  )
}

export default TodoCard

const styles = StyleSheet.create({
  taskContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: WIDTH * 0.94,
  },
  textDefault: {
    ...FONT.body3,
    textDecorationLine: null,
  },
  textsmall: {
    ...FONT.body5,
  }

})
