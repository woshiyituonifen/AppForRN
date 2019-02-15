import React, {Component} from 'react'
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import MovieTypeView from './MoviesList'

export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            inTheatersList: [],
            comingSoonList: [],
            top250List: []
        }
    }

    componentWillMount() {
        Promise.all([
            // 正在热映
            fetch(
                "https://api.douban.com/v2/movie/in_theaters?start=0&count=10"
            ).then(res => res.json()),
            // 即将上映
            fetch(
                "https://api.douban.com/v2/movie/coming_soon?start=0&count=10"
            ).then(res => res.json()),
            // top 250
            fetch(
                "https://api.douban.com/v2/movie/top250?start=0&count=10"
            ).then(res => res.json()
            )
        ]).then(results => {
            this.setState({
                isLoading: false,
                inTheatersList: results[0].subjects,
                comingSoonList: results[1].subjects,
                top250List: results[2].subjects
            })
        })
    }

    render() {
        if (this.state.isLoading) {
            return <View>
                <ActivityIndicator size='large' color='red'/>
            </View>

        } else {

            return <ScrollView style={{backgroundColor: "#f2f5f7"}}>
                <MovieTypeView
                    title="正在热映"
                    movieList={this.state.inTheatersList}
                    movieType="in_theaters"
                    navigation={this.props.navigation}

                />
                <MovieTypeView
                    title='即将上映'
                    movieList={this.state.comingSoonList}
                    movieType='coming_soon'
                    navigation={this.props.navigation}

                />
                <MovieTypeView
                    title='Top250'
                    movieList={this.state.top250List}
                    movieType='top250'
                    navigation={this.props.navigation}

                />
            </ScrollView>
        }

    }

}