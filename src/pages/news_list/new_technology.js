// 科技新闻

import React, { Component } from 'react';

import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
} from 'react-native';

import PropTypes from 'prop-types';

import { fetchNews } from '../../utils/fetch';

import {Actions} from 'react-native-router-flux'

class NewsTechnology extends Component {


    static propsTypes = {
        type: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            // 头条新闻列表
            topNews: [],
            // 数据是否加载中
            isLoading: true,
            // 是否成功获取数据
            isgetData: false,
        }
    }

    // 请求资讯数据
    getNewsData = async () => {
        const topNews = await fetchNews('keji');
        if (topNews && topNews.stat === '1') {
            // 隐藏加载动画
            this.setState({
                isLoading: false,
                isgetData: true
            });
            this.setState({
                topNews: topNews.data
            });
        } else {
            console.warn('获取数据失败!')
        }
    }


    //  跳转详情页
    JumpDetail = (url) => {
        Actions.new_detail({ url })
    }

    render() {
        const { type } = this.props;
        const { isgetData } = this.state;

        if (type === 1 && !isgetData) {
            this.getNewsData();
        }

        // 获取新闻资讯数据
        const newsDatas = this.state.topNews || [];

        if (this.state.isLoading) {
            return <ActivityIndicator size='large'></ActivityIndicator>
        }

        return (
            <View style={styles.view_container}>
                <ScrollView style={styles.scrollview_container}>
                    {newsDatas.map(newsData => {
                        return (
                            <TouchableOpacity key={newsData.uniquekey} onPress={()=>{this.JumpDetail(newsData.url)}}>
                                <View style={styles.view_news_item}>
                                    <Image
                                        style={styles.new_item_img}
                                        source={{ uri: newsData.thumbnail_pic_s }} />
                                    <View style={styles.new_item_view}>
                                        <Text
                                            numberOfLines={2}
                                            ellipsizeMode='tail'
                                            style={styles.new_item_text_title}
                                        >{newsData.title}</Text>
                                        <View style={styles.item_view_view}>
                                            <Text style={styles.view_text_color}>{newsData.date}</Text>
                                            <Text style={styles.view_text_color}>{newsData.author_name}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    view_container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollview_container: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
    view_news_item: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    new_item_img: {
        width: 130,
        height: 90,
        marginRight: 5
    },
    new_item_view: {
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 20 - 130
    },
    new_item_text_title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    item_view_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 5
    },
    view_text_color: {
        color: '#aaaaaa'
    },
});

export default NewsTechnology