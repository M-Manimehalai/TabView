import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/EvilIcons';
import DatePicker from 'react-native-modern-datepicker';
import RBSheet from 'react-native-raw-bottom-sheet';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import Labels from '../../utils/constants/labels/Labels';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Datepicker extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    startReferRBsheet = ref => {
        this.rBsheet = ref;
    }

    render() {
        return (
            <View>
                {/* DATEPICKER PART */}
                <RBSheet
                    ref={this.startReferRBsheet}
                    animationType={'none'}
                    height={Dimensions.get('window').height}
                    closeOnDragDown={false}
                    closeOnPressMask={false}
                    customStyles={{
                        draggableIcon: {
                            backgroundColor: CommonColors.grayLight,
                        },
                        container: {
                            backgroundColor: CommonColors.white
                        }
                    }}
                >
                    <View>
                        <View style={styles.calenderHeader}>
                            <View style={styles.selectDateColumn}>
                                <Text style={styles.calenderHeaderText}>{Labels.selectDate}</Text>
                            </View>
                            <View style={styles.closeIconColumn}>
                                <Icon onPress={() => { this.rBsheet.close() }} style={styles.closeIcon} name='close'></Icon>
                            </View>
                        </View>

                        <DatePicker
                            minimumDate={this.props.minimumDate == "" ? "" : moment(this.props.minimumDate).format("YYYY/MM/DD")}
                            maximumDate={moment(this.props.maximumDate).format("YYYY/MM/DD")}
                            onSelectedChange={(date) => {
                                this.props.onSelectedDateChange(moment(date, "YYYY/MM/DD").format('DD MMM YYYY'))
                                this.rBsheet.close() // RB sheet close
                            }}
                            enableSwipeMonths={true}
                            mode="calendar"
                            style={{ borderRadius: 10 }}
                            options={{

                            }}
                        />
                    </View>
                </RBSheet>

                {/* TEXTBOX PART */}
                <Text style={styles.inputBoxTextLabel}>{this.props.label}</Text>
                <TouchableOpacity style={styles.inputBoxDropdown} onPress={() => { this.rBsheet.open() }}>
                    <View style={styles.dropdownViewFirstColum}>
                        <Text numberOfLines={1} ellipsizeMode={Labels.tail}
                            style={[styles.dropdownTextStyle, { color: isNotEmpty(this.props.selectedDate) ? CommonColors.black : CommonColors.tableheader }]}>
                            {isNotEmpty(this.props.selectedDate) ? this.props.selectedDate : this.props.placeholder}
                        </Text>
                    </View>
                    <View style={styles.dropdownViewSecondColum}>
                        <AntDesign name="calendar" size={20} color={CommonColors.tableheader} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.inputBoxErrorText}>{isNotEmpty(this.props.error) && this.props.error}</Text>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    calenderHeader: {
        height: Labels.textBoxHeight,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    calenderHeaderText: {
        fontSize: Labels.headerSize,
        paddingLeft: '8%',
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rbold
    },
    closeIcon: {
        textAlign: 'center',
        color: CommonColors.black,
        fontSize: 27,
    },
    inputBoxTextLabel: {
        fontSize: Labels.sm,
        color: CommonColors.tableheader,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
    inputBoxErrorText: {
        fontSize: Labels.sm,
        color: CommonColors.errorColor,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
    selectDateColumn: { flexDirection: 'column', width: Labels.width80, justifyContent: 'center' },
    closeIconColumn: { flexDirection: 'column', width: Labels.width20, justifyContent: 'center' },
    inputBoxDropdown: {
        borderColor: CommonColors.black,
        height: Labels.textBoxHeight,
        borderWidth: Labels.borderWidthSize,
        borderRadius: Labels.borderRadiusLG,
        paddingLeft: Labels.p16,
        marginTop: Labels.m4,
        flexDirection: 'row'
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

export default Datepicker;