import { Text, View } from 'react-native'
import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Labels from '../../utils/constants/labels/Labels'
import Button from '../../components/button/Button'
import CommonColors from '../../utils/constants/colors/CommonColors'
import Dropdown from '../../components/dropdown/Dropdown'
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import MultiSelectDropdown from '../../components/dropdown/MultiSelectDropdown'
import SearchableDropdown from '../../components/dropdown/SearchableDropdown'
import SingleSelectDropdown from '../../components/dropdown/SingleSelectDropdown'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomSliderMarker from '../customslidemaker/CustomSlideMaker'


export default class LeadFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: [0, 0.5],
            valuesAUM : [0 ,0.5],
            actionType: [{
                ID: 1,
                name: Labels.coldCall,
              
            }, {
                ID: 2,
                name: Labels.referral,
               
            }, {
                ID: 3,
                name: Labels.telecalling,  
            }, {
                ID: 4,
                name: Labels.online,
                
            },
            {
            ID: 5,
            name: Labels.ofline,
            
            },
             {
            ID: 6,
            name: Labels.candT,       
            }],
            actionTypeList: [],
            actionTypeCount: 0,
            actionTypeSelectedValues: [],
            actionTypeError: "",


            assignedTo: [{
                ID: 1,
                name: Labels.coldCall,
              
            }, {
                ID: 2,
                name: Labels.referral,
               
            }, {
                ID: 3,
                name: Labels.telecalling,  
            }, {
                ID: 4,
                name: Labels.online,
                
            },
            {
            ID: 5,
            name: Labels.ofline,
            
            },
             {
            ID: 6,
            name: Labels.candT,  
            }],
            assignedToList: [],
            assignedToeCount: 0,
            assignedToSelectedValues: [],
            assignedToError: "",
     
            invitee: [{
                ID: 1,
                name: Labels.coldCall,
              
            }, {
                ID: 2,
                name: Labels.referral,
               
            }, {
                ID: 3,
                name: Labels.telecalling,  
            }, {
                ID: 4,
                name: Labels.online,
                
            },
            {
            ID: 5,
            name: Labels.ofline,
            
            },
             {
            ID: 6,
            name: Labels.candT,  
            }],
            inviteeList: [],
            inviteeCount: 0,
            inviteeSelectedValues: [],
            inviteeError: "",
           
        }
    }
    multiselectedActionType = (val, count, selectedVal) => {
        if (isNotEmpty(val)) {
            this.setState({
                actionTypeList: val,
                actionTypeCount: count,
                actionTypeSelectedValues: selectedVal,
                actionTypeError: '',
            })
        }
    }
    multiselectedassignedTo = (val, count, selectedVal) => {
        if (isNotEmpty(val)) {
            this.setState({
                assignedToList: val,
                assignedToeCount: count,
                assignedToSelectedValues: selectedVal,
                assignedToError: '',
            })
        }
    }
    multiselectedinvitee = (val, count, selectedVal) => {
        if (isNotEmpty(val)) {
            this.setState({
                inviteeList: val,
                inviteeCount: count,
                inviteeSelectedValues: selectedVal,
                inviteeError: '',
            })
        }
    }
   
  
     
    
    render() {
       
        return (
            <View>
                <View style = {Styles.taggingContainer}>
                    <Text>Filter</Text>
                     <View >
                        <AntDesign name={"closecircleo"} size={20} color={CommonColors.black} onPress={this.props.closeRBSheet}  />
                    </View>
                </View>
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
                        label={Labels.prospectSource}
                        borderColor={CommonColors.dropDownColor}
                        placeholder={Labels.selectProspectSource}
                        error={this.state.actionTypeError}
                        placeholderSearch={Labels.selectactionType}
                        searchResult={Labels.searchResult}
                        listOfSchemes={Labels.listofProductType}
                        // get a value from multi select dropdown
                        done={(val,count,selectedVal) => {this.multiselectedActionType(val,count,selectedVal)}}
                        // Return Value send to multiselect dropdown
                        multiSelectedValueList={this.state.actionTypeList}
                        multiSelectCount={this.state.actionTypeCount}
                        multiSelectSelectedValue={this.state.actionTypeSelectedValues}
                    />

                </View>
                <View>
                    <MultiSelectDropdown
                        data={this.state.assignedTo}
                        label={Labels.prospectOwener}
                        borderColor={CommonColors.dropDownColor}
                        placeholder={Labels.selectprospectOwener}
                        error={this.state.assignedToError}
                        placeholderSearch={Labels.selectAssignedTo}
                        searchResult={Labels.searchResult}
                        listOfSchemes={Labels.listofProductType}
                        // get a value from multi select dropdown
                        done={(val, count, selectedVal) => {this.multiselectedassignedTo(val, count, selectedVal)}}
                        // Return Value send to multiselect dropdown
                        multiSelectedValueList={this.state.assignedToList}
                        multiSelectCount={this.state.assignedToeCount}
                        multiSelectSelectedValue={this.state.assignedToSelectedValues}
                    />
                </View>

                 <View>
                    <MultiSelectDropdown
                        data={this.state.invitee}
                        label={Labels.campaignId}
                        borderColor={CommonColors.dropDownColor}
                        placeholder={Labels.selectcampaignId}
                        error={this.state.inviteeError}
                        placeholderSearch={Labels.selectInvitee}
                        searchResult={Labels.searchResult}
                        listOfSchemes={Labels.listofProductType}
                        // get a value from multi select dropdown
                        done={(val, count, selectedVal) => {this.multiselectedinvitee(val, count, selectedVal)}}
                        // Return Value send to multiselect dropdown
                        multiSelectedValueList={this.state.inviteeList}
                        multiSelectCount={this.state.inviteeCount}
                        multiSelectSelectedValue={this.state.inviteeSelectedValues}
                    />
                </View> 
                <View>
                   <Text>{Labels.potentialRevenueinlac}</Text>
                 
                   <MultiSlider
          values={this.state.values}
          sliderLength={350} 
          onValuesChange={(values) => this.setState({ values })}
          trackStyle= {Styles.trackStyle}
          selectedStyle={Styles.selectedStyle}
          markerStyle={Styles.markerStyle}
        />
                </View>
                <View>
                   <Text>{Labels.AUM}</Text>
                 
                   <MultiSlider
          values={this.state.valuesAUM}
          sliderLength={350} 
          onValuesChange={(valuesAUM) => this.setState({ valuesAUM })}
          trackStyle= {Styles.trackStyle}
          selectedStyle={Styles.selectedStyle}
          markerStyle={Styles.markerStyle}
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
        width: Labels.height20,
        color: 'black'
    },

     thumb: {
         width: 20,
         height: 20,
        backgroundColor: CommonColors.gray44,
         borderRadius: 20,
         justifyContent: 'center',
         alignItems: 'center',
       },
    taggingContainer: {
        marginTop :20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    productsContainer: {
        flexDirection: 'row',
    },

    verticalSpace: {
        height: Labels.height10,
    },
    trackStyle: {
      
        width: 8, 
        height: 8,
        borderRadius: 8/2, 
        backgroundColor: CommonColors.paleGray,
    },
    selectedStyle: {
        backgroundColor: CommonColors.Woodland,
    },
    markerStyle: {
        backgroundColor: CommonColors.white,
        borderColor : CommonColors.paleGray,
        borderWidth: 3,
        width: 28, 
        height: 28, 
        borderRadius: 16, 
    },
    lineSpace: {
        height: Labels.height3,
    },
    horizontalSpace: {
        width: 12
    },
    AUMslider : {
        marginTop : 30,
    },
    
})