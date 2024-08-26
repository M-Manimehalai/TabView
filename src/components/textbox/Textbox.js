import React, { Component } from 'react';
import { TextInput, Dimensions, StyleSheet, View, Text } from 'react-native';
import CommonColors from '../../utils/constants/colors/CommonColors';
import EStyleSheet from 'react-native-extended-stylesheet';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Labels from '../../utils/constants/labels/Labels';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const Textbox = (props) => {
    return (
        <View>
            <Text style={styles.inputBoxTextLabel}>{props.label}</Text>
            <TextInput
                style={[styles.inputBox,{height:props.height != undefined ? props.height : Labels.textBoxHeight}]}
                onChangeText={(value) => { props.onChangeText(value) }}
                value={props.value}
                placeholder={props.placeholder}
                selectionColor={CommonColors.tableheader}
                maxLength={props.maxLength}
                keyboardType={props.keyboardType != undefined ? props.keyboardType : "default"}
                secureTextEntry={props.secureTextEntry}
                borderColor={props.borderColor}
                multiline={props.multiline != undefined ? props.multiline : false}
                numberOfLines={props.numberOfLines != undefined ? props.numberOfLines : null}
            />
            <Text style={styles.inputBoxErrorText}>{isNotEmpty(props.error) && props.error}</Text>
        </View>
    )
}

const styles = EStyleSheet.create({
    inputBox: {
        borderColor: CommonColors.black,
        borderWidth: Labels.borderWidthSize,
        borderRadius: Labels.borderRadiusLG,
        fontSize: Labels.sm,
        paddingLeft: Labels.p16,
        marginTop: Labels.m4,
        fontFamily: Fonts.globalrobotofonts.Rmedium,
        backgroundColor:CommonColors.white
    },
    inputBoxTextLabel: {
        fontSize: Labels.sm,
        color: CommonColors.gray44,
        fontFamily: Fonts.globalrobotofonts.Rmedium,
        marginTop: Labels.m4,
    },
    inputBoxErrorText: {
        fontSize: Labels.sm,
        color: CommonColors.errorColor,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
});

export default Textbox;