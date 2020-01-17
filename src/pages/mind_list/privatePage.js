// 隐私界面

import React, { Component } from 'react';

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';

class PrivatePage extends Component {

    // 对于可变的 标题栏 中的信息，可以使用 navigationOptions 函数的形式
    static navigationOptions = ({ navigation }) => {
        return {
            // 设置标题栏的标题
            title: navigation.state.params.title,
            headerStyle: {
                backgroundColor: 'white',
            },
            // 返回按钮的颜色
            headerTintColor: '#47caff',
            // 标题信息的样式
            headerTitleStyle: {
                fontSize: 20
            }
        }
    }


    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.view_container}>
                <ScrollView style={styles.scrollview_container}>
                    <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Android版本权限使用规则</Text>
                    </View>
                    <View>
                        <Text style={styles.text_parag}>&emsp;&emsp;在您使用QQ服务的过程中，我们访问您的各项权限是为了向您提供服务、优化我们的服务以及保障您的帐号安全，具体使用规则如下：</Text>
                        <Text style={styles.text_parag}>1.为了提供包括但不限于如下功能，我们需要访问您的蓝牙权限：</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* QQ物联</Text>
                        <Text style={styles.text_parag}>2.为了提供包括但不限于如下功能，我们需要访问您的相机权限：</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 扫一扫</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 聊天时拍摄、发送照片或视频</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 音视频通话</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 拍摄图片发布为用户头像</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 拍摄、发表图片至空间说说、留言板、签到、日志/手账、小秘密、自定义红包封面</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 拍摄、发表图片发表至看点、兴趣部落、附近</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 群应用，拍摄、上传图片至群相册</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 群发祝福</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 面容支付</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 面容解锁</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 表情红包</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 人脸识别辅助验证</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* QQ智能摄像头</Text>
                        <Text style={styles.text_parag}>3.为了提供包括但不限于如下功能，我们需要访问您的通讯录权限：</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 通过通讯录加好友</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* QQ钱包的话费流量充值</Text>
                        <Text style={styles.text_parag}>4.为了提供包括但不限于如下功能，我们需要访问您的面部识别码权限：</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 面容支付</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 面容解锁</Text>
                        <Text style={styles.text_parag}>5.为了提供包括但不限于如下功能，我们需要访问您的地理位置权限：</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 发送地理位置</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 收藏地理位置</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 为拍摄、发送、发表的图片等信息标识地理位置</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 附近的人</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* QQ个签，获取地理位置组成个性签名</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 空间签到，获取用户所在城市的天气</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 空间直播，根据用户位置推荐直播</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 空间小秘密，标识发布小秘密的地理位置</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 空间说说，发表包含地理位置的说说</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* QQ天气，获取用户所在城市的天气</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* QQ运动，参与运动奖金赛</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 面对面建群</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 群签到</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 面对面快传</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 王者荣耀专区展示地区排名</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 地理位置拍摄挂件</Text>
                        <Text style={styles.text_parag}>6.为了提供包括但不限于如下功能，我们需要访问您的录音（麦克风）权限：</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 聊天时发语音</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 音视频通话</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 在空间、部落、看点、附件、参与语音红包等场景下录制、发表录音或视频</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 群发祝福</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 看点小纸条卡片吹一吹</Text>
                        <Text style={styles.text_parag}>7.为了提供包括但不限于如下功能，我们需要访问您的相册数据：</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 更换头像</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 聊天时发送相册图片或保存图片至相册</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 扫一扫选图</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 在空间、看点、兴趣部落、波洞动漫等功能上传相册图片或保存空间图片至相册</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 在word文档中插入相册图片或下载图片至相册</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 微云备份手机相册</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 保存厘米秀形象快照</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* QQ智能摄像头</Text>
                        <Text style={styles.text_parag}>8.为了提供包括但不限于如下功能，我们需要访问您的提醒数据：</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 全新安装登录页</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* 设置-消息通知</Text>
                        <Text style={styles.text_parag}>9.为了提供包括但不限于如下功能，我们需要访问您的健康数据：</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;* QQ运动，获取用户步数及个人健康信息。</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;我们会采用符合业界标准的安全防护措施来保护您的个人信息安全，避免遭到未经授权的访问、公开披露、使用、修改、损坏或丢失。我们努力使用各种合理的制度、技术、程序以及物理层面的措施来保护您的个人信息，包括但不限于防火墙、加密（例如SSL）、去标识化或匿名化处理、访问控制措施等。</Text>
                        <Text style={styles.text_parag}>&emsp;&emsp;您可以通过系统设置内关于QQ的应用权限设置，逐项查看您上述个人信息的访问权限开启状态，并可以决定开启或关闭这些权限。开启这些权限即代表您授权我们可以收集和使用这些个人信息来实现上述的功能，关闭这些权限即代表您取消了这些授权，则我们将不再继续收集和使用您的这些个人信息，也无法为您提供上述与这些授权所对应的功能。您关闭权限的决定不会影响此前基于您的授权所进行的个人信息的处理。</Text>
                    </View>

                    <Text>
                    </Text>
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
    scrollview_container:{
        paddingLeft: 10,
        paddingRight: 10,
    },
    text_parag: {
        marginBottom: 8
    },
});

export default PrivatePage;