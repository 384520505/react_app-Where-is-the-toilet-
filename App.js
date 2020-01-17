// 项目根目录

import React, { Component } from 'react';

import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Icon from 'react-native-vector-icons/FontAwesome';

import Tiolet from './src/pages/tiolet';
import News from './src/pages/news';
import Mind from './src/pages/mind';
import Weather from './src/pages/weather';

import New_Detail from './src/pages/news_list/new_detail';

// 引入路由组件
import {
  // Router:相当于 react 中的 HashRouter、BarserRouter,在一个项目中只使用一次
  Router,
  // Stack:一个分组器，不表示一个具体的路由，专门用来给路由分组的
  Stack,
  // Scene: 表示具体的路由规则， 如 react 中的 Router
  Scene,
} from 'react-native-router-flux';


class App extends Component {


  constructor() {
    super();

    this.state = {
      selectedTab: 'tiolet'
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tiolet'}
            title="百度"
            selectedTitleStyle={{color:'#47caff'}}
            renderIcon={() => <Icon name='street-view' size={25} color='#ccc' />}
            renderSelectedIcon={() => <Icon name='street-view' size={25} color='#47caff' />}
            onPress={() => this.setState({ selectedTab: 'tiolet' })}>
            <Tiolet></Tiolet>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'news'}
            title="资讯"
            selectedTitleStyle={{color:'#47caff'}}
            renderIcon={() => <Icon name='yelp' size={25} color='#ccc' />}
            renderSelectedIcon={() => <Icon name='yelp' size={25} color='#47caff' />}
            onPress={() => this.setState({ selectedTab: 'news' })}>
            <News></News>
          </TabNavigator.Item>
          {/* <TabNavigator.Item
            selected={this.state.selectedTab === 'weather'}
            title="天气"
            selectedTitleStyle={{color:'#47caff'}}
            renderIcon={() => <Icon name='cloud' size={25} color='#ccc' />}
            renderSelectedIcon={() => <Icon name='cloud' size={25} color='#47caff' />}
            onPress={() => this.setState({ selectedTab: 'weather' })}>
            <Weather></Weather>
          </TabNavigator.Item> */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'mind'}
            title="我的"
            selectedTitleStyle={{color:'#47caff'}}
            renderIcon={() => <Icon name='bullseye' size={25} color='#ccc' />}
            renderSelectedIcon={() => <Icon name='bullseye' size={25} color='#47caff' />}
            onPress={() => this.setState({ selectedTab: 'mind' })}>
            <Mind></Mind>
          </TabNavigator.Item>
        </TabNavigator>
      </SafeAreaView>
    );
  }
}


class Main extends Component {
  render(){
      return (
          <Router sceneStyle={{backgroundColor:'white'}}>
              <Stack key='root1'>
                  <Scene key='app' component={App} hideNavBar={true}/>
                  <Scene 
                  key='new_detail' 
                  component={New_Detail} 
                  title='资讯详情' 
                  navBarButtonColor='#aaaaaa'
                  titleStyle={{color:'black'}}
                  />
              </Stack>
          </Router>
      );
  }
}

export default Main;