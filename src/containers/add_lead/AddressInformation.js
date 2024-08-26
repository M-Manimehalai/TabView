import React, { Component } from 'react';
import {View,ScrollView,Text} from 'react-native';
import { Card } from 'react-native-paper';
import { connect } from 'react-redux';
import EStyleSheet, { value } from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import Textbox from '../../components/textbox/Textbox';
import CommonColors from '../../utils/constants/colors/CommonColors';
import RadioButtons from '../../components/radio_button/RadioButtons';
import { emailValid, isNotEmpty, mobileValidation, nameValidator, phoneValidation, pinCodeValidator } from '../../utils/common/common_functions/CommonFunctions';
import Button from '../../components/button/Button';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Dropdown from '../../components/dropdown/Dropdown';
import SearchableDropdown from '../../components/dropdown/SearchableDropdown';
import { AddressInformationEmptyAction } from '../../redux/actions/address_info_action/AddressInfoAction';
import Header from '../../components/header/Header';

class AddressInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address:'',
            addressError:'',

            pincode:'',
            pincodeError:'',
            
            countryData:[{ ID: 1, name: 'India'}, { ID: 2, name: 'Russia' },
            { ID: 3, name: 'Australia'}, { ID: 4, name: 'Newzland' }, { ID: 5, name: 'America'},
            { ID: 6, name: 'West Indies' }, { ID: 7, name: 'Africa'}],
            countrySelectedValue:'',
            countrySelectedID:'',
            countryError:'',

            stateData:[{ ID: 1, name: 'TamilNadu'}, { ID: 2, name: 'Kerala'},
            { ID: 3, name: 'Karnataka'}, { ID: 4, name: 'Bashkortostan'}, { ID: 5, name: 'Tatarstan'},
            { ID: 6, name: 'Texas'}, { ID: 7, name: 'Alaska'}],
            stateSelectedvalue:'',
            stateSelectedID:'',
            stateError:'',

            cityData:[{ ID: 1, name: 'Tirnuelveli'}, { ID: 2, name: 'Thoothukudi'},
            { ID: 3, name: 'Madurai'}, { ID: 4, name: 'Theni'}, { ID: 5, name: 'Viruthunager'},
            { ID: 6, name: 'Chennai'}, { ID: 7, name: 'Tenkasi'}],
            citySelectedValue:'',
            citySelectedID:'',
            cityError:'',

        }
        this.countryToStatesMap = {
            India: ['TamilNadu', 'Kerala', 'Karnataka'], // Map India to its states
            Russia: ['Bashkortostan' , 'Tatarstan'],
            America: ['Texas', 'Alaska']
        };
        this.stateToCitiesMap = {
            TamilNadu: ['Tirunelveli', 'Thoothukudi', 'Madurai'], // Map India to its states
            Kerala: ['Kochin' , 'Kozhikode'],
        };
    }
    componentDidMount = () => {
    }
    onSelectCountry = (selectedID, selectedName) => {
        if (isNotEmpty(selectedName)) {
            this.setState({
                countrySelectedValue: selectedName,
                countrySelectedID: selectedID,
                countryError: '' // Error message shown empty in OnChange
            })
        }
        else {
            this.setState({
              countrySelectedValue: selectedName,
              countryError: Labels.required, 
            });
        }
    }
    onSelectState = (selectedID, selectedName) => {
        if (isNotEmpty(selectedName)) {
            this.setState({
                stateSelectedvalue: selectedName,
                stateSelectedID: selectedID,
                stateError: '' // Error message shown empty in OnChange
            })
        }
        else {
            this.setState({
              stateSelectedvalue: selectedName,
              stateError: Labels.required, 
            });
        }
    }
    onSelectCity = (selectedID, selectedName) => {
        if (isNotEmpty(selectedName)) {
            this.setState({
                citySelectedValue: selectedName, // Corrected the state variable
                citySelectedID: selectedID, // You can remove this line if not needed
                cityError: '' 
            })
        }
        else {
            this.setState({
              citySelectedValue: selectedName,
              citySelectedID: selectedID,
              cityError: Labels.required, 
            });
        }
    }
    addressOnChange = (val) => {
        if (isNotEmpty(val)) {
          this.setState({
            address: val,
            addressError: '', 
          });
        }
        else {
            this.setState({
              address: val,
              addressError: Labels.required, 
            });
        }
    }
    pincodeOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = pinCodeValidator(val);
            this.setState({
                pincode: val,
                pincodeError: errorMessage,
            });
        } else {
            this.setState({
                pincode: val,
                pincodeError: Labels.required, 
            });
        }
    }
    next = () => {
        var addressIsvalid = false;
        var pincodeIsValid = false;
        var countryIsValid = false;
        var stateIsValid = false;
        var cityIsValid = false;

        // Address - Textbox
        if (isNotEmpty(this.state.address)) {
            addressIsvalid = true;
            this.setState({
                addressError: ''
            })
        }
        else {
            addressIsvalid = false;
            this.setState({
                addressError: Labels.required
            })
        }

        // Pincode - Textbox
        if (isNotEmpty(this.state.pincode)) {
            pincodeIsValid = true;
            this.setState({
                pincodeError: ''
            })
        }
        else {
            pincodeIsValid = false;
            this.setState({
                pincodeError: Labels.required
            })
        }

        //Country - Drop Down
        if (isNotEmpty(this.state.countrySelectedValue)) {
            countryIsValid = true;
            this.setState({
                countryError: ''
            })
        }
        else {
            countryIsValid = false;
            this.setState({
                countryError: Labels.required
            })
        }

        //State - Dropdown
        if (isNotEmpty(this.state.stateSelectedvalue)) {
            stateIsValid = true;
            this.setState({
                stateError: ''
            })
        }
        else {
            stateIsValid = false;
            this.setState({
                stateError: Labels.required
            })
        }

        // City - dropdown
        if (isNotEmpty(this.state.citySelectedValue)) {
            cityIsValid = true;
            this.setState({
                cityError: ''
            })
        }
        else {
            cityIsValid = false;
            this.setState({
                cityError: Labels.required
            })
        }

        if (addressIsvalid && pincodeIsValid && countryIsValid && stateIsValid && cityIsValid) {
            this.props.navigation.navigate("Tracking Details", {
                address: [{
                    address: this.state.address,
                    pincode: this.state.pincode,
                    country: this.state.countrySelectedValue,
                    state: this.state.stateSelectedvalue,
                    city: this.state.citySelectedValue,
                }]
            })
            const AddressInformation={
                address: this.state.address,
                pincode: this.state.pincode,
                country: this.state.countrySelectedValue,
                state: this.state.stateSelectedvalue,
                city: this.state.citySelectedValue,
            }
           //  Lead Address Stored in Redux
            this.props.AddressInformationEmptyAction(AddressInformation);
        }
        else{
            console.log("Error")
        }
    }
    previous= () => {
        this.props.navigation.navigate("Add Lead", {leadList:this.props.leadList})
    }
    addOneMoreAddress = () => {
        this.props.navigation.navigate("AddMoreAddress")
    }
    render(){
         // Filter state options based on the selected country
         const filteredStateData = this.countryToStatesMap[this.state.countrySelectedValue] || [];
         const filteredCityData = this.stateToCitiesMap[this.state.stateSelectedvalue] || [];

        return (<>
         <View>
            <Header addLeadHeader={true} labelTop={Labels.addLead2} labelBottom={Labels.addressInformation}/>
        <View style={styles.container}>
            <Card style={styles.cardContainer}>
                <ScrollView>
                <Textbox
                            label={Labels.address}
                            placeholder={Labels.enterAddress}
                            error={this.state.addressError}
                            value={this.state.address}
                            onChangeText={(val) => { this.addressOnChange(val) }}
                            maxLength={300}
                            multiline={true}
                            numberOfLines={4}
                            height={80}
                />
                <View style={styles.commonView}></View>
                <Textbox
                            label={Labels.pincode}
                            placeholder={Labels.enterPostalCode}
                            error={this.state.pincodeError}
                            value={this.state.pincode}
                            onChangeText={(val) => { this.pincodeOnChange(val) }}
                            maxLength={6}
                />
                 <View style={styles.commonView}></View>

                <SearchableDropdown
                    label={Labels.country}
                    placeholder={this.state.countrySelectedValue == "" ? Labels.select : this.state.countrySelectedValue}
                    dropdowndata={this.state.countryData}
                    onSelect={(i, j) => { this.onSelectCountry(i, j) }}
                    error={this.state.countryError}
                />
                <View style={styles.commonView}></View>

                <SearchableDropdown
                    label={Labels.state}
                    placeholder={this.state.stateSelectedvalue == "" ? Labels.select : this.state.stateSelectedvalue}
                    dropdowndata={filteredStateData.map((stateName, index) => ({
                        ID: index + 1,
                        name: stateName,
                    }))}
                    onSelect={(i, j) => { this.onSelectState(i, j) }}
                    error={this.state.stateError}
                />

                <View style={styles.commonView}></View>

                <SearchableDropdown
                    label={Labels.city}
                    placeholder={this.state.citySelectedValue == "" ? Labels.select : this.state.citySelectedValue}
                    dropdowndata={filteredCityData.map((cityName, index) => ({
                        ID: index + 1,
                        name: cityName,
                    }))}
                    onSelect={(i, j) => { this.onSelectCity(i, j) }}
                    error={this.state.cityError}
                />

                <View style={styles.commonView}></View>
                <Button
                        label={Labels.addOneMoreAddress}
                        color={CommonColors.dimGray}
                        backgroundColor={CommonColors.white}
                        marginRight={60}
                        borderColor={CommonColors.black}
                        onPress={() => this.addOneMoreAddress()}
                    />
                </ScrollView>
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
        </>
        )
    }
}

const styles = EStyleSheet.create({
    container: { flex: 1, marginTop: Labels.m5 },
    cardContainer: { backgroundColor: CommonColors.white,padding:Labels.p15,height:639},
    commonView: { marginTop: Labels.m10 },
    btnRow: { flexDirection: 'row' },
    btnColumn: { flexDirection: 'column', flex: 1 },
    bottomCard: { backgroundColor: CommonColors.white,height:80,padding:Labels.p10,marginTop:5},
})

const mapStateToProps = state => {
    return {
       addressInfoList:state.addressInfoReducer.addressInfoList
    }
};

const mapDispatchToProps = {
   AddressInformationEmptyAction,
};
export default (connect(mapStateToProps, mapDispatchToProps)(AddressInformation));