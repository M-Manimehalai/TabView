import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import Labels from '../../utils/constants/labels/Labels';
import Communications from 'react-native-communications';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { CALLBACK_TYPE } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Styles } from '../../navigations/BottomTab';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function MenuCard(props) {
    const [visible, setVisible] = useState(false);

    const menuItem = (val) => {
        console.log(val,'value')
       

        if(val==Labels.addLead){
            props.navigateToLead();
        }
        else if(val==Labels.addOppertunity){
            props.navigateToOppertunities();
        }
        else if(val==Labels.activity){
            props.navigateToActivity();
        }
        else {
            const [action, phoneNumberWithParenthesis] = val.split('(');
            const phoneNumber = phoneNumberWithParenthesis.replace(')', '');
            console.log(phoneNumber, 'number')
            Communications.phonecall(String(phoneNumber), true);
            if (Platform.OS === 'android') {
                Linking.openURL(`tel:${phoneNumber}`)
            }
        }

        props.hideMenu(val)
    }
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);


    const handleIconClick = () => {
        console.log(props.onIconClick)
        if (props.onIconClick) {
            props.onIconClick();
        }
    };

    return (
        <View>
            <Menu
                visible={visible}
                anchor={props.iconName == undefined ?
                    <Icon onPress={showMenu} name={'dots-three-vertical'} size={18} />
                    :
                    (visible ?
                        <TouchableOpacity onPress={handleIconClick}>
                            <AntDesign onPress={showMenu} name={Labels.close}
                                size={16}
                                color={CommonColors.white} />
                        </TouchableOpacity>


                        :
                        <TouchableOpacity onPress={handleIconClick}>
                            <Ionicons
                                onPress={showMenu} name={props.iconName}
                                size={18}
                                color={CommonColors.white}
                            />
                        </TouchableOpacity>
                    )

                }
                onRequestClose={hideMenu}
                style={props.iconName ? style.modal : {}}
            >
                {isNotEmpty(props.menuCardList) &&
                    props.menuCardList.map((item, ind) => {
                        return (
                            <MenuItem onPress={() => menuItem(item.value)}>
                                {isNotEmpty(item.value) ? item.value : 'NA'}
                            </MenuItem>
                        );
                    })}
            </Menu>

        </View>
    );
}

const style = EStyleSheet.create({
    modal: {
        marginTop: Labels.marginTop,
        marginLeft: Labels.marginLeft,
        paddingHorizontal: Labels.p12,
    
    }
})