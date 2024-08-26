import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Labels from '../../utils/constants/labels/Labels';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const NodataAvailable = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.labelText}>{Labels.nodataAvailable}</Text>
        </View>
    );

}

const styles = EStyleSheet.create({
    labelText: {
        fontSize: Labels.sm,
        color: CommonColors.tableheader,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
    headerContainer:{
        alignItems:'center',        
    }
});

export default NodataAvailable;