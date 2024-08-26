import React from 'react';
import { View, StyleSheet } from 'react-native';
import CommonColors from '../../utils/constants/colors/CommonColors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';

function Checkbox(props) {
    return (
        props.isChecked ?
            <View>
                <Ionicons name='checkbox-outline' size={25} color={CommonColors.brown} />
            </View>
            :
            <View>
                <MaterialIcons name='check-box-outline-blank' size={25} color={CommonColors.grayLight} />
            </View>
    );

}

export default Checkbox;