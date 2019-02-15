import React from 'react'
import {View, TouchableOpacity, Image, Text, ScrollView} from 'react-native'

export default (props) => {

    return <View >

        <TouchableOpacity style={{flexDirection: 'row', height: 35, alignItems: "center",justifyContent:'space-between',marginTop:10,backgroundColor:'#fff'}}

onPress={()=>{
    props.navigation.navigate("RealMovieList",{title:props.title,movieType:props.movieType})
}}
        >
            <Text style={{paddingLeft:10}}>{props.title}</Text>
            <Image style={{height:20,width:13,marginRight:10}}
                   source={require('./images/arrow-right.png')}
            />
        </TouchableOpacity>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{backgroundColor:'#fff'}} >

            {
                props.movieList.map((item, index) => {
                    return <TouchableOpacity  activeOpacity = {0.9}style={{paddingLeft:10,paddingRight:10,alignItems:'center'}} onPress={()=>{
                    props.navigation.navigate('MovieInfo',{movieId:item.id})}
                    }>
                        <Image
                            style={{width: 150, height: 220}}
                            source={{uri: item.images.small}}/>
                        <Text
                            style={{fontSize: 12, marginTop: 5,alignItems:"center",marginBottom:5}}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                })
            }

        </ScrollView>
    </View>


}