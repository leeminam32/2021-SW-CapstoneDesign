import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import BudgetScreen from './BudgetScreen';
import AssetsScreen from './AssetsScreen';
import MyPageScreen from './MyPageScreen';

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation}) => {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({color, size }) => {
          let iconName;

          if (route.name === '편히') {
            iconName = 'person-outline'
          } else if (route.name === '가계부') {
            iconName = 'folder-outline';
          } else if (route.name === '자산') {
            iconName = 'card-outline';
          } else if (route.name === '마이페이지') {
            iconName = 'menu-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2B6CA7',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="편히" component={HomeScreen} />
        <Tab.Screen name="가계부" component={BudgetScreen} />
        <Tab.Screen name="자산" component={AssetsScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
  );
};

export default MainScreen;