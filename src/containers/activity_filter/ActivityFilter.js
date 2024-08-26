import { Text, View } from 'react-native'
import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Labels from '../../utils/constants/labels/Labels'
import Button from '../../components/button/Button'
import CommonColors from '../../utils/constants/colors/CommonColors'
import Dropdown from '../../components/dropdown/Dropdown'
import MultiSelectDropdown from '../../components/dropdown/MultiSelectDropdown'
import SearchableDropdown from '../../components/dropdown/SearchableDropdown'
import SingleSelectDropdown from '../../components/dropdown/SingleSelectDropdown'

export default class ActivityFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            actionType: [{
                id: '1',
                name: Labels.selectAll,
                isChecked:false
            }, {
                id: '2',
                name: Labels.phoneCall,
                isChecked:false
            }, {
                id: '3',
                name: Labels.meeting,
                isChecked:false
            }, {
                id: '4',
                name: Labels.nonbusinessmeet,
                isChecked:false
            }],
            assignedTo: [{
                id: '1',
                name: Labels.selectAll,
            }, {
                id: '2',
                name: Labels.phoneCall,
            }, {
                id: '3',
                name: Labels.meeting,
            }, {
                id: '4',
                name: Labels.nonbusinessmeet,
            }],
            invitee: [{
                id: '1',
                name: Labels.selectAll,
            }, {
                id: '2',
                name: Labels.phoneCall,
            }, {
                id: '3',
                name: Labels.meeting,
            }, {
                id: '4',
                name: Labels.nonbusinessmeet,
            }],
        }
    }
    render() {
        return (
            <View>
                <Text>Filter</Text>
                <View style={Styles.verticalSpace}></View>
                <View style={Styles.horizontalLine}></View>
                <Text>{Labels.tagging}</Text>
                <View style={Styles.verticalSpace}></View>

                <View style={Styles.taggingContainer}>

                    <Button
                        borderColor={CommonColors.dropDownColor}
                        backgroundColor={CommonColors.white}
                        width={110}
                        height={45}
                        label={Labels.privilege}
                        color={CommonColors.filterText}
                    />
                    <Button
                        borderColor={CommonColors.dropDownColor}
                        backgroundColor={CommonColors.white}
                        width={110}
                        height={45}
                        label={Labels.preferred}
                        color={CommonColors.filterText}
                    />
                    <Button
                        borderColor={CommonColors.dropDownColor}
                        backgroundColor={CommonColors.white}
                        width={110}
                        height={45}
                        label={Labels.hni}
                        color={CommonColors.filterText}
                    />


                </View>
                <View style={Styles.verticalSpace}></View>

                <Text>{Labels.products}</Text>
                <View style={Styles.verticalSpace}></View>

                <View style={Styles.productsContainer}>
                    <Button
                        borderColor={CommonColors.dropDownColor}
                        backgroundColor={CommonColors.white}
                        width={110}
                        height={45}
                        label={Labels.broking}
                        color={CommonColors.filterText}
                    />
                    <View style={Styles.horizontalLine}></View>
                    <Button
                        borderColor={CommonColors.dropDownColor}
                        backgroundColor={CommonColors.white}
                        width={150}
                        height={45}
                        label={Labels.nonBroking}
                        color={CommonColors.filterText}
                    />
                </View>
                <View style={Styles.verticalSpace}></View>

                <View>


                    <MultiSelectDropdown
                        data={this.state.actionType}
                        label={Labels.actionType}
                        borderColor={CommonColors.dropDownColor}
                        placeholder={Labels.selectactionType}
                    />

                </View>
                <View>
                    <MultiSelectDropdown
                        data={this.state.assignedTo}
                        label={Labels.assignedTo}
                        borderColor={CommonColors.dropDownColor}
                        placeholder={Labels.selectAssignedTo}
                    />


                </View>

                <View>
                    <MultiSelectDropdown
                        data={this.state.invitee}
                        label={Labels.invitee}
                        borderColor={CommonColors.dropDownColor}
                        placeholder={Labels.selectInvitee}
                    />

                </View>
                <View>
                    <MultiSelectDropdown
                        data={this.state.invitee}
                        label={Labels.activityStatus}
                        borderColor={CommonColors.dropDownColor}
                        placeholder={Labels.selecttActivityStatus}
                    />


                </View>

                <View style={Styles.taggingContainer}>
                    <Button
                        borderColor={CommonColors.leadTextColor}
                        backgroundColor={CommonColors.white}
                        width={170}
                        height={50}
                        label={Labels.cancel}
                        color={CommonColors.leadTextColor}
                    />
                    <Button
                        backgroundColor={CommonColors.orange}
                        width={170}
                        height={50}
                        label={Labels.apply}
                    />
                </View>

            </View>
        )
    }
}

const Styles = EStyleSheet.create({
    horizontalLine: {
        height: 1,
        width: Labels.heigh100,
        color: 'black'
    },
    taggingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    productsContainer: {
        flexDirection: 'row',
    },

    verticalSpace: {
        height: Labels.height10,
    },

    lineSpace: {
        height: Labels.height3,
    },
    horizontalSpace: {
        width: 12
    }

})