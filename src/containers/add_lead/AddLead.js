import React, { Component } from 'react';
import {View,ScrollView,Text} from 'react-native';
import { Card } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import Textbox from '../../components/textbox/Textbox';
import CommonColors from '../../utils/constants/colors/CommonColors';
import RadioButtons from '../../components/radio_button/RadioButtons';
import { emailValid, isNotEmpty, mobileValidation, nameValidator, numbersOnly, phoneValidation } from '../../utils/common/common_functions/CommonFunctions';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';



class AddLead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioButtonList: [{ ID: 1, value: 'HNI' }, { ID: 2, value: 'Retail'},{ ID: 3, value: 'Preferred'}],
            radioSelectedvalue:'',
            clientTypeValue:'',
            clientTypeID:'',

            firstName:'',
            firstNameError:'',

            lastName:'',
            lastNameError:'',
            
            mobileNo:'',
            mobileNoError:'',

            alternateNo:'',
            alternateNoError:'',

            emailID:'',
            emailIDError:'',

            businessProfession:'',
            businessProfessionError:'',

            potentialRevenue:'',

            potentialAUM:'',

            productType: '', 
            productTypeError:''
        }
    }
    componentDidMount = () => {
    }
    
    checkedList = (val) => {
        if (isNotEmpty(val)) {
            let data = val.filter((item) => (item.checked == "checked"))
            if (isNotEmpty(data)) {
                this.setState({
                    clientTypeValue: data[0].value,
                    clientTypeID: data[0].ID
                })
            }
            else {
                this.setState({
                    clientTypeValue:'',
                    clientTypeID: ''
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
    firstNameOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = nameValidator(val);
            this.setState({
                firstName: val,
                firstNameError: errorMessage, 
            });
        }
        else {
            this.setState({
              firstName: val,
              firstNameError: Labels.required, 
            });
        }
    }

    lastNameOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = nameValidator(val);
            this.setState({
                lastName: val,
                lastNameError: errorMessage, 
            }); 
        }
        else {
            this.setState({
                lastName: val,
                lastNameError: Labels.required,  
            });
        }
    }

    mobileNoOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = mobileValidation(val);
            this.setState({
                mobileNo: val,
                mobileNoError:errorMessage
            })
        }
        else {
            this.setState({
                mobileNo: val,
                mobileNoError: Labels.required,  
            });
        }
    }

    alternateNoOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = mobileValidation(val);
            this.setState({
                alternateNo: val,
                alternateNoError:errorMessage
            })
        }
        else {
            this.setState({
                alternateNo: val,
                alternateNoError: '',  
            });
        }
    }

    emailIDOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = emailValid(val);
            this.setState({
                emailID: val,
                emailIDError:errorMessage
            })
        }
        else {
            this.setState({
                emailID: val,
                emailIDError: '',  
            });
        }
    }
    businessProfessionOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = nameValidator(val);
            this.setState({
                businessProfession: val,
                businessProfessionError: errorMessage, 
            }); 
        }
        else {
            this.setState({
                businessProfession: val,
                businessProfessionError: Labels.required,  
            });
        }
    }
    potentialRevenueOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = numbersOnly(val);
            this.setState({
                potentialRevenue: val,
                potentialRevenueError: errorMessage, 
            }); 
        }
        else {
            this.setState({
                potentialRevenue: val,
                potentialRevenueError:'',  
            });
        }
    }
    potentialAUMOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = numbersOnly(val);
            this.setState({
                potentialAUM: val,
                potentialAUMError: errorMessage, 
            }); 
        }
        else {
            this.setState({
                potentialAUM: val,
                potentialAUMError:'',  
            });
        }
    }
    //Button Group
    handleButtonPress = (buttonValue) => {
        if (isNotEmpty(buttonValue)) {
            this.setState({ 
                productType: buttonValue,
                productTypeError:''
            }); // Update selectedButton state
        }
        else {
            this.setState({
                productType: buttonValue,
                productTypeError: Labels.required,  
            });
        }
    };
    
    //save & Next
    saveNext = () => {
        var firstNameIsValid = false;
        var lastNameIsValid = false;
        var mobileNoIsValid = false;
        var emailIDIsValid = false;
        var businessProfessionIsValid = false;
        var productTypeIsValid = false;

        // First Name - Textbox
        if (isNotEmpty(this.state.firstName)) {
            firstNameIsValid = true;
            this.setState({
                firstNameError: ''
            })
        }
        else {
            firstNameIsValid = false;
            this.setState({
                firstNameError: Labels.required
            })
        }

        // Last Name
        if (isNotEmpty(this.state.lastName)) {
            lastNameIsValid = true;

            this.setState({
                lastNameError: ''
            })
        }
        else {
            lastNameIsValid = false;
            this.setState({
                lastNameError: Labels.required
            })
        }

        // Mobile No
        if (isNotEmpty(this.state.mobileNo)) {
            mobileNoIsValid = true;
            this.setState({
                mobileNoError: ''
            })
        }
        else {
            mobileNoIsValid = false;
            this.setState({
                mobileNoError: Labels.required
            })
        }
        // Email ID
        if (isNotEmpty(this.state.emailID)) {
            emailIDIsValid =true;
            this.setState({
                emailIDError: ''
            })   
        }
        else {
            emailIDIsValid = false;
            this.setState({
                emailIDError: Labels.required
            })
        }

        // Business & Profession
        if (isNotEmpty(this.state.businessProfession)) {
            businessProfessionIsValid = true;
            this.setState({
                businessProfessionError: ''
            })
        }
        else {
            businessProfessionIsValid = false;
            this.setState({
                businessProfessionError: Labels.required
            })
        }
        //product Type -Button Group
        if (isNotEmpty(this.state.productType)) {
            productTypeIsValid = true 
            this.setState({
                productTypeError: ''
            })
        }
        else {
            productTypeIsValid = false;
            this.setState({
                productTypeError: Labels.required
            })
        }
       
        if (firstNameIsValid && lastNameIsValid && mobileNoIsValid && emailIDIsValid && businessProfessionIsValid && productTypeIsValid) {
            this.props.navigation.navigate("Address Information", {
                leadList: [{
                    clientType:this.state.clientTypeValue,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    mobileNo: this.state.mobileNo,
                    alternateNo: this.state.alternateNo,
                    emailID: this.state.emailID,
                    businessProfession: this.state.businessProfession,
                    potentialRevenue: this.state.potentialRevenue,
                    potentialAUM: this.state.potentialAUM,
                    productType: this.state.productType
                }],
            })
            console.log(this.state.clientTypeValue,this.state.productType)
            // // UserName Stored in Redux
            // this.props.sampleUserNameAction(this.state.userName);
        }
    }
    render() {        
        const buttons = [Labels.broking, Labels.nonBroking];
        return (
            <View>
            <Header addLeadHeader={true} labelTop={Labels.addLead1} labelBottom={Labels.prospectDetails}/>
            <View style={styles.container}>
                <Card style={styles.cardContainer}>
                <View style={styles.commonView}></View>
                <ScrollView>
                
                <RadioButtons
                    label={Labels.clientType}
                    color={CommonColors.black}
                    radioButtonList={this.state.radioButtonList}
                    checkedList={(val) => { this.checkedList(val) }}
                />

                <View style={styles.commonView}></View>

                <Textbox
                    label={Labels.firstName}
                    placeholder={Labels.enterFirstName}
                     error={this.state.firstNameError}
                     value={this.state.firstName}
                     onChangeText={(val) => { this.firstNameOnChange(val) }}
                    maxLength={25}
                />
                 <Textbox
                    label={Labels.lastName}
                    placeholder={Labels.enterLastName}
                     error={this.state.lastNameError}
                     value={this.state.lastName}
                    onChangeText={(val) => { this.lastNameOnChange(val) }}
                    maxLength={25}
                />
                 <Textbox
                    label={Labels.mobileNo}
                    placeholder={Labels.enterMobileNo}
                     error={this.state.mobileNoError}
                     value={this.state.mobileNo}
                    onChangeText={(val) => { this.mobileNoOnChange(val) }}
                    maxLength={10}
                />
                <Textbox
                    label={Labels.alternateNo}
                    placeholder={Labels.enterAlternateNo}
                    error={this.state.alternateNoError}
                    value={this.state.alternateNo}
                    onChangeText={(val) => { this.alternateNoOnChange(val) }}
                    maxLength={10}
                />
                <Textbox
                    label={Labels.emailID}
                    placeholder={Labels.enterEmailID}
                     error={this.state.emailIDError}
                     value={this.state.emailID}
                    onChangeText={(val) => { this.emailIDOnChange(val) }}
                    maxLength={50}
                />
                <Textbox
                    label={Labels.businessProfession}
                    placeholder={Labels.enterBusinessProfession}
                    error={this.state.businessProfessionError}
                    value={this.state.businessProfession}
                    onChangeText={(val) => { this.businessProfessionOnChange(val) }}
                    maxLength={20}
                />
                <Textbox
                    label={Labels.potentialRevenue}
                    placeholder={Labels.enterPotentialRevenue}
                    value={this.state.potentialRevenue}
                    error={this.state.potentialRevenueError}
                    onChangeText={(val) => { this.potentialRevenueOnChange(val) }}
                    maxLength={10}
                />
                <Textbox
                    label={Labels.potentialAUM}
                    placeholder={Labels.enterPotentialAUM}
                    value={this.state.potentialAUM}
                    error={this.state.potentialAUMError}
                    onChangeText={(val) => { this.potentialAUMOnChange(val) }}
                    maxLength={10}
                />

                <Text style={styles.productLabel}>{Labels.productType}</Text>

                <View style={styles.commonView}></View>

                <View style={[styles.btnRow]}>
                    {buttons.map((buttonValue) => (
                    <Button
                        label={buttonValue}
                        color={CommonColors.black}
                        backgroundColor={CommonColors.white}
                        height={40}
                        width={Labels.width80}
                        marginRight={60}
                        borderColor={CommonColors.black}
                        key={buttonValue}
                        onPress={() => this.handleButtonPress(buttonValue)}
                    />
                    ))}   
                </View>
                {(this.state.productTypeError !== '') ? <Text style={styles.productTypeError}>{Labels.required}</Text> : null}
            </ScrollView>
            </Card>
            <Card style={styles.bottomCard}>
                <View>
                    <Button 
                        backgroundColor={CommonColors.orange}
                        borderColor={CommonColors.orange} 
                        label={Labels.saveNext} 
                        onPress={this.saveNext}>
                    </Button>
                </View>
            </Card>
            </View>
        </View>
        )
    }
}

const styles = EStyleSheet.create({
    container: { flex: 1, marginTop: Labels.m5 },
    cardContainer: { backgroundColor: CommonColors.white,padding:Labels.p15,height:639},
    commonView: { marginTop: Labels.m10 },
    btnRow: { flexDirection: 'row',marginHorizantal:30 ,flex:1,marginRight:10},
    btnColumn: { flexDirection: 'column', flex:1,marginRight:10},
    bottomCard: { backgroundColor: CommonColors.white,height:80,padding:Labels.p10,marginTop:5},
    productTypeError: {fontSize: Labels.sm,color: CommonColors.errorColor,fontFamily: Fonts.globalrobotofonts.Rmedium},
    productLabel:{fontSize: Labels.xs,color: CommonColors.black,fontFamily: Fonts.globalrobotofonts.Rmedium,marginTop: Labels.m4,}
})
export default AddLead;