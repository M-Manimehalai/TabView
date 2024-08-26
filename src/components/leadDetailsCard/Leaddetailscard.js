import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Labels from "../../utils/constants/labels/Labels";
import CommonColors from "../../utils/constants/colors/CommonColors";
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Icon from 'react-native-vector-icons/Entypo';
import MenuCard from "../modal_popup/MenuCard";
import Header from "../header/Header";


function Leaddetailscard(props) {
    return (
<View>
    
                <View style={styles.leadcardView}>
                    <View style={styles.leadnameView}>
                        <View style={styles.nameImageView}>
                            <Image style={styles.leadImageView} source={props.imageUrl} resizeMode="contain"></Image>
                            <View style={styles.textwrap}>
                                <Text style={styles.leadtextView}>{props.name}</Text>
                                <View style={styles.leadSourceView}>
                                    <Text style={styles.leadId}>{Labels.leadId1}</Text>
                                    <View style={styles.verticalLine}></View>
                                    <Text style={styles.propectSourceText}>{Labels.prospectSource}</Text>
                                    <Text style={styles.assignedText}>{Labels.assigned}</Text>
                                </View>
                                <View style={styles.meetingAndCallView}>
                                    <View style={props.styles}>
                                        <Text style={props.textStyle}>{props.text}</Text>
                                    </View>
                                    <View style={styles.mettingTimeView} >
                                        <Text style={styles.timeText}>{Labels.Time}</Text>
                                    </View>
                                </View>
                                <View style={styles.lastmettingView}>
                                    <Text style={styles.lastmettingtext}>{Labels.lastMeetingDateTime}</Text>
                                    <Text style={styles.mettingMessage}>{Labels.mettingDetails} <Text style={styles.messageTime}>{Labels.messageTime}</Text></Text>
                                </View>
                            </View>
                        </View>
                        {/* <TouchableOpacity onPress={props.onClick}>
                        <Icon name="dots-three-vertical" size={18} style={styles.iconview} ></Icon>
                        </TouchableOpacity> */}
                        <View style={styles.iconview} >
                          <MenuCard  menuCardList={props.menuCardList} hideMenu={(val) => { props.menuCardValue(val)}} />
                          </View>
                    </View>
                    <View>
                    </View>                 
                </View>
               
                </View>
              
    )
}

const styles = EStyleSheet.create({
    leadcardView: {
        flex: 1,
        marginTop: Labels.m1,
        backgroundColor: CommonColors.white,
        marginVertical: Labels.cardDivder,
        paddingBottom: Labels.p15,
        marginHorizontal: Labels.m12,
        marginBottom: Labels.m1,
        paddingTop: Labels.p15
    },
    leadnameView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Labels.m16,

    },
    nameImageView: {
        flexDirection: 'row',
        //marginRight : -25
    },
    leadtextView: {
        fontSize: Labels.md,
        color: CommonColors.black,
        paddingHorizontal: Labels.p10,
        fontFamily: Fonts.globalrobotofonts.Rbold,
        paddingHorizontal: Labels.p10,

    },

    iconview: {
        color: CommonColors.CadetBlue,
        top: Labels.m10,
        marginLeft: Labels.iconleft
    },
    textwrap: {
        flexWrap: 'wrap',
    },
    leadId: {
        marginLeft: Labels.m10,
        marginRight: Labels.m8
    },
    propectSourceText: {
        marginRight: Labels.m8,
        marginLeft: Labels.m8

    },
    assignedText: {
        color: CommonColors.DoveGray
    },
    verticalLine: {
        width: Labels.borderWidthSize,
        height: "60%",
        alignItems: "center",
        backgroundColor: CommonColors.Alto,
        marginTop: Labels.m4,

    },
    mettingTimeView: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: Labels.m15,
        backgroundColor: CommonColors.Buttercuplite,
        width: "40%",
        height: Labels.mettingCard,
        borderWidth: Labels.borderWidthSize,
        borderColor: CommonColors.Buttercup,
        borderRadius: Labels.borderRadiusMD,
    },
    timeText: {
        fontSize: Labels.xs,
        fontFamily: Fonts.globalrobotofonts.Rmedium,
        color: CommonColors.black
    },
    meetingAndCallView: {
        flexDirection: "row",
    },
    selectedCard : {
        backgroundColor : CommonColors.Feta,
    },
    leadSourceView : {
        flexDirection: "row",
    },
    meetingView: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: Labels.m15,
        backgroundColor: CommonColors.ElectricVioletlite,
        width: "28%",
        //marginHorizontal: Labels.m8,
        height: Labels.mettingCard,
        borderWidth: Labels.borderWidthSize,
        borderColor: CommonColors.ElectricViolet,
        borderRadius: Labels.borderRadiusMD,
    },
    mettingMessage: {
        //width : "20%",
        marginRight: Labels.m28,
        fontSize: Labels.xss,
        lineHeight: Labels.lineHeight20,
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rmedium,
    },
    lastmettingView: {
        marginHorizontal: Labels.m10,
        flex: 1,

    },
    lastmettingtext: {
        marginTop: Labels.m10,
        fontSize: Labels.xs,
        marginBottom: Labels.m2,

    },
    messageTime: {
        fontSize: Labels.xs,
        color: CommonColors.DoveGray,
        //flex: 1,
    }

});
export default Leaddetailscard;