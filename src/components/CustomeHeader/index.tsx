import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader: React.FC = props => {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={handleOpenDrawer}
        style={styles.navIconContainer}>
        <Icon name="menu-outline" size={30} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>{props.head}</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Icon name="log-out-outline" size={25} color="#fff" />
      </TouchableOpacity>
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
});

export default CustomHeader;
