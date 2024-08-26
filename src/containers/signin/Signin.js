import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ToastAndroid, ImageBackground } from 'react-native';
import Textbox from '../../components/textbox/Textbox';
import Labels from '../../utils/constants/labels/Labels';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Card } from 'react-native-paper';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Button from '../../components/button/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isNotEmpty, numbersOnly, passwordValidation, passwordValidator, phoneValidation } from '../../utils/common/common_functions/CommonFunctions';
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeID: '',
            password: '',
            employeeIDError: '',
            passwordError: '',
            isPasswordVisible: false,
        }
    }

    componentDidMount = () => {

    }

    componentDidUpdate = () => {

    }

    componentWillUnmount() {

    }
    submit = () => {
        var employeeIDIsValid = false;
        var passwordIsValid = false;

        // Employee ID - Textbox
        if (isNotEmpty(this.state.employeeID)) {
            employeeIDIsValid = true;
            this.setState({
                employeeIDError: ''
            })
        }
        else {
            employeeIDIsValid = false;
            this.setState({
                employeeIDError: Labels.required,
               
            })
        }


        // Password
        if (isNotEmpty(this.state.password)) {
            passwordIsValid = true;
            this.setState({
                passwordError: ''
            })
        }
        else {
            passwordIsValid = false;
            this.setState({
                passwordError: Labels.required,

            })
        }

        if (employeeIDIsValid && passwordIsValid) {
            if (this.state.employeeID === '55555555' && this.state.password === 'Zoi@2023') {
                this.props.navigation.navigate("BottomTab")
                ToastAndroid.show('User Signin Successfully', ToastAndroid.TOP);
            }
            else {
                ToastAndroid.show('Invalid User', ToastAndroid.SHORT, ToastAndroid.TOP,);
            }
        }
    }
    employeeIDOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = numbersOnly(val);
            this.setState({
                employeeID: val,
                employeeIDError: errorMessage, 
            });
        }
        else {
            this.setState({
                employeeID: val,
                employeeIDError: Labels.required,
            });
        }
    }

    passwordOnChange = (val) => {
        if (isNotEmpty(val)) {
            const errorMessage = passwordValidation(val);
            this.setState({
                password: val,
                passwordError: errorMessage, 
            });
        }
        else {
            this.setState({
                password: val,
                passwordError: Labels.required, 
            });
        }
    }
    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            isPasswordVisible: !prevState.isPasswordVisible,
        }));
    };
    navigateForgot = () => {
        this.props.navigation.navigate('forget Password');
    }
    
    render() {
        return (
            <View style={styles.card}>
                <ImageBackground
                    source={require('../../assets/images/png/signin-background.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.container}>
                        <View>
                            <Image
                                style={styles.logoImage}
                                source={require('../../assets/images/png/anandrathi-logo.png')}
                            />
                        </View>

                        <View style={styles.bodyView}></View>

                        <View>
                            <Text style={styles.text}>{Labels.signinHeaderText} </Text>
                        </View>

                        <View style={styles.commonView}></View>

                        <View>
                            <Textbox
                                placeholder={Labels.placeHolderEmployeeID}
                                onChangeText={(val) => { this.employeeIDOnChange(val) }}
                                maxLength={8}
                                value={this.state.employeeID}
                                error={this.state.employeeIDError}
                                secureTextEntry={false}
                                borderColor={this.state.employeeIDError == '' ? CommonColors.black : CommonColors.errorColor}
                            >
                            </Textbox>
                        </View>

                        <View>
                            <Textbox
                                placeholder={Labels.placeHolderPassword}
                                onChangeText={(val) => { this.passwordOnChange(val) }}
                                maxLength={8}
                                value={this.state.password}
                                error={this.state.passwordError}
                                secureTextEntry={!this.state.isPasswordVisible}
                                borderColor={this.state.passwordError == '' ? CommonColors.black : CommonColors.errorColor}
                            >
                            </Textbox>
                            <TouchableOpacity style={styles.icon} onPress={this.togglePasswordVisibility}>
                                <Ionicons
                                    name={this.state.isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                                    size={23} color="#000000"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* <View style={styles.bodyView}></View> */}

                        {/* <View>
                            <Text style={styles.text}>{Labels.signinHeaderText} </Text>
                        </View>

                        <View style={styles.commonView}></View>

                        <View>
                            <Textbox
                                placeholder={Labels.placeHolderEmployeeID}
                                onChangeText={(val) => { this.employeeIDOnChange(val) }}
                                maxLength={8}
                                value={this.state.employeeID}
                                error={this.state.employeeIDError}
                                secureTextEntry={false}
                                borderColor={this.state.employeeIDError == '' ? CommonColors.black : CommonColors.errorColor}
                            >
                            </Textbox>
                        </View>

                        <View>
                            <Textbox
                                placeholder={Labels.placeHolderPassword}
                                onChangeText={(val) => { this.passwordOnChange(val) }}
                                maxLength={8}
                                value={this.state.password}
                                error={this.state.passwordError}
                                secureTextEntry={!this.state.isPasswordVisible}
                                borderColor={this.state.passwordError == '' ? CommonColors.black : CommonColors.errorColor}
                            >
                            </Textbox>
                            <TouchableOpacity style={styles.icon} onPress={this.togglePasswordVisibility}>
                                <Ionicons
                                    name={this.state.isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                                    size={23} color="#000000"
                                />
                            </TouchableOpacity>
                        </View> */}

                        <TouchableOpacity onPress={this.navigateForgot}>
                            <Text style={styles.forgotPassword}>{Labels.forgotPassword} </Text>
                        </TouchableOpacity>

                        <View style={styles.buttonView}></View>

                        <View>
                            <Button
                                backgroundColor={CommonColors.orange}
                                borderColor={CommonColors.orange}
                                label={Labels.signin}
                                onPress={this.submit}>
                            </Button>
                        </View>
                    </View >
                </ImageBackground >
            </View >
        );
    }
}
const styles = EStyleSheet.create({
    container: { flex: 1, marginTop: Labels.m80, margin: Labels.m28, },
    commonView: { marginTop: Labels.m5 },
    bodyView: { marginTop: Labels.m40 },
    buttonView: { marginTop: Labels.m28 },
    card: { flex: 1 },
    backgroundImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
    text: { textAlign: 'center', color: CommonColors.dimOrange },
    forgotPassword: { textAlign: 'right', color: CommonColors.blue },
    icon: { position: 'absolute', right: 15, top: '50%', transform: [{ translateY: -10 }] },
    logoImage: { alignSelf: 'center', width: Labels.width80, height: 50 },

});
export default Signin

