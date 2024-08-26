import React, { Component } from 'react';
import { Card } from 'react-native-paper';
import { Text, View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Textbox from '../../components/textbox/Textbox';
import { isNotEmpty, numbersOnly } from '../../utils/common/common_functions/CommonFunctions';
import RadioButtons from '../../components/radio_button/RadioButtons';
import Button from '../../components/button/Button';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeID: "",
            employeeIDError: "",
            radioButtonList: [{ ID: 1, value: 'Email' }, { ID: 2, value: 'SMS' }],
            radioSelectedvalue: '',
            radioSelectedID: "",
            radioButtonError: "",
            disableSubmitButton: true,
        }
    }

    componentDidMount = () => {

    }

    componentDidUpdate = () => {

    }

    componentWillUnmount() {

    }
    employeeIDOnChange = (val) => {

        if (isNotEmpty(val)) {
            const errorMessage = numbersOnly(val);
            this.setState({
                employeeID: val,
                disableSubmitButton: false,
                employeeIDError: errorMessage,
            });
        } else {

            this.setState({
                employeeID: val,
                disableSubmitButton: true,
                employeeIDError: '',
            });
        }
    }
    //   potentialAUMOnChange = (val) => {
    //     if (isNotEmpty(val)) {
    //         const errorMessage = numbersOnly(val);
    //         this.setState({
    //             potentialAUM: val,
    //             potentialAUMError: errorMessage, 
    //         }); 
    //     }
    //     else {
    //         this.setState({
    //             potentialAUM: val,
    //             potentialAUMError:'',  
    //         });
    //     }
    // }
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
    submit = () => {
        var employeeIDIsValid = false;
        var radioButtonDataIsValid = false;
        // Employeed ID - Textbox
        if (isNotEmpty(this.state.employeeID)) {
            employeeIDIsValid = true;
            this.setState({
                employeeIDError: ''
            })
        }
        else {
            employeeIDIsValid = false;
            this.setState({
                employeeIDError: Labels.required
            })
        }
        if (employeeIDIsValid) {
            this.props.navigation.navigate("Mobile OTP")
        }

        // Radio Button
        // if (isNotEmpty(this.state.radioSelectedvalue)) {
        //     radioButtonDataIsValid = true;
        //     this.setState({
        //         radioButtonError: ''
        //     })
        // }
        // else {
        //     radioButtonDataIsValid = false;
        //     this.setState({
        //         radioButtonError: Labels.required
        //     })
        // }
    }
    cancel = (val) => {
        this.setState({
            employeeID: '',
            employeeIDError: "",
            disableSubmitButton: true,
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Card style={styles.cardContainer}>
                    <View>
                        <Text style={styles.cardText1}>Please enter your Employee ID </Text>
                        <Text style={styles.cardText2}>to reset your Password</Text>
                    </View>
                </Card>
                <Card style={styles.cardBox}>
                    <View style={styles.commonView}></View>
                    <View>
                        <Textbox
                            label={Labels.employeeID}
                            placeholder={Labels.enteremployeeID}
                            error={this.state.employeeIDError}
                            value={this.state.employeeID}
                            onChangeText={(val) => { this.employeeIDOnChange(val) }}
                            maxLength={9}
                        />
                    </View>
                    <View style={styles.commonView}></View>
                    <RadioButtons
                        label={Labels.sendOTP}
                        color={CommonColors.black}
                        radioButtonList={this.state.radioButtonList}
                        checkedList={(val) => { this.checkedList(val) }}
                    />

                    <View style={styles.commonView}></View>
                    <View style={[styles.btnRow]}>
                        <View style={[styles.btnColumn]}>
                            <Button
                                label={Labels.cancel}
                                color={CommonColors.dimGray}
                                backgroundColor={CommonColors.white}
                                onPress={() => { this.cancel('yes') }}
                                borderColor={CommonColors.black}

                            />
                        </View>
                        <View style={styles.btnColumn}>
                            <Button
                                label={Labels.getOTP}
                                color={''}
                                backgroundColor={CommonColors.orange}
                                onPress={this.submit}
                                disable={this.state.disableSubmitButton}
                            />
                        </View>

                    </View>

                </Card>
                <View style={styles.cardContainerBottom}>
                    <Card >

                    </Card>
                </View>
            </View>
        )
    }
}
const styles = EStyleSheet.create({
    container: { flex: 0, marginTop: Labels.m1, marginRight: Labels.m6, backgroundColor: CommonColors.whiteSmoke, width: Labels.width100 },
    cardContainer: { margin: Labels.m1, padding: Labels.p8, backgroundColor: CommonColors.whiteSmoke, width: Labels.width100 },
    cardText1: { color: CommonColors.black, fontFamily: Fonts.globalrobotofonts.Rbold, size: Labels.md, textAlign: 'center', lineHeight: 17 },
    cardText2: { color: CommonColors.black, fontFamily: Fonts.globalrobotofonts.Rbold, size: Labels.md, textAlign: 'center', lineHeight: 17 },
    cardContainerBottom: { margin: Labels.m1, padding: Labels.p8, backgroundColor: CommonColors.bottom, width: Labels.width100, height: '100%' },
    btnRow: { flexDirection: 'row' },
    btnColumn: { flexDirection: 'column', flex: 1, margin: Labels.m4 },
    commonView: { marginTop: Labels.m6 },
    cardBox: { margin: Labels.m1, padding: Labels.p8, backgroundColor: CommonColors.white, width: Labels.width100 },
});
export default ForgetPassword;


