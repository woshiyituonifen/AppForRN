import React ,{Component}from 'react'
import {View,Text,Image}from 'react-native'



export default class MovieInfo extends Component{

    constructor(props){
        super(props);
        this.state={
            MovieId:props.navigation.getParam("movieId")
        }
    }

    render(){
        return(
            <View style={{alignItems:"center",marginTop:100}}>
                <Text >
                    {this.state.MovieId}
                </Text>
            </View>
        )
    }
}