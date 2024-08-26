import React, { Component } from 'react';
import { Card } from 'react-native-paper';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Textbox from '../../components/textbox/Textbox';
import { confirmPasswordValidator, isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import RadioButtons from '../../components/radio_button/RadioButtons';
import Button from '../../components/button/Button';
import Icon from 'react-native-vector-icons/AntDesign'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
class SetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            confirmPassword: "",
            disableSubmitButton: true,
            isPasswordVisible: false,
            isConfirmPasswordVisible: false,
            passwordError: "",
        }
    }

    componentDidMount = () => {

    }

    componentDidUpdate = () => {

    }

    componentWillUnmount() {

    }

    passwordOnChange = (val) => {

        this.setState({
            confirmPassword: val
        }, () => {
            var passwordMatch = confirmPasswordValidator(this.state.confirmPassword, this.state.newPassword)
            this.setState({
                passwordError: passwordMatch
            }, () => {
                if (this.state.passwordError == "") {
                    this.setState({
                        disableSubmitButton: false,
                    })

                }
                else {
                    this.setState({
                        disableSubmitButton: true,
                    })

                }
            })
        })
    }
submit = () => {
    this.props.navigation.navigate('Welcome Screen');
}
    cancel = (val) => {
        this.setState({
            newPassword: '',
            confirmPassword: "",
            passwordError: "",
            disableSubmitButton: true,
        })
    }
    toggleNewPasswordVisibility = () => {
        this.setState((prevState) => ({
            isPasswordVisible: !prevState.isPasswordVisible,
        }));
    };
    toggleConfirmPasswordVisibility = () => {
        this.setState((prevState) => ({
            isConfirmPasswordVisible: !prevState.isConfirmPasswordVisible,
        }));
    };
    // Function to check password validity
    checkPassword = (newPassword) => {
        // Define validation criteria
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(newPassword);
        const hasLowercase = /[a-z]/.test(newPassword);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(newPassword);
        const hasNumber = /\d/.test(newPassword);

        // Create an array of validation checks
        const checks = [
            newPassword.length >= minLength,
            hasUppercase,
            hasLowercase,
            hasSpecialChar,
            hasNumber,
        ];

        // Check if all validation criteria are met
        const isValid = checks.every((check) => check);

        return {
            isValid,
            checks: [
                { rule: 'Minimum 8 characters', isValid: checks[0] },
                { rule: 'One uppercase letter', isValid: checks[1] },
                { rule: 'One lowercase letter', isValid: checks[2] },
                { rule: 'One special character', isValid: checks[3] },
                { rule: 'One number', isValid: checks[4] },
            ],
        };
    };
    render() {
        const { newPassword } = this.state;
        const validation = this.checkPassword(newPassword);
        return (
            <View style={styles.container}>
                <Card style={styles.cardContainer}>
                    <View>
                        <Text style={styles.cardText1}>This Password will also be changed</Text>
                        <Text style={styles.cardText2}>for</Text>
                    </View>
                </Card>
                <Card style={styles.cardBox}>
                    <View style={styles.commonView}></View>
                    <View>
                        <Textbox
                            label={Labels.newPassword}
                            placeholder={Labels.enterNewPassword}
                            //error={this.state.employeeIDError}
                            value={this.state.newPassword}
                            onChangeText={(newPassword) => this.setState({ newPassword })}
                            secureTextEntry={!this.state.isPasswordVisible}
                            maxLength={9}
                        />
                        <TouchableOpacity style={styles.icon} onPress={this.toggleNewPasswordVisibility}>
                            <Ionicons
                                name={this.state.isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                                size={23} color="#000000"
                            />
                        </TouchableOpacity>
                        <View style={styles.validationText}>
                            {validation.checks.map((check, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        color: check.isValid ? 'green' : 'gray',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    {check.isValid ? (
                                        <Icon name="check" size={15} color="green" style={styles.icon} />
                                    ) : (
                                        <Icon name="check" size={15} color="gray" style={styles.icon} />
                                    )}
                                    {check.rule}
                                    {index < validation.checks.length - 1 ? ', ' : ''}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View style={styles.commonView}></View>
                    <View style={styles.commonView}></View>
                    <View>
                        <Textbox
                            label={Labels.confirmPassword}
                            placeholder={Labels.enterConfirmPassword}
                            error={this.state.passwordError}
                            value={this.state.confirmPassword}
                            onChangeText={(val) => { this.passwordOnChange(val) }}
                            secureTextEntry={!this.state.isConfirmPasswordVisible}
                            maxLength={9}
                        />
                        <TouchableOpacity style={styles.icon} onPress={this.toggleConfirmPasswordVisibility}>
                            <Ionicons
                                name={this.state.isConfirmPasswordVisible ? "eye-outline" : "eye-off-outline"}
                                size={23} color="#000000"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.commonView}></View>

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
                                label={Labels.setNewPassword}
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
    container: { flex: 1, marginTop: Labels.m1, backgroundColor: CommonColors.whiteSmoke,},
    cardContainer: { margin: Labels.m1, padding: Labels.p8, backgroundColor: CommonColors.whiteSmoke,},
    cardText1: { color: CommonColors.black, fontFamily: Fonts.globalrobotofonts.Rbold, size: Labels.md, textAlign: 'center', lineHeight: 17 },
    cardText2: { color: CommonColors.black, fontFamily: Fonts.globalrobotofonts.Rbold, size: Labels.md, textAlign: 'center', lineHeight: 17 },
    cardContainerBottom: { margin: Labels.m1, padding: Labels.p8, backgroundColor: CommonColors.bottom, width: Labels.width100, height: '100%' },
    btnRow: { flexDirection: 'row' },
    btnColumn: { flexDirection: 'column', flex: 1, margin: Labels.m4 },
    commonView: { marginTop: Labels.m6 },
    icon: { position: 'absolute', right: 15, marginTop: Labels.m40,},
    validationText: { marginLeft: Labels.m10 },
    cardBox: { margin: Labels.m1, padding: Labels.p8, backgroundColor: CommonColors.white, width: Labels.width100, },
});

export default SetPassword;


