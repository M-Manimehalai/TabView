import React from 'react';
import { View, Text, Image,FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Icon from 'react-native-vector-icons/Entypo';
import MenuCard from '../modal_popup/MenuCard';


function Prospects (props) {
    return (
        
        <View style={styles.contactDetailsView}>
            <View style={styles.userDetailsView}>
                <Image style={styles.userImageView} source={props.imageUrl} resizeMode="contain"></Image>
                <View>
                    <Text style={styles.nameTextView}>{props.name}</Text>
                    <Text style={styles.leadIdView}>{props.leadId}</Text>
                </View>
            </View>
            <View style={styles.mettingsView}>
                <Text style={styles.mettingtextView}>{props.mettingsDone}</Text>
            </View>
            <View style={styles.revenueAmountView}>
                <View>
                    <Text style={styles.revenueAmountTextView}>{props.revenueAmount}</Text>
                    <Text style={styles.leadIdView}>{props.revenuAmountInLac}</Text>
                </View>
                 <MenuCard menuCardList={props.activityCardList} hideMenu={(value) => {props.activityCardValue(value)}}/>
            </View>
        </View>  
    );
    }

const styles = EStyleSheet.create({
    contactDetailsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: Labels.m1,
        backgroundColor: CommonColors.white,
        height: Labels.textBoxHeight,
        marginHorizontal: Labels.m12,
        alignItems: 'center',
    },
    leadIdView: {
        marginLeft: Labels.m10
    },
    userDetailsView: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: Labels.width60
    },
    userImageView: {
        alignItems: "center"
    },
    nameTextView: {
        fontSize: Labels.xsm,
        color: CommonColors.black,
        paddingHorizontal: Labels.p10
    },
    mettingtextView: {
        fontSize: Labels.xsm,
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rbold,
    },
    revenueAmountTextView: {
        fontSize: Labels.xsm,
        color: CommonColors.black,
        paddingHorizontal: Labels.p10,
        fontFamily: Fonts.globalrobotofonts.Rbold,
    },
    mettingsView: {
        width: Labels.width10
    },
    revenueAmountView: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default Prospects;
