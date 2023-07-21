// HomeScreen.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the Ionicons icon library
import {RootState} from '../../redux/store';
import CustomHeader from '../../components/CustomeHeader';
// import { logout } from '../../redux/slices/authSlice'; // Import the logout action from your authSlice

const HomeScreen: React.FC = () => {
  // const {username} = useSelector((state: RootState) => state.auth);

  return (
    <View style={styles.container}>
      <CustomHeader head={'Home'} />
      <Text style={styles.welcomeText}>Welcome </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#007bff',
  },
  navIconContainer: {
    marginRight: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
