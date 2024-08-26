import React, { useState, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const RadioButtons = (props) => {
    const [selectedValue, setSelectedValue] = React.useState('');

    useEffect(() => {
        console.log(props.radioButtonList,'props.radioButtonList')
        if (isNotEmpty(props.radioButtonList)) {
            var data = props.radioButtonList.map((item, index) => {
                if (index == 0) {
                    return {
                        ...item,
                        checked: 'checked'
                    };
                }
                else {
                    return {
                        ...item,
                        checked: 'unchecked'
                    };
                }
            })           
            setSelectedValue(data);
            props.checkedList(data) // Value passed to parent component
        }
    }, [])

    const radioChecked = (val) => {
        if (isNotEmpty(selectedValue)) {
            var data = selectedValue.map((item, index) => {
                if (item.value == val) {
                    return {
                        ...item,
                        checked: 'checked'
                    };
                }
                else {
                    return {
                        ...item,
                        checked: 'unchecked'
                    };
                }
            })
            setSelectedValue(data);
            props.checkedList(data) // Value passed to parent component
        }

    }

    return (
        <View>
            <Text style={styles.inputBoxTextLabel}>{props.label}</Text>
            {isNotEmpty(selectedValue) &&
                <View style={styles.radioBtnView}>                    
                    {selectedValue.map((item, index) => {
                        return (
                            <View style={styles.radioBtnView}>                                
                                <RadioButton 
                                    color={isNotEmpty(props.color) ? props.color : CommonColors.brown}
                                    value={item.value}
                                    status={item.checked}
                                    onPress={() => radioChecked(item.value)}
                                />
                                <View style={styles.radioBtnLabelView}>
                                    <Text style={styles.labelText}>{item.value}</Text>
                                </View>
                            </View>
                        )
                    })
                    }
                </View>
            }
        </View>
    );

}

const styles = EStyleSheet.create({
    radioBtnView: { flexDirection: 'row' },
    radioBtnLabelView: { paddingTop: Labels.p7 },
    inputBoxTextLabel: {
        fontSize: Labels.xs,
        color: CommonColors.gray44,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
    inputBoxErrorText: {
        fontSize: Labels.xs,
        color: CommonColors.errorColor,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
    labelText :{
        color: CommonColors.black,fontWeight:'bold'
    }
});

export default RadioButtons;