import React,{Component} from 'react';
import {View,Text,} from'react-native';
import RefreshListVIew,{RefreshState}from 'react-native-refresh-list-view'

export default  class RealMovieList extends Component{

    constructor(props){
        super(props);
        this.state={
            MoviesList:[],
            refreshState:RefreshState.Idle,
            movieType:props.navigation.getParam('movieType'),
            pageIndex:1,
            pageSize:10,
            total:0,
            isLoading:true,
        }
    }

    render(){
        return(
            <RefreshListVIew

            />
        )
    }
}