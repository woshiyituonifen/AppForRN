import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Mine from './MineView';
import Home from './Home';
import Setting from './Setting';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: "首页",
            headerTitleStyle: {
                flag: 1,
                textAlign: 'center',
            },
        }
    }
})
const SettingStack = createStackNavigator({
    Setting: {
        screen: Setting,
        navigationOptions: {
            headerTitle: "电影列表",

        }
    }
})

const MineView = createStackNavigator({
    Mine: {
        screen: Mine,
        navigationOptions: {
            headerTitle: '我的',
            headerTitleStyle: {
                flag: 1,
                textAlign: 'center',
            }
        }
    }

})
const TabBar = createBottomTabNavigator({
    // 首页
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: "首页",
            tabBarIcon:({focused,tintColor})=>{
                return(
                    <Image
                    source={
                        focused
                        ?require("./images/tarBar/home_normal.png")
                            :require("./images/tarBar/home_selected.png")
                    }
                    style={{tintColor:tintColor,width:24,height:24}}
                    />
                )
            }
        },
    },
// 电影列表
    MoviesList: {screen: SettingStack,
        navigationOptions:{
        tabBarLabel:'电影',
            tabBarIcon:({focused,tintColor})=>{
            return(
            <Image
            source={
                focused
                ?require('./images/tarBar/movie_normal.png')
                    :require('./images/tarBar/movie_selected.png')
            }
            style={{tintColor:tintColor,width:24,height:24}}
            />)
            }
        }
    },
    //我的页面
    Mine: {
        screen: MineView,
        navigationOptions:{
            tabBarLabel:"我的",
            tabBarIcon:({focused,tintColor})=>{
                return(
                    <Image
                    source={
                        focused
                        ?require('./images/tarBar/mine_normal.png')
                            :require('./images/tarBar/mine_selected.png')
                    }
                    style={{tintColor:tintColor,width:24,height:24}}
                    />
                )

            }
        }
    },

},
    {
        tabBarOptions:{
            activeTintColor:"red",
            inactiveTintColor:"black"
        }

})


export default AppContainer = createAppContainer(TabBar);