import React, { Component } from 'react';
import { TextInput, Dimensions, StyleSheet, View, Text } from 'react-native';
import CommonColors from '../../utils/constants/colors/CommonColors';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Labels from '../../utils/constants/labels/Labels';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const OtpInput = (props) => {
    return (
        <View>
            <TextInput
                 key={props.key}
                 style={styles.input}
                 onChangeText={(value) => onChangeText(value)}
                 value={props.value}
                 keyboardType={props.keyboardType}
                 maxLength={props.maxLength}
                 ref={props.ref}
            />
        </View>
    )
}
const styles = EStyleSheet.create({
    input: { width: 40, height: 40, borderWidth: Labels.borderWidthSize, borderColor: CommonColors.dimGray, fontSize: Labels.lg, fontWeight: Fonts.globalrobotofonts.Rbold ,borderRadius: Labels.borderRadiusMD ,marginTop: Labels.m28,marginRight: Labels.m12},
});
export default OtpInput;
