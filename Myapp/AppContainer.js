import React, {Component}from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createAppContainer,createBottomTabNavigator,createStackNavigator}from 'react-navigation';

import Home from './Home';
import Setting from './Setting';

const TabBar = createBottomTabNavigator({
    Home:{screen:Home},
    Setting:{screen:Setting}
})

export default  AppContainer = createAppContainer(TabBar);