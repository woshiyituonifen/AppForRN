import React, {Component}from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createAppContainer,createBottomTabNavigator,createStackNavigator}from 'react-navigation';

import Home from './Home';
import Setting from './Setting';

const Homestack = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            headerTitle:"首页"
        }
    }
})
const SettingStack = createStackNavigator({
    Setting:{
        screen:Setting,
        navigationOptions:{
            headerTitle:"设置"
        }
    }
})
const TabBar = createBottomTabNavigator({
    Home:{screen:Homestack},
    Setting:{screen:SettingStack}
})

export default  AppContainer = createAppContainer(TabBar);