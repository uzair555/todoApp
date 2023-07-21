import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerContent: React.FC<DrawerContentComponentProps> = ({navigation}) => {
  const handleDrawerItemPress = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drawer</Text>
      <View style={styles.separator} />
      <TouchableOpacity
        onPress={() => handleDrawerItemPress('HomeDrawer')}
        style={styles.drawerItem}>
        <Icon
          name="home-outline"
          size={20}
          color="#007bff"
          style={styles.drawerIcon}
        />
        <Text style={styles.drawerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDrawerItemPress('Todo')}
        style={styles.drawerItem}>
        <Icon
          name="list-outline"
          size={20}
          color="#007bff"
          style={styles.drawerIcon}
        />
        <Text style={styles.drawerText}>Todo</Text>
      </TouchableOpacity>
      {/* Add more drawer items with icons and text */}
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  title: ViewStyle;
  separator: ViewStyle;
  drawerItem: ViewStyle;
  drawerIcon: ViewStyle;
  drawerText: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  drawerIcon: {
    marginRight: 10,
  },
  drawerText: {
    fontSize: 16,
  },
});

export default DrawerContent;
