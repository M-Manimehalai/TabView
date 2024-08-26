import { Text, View, TouchableOpacity, Image, ScrollView, Modal, Dimensions, FlatList, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import ActivityCard from '../../components/activity_card/ActivityCard'
import Header from '../../components/header/Header'
import EStyleSheet from 'react-native-extended-stylesheet'
import RBSheet from 'react-native-raw-bottom-sheet'
import Labels from '../../utils/constants/labels/Labels'
import CommonColors from '../../utils/constants/colors/CommonColors'
import { Fonts } from '../../utils/constants/fonts/Fonts'
import AntDesign from 'react-native-vector-icons/AntDesign';
import ActivityFilter from '../activity_filter/ActivityFilter'
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions'
import NodataAvailable from '../../components/nodata_available/NodataAvailable'
import Tabview from '../../components/tab_view/TabViews'

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
export default class ActivityInvitedBy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: '',
            selfJoint: [{
                id: '1',
                name: Labels.baveshKasppsadiya,
                code: Labels.code,
                ratio: Labels.ratio,
                revenue: Labels.revenu,
                badgeColor: CommonColors.phoneCallbadgeColor,
                badgeBorder: CommonColors.phoneCall,
                badgeText: Labels.phoneCall,
                assignee: Labels.anandMishra,
                invitee: Labels.yogeshDhayfule,
                tag: Labels.preferred,
                outCome: Labels.add,
                iconColor: CommonColors.bhaveshIconColor,
                hours: Labels.hours4,
            }, {
                id: '2',
                name: Labels.smithaIyar,
                code: Labels.code,
                ratio: Labels.ratio,
                revenue: Labels.revenu,
                badgeColor: CommonColors.nonBusinessBadgeColor,
                badgeBorder: CommonColors.nonBussiness,
                badgeText: Labels.nonBusinessMeet,
                assignee: Labels.anandMishra,
                invitee: Labels.yogeshDhayfule,
                tag: Labels.preferred,
                outCome: Labels.add,
                iconColor: CommonColors.smithIconColor,
                hours: Labels.hours0,
            }, {
                id: '3',
                name: Labels.nagadharBandi,
                code: Labels.code,
                ratio: Labels.ratio,
                revenue: Labels.revenu,
                badgeColor: CommonColors.phoneCallbadgeColor,
                badgeBorder: CommonColors.phoneCall,
                badgeText: Labels.phoneCall,
                assignee: Labels.anandMishra,
                invitee: Labels.yogeshDhayfule,
                tag: Labels.preferred,
                outCome: Labels.add,
                iconColor: CommonColors.nagadharIconColor,
                hours: Labels.hours4,
            }],
            menuList: [],
        }
    }

    componentDidMount() {
        var menu = [];
        menu.push({
            id: '1',
            value: Labels.call,
        }),
            menu.push({
                id: '2',
                value: Labels.message,
            }),
            menu.push({
                id: '3',
                value: Labels.addActivity,
            }),
            menu.push({
                id: '4',
                value: Labels.editActivity,
            }),
            menu.push({
                id: '5',
                value: Labels.addOppertunity,
            }),
            this.setState({
                menuList: menu
            });

    }

    navigateToStackScreen = () => {
        this.props.navigation.navigate('Activity');
    }

    menuCardValue = (val) => {
        console.log(val, 'val')
    }
    render() {
        self = this.state.selfJoint.map(item => {
            const name = item.name;
            const firstLetters = name
                .split(' ')
                .map(word => word[0])
                .join('');
            item.firstLetter = firstLetters;
            return item;
        });
        const selfJoint = this.state.selfJoint.filter((text) =>
            text.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
        );
        return (
            <View style={styles.background}>
                <Header
                    Activity={true}
                />
                {/* Top tab */}

                <View style={styles.container}>
                    <View style={styles.switchContainer}>
                        <TouchableOpacity
                            style={styles.selfJoint}
                        >
                            <Text style={styles.selfJointText}>{Labels.SelfJoint}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.invitedBy}
                            onPress={this.navigateToStackScreen}

                        >
                            <Text style={styles.invitedByText}>{Labels.InvitedBy}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Search Box */}
                <View style={styles.searchBoxContainer}>
                    <AntDesign
                        name={Labels.search1}
                        size={23}
                        color={CommonColors.leadTextColor}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder={Labels.searchBy}
                        placeholderTextColor={CommonColors.leadTextColor}
                        onChangeText={this.filteredResult}
                        value={this.state.searchInput}
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={() => this.RBSheet.open()}
                    >
                        <Image
                            source={require('../../assets/images/png/Sliders.png')}
                            style={styles.image}
                            resizeMode='contain'
                        />

                    </TouchableOpacity>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={700}

                        customStyles={{
                            container: {
                                padding: 23,
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40,
                            }
                        }}
                    >

                        <ActivityFilter />

                    </RBSheet>

                </View>

                <ScrollView>
                    <View style={styles.scrollEndSpace}>

                        {selfJoint.map((item) => (
                            <View key={item.name}>
                                <ActivityCard
                                    iconText={item.firstLetter}
                                    name={item.name}
                                    ratio={item.ratio}
                                    code={item.code}
                                    assignee={item.assignee}
                                    invitee={item.invitee}
                                    tag={item.tag}
                                    outcome={item.outCome}
                                    history={item.hours}
                                    iconColor={item.iconColor}
                                    badgeColor={item.badgeColor}
                                    badgeBorder={item.badgeBorder}
                                    badgeText={item.badgeText}
                                    activityList={this.state.menuList}
                                    menuCardValue={() => this.menuCardValue(val)}
                                />
                            </View>
                        ))}

                    </View>
                </ScrollView>
            </View>
            // <View style={{ flex: 1 }}>
            //     <Tabview activity={true}/>
            // </View>
        )
    }
}

const styles = EStyleSheet.create({

    scrollEndSpace: {
        marginBottom: Labels.m200
    },

    nodataView: {
        flex: 1,
        justifyContent: 'center'
    },

    background: {
        flex: 1,
        backgroundColor: CommonColors.leadBackgroundcolor,
    },

    container: {
        width: Labels.width100,
        height: Labels.height55,
        backgroundColor: (CommonColors.white),
    },

    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        elevation: Labels.elevation7,
    },

    selfJointText: {
        fontSize: Labels.sm,
        textAlign: 'center',
        color: CommonColors.black,
        fontWeight: Labels.bold,
        paddingTop: Labels.p15
    },

    invitedByText: {
        fontSize: Labels.sm,
        textAlign: 'center',
        color: CommonColors.leadTextColor,
        paddingTop: Labels.p15
    },

    selfJoint: {
        height: Labels.height55,
        width: Labels.width50,
        backgroundColor: CommonColors.white,

    },

    invitedBy: {
        height: Labels.height55,
        width: Labels.width50,
        backgroundColor: CommonColors.white,
        borderBottomWidth: 1,
        borderBottomColor: CommonColors.topTabTextColor
    },

    searchIcon: {
        flex: 1,
    },

    textInput: {
        height: Labels.textBoxHeight,
        width: Labels.width80,
        backgroundColor: CommonColors.searchBoxColor,
        fontSize: Labels.xsm,
        fontFamily: Fonts.globalrobotofonts.Rregular,
        paddingLeft: Labels.p12,
    },

    searchBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: CommonColors.searchBoxColor,
        maxWidth: Labels.width100,
        paddingHorizontal: 10
    },

    image: {
        height: 23
    },
})