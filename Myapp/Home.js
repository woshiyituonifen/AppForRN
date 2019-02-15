import React, {Component} from "react";

import {View, Text, StyleSheet, Dimensions, Image,ToastView} from "react-native";
import Carouisel from "react-native-looped-carousel";

// 获取屏幕宽度
const {width} = Dimensions.get('window');

// 布局
const styles = StyleSheet.create({
    //轮播
    images: {
        width: "100%",
        height: "100%"
    },
    // 导航条
    navigators: {
        height: 50,
        backgroundColor: "orange",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    }

})

export default class Home extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            size: {
                width, height: 250
            }
        }

    }

    render() {
        return (
            <View style={this.state.size}>
                <Carouisel
                    dalay={3000}
                    style={this.state.size}
                    autoplay
                    bullets
                    arrows
                    leftArrowText={' '}
                    // leftArrowStyle={{color: 'red', fontSize: 30, margin: 20}}
                    rightArrowText={' '}
                    // rightArrowStyle={{color: "red", fontSize: 30, margin: 20}}
                >
                    <View style={this.state.size}>
                        <Image
                            style={styles.images}
                            resizeMode='stretch'
                            source={{
                                uri:
                                    "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.jpg"
                            }}
                        />
                    </View>
                    <View style={this.state.size}>
                        <Image
                            style={styles.images}
                            source={{
                                uri:
                                    "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2542973862.jpg"
                            }}
                        />

                    </View>
                    <View style={this.state.size}>
                        <Image
                            style={styles.images}
                            source={{
                                uri:
                                    "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2541240741.jpg"
                            }}
                        />
                    </View>
                </Carouisel>
                <View style={styles.navigators}>
                    <Text>
                        首页
                    </Text>
                    <Text onPress={() => {
                         this.props.navigation.navigate('MoviesList')
                    }}>
                        电影
                    </Text>
                    <Text onPress={
                        ()=>{
                            this.props.navigation.navigate("Mine")
                        }
                    }>
                        详情
                    </Text>
                </View>
            </View>
        )
    }

}
const stylesss = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});