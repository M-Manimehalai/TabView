import React, { Component } from 'react';
import { View, Dimensions, ScrollView, Text, StyleSheet } from 'react-native';
import Textbox from '../../components/textbox/Textbox';
import EStyleSheet from 'react-native-extended-stylesheet';
import Dropdown from '../../components/dropdown/Dropdown';
import Labels from '../../utils/constants/labels/Labels';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import Datepicker from '../../components/datepicker/Datepicker';
import moment from 'moment';
import Button from '../../components/button/Button';
import CommonColors from '../../utils/constants/colors/CommonColors';
import RadioButtons from '../../components/radio_button/RadioButtons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sampleUserNameAction } from "../../redux/actions/sample_action/SampleAction";
import MultiSelectDropdown from '../../components/dropdown/MultiSelectDropdown';
import SingleSelectDropdown from '../../components/dropdown/SingleSelectDropdown';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userNameError: "",

            dropdowndata: [{ ID: 1, name: 'Admin' }, { ID: 2, name: 'Developer' }, { ID: 3, name: 'HR' }],
            dropdownSelectedValue: '',
            dropdownSelectedID: '',
            dropdownError: "",

            selectedDateError: "",
            selectedDate: "",

            radioButtonList: [{ ID: 1, value: 'Male' }, { ID: 2, value: 'Female' }],
            radioSelectedvalue: '',
            radioSelectedID: "",
            radioButtonError: "",

            countryList: [{ ID: 1, name: 'India', isChecked: false }, { ID: 2, name: 'Russia', isChecked: false },
            { ID: 3, name: 'Australia', isChecked: false }, { ID: 4, name: 'Newzland', isChecked: false }, { ID: 5, name: 'America', isChecked: false },
            { ID: 6, name: 'West Indies', isChecked: false }, { ID: 7, name: 'Africa', isChecked: false }],

            multiSelectedValueCountryList: [],
            multiSelectCountCountry: 0,
            multiSelectSelectedValueCountry: [],
            countryError: "",

            stateList: [{ ID: 1, name: 'TamilNadu', isChecked: false }, { ID: 2, name: 'Kerala', isChecked: false },
            { ID: 3, name: 'Karnataka', isChecked: false }, { ID: 4, name: 'Andhra Pradhesh', isChecked: false }, { ID: 5, name: 'America', isChecked: false },
            { ID: 6, name: 'Maharastra', isChecked: false }, { ID: 7, name: 'Delhi', isChecked: false }],
            singleSelectedValue: "",
            singleSelectedID: "",
            stateError: '',


            userDetailsList: [] // Redux Data will Store this state
        }
    }

    componentDidMount = () => {
        if (isNotEmpty(this.props.sampleListDetails)) {
            this.setState({
                userDetailsList: this.props.sampleListDetails
            })
        }
        else {
            this.setState({
                userDetailsList: []
            })
        }
    }

    userNameOnChange = (val) => {
        this.setState({
            userName: val
        }, () => {
            if (isNotEmpty(this.state.userName)) {
                this.setState({
                    userNameError: ''  // Error message shown empty in OnChange
                })
            }
        })
    }

    onSelect = (selectedID, selectedName) => {
        if (isNotEmpty(selectedName)) {
            this.setState({
                dropdownSelectedValue: selectedName,
                dropdownSelectedID: selectedID,
                dropdownError: '' // Error message shown empty in OnChange
            })
        }
    }

    submit = () => {
        var userNameIsValid = false;
        var dropdownDataIsValid = false;
        var selectedDateIsValid = false;
        var radioButtonDataIsValid = false;
        var multiSelectDropdownIsValid = false;
        var singleSelectDropdownIsValid = false;

        // User Name - Textbox
        if (isNotEmpty(this.state.userName)) {
            userNameIsValid = true;
            this.setState({
                userNameError: ''
            })
        }
        else {
            userNameIsValid = false;
            this.setState({
                userNameError: Labels.required
            })
        }

        // Drop Down
        if (isNotEmpty(this.state.dropdownSelectedValue)) {
            dropdownDataIsValid = true;
            this.setState({
                dropdownError: ''
            })
        }
        else {
            dropdownDataIsValid = false;
            this.setState({
                dropdownError: Labels.required
            })
        }

        // Date Picker
        if (isNotEmpty(this.state.selectedDate)) {
            selectedDateIsValid = true;
            this.setState({
                selectedDateError: ''
            })
        }
        else {
            selectedDateIsValid = false;
            this.setState({
                selectedDateError: Labels.required
            })
        }

        // Radio Button
        if (isNotEmpty(this.state.radioSelectedvalue)) {
            radioButtonDataIsValid = true;
            this.setState({
                radioButtonError: ''
            })
        }
        else {
            radioButtonDataIsValid = false;
            this.setState({
                radioButtonError: Labels.required
            })
        }

        // MultiSelect Dropdown
        if (isNotEmpty(this.state.multiSelectSelectedValueCountry)) {
            multiSelectDropdownIsValid = true;
            this.setState({
                countryError: ''
            })
        }
        else {
            multiSelectDropdownIsValid = false;
            this.setState({
                countryError: Labels.required
            })
        }

        // Sinsle Select Dropdown with RBSheet
        if (isNotEmpty(this.state.singleSelectedValue)) {
            singleSelectDropdownIsValid = true;
            this.setState({
                stateError: ''
            })
        }
        else {
            singleSelectDropdownIsValid = false;
            this.setState({
                stateError: Labels.required
            })
        }

        if (userNameIsValid && dropdownDataIsValid && selectedDateIsValid && radioButtonDataIsValid) {
            this.props.navigation.navigate("Testing", {
                userList: [{
                    userName: this.state.userName,
                    userType: this.state.dropdownSelectedValue,
                    gender: this.state.radioSelectedvalue,
                    dateofBirth: this.state.selectedDate
                }]
            })

            // UserName Stored in Redux
            this.props.sampleUserNameAction(this.state.userName);
        }
    }

    cancel = (val) => {
        this.setState({
            userNameError: '',
            userName: "",
            dropdownError: '',
            dropdownSelectedValue: "",
            selectedDateError: '',
            selectedDate: "",
            radioButtonError: '',

            multiSelectedValueCountryList: [],
            multiSelectCountCountry: 0,
            multiSelectSelectedValueCountry: [],
            countryError: '',

            singleSelectedValue: '',
            stateError: ""
        })
    }

    checkedList = (val) => {
        if (isNotEmpty(val)) {
            let data = val.filter((item) => (item.checked == "checked"))
            if (isNotEmpty(data)) {
                this.setState({
                    radioSelectedvalue: data[0].value,
                    radioSelectedID: data[0].ID
                })
            }
            else {
                this.setState({
                    radioSelectedvalue: '',
                    radioSelectedID: ""
                })
            }
        }
        else {
            this.setState({
                radioSelectedvalue: '',
                radioSelectedID: ""
            })
        }
    }

    multiselectedCountries = (val, count, selectedVal) => {   
        if (isNotEmpty(val)) {
            this.setState({
                multiSelectedValueCountryList: val,
                multiSelectCountCountry: count,
                multiSelectSelectedValueCountry: selectedVal,
                countryError: '',
            })
        }
    }

    singleselectedCountries = (val) => {
        if (isNotEmpty(val)) {
            if (val.length > 0) {
                this.setState({
                    singleSelectedValue: val[0].name,
                    singleSelectedID: val[0].ID,
                    stateError: ""
                })
            }
        }
    }


    render() {        
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Textbox
                        label={Labels.userName}
                        placeholder={Labels.enterUserName}
                        error={this.state.userNameError}
                        value={this.state.userName}
                        onChangeText={(val) => { this.userNameOnChange(val) }}
                        maxLength={25}
                    />

                    <View style={styles.commonView}></View>

                    <Dropdown
                        label={Labels.userType}
                        placeholder={this.state.dropdownSelectedValue == "" ? Labels.select : this.state.dropdownSelectedValue}
                        dropdowndata={this.state.dropdowndata}
                        onSelect={(i, j) => { this.onSelect(i, j) }}
                        error={this.state.dropdownError}
                    />

                    <View style={styles.commonView}></View>

                    <Datepicker
                        label={Labels.dateofBirth}
                        placeholder={Labels.selectDate}
                        selectedDate={this.state.selectedDate}
                        minimumDate={""}
                        maximumDate={new Date()}
                        onSelectedDateChange={(date) => {
                            this.setState({ selectedDate: date })
                            this.setState({
                                selectedDateError: "",
                            })

                        }}
                        error={this.state.selectedDateError}
                    />

                    <View style={styles.commonView}></View>

                    <RadioButtons
                        label={Labels.gender}
                        color={CommonColors.brown}
                        radioButtonList={this.state.radioButtonList}
                        checkedList={(val) => { this.checkedList(val) }}
                    />

                    <View style={styles.commonView}></View>

                    <MultiSelectDropdown
                        label={Labels.countries}
                        placeholder={Labels.select}
                        data={this.state.countryList}
                        error={this.state.countryError}
                        placeholderSearch={Labels.placeHolderSearch}
                        searchResult={Labels.searchResult}
                        listOfSchemes={Labels.listofCountries}

                        // get a value from multi select dropdown
                        done={(val, count, selectedVal) => { this.multiselectedCountries(val, count, selectedVal) }}

                        // Return Value send to multiselect dropdown
                        multiSelectedValueList={this.state.multiSelectedValueCountryList}
                        multiSelectCount={this.state.multiSelectCountCountry}
                        multiSelectSelectedValue={this.state.multiSelectSelectedValueCountry}
                    />

                    <View style={styles.commonView}></View>

                    <SingleSelectDropdown
                        label={Labels.states}
                        placeholder={Labels.select}
                        data={this.state.stateList}
                        error={this.state.stateError}
                        placeholderSearch={Labels.placeHolderSearchState}
                        searchResult={Labels.searchResult}
                        listOfSchemes={Labels.listofStates}

                        // get a value from single select dropdown
                        singleSelect={(val) => { this.singleselectedCountries(val) }}

                        singleSelectedValue={this.state.singleSelectedValue}
                    />

                </ScrollView>

                <View style={[styles.btnRow]}>
                    <View style={[styles.btnColumn]}>
                        <Button
                            label={Labels.cancel}
                            color={CommonColors.black}
                            backgroundColor={CommonColors.brown}
                            onPress={() => { this.cancel('yes') }}
                        />
                    </View>
                    <View style={styles.btnColumn}>
                        <Button
                            label={Labels.submit}
                            color={''}
                            backgroundColor={CommonColors.green}
                            onPress={this.submit}
                        />
                    </View>
                </View>
                <View style={styles.commonView}></View>
            </View>
        );
    }
}



const styles = EStyleSheet.create({
    container: { flex: 1, marginTop: Labels.m5, marginLeft: Labels.m6, marginRight: Labels.m6 },
    commonView: { marginTop: Labels.m6 },
    btnRow: { flexDirection: 'row' },
    btnColumn: { flexDirection: 'column', flex: 1 }
});

const mapStateToProps = state => {
    return {
        sampleListDetails: state.sampleReducer.sampleListDetails
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        sampleUserNameAction
    }, dispatch)
}

export default (connect(mapStateToProps, mapDispatchToProps)(Sample)); 