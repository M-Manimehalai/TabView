import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import { Card } from 'react-native-paper';
import Button from '../../components/button/Button';
import { color } from 'react-native-elements/dist/helpers';


class OTPInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: ['', '', '', '', '', ''],
      disableSubmitButton: true,
      counter: 0,
      timerActive: false
    };
    this.otpTextInput = []; // Create references for OTP TextInput elements
    this.interval = null; // Initialize the interval
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  componentDidMount() {
    // Initialize the countdown timer in componentDidMount
    this.startCountdown();
  }

  startCountdown = () => {
    this.setState({ counter: 120, timerActive: true }, () => {
      this.timer = setInterval(() => {
        const { counter } = this.state;
        if (counter > 0) {
          this.setState({ counter: counter - 1 });
        } else {
          // When the counter reaches 0, clear the interval
          clearInterval(this.timer);
          this.setState({ timerActive: false });
        }
      }, 1000);
    })
  };
  // Handle OTP input for each digit
  handleOTPInput = (index, value) => {
    const otp = [...this.state.otp];
    otp[index] = value;

    // Move focus to the next input or previous input on backspace
    if (value === '' && index > 0) {
      this.otpTextInput[index - 1].focus();
    } else if (index < otp.length - 1 && value !== '') {
      this.otpTextInput[index + 1].focus();
    }

    // Update the state with the new OTP
    this.setState({ otp, disableSubmitButton: true });

    // Check if all OTP digits are entered
    const isAllDigitsEntered = otp.every((digit) => digit !== '');
    // Enable or disable the submit button based on OTP completeness
    this.setState({ disableSubmitButton: !isAllDigitsEntered });

    // Trigger a callback when all OTP digits are entered
    if (isAllDigitsEntered) {
      const otpValue = otp.join('');
      //console.log(otpValue.length);
      // You can perform further validation or submission here
    }
  };

  resendOTP = () => {
    // Reset the timer when resending OTP
    this.setState({ counter: 120, timerActive: true }, () => {
      this.timer = setInterval(() => {
        const { counter } = this.state;
        if (counter > 0) {
          this.setState({ counter: counter - 1 });
        } else {
          // When the counter reaches 0, clear the interval
          clearInterval(this.timer);
          this.setState({ timerActive: false });
        }
      }, 1000);
    })
  };
  submit = () => {
    var otpIsValid = false;
    // Employeed ID - Textbox
    if (isNotEmpty(this.state.otp)) {
      otpIsValid = true;
    }
    if (otpIsValid) {
      this.props.navigation.navigate("Set New Password")
    }
  }
  render() {
    const { otp, disableSubmitButton, counter, timerActive } = this.state;
    return (
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
          <View>
            <Text style={styles.cardText1}>We have sent an OTP to your</Text>
            <Text style={styles.cardText2}>registered email id: </Text>
          </View>
        </Card>
        <Card style={styles.cardBox}>
          {/* <View style={styles.commonView}></View>
          <View style={styles.commonView}></View> */}
          <View style={styles.labelContainer}>
            <Text style={styles.inputBoxTextLabel}>{Labels.enterOtp}</Text>
          </View>
          <View style={styles.otpContainer}>
            {this.state.otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.input}
                onChangeText={(value) => this.handleOTPInput(index, value)}
                value={digit}
                keyboardType="numeric"
                maxLength={1}
                ref={(ref) => (this.otpTextInput[index] = ref)}
              />
            ))}
          </View>
          <View style={styles.commonView}></View>
          <View style={styles.commonView}></View>
          <View style={styles.labelContainer}>
            <Text style={{ color: timerActive ? 'green' : 'red' }}>{`${Labels.otpExpire} ${Math.floor(counter / 60).toString().padStart(2, '0')}:${(counter % 60).toString().padStart(2, '0')}`}</Text>
          </View>
          <View style={styles.commonView}></View>
          <View style={styles.commonView}></View>
          <View style={styles.labelContainer}>
            <View style={styles.receiveOTP}>
              <Text>{Labels.receiveOTP}</Text>
              <TouchableOpacity onPress={this.resendOTP}>
                <Text style={styles.resendOTP}>{Labels.resendOTP}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btnColumn}>
            <Button
              label={Labels.verifyOTP}
              color={''}
              backgroundColor={CommonColors.orange}
              onPress={this.submit}
              disable={this.state.disableSubmitButton}
            />
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
  inputBoxTextLabel: { fontSize: Labels.xs, color: CommonColors.gray44, fontFamily: Fonts.globalrobotofonts.Rmedium },
  container: { flex: 1, marginTop: Labels.m1,backgroundColor: CommonColors.whiteSmoke},
  cardContainer: { margin: Labels.m1, padding: Labels.p8, backgroundColor: CommonColors.whiteSmoke, },
  cardText1: { color: CommonColors.black, fontFamily: Fonts.globalrobotofonts.Rbold, size: Labels.md, textAlign: 'center', lineHeight: 17 },
  cardText2: { color: CommonColors.black, fontFamily: Fonts.globalrobotofonts.Rbold, size: Labels.md, textAlign: 'center', lineHeight: 17 },
  commonView: { marginTop: Labels.m6 },
  cardBox: { margin: Labels.m1, padding: Labels.p8, backgroundColor: CommonColors.white, width: Labels.width100,  },
  otpContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  cardContainerBottom: { margin: Labels.m1, padding: Labels.p8, backgroundColor: CommonColors.bottom, width: Labels.width100, height: '100%' },
  labelContainer: { alignItems: 'center', justifyContent: 'center' },
  btnColumn: { flexDirection: 'column', flex: 0, margin: Labels.m4},
  input: { width: 43, height: 43, borderWidth: Labels.borderWidthSize, borderColor: CommonColors.dimGray, fontSize: Labels.lg, fontWeight: Fonts.globalrobotofonts.Rbold, borderRadius: Labels.borderRadiusMD, marginTop: Labels.m28, marginRight: Labels.m12, textAlign: 'center' },
  receiveOTP: { flexDirection: 'row' },
  resendOTP: { color: CommonColors.cyanBlue, marginLeft: Labels.m8 }
});
export default OTPInput;
