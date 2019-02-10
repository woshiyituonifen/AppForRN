import React, {Component} from "react";

import {View, Text, StyleSheet} from "react-native";

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    dhjiqhf
                </Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
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