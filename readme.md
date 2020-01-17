React Native 学习文档


一、知识点


@（1）初学React-Native时的讲解：

    1.启动react native 项目 ：yarn react-native run-android
    启动的讲解请看react-native官方文档的详细讲解

    2.启动react-native时 windows 系统弹出的 node 服务器，是用于开发时对项目的热更新，提高开发效率，并且会记录项目修改

    3.在项目的根目录中的index.js文件中，
        （1）从react-native的包中，导入AppRegistry 组件，他的作用是注册项目的首页
            import {AppRegistry} from 'react-native';

        （2）当使用AppRegistry 注册项目的首页时，方法中的第一个参数表示项目的名称，最好不要改变其值，否则会报错，
            第二个参数表示，要把项目你中的那个页面作为项目的首页

    4.在react-native中只能使用 .js 作为组件的后缀名， 不能使用 .jsx 作为组件的后缀名

    5.在react-native中 不能再使用开发网页时的各种标签 如： div ， p ， img 等，
        只能使用react-native中提供的开发 标签 ，如： View , Text等
        View : 页面的布局标签 ，如：div一样
        Text ：页面中存放文本的标签, 如：p一样


@（2）布局的详解:
    在手机端，flexbox的布局方式和 web端的布局方式不太一样：
        手机端,flexbox 是纵向布局，元素一行一行的排列下去，
        web端，横向布局，元素一列一列的排列下去

    1.flex:改属性的使用方式与web中flex属性基本一致

    2.flexDirection:在flexbox 中有主轴和副轴之分， 主轴控制 子元素的排列方向， 默认为 纵向排列（column）.可以通过
        flexDirection属性改变主轴方向。
        （1）row: 子元素水平方向排列;
        （2）column: 子元素垂直方向排列;
        （3）row-reverse: 子元素水平方向反向排列;
        （4）column-reverse: 子元素垂直反向反向排列
    
    3.justifyContent:可以通过改属性来指定主轴方向的子元素的排列方式，
        （1）flex-start: 子元素对齐主轴的起点（默认值）
        （2）flex-end: 子元素对齐主轴的终点
        （3）center: 子元素在主轴的中间位置对齐
        （4）space-between: 在主轴方向上，相邻的子元素之间等间距对齐， 首尾子元素与父元素两边对齐
        （5）space-around: 在主轴方向上，相邻的子元素之间等间距对齐，首位子元素与父容器的两边的距离相等
            且为相邻子元素的之间距离的一半
        （6）space-evenly: 子元素在主轴方向均匀分布，相邻元素之间的间距与首位元素与父容器之间的间距相同；

    4.alignItems: 该属性可以用来控制副轴上子元素的排列方式。
        （1）flex-start: 子元素对齐父容器的起点为位置（默认值）
        （2）flex-end：子元素对齐父容器的终点
        （3）center：子元素在父容器中居中对齐
        （4）stretch: 子元素为弹性布局时（未设置副轴方向的大小或者为auto），拉伸对齐副轴
        （5）baseline: 有文本存在时，子元素在副轴方向基于第一个文本基线对齐

    5.flexWrap: 当父容器空间不足时，flexWrap可以支持自动换行
        （1）nowrap: 不换行（默认）
        （2）wrap：换行

    6.alignSelf: 该属性类似于alignItems,他也是控制副轴上的排列规则，不同的是使用的对象的是子元素本身，而不是父元素。
        它可以改变父容器alignItems的属性控制当前子元素的排列规则，在副轴上实现自己的排列规则。默认值为 auto，继承父容器的
        alignItmes属性。因此他也有5个值可选：flex-start, flex-end, center, stretch, baseline;

        
@（3）原生方法：
    获取手机的屏幕宽和高，分辨率, 运行平台：
        引入相关的包, Dimensions, Platform
        宽度： Dimensions.get('window').width;
        高度： Dimensions.get('window').height;
        分辨率： Dimensions.get('window').scale;
        运行平台: Platform.OS


@（4）react native中标签的使用：
    1.Image: 图片标签，在使用图片标签时，若是通过uri在网络上获取的图片路径，必须要为该标签指定宽和高,否则无法显示;

    2.Button: 按钮标签， 在使用按钮标签时，必须为该标签指定 title 、onPress 属性;

    3.ActivityIndicator: 加载动画标签, 当其属性 animating 为 false 时，该标签将隐藏，但是任占有该位置;

    4.TouchableHighlight: 默认情况下， View 标签没有 触摸点击的事件， TouchableHighlight 可以相应View 的点击事件，
        只需要将 View 标签 用TouchableHighlight 进行包裹即可， 注意：TouchableHighlight 下只能有一个根子节点；

    5.SafeAreaView : 可视化的安全区域，在像iPhone x 这样的手机中，由于刘海屏的原因，需要对屏幕做一个可视化的安全区域，
        以防在不规则的屏幕区域中显示出现问题




