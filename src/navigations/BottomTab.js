import { View, Text, StyleSheet, Animated, TouchableOpacity, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Dashboardnew from '../containers/dashboardNew/Dashboardnew';
import Activity from '../containers/activity/Activity';
import Oppertunities from '../containers/opportunities/Opportunities';
import Lead from '../containers/lead/Lead';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import CommonColors from '../utils/constants/colors/CommonColors';
import Labels from '../utils/constants/labels/Labels';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalPopUp from '../components/modal_popup/ModalPopUp';
import Entypo from 'react-native-vector-icons/Entypo'
import EStyleSheet from 'react-native-extended-stylesheet';
import MenuCard from '../components/modal_popup/MenuCard';
import Navigation from './Navigations';
import { ActivityPage } from './Navigations';
import { useNavigation } from '@react-navigation/native';


let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });


function BottomTab(props) {
    const [circleBackgroundColor, setCircleBackgroundColor] = useState(CommonColors.orange);
    const [isModelVisible, setModalVisible] = useState(false);


    const [modalList, setModalList] = useState([
        {
            id: '1',
            value: Labels.addLead,
        },
        {
            id: '2',
            value: Labels.addOppertunity,
        },
        {
            id: '3',
            value: Labels.addActivity,
        },]);

    const handleIconClick = () => {
        setCircleBackgroundColor((prevColor) =>
            prevColor === CommonColors.red ? CommonColors.orange : CommonColors.red
        );
    };
    const menuCardValue = (val) => {

    }

    const navigateToLead = (val) => {
        props.navigation.navigate('Add Lead')
    }

    const navigateToOppertunities = (val) => {
        props.navigation.navigate('Add Oppertunities')
    }

    const navigateToActivity = (val) => {
        props.navigation.navigate('Activity')
    }

    const _renderIcon = (routeName, selectedTab) => {
        let imageSource = null;
        let text = '';

        switch (routeName) {
            case 'dashboardnew':
                imageSource = require('../assets/images/png/disabledDashBoard.png');
                text = Labels.dashBoard;
                break;
            case 'Leads':
                imageSource = require('../assets/images/png/disabledLeadClient.png');
                text = Labels.leadClient;
                break;
            case 'Oppertunities':
                imageSource = require('../assets/images/png/disabledOppertunity.png');
                text = Labels.oppertunities;
                break;
            case 'Activity':
                imageSource = require('../assets/images/png/disabledActivity.png');
                text = Labels.activity;
                break;
        }

        return (
            <View style={Styles.iconContent}>
                <Image
                    source={imageSource}
                    style={[Styles.image, { tintColor: routeName === selectedTab ? Labels.iconEnable : Labels.iconDisable },
                    ]}
                    resizeMode='contain'
                />


                <Text style={Styles.font}>{text}</Text>
            </View>
        );
    };

    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={Styles.tabbarItem}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };
    return (

        <CurvedBottomBarExpo.Navigator
            screenOptions={
                {
                    headerShown : false,
                    headerStatusBarHeight: 0,
                    // headerStyle: {
                    //     backgroundColor: CommonColors.brown
                    // },
                    // headerTitleContainerStyle: {
                    //     fontSize: 10,
                    //     color: CommonColors.white,
                    //     fontWeight: Labels.bold
                    // },
                    // headerTintColor: CommonColors.navTextColor,
                    // headerLeft: () => (
                    //     <View>
                    //         <Entypo
                    //             name={Labels.chevronLeft}
                    //             size={23}
                    //             color={CommonColors.navTextColor}
                    //         />
                    //     </View>
                    // ),
                    // headerRight: () => (
                    //     <View>
                    //         <Text style={{
                    //             color: CommonColors.white,
                    //             fontSize: 16
                    //         }}>{Labels.navText}</Text>
                    //     </View>
                    // )
                }
            }
            // options={{headerShown:false}}
            type="DOWN"
            style={Styles.bottomBar}
            shadowStyle={Styles.shadow}
            height={60}
            circleWidth={30}
            bgColor={CommonColors.white}
            initialRouteName="dashboardnew"
            borderTopLeftRight
            renderCircle={({ selectedTab, navigate }) => (
                <Animated.View style={[Styles.btnCircleUp, { backgroundColor: circleBackgroundColor }]}>
                    <View>
                        <MenuCard
                            menuCardList={modalList}
                            iconName={Labels.add}
                            onIconClick={() => handleIconClick()}
                            navigateToLead={navigateToLead}
                            navigateToOppertunities={navigateToOppertunities}
                            navigateToActivity={navigateToActivity}
                            hideMenu={()=> menuCardValue()}
                        />
                    </View>

                </Animated.View>
            )}
            tabBar={renderTabBar}
        >
            <CurvedBottomBarExpo.Screen
            
                name="dashboardnew"
                position="LEFT"
                component={() => <Dashboardnew {...props}/>}
            />
            <CurvedBottomBarExpo.Screen
            
                name="Leads"
                position="LEFT"
                component={() => <Lead {...props} />}
                

            />
            <CurvedBottomBarExpo.Screen
                name="Oppertunities"
                component={() => <Oppertunities {...props} />}
                position="RIGHT"
            />
            <CurvedBottomBarExpo.Screen
                name="Activity"
                component={() => <Activity {...props} />}
                position="RIGHT"
            />


        </CurvedBottomBarExpo.Navigator>

    )
}

export default BottomTab;


export const Styles = EStyleSheet.create({
    font: {
        fontSize: Labels.xs,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: CommonColors.greyDark
    },

    iconContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    shadow: {
        elevation: Labels.elevation7,
    },

    button: {
        flex: 1,
        justifyContent: 'center',
    },

    btnCircleUp: {
        width: Labels.buttonWidth,
        height: Labels.height50,
        borderRadius: Labels.borderRadius25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: CommonColors.orange,
        bottom: Labels.bottom,
        elevation: Labels.elevation7,
    },

    image: {
        width: Labels.imageWidth,
        height: Labels.imageHeight,
    },

    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    bottomBar: {
        elevation: Labels.elevation7,
    },

});