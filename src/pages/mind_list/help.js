// 帮助

import React, {Component} from 'react';

import {
    View,
    Text,
} from 'react-native';

class Help extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            // 设置标题栏的标题
            title: navigation.state.params.title,
        }
    }

    render(){
        return (
            <View>
                <Text>帮助</Text>
            </View>
        );
    }
}

export default Help;