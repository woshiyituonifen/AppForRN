import React,{Component} from 'react';
import {View,Text} from'react-native';

export default  class RealMovieList extends Component{

    render(){
        return(
            <View>
                <Text>
                    {this.props.navigation.getParam("title")}
                </Text>
            </View>
        )
    }
}