二、开发经验
    1.底部的导航栏可以使用 react-native-tab-navigator 组件库实现；

    2.图标库可以使用react-native-vector-icons；
        react-native-vector-icons 的配置步骤（android端）：
            （1）安装包： yarn add react-native-vector-icons;
            （2）与react进行关联：npx react-native link react-native-vector-icons
            （3）在 android/app/build.gradle文件中，添加一下内容：
                project.ext.vectoricons = [
                    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf','FontAwesome.ttf' ]
                ]
                apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
            （4）在项目中使用 ：  
                    import Icon from 'react-native-vector-icons/FontAwesome';
                    <Icon name={'angle-right'} size={24} color={'#999'} />

    3.轮播图组件 react-native-swiper@nightly ,在使用Swiper组件时，外层需要包裹 View 组件;

    4.路由的导航组件 react-native-router-flux ,在react-native-router-flux中 Router、 Stack、 Scene、 Actions 三个组件的作用：
        （1）Router：相当于react 中的HashRouter、 BarserRouter， 一个项目中的只使用一次；
        （2）Stack：这是一个分组器，不表示具体的路由，专门用来给路由分组的；
        （3）Scene：表示一个具体的路由规则，如react中的 Router；
            使用方法简介：所有的 Scene 路由规则都应该写在 Stack 标签内部，第一个 Scene 表示 react-native 
                默认需要展示的首页页面；
            key 属性，表示路由规则的名称，可以使用这个 key 实现编程式导航； 每一个路由规则都应该提供一个唯一的 key ，
                key 不能重复；
        （4）Actions：实现组件的跳转, 如同 react-router 中的 push、goBack 等方法，
            用法： Actions.movielist(参数);  movielist 是 该组件的 key 的值 ，
            <Scene key='movielist' component={Movie_list} title='热映电影' />

    5.对于图片的自适应宽度的做法：
        （1）获取屏幕的宽度；
        （2）用屏幕的宽度 - 空白部分的宽度（paddingLeft、paddingRight ...）；
        （3）将图片设置为剩余的宽度；


    6.react-navigation 的使用：
        （1）安装相关的包: react-navigation、 react-native-reanimated、 react-native-gesture-handler、 react-native-screens、 react-native-safe-area-context
        （2）按照 Stack Navigator's page 的指示安装 react-navigation-stack、 @react-native-community/masked-view
        （3）引入 createAppContainer , createStackNavigator 两个方法,
            import {createAppContainer} from 'react-navigation';
            import {createStackNavigator} from 'react-navigation-stack';
        注意：具体的react-navigation 配置请看官方文档的讲解

        * 当使用 createStackNavigator方法创建组件时， 被创建的组件中将传入 navigation 属性，该属性中包含 react-navigation 包含的多种方法；
            例如： this.props.navigation.navigate('PrivatePage') 进入指定的界面
            this.props.navigation.navigate('PrivatePage',{ detail:'xxxx' }) 该方法的第二个参数是一个params 对象，通过该参数，向跳转的界面传入参数， 跳转到的页面通过 this.props.navigation.state.params / this.props.navigation.getParam(参数名)  来获取参数值;

        （4）在组件中定义 navigationOptions 静态对象来设置标题栏的样式；
            如： static navigationOptions = {
                headerStyle:{
                    backgroundColor:'white',
                }
            }

            该方法用于设置当前页面的标题栏样式，若要想让所有的标题栏的样式共享，则可以使用一下方式，
                在navigation 的根组件中的 createStackNavigator 函数中的第二个参数中 加入 defaultNavigationOptions 对象,
                在该对象中设置标题栏的相关样式.
                    如： const AppNavigator = createStackNavigator(
                        {
                            // home 屏幕
                            Home: Mind
                        },
                        {
                            // 初始化显示的屏幕
                            initialRouteName:'Home',
                            
                            // 导航栏样式的共享使用方式
                            defaultNavigationOptions:{
                                headerStyle:{
                                    backgroundColor:'white'
                                },
                            },
                        }
                    );

    7.react-native-scrollable-tab-view 顶部导航条。
        顶部导航条的使用：
            （1）安装 react-native-scrollable-tab-view、 @react-native-community/viewpager;

    8.WebView 组件标签的使用：
        在之前WebView 是在react-native包中的;
        现在 WebView 组件放在了 react-native-webview 包中;
        安装 react-native-webview 包 即可使用;
        webView中的 renderLoading 函数用于定制一个加载治指示器，使用该函数时，必须将startInLoadingState 属性设置为 true;

    9.在react native 中使用 gif 图片时 ，在android 中gif 图片默认是不动的， 在 ios 中不存在这样的问题；
        解决方式： 在android/app/build.gradle 文件中在 dependencies 对象中添加 
        implementation 'com.facebook.fresco:animated-gif:2.0.0' ，对于 react native 版本在 0.6 及以上时使用，
        在0.6版本一下时，使用 implementation 'com.facebook.fresco:animated-gif: 版本号' 的版本；