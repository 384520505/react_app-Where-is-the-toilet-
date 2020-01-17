// 用户反馈

import React, {Component} from 'react';

import {
    View,
    Text,
} from 'react-native';

class Feedback extends Component {


    static navigationOptions = ({ navigation }) => {
        return {
            // 设置标题栏的标题
            title: navigation.state.params.title,
        }
    }

    render(){
        return (
            <View>
                <Text>用户反馈</Text>
            </View>
        );
    }
}

export default Feedback;