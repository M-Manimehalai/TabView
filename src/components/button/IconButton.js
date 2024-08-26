import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, StyleSheet, View, Text } from 'react-native';
import CommonColors from '../../utils/constants/colors/CommonColors';
import EStyleSheet from 'react-native-extended-stylesheet';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Labels from '../../utils/constants/labels/Labels';
import Icon from 'react-native-vector-icons/FontAwesome'; 


let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
const IconButton = (props) => {
    return (
       isNotEmpty(props.disable)&& props.disable ?
            <View>
                <View
                    style={[styles.buttonView, { backgroundColor: CommonColors.grayOrange, borderColor: isNotEmpty(props.borderColor) ? props.borderColor : CommonColors.white }]}
                >
                    <Text style={[styles.btnText, { color: isNotEmpty(props.color) ? props.color : CommonColors.white }]}>
                        {props.label}
                    </Text>
                </View>
            </View>
            :
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.onPress()}
                    style={[styles.buttonView, { backgroundColor: isNotEmpty(props.backgroundColor) ? props.backgroundColor : CommonColors.primary, borderColor: isNotEmpty(props.borderColor) ? props.borderColor : CommonColors.white },{ width: isNotEmpty(props.width) ? props.width : Labels.width100},{ height: isNotEmpty(props.height) ? props.height : 50},{ marginRight: isNotEmpty(props.marginRight) ? props.marginRight : 'default'}]}
                >
                     <Icon name={props.name} size={props.size} color={props.color} style={props.style}/>
                    <Text style={[styles.btnText, { color: isNotEmpty(props.color) ? props.color : CommonColors.white }]}>
                        {props.label}
                    </Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = EStyleSheet.create({
    buttonView: {
        height: Labels.textBoxHeight,
        borderWidth: Labels.borderRadiusXS,
        borderRadius: Labels.borderRadiusLG,
        justifyContent: 'center',
        backgroundColor: CommonColors.primary,
        // position: 'fixed',
        // position: 'absolute'
    },
    btnText: {
        justifyContent: 'center',
        fontSize: Labels.md,
        textAlign: 'center',
        color: CommonColors.white,
        fontFamily: Fonts.globalrobotofonts.Rbold
    },
});

export default IconButton;