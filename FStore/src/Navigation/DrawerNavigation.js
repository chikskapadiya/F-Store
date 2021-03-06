import * as React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import EventScreen from '../Screen/EventScreen';
import FavoriteScreen from '../Screen/FavoriteScreen';
import EditeProfileScreen from '../Screen/EditeProfileScreen';
import EditEventScreen from '../Screen/EditEventScreen';
import DrawerContext from './DrawerContext';
import images from '../utility/ImageConst';
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function FavoriteStack() {
  return (
    <Stack.Navigator initialRouteName="FavoritS">
      <Stack.Screen
        name="Favorit"
        component={FavoriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function EventStack() {
  return (
    <Stack.Navigator initialRouteName="EventS">
      <Stack.Screen
        name="Event"
        component={EventScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditEvent"
        component={EditEventScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="ProfileS">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditeProfile"
        component={EditeProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? images.home_black : images.home;
          } else if (route.name === 'Favorit') {
            iconName = focused ? images.heart_black : images.heart;
          } else if (route.name === 'Event') {
            iconName = focused ? images.event_black : images.event;
          } else if (route.name === 'Profile') {
            iconName = focused ? images.user_black : images.user;
          }
          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{width: 30, height: 20, resizeMode: 'contain'}}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#16a085',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favorit" component={FavoriteStack} />
      <Tab.Screen name="Event" component={EventStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function DrawerNavigation({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={(props) => <DrawerContext {...props} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigation} />
    </Drawer.Navigator>
  );
}
