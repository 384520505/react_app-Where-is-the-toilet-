// 主界面 (tiolet)

import React, { Component } from 'react';

import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

import {
    WebView,
} from 'react-native-webview';

import LoadingImage from '../assets/loading.gif';

class Tiolet extends Component {

    // webView 加载失败的回调函数
    loadError = () => {
        console.warn('地图加载失败！')
    }

    // 加载数据的loading 图片
    loadView = () => {
        return (
            <View style={styles.load_view_container}>
                <Image style={styles.loading_img} source={LoadingImage} />
            </View>
        );
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView   
                    onError={this.loadError}
                    startInLoadingState={true}
                    // source={{ uri: 'http://localhost:8081/src/html/toiletMap/toiletMap1.html' }}
                    source={{ uri: 'https://baidu.com' }}
                    renderLoading={this.loadView}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    load_view_container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'white',
    },
    loading_img:{
        marginTop:-200,
        width: 200,
        height:200,
    }
});

export default Tiolet;