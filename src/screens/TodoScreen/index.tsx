// TodoScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {addTodo, removeAllTodos, removeTodo} from '../../redux/reducers';
import {RootState} from '../../redux/store';
import CustomHeader from '../../components/CustomeHeader';

const TodoScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const todos = useSelector((state: RootState) => state.todo);

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo('');
  };

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };
  const handleRemoveAllTodos = () => {
    dispatch(removeAllTodos());
  };
  return (
    <View style={styles.container}>
      <CustomHeader head={'TODO'} />
      {/* <Text style={styles.title}>TODO App</Text> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Todo"
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
          <Icon name="add-circle-outline" size={30} color="#007bff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.todoItemContainer}>
            <Text style={styles.todoText}>{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
              <Icon name="trash-outline" size={25} color="#007bff" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => handleRemoveAllTodos()}
        style={styles.removeAllButton}>
        <Text style={styles.removeButtonText}>Remove All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
  },

  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },

  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 2,
  },

  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  removeAllButton: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },

  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoScreen;
