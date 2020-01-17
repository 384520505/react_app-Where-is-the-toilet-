// 我的界面 （mind）

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import PrivatePage from './mind_list/privatePage';
import FunctionIntroduce from './mind_list/functionIntorduce';
import Feedback from './mind_list/feedback';
import Help from './mind_list/help';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconPro from 'react-native-vector-icons/EvilIcons';

// 引入react-navigation 的相关包

// createAppContainer 是一个函数，该函数返回 React 组件，其参数是由 crateStackNavigator 返回的组件构成；
import { createAppContainer } from 'react-navigation';
// createStackNavigator 是一个返回 React 组件的方法，他需要一个路由配置对象和一个可选对象；
import { createStackNavigator } from 'react-navigation-stack';

class Mind extends Component {

    // 每个页面组件都可以有一个名为 navigationOptions 的静态属性，他是一个对象，或者是一个返回各种配置选项对象的函数。
    // 该对象用于设置标题栏的各种信息

    static navigationOptions = {
        // 是否隐藏标题栏
        headerShown: false,
        // 设置标题栏显示的标题
        // title:'我的',
        // 标题栏的样式
        // headerStyle:{
        //     backgroundColor:'white',
        // },
    }

    render() {
        return (
            <View style={styles.view_container}>
                <ScrollView style={styles.scrollview_container}>
                    <View style={styles.view_list_logo}>
                        <ImageBackground
                            source={require('../assets/newBg.png')}
                            style={styles._imagebackground}
                        >
                            <View>
                                <Image source={require('../assets/logo.png')} />
                                <Text style={styles.view_logo_text}>V 0.0.1</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.view_list_all}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('PrivatePage', { title: '隐私介绍' }) }}>
                            <View style={styles.view_list_item}>
                                <Icon style={{ marginRight: 20 }} name='key' size={35} color='#47caff' />
                                <Text style={{ fontSize: 16 }}>隐私介绍</Text>
                                {/* <Icon style={{ position: 'absolute', right: 0 }} name='chevron-right' size={25} color='#ccc' /> */}
                                <Image style={{ position: 'absolute', right: 0 }} source={require('../assets/Right.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => {this.props.navigation.navigate('FunctionIntroduce', { title:'功能介绍' })}}>
                            <View style={styles.view_list_item}>
                                <Icon style={{ marginRight: 20 }} name='internet-explorer' size={35} color='#47caff' />
                                <Text style={{ fontSize: 16 }}>功能介绍</Text>
                                {/* <Icon style={{ position: 'absolute', right: 0 }} name='chevron-right' size={25} color='#ccc' /> */}
                                <Image style={{ position: 'absolute', right: 0 }} source={require('../assets/Right.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Feedback', { title:'用户反馈' })}}>
                            <View style={styles.view_list_item}>
                                <Icon style={{ marginRight: 20 }} name='comment' size={35} color='#47caff' />
                                <Text style={{ fontSize: 16 }}>用户反馈</Text>
                                {/* <Icon style={{ position: 'absolute', right: 0 }} name='chevron-right' size={25} color='#ccc' /> */}
                                <Image style={{ position: 'absolute', right: 0 }} source={require('../assets/Right.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Help', { title:'帮助' })}}>
                            <View style={styles.view_list_item}>
                                <Icon style={{ marginRight: 20 }} name='question-circle' size={35} color='#47caff' />
                                <Text style={{ fontSize: 16 }}>帮助</Text>
                                {/* <Icon style={{ position: 'absolute', right: 0 }} name='chevron-right' size={25} color='#ccc' /> */}
                                <Image style={{ position: 'absolute', right: 0 }} source={require('../assets/Right.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view_container: {
        flex: 1,
    },
    scrollview_container: {
        flex: 1,
        backgroundColor:'white',
    },
    view_list_logo: {
        height: 220,
    },
    _imagebackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_logo_text: {
        marginTop: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center'
    },
    view_list_all: {
        paddingLeft: 5,
        paddingRight: 5
    },
    view_list_item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE'
    },
});



// ----------------- react Navigator 的使用 start -------------------
const AppNavigator = createStackNavigator(
    {
        // home 屏幕
        Home: {
            screen: Mind,
        },
        // PrivatePage 屏幕
        PrivatePage: {
            screen: PrivatePage
        },
        // 功能介绍 屏幕
        FunctionIntroduce:{
            screen:FunctionIntroduce
        },
        // 用户反馈屏幕
        Feedback:{
            screen:Feedback
        },
        // 帮助屏幕
        Help:{
            screen:Help
        }

    },
    {
        // 初始化显示的屏幕
        initialRouteName: 'Home',
        // 导航栏样式的共享使用方式
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'white'
            },
            // 返回按钮的颜色
            headerTintColor: '#47caff',
            // 标题信息的样式
            headerTitleStyle:{
                fontSize:20
            },
            headerTitleAlign: 'center',
            // 设置返回按钮的图标
            headerBackImage: () => {
                return (
                    // <Icon name='chevron-left' size={25} color='#aaa' />
                    <Image source={require('../assets/left.png')} />
                );
            }
        },
    }
);

// ----------------- react Navigator 的使用 end ---------------------

export default createAppContainer(AppNavigator);