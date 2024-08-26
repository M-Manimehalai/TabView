import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MenuItem, Menu } from 'react-native-material-menu';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import Labels from '../../utils/constants/labels/Labels';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    showMenu = () => {
        this.setState({
            visible: true
        })
    }

    hideMenu = () => {
        this.setState({
            visible: false
        })
    }

    select = (ID, name) => {
        this.props.onSelect(ID, name);
        this.hideMenu();
    }

    render() {
        return (
            <View>
                <Text style={styles.inputBoxTextLabel}>{this.props.label}</Text>
                <Menu
                    visible={this.state.visible}
                    anchor={
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => this.showMenu()}
                            style={[styles.inputBoxDropdown, {borderColor:this.props.borderColor?this.props.borderColor: CommonColors.black}]}>
                            <View style={styles.dropdownViewFirstColum}>
                                <Text numberOfLines={1} ellipsizeMode={'tail'}
                                    style={[styles.dropdownTextStyle, { color: this.props.placeholder == Labels.select ? CommonColors.tableheader : CommonColors.black }]}>
                                    {this.props.placeholder}
                                </Text>
                            </View>
                            <View style={styles.dropdownViewSecondColum}>
                                <AntDesign name="down" size={20} color={CommonColors.tableheader} />
                            </View>

                        </TouchableOpacity>
                    }
                    onRequestClose={this.hideMenu}
                    style={{ width: '96%' }}
                >
                    {isNotEmpty(this.props.dropdowndata) && this.props.dropdowndata.length > 0 ?
                        <FlatList
                            data={this.props.dropdowndata}
                            keyExtractor={({ ID }, index) => ID}
                            renderItem={({ item }) => (
                                <MenuItem onPress={() => this.select(item.ID, item.name)}
                                    textStyle={[styles.dropdownTextStyle, { color: isNotEmpty(this.props.placeholder) && this.props.placeholder == item.name ? CommonColors.brown : CommonColors.black }]}>
                                    {isNotEmpty(item.name) ? item.name : 'NA'}
                                </MenuItem>
                            )}
                        />
                        :
                        <MenuItem textStyle={[styles.dropdownTextStyle, { textAlign: 'center' }]}>{Labels.nodataAvailable}</MenuItem>
                    }

                </Menu>
                <Text style={styles.inputBoxErrorText}>{isNotEmpty(this.props.error) && this.props.error}</Text>
            </View>
        );
    }
}


const styles = EStyleSheet.create({
    inputBoxDropdown: {
        height: Labels.textBoxHeight,
        borderWidth: Labels.borderWidthSize,
        borderRadius: Labels.borderRadiusLG,
        paddingLeft: Labels.p16,
        marginTop: Labels.m4,
        flexDirection: 'row'
    },
    inputBoxTextLabel: {
        fontSize: Labels.sm,
        color: CommonColors.gray44,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
    inputBoxErrorText: {
        fontSize: Labels.sm,
        color: CommonColors.errorColor,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
    dropdownViewFirstColum: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    dropdownViewSecondColum: {
        flex: 0.1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownTextStyle: {
        fontSize: Labels.sm,
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
});


export default Dropdown;