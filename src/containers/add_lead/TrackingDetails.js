import React, { Component } from 'react';
import {Text,View} from 'react-native';
import { Card } from 'react-native-paper';
import { connect } from 'react-redux';
import Labels from '../../utils/constants/labels/Labels';
import Dropdown from '../../components/dropdown/Dropdown';
import EStyleSheet, { value } from 'react-native-extended-stylesheet';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Textbox from '../../components/textbox/Textbox';
import RadioButtons from '../../components/radio_button/RadioButtons';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import Button from '../../components/button/Button';
import FilteredTextbox from '../../components/textbox/FilteredTextBox';
import Header from '../../components/header/Header';


class TrackingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prospectSourceData: [{ ID: 1, name: 'Cold call' }, { ID: 2, name: 'Referral' }, { ID: 3, name: 'Tele Calling' },{ ID: 4, name: 'Online' }, { ID: 5, name: 'Offline' }, { ID: 6, name: 'Other' }, {ID:7, name: 'C & T'}],
            prospectSourceSelectedValue: '',
            prospectSourceSelectedID: '',
            prospectSourceError: "",

            assignedTo:'',
            assignedToError:'',
            AssignedToData:['Anand Sharma','Rahul Jain','Prathama Jain','Smitha Kasturi' ],

            prospectStatusList: [{ ID: 1, value: 'Active' }, { ID: 2, value: 'Inactive'}],
            prospectStatusValue:'',
            prospectStatusID:'',

            prospectStageData: [{ ID: 1, name: 'Assigned' }, { ID: 2, name: 'In Process' }, { ID: 3, name: 'Converted' },{ ID: 4, name: 'Not Contactable' }, { ID: 5, name: 'Not Interested' }],
            prospectStageSelectedValue: '',
            prospectStageSelectedID: '',
            prospectStageError: "",

            prospectPriorityData: [{ ID: 1, name: 'Hot' }, { ID: 2, name: 'Worm' }, { ID: 3, name: 'Cold' }],
            prospectPrioritySelectedValue: '',
            prospectPrioritySelectedID: '',
            prospectPriorityError: "",

        }
    }
    componentDidMount = () => {
        const addressInfoList = this.props.addressInfoList;
        console.log(addressInfoList);
    }
    checkedList = (val) => {
        if (isNotEmpty(val)) {
            let data = val.filter((item) => (item.checked == "checked"))
            if (isNotEmpty(data)) {
                this.setState({
                    prospectStatusValue: data[0].value,
                    prospectStatusID: data[0].ID
                })
            }
            else {
                this.setState({
                    prospectStatusValue:'',
                    prospectStatusID: ''
                })
            }
        }
        else {
            this.setState({
                prospectStatusValue: '',
                prospectStatusID: ""
            })
        }
    }
    onSelectSource = (selectedID, selectedName) => {
        if (isNotEmpty(selectedName)) {
            this.setState({
                prospectSourceSelectedValue: selectedName, // Corrected the state variable
                prospectSourceSelectedID: selectedID, // You can remove this line if not needed
                prospectSourceError: '' 
            })
        }
        else {
            this.setState({
                prospectSourceSelectedValue: selectedName,
                prospectSourceSelectedID: selectedID,
                prospectSourceError: Labels.required, 
            });
        }
    }
    onSelectStage = (selectedID, selectedName) => {
        if (isNotEmpty(selectedName)) {
            this.setState({
                prospectStageSelectedValue: selectedName, // Corrected the state variable
                prospectStageSelectedID: selectedID, // You can remove this line if not needed
                prospectStageError: '' 
            })
        }
        else {
            this.setState({
                prospectStageSelectedValue: selectedName,
                prospectStageSelectedID: selectedID,
                prospectStageError: Labels.required, 
            });
        }
    }
    onSelectPriority = (selectedID, selectedName) => {
        if (isNotEmpty(selectedName)) {
            this.setState({
                prospectPrioritySelectedValue: selectedName, // Corrected the state variable
                prospectPrioritySelectedID: selectedID, // You can remove this line if not needed
                prospectPriorityError: '' 
            })
        }
        else {
            this.setState({
                prospectPrioritySelectedValue: selectedName,
                prospectPrioritySelectedID: selectedID,
                prospectPriorityError: Labels.required, 
            });
        }
    }
    assignedToOnChange = (val) => {
        this.setState({
            assignedTo: val
        }, () => {
            if (isNotEmpty(this.state.assignedTo)) {
                this.setState({
                    assignedToError: ''
                })
            }
            else{
                this.setState({
                    assignedToError: Labels.required
                }) 
            }
        })
    }
    next = () => {
        var prospectSourceIsvalid = false;
        var prospectStatusIsValid = false;
        var prospectStageIsValid = false;
        var prospectPriorityIsValid = false;

        // Prospect Source - Dropdown
        if (isNotEmpty(this.state.prospectSourceSelectedValue)) {
            prospectSourceIsvalid = true;
            this.setState({
                prospectSourceError: ''
            })
        }
        else {
            prospectSourceIsvalid = false;
            this.setState({
                prospectSourceError: Labels.required
            })
        }

        //  Prospect Stage - Dropdown
        if (isNotEmpty(this.state.prospectStageSelectedValue)) {
            prospectStageIsValid = true;
            this.setState({
                prospectStageError: ''
            })
        }
        else {
            prospectStageIsValid = false;
            this.setState({
                prospectStageError: Labels.required
            })
        }

        //Prospect Priority - Dropdown
        if (isNotEmpty(this.state.prospectPrioritySelectedValue)) {
            prospectPriorityIsValid = true;
            this.setState({
                prospectPriorityError: ''
            })
        }
        else {
            prospectPriorityIsValid = false;
            this.setState({
                prospectPriorityError: Labels.required
            })
        }

        if (prospectSourceIsvalid && prospectStageIsValid && prospectPriorityIsValid ) {
            this.props.navigation.navigate("Other Details", {
                trackingDetails: [{
                    source: this.state.prospectSourceSelectedValue,
                    status: this.state.prospectStatusValue,
                    stage: this.state.prospectStageSelectedValue,
                    priority: this.state.prospectPrioritySelectedValue,
                }]
            })
            const trackingDetails={
                source: this.state.prospectSourceSelectedValue,
                status: this.state.prospectStatusValue,
                stage: this.state.prospectStageSelectedValue,
                priority: this.state.prospectPrioritySelectedValue,
            }
           //  Lead Address Stored in Redux
         //   this.props.AddressInformationEmptyAction(AddressInformation);
        }
        else{
            console.log("Error")
        }
    }
    previous= () => {
        this.props.navigation.navigate("Address Information")
    }
    render(){
        return (
            <View>
            <Header addLeadHeader={true} labelTop={Labels.addLead3} labelBottom={Labels.trackingDetails}/>
            <View style={styles.container}>
                <Card style={styles.cardContainer}>
                    <Dropdown
                        label={Labels.prospectSource}
                        placeholder={this.state.prospectSourceSelectedValue == "" ? Labels.selectProspectSource : this.state.prospectSourceSelectedValue}
                        dropdowndata={this.state.prospectSourceData}
                        onSelect={(i, j) => { this.onSelectSource(i, j) }}
                        error={this.state.prospectSourceError}
                    />
                    <FilteredTextbox 
                        data={this.state.AssignedToData} 
                        label={Labels.assignedTo}
                        onChangeText={(val) => { this.assignedToOnChange(val) }}
                        placeholder={this.state.prospectSourceSelectedValue == "" ? Labels.selectProspectSource : this.state.prospectSourceSelectedValue}
                    />
                    <RadioButtons
                        label={Labels.prospectStatus}
                        color={CommonColors.black}
                        radioButtonList={this.state.prospectStatusList}
                        checkedList={(val) => { this.checkedList(val) }}
                    />
                     <View style={styles.commonView}></View>
                    <Dropdown
                        label={Labels.prospectStage}
                        placeholder={this.state.prospectStageSelectedValue == "" ? Labels.selectProspectStage : this.state.prospectStageSelectedValue}
                        dropdowndata={this.state.prospectStageData}
                        onSelect={(i, j) => { this.onSelectStage(i, j) }}
                        error={this.state.prospectStageError}
                    />
                    <Dropdown
                        label={Labels.prospectPriority}
                        placeholder={this.state.prospectPrioritySelectedValue == "" ? Labels.selectProspectPriority : this.state.prospectPrioritySelectedValue}
                        dropdowndata={this.state.prospectPriorityData}
                        onSelect={(i, j) => { this.onSelectPriority(i, j) }}
                        error={this.state.prospectPriorityError}
                    />
                </Card>
                <Card style={styles.bottomCard}>
                <View style={[styles.btnRow]}>
                    <View style={[styles.btnColumn]}>
                        <Button
                            label={Labels.previous}
                            borderColor={CommonColors.orange} 
                            color={CommonColors.orange}
                            backgroundColor={CommonColors.white}
                            onPress={this.previous}
                        />
                    </View>
                    <View style={[styles.btnColumn,{ marginLeft: 10}]}>
                        <Button
                            label={Labels.next}
                            color={CommonColors.white}
                            backgroundColor={CommonColors.orange}
                            onPress={this.next}
                        />
                    </View>
                </View>
            </Card>
            </View>
            </View>
        )
    }
}
const styles = EStyleSheet.create({
    container: { flex: 1, marginTop: Labels.m5 },
    cardContainer: { backgroundColor: CommonColors.white,padding:Labels.p15,height:480},
    commonView: { marginTop: Labels.m10 },
    btnRow: { flexDirection: 'row' },
    btnColumn: { flexDirection: 'column', flex: 1 },
    bottomCard: { backgroundColor: CommonColors.white,height:80,padding:Labels.p10,marginTop:165},
})

const mapStateToProps = (state) => {
    return {
     // userList: state.usersReducer.userList, // Access the 'items' array from the Redux store
      addressInfoList:state.addressInfoReducer.addressInfoList
    };
    console.log('menu page value asscessed',addressInfoList)
  };
export default connect(mapStateToProps)(TrackingDetails);