// 新闻详情页面

import React, { Component } from 'react'

import {
    View,
    StyleSheet,
    Image,
} from 'react-native'

import {
    WebView
} from 'react-native-webview'


import LoadingImage from '../../assets/loading.gif';

class NewDetail extends Component {


    // webView 加载失败的回调函数
    loadError = () => {
        console.warn('加载失败！')
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
        const { url } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    onError={this.loadError}
                    startInLoadingState={true}
                    source={{ uri: url }}
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
    },
    loading_img:{
        marginTop:-200,
        width: 200,
        height:200,
    }
});

export default NewDetail;