// 资讯界面 （news）

import React, { Component, createContext } from 'react';

import {
    View,
    Text
} from 'react-native';

import Top from './news_list/new_top';
import Technology from './news_list/new_technology';
import Society from './news_list/new_society';
import Physical from './news_list/new_physical';
import Military from './news_list/new_military';
import International from './news_list/new_international';
import Inland from './news_list/new_inland';
import Finance from './news_list/new_finance';
import Fashion from './news_list/new_fashion';
import Entertainment from './news_list/new_entertainment';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

class News extends Component {


    constructor(props) {
        super(props);
        this.state = {
            /**
             * 资讯的类型
             * 0:头条
             * 1:科技
             * 2:社会
             * 3:体育
             * 4：军事
             * 5:国际
             * 6:国内
             * 7:财经
             * 8:时尚
             * 9:娱乐
             */
            // 默认为头条
            type: 0
        }
    }

    changeTab = (index) => {
        this.setState({
            type: index,
        });
    }



    render() {
        return<ScrollableTabView
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#47caff'
                tabBarUnderlineStyle={{ backgroundColor: '#02b5a6' }}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}
                onChangeTab={({ i }) => { this.changeTab(i) }}
            >

                <Top type={this.state.type} tabLabel='头条'></Top>
                <Technology type={this.state.type} tabLabel='科技'></Technology>
                <Society type={this.state.type} tabLabel='社会'></Society>
                <Physical type={this.state.type} tabLabel='体育'></Physical>
                <Military type={this.state.type} tabLabel='军事'></Military>
                <International type={this.state.type} tabLabel='国际'></International>
                <Inland type={this.state.type} tabLabel='国内'></Inland>
                <Finance type={this.state.type} tabLabel='财经'></Finance>
                <Fashion type={this.state.type} tabLabel='时尚'></Fashion>
                <Entertainment type={this.state.type} tabLabel='娱乐'></Entertainment>

            </ScrollableTabView>;
    }
}

export default News;