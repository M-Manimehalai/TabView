import React, { Component } from 'react';
import { Card } from 'react-native-paper';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Button from '../../components/button/Button';


let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount = () => {

    }

    componentDidUpdate = () => {

    }

    componentWillUnmount() {

    }
    submit = () => {
        this.props.navigation.navigate('Signin');
    }
    render() {
        return (
            <Card>
                <View style={styles.rowViewsecond}>
                    <AntDesign name="checkcircle" size={50} color={CommonColors.green} style={styles.icon} />
                </View>
                <View style={styles.commonView}></View>
                <View>
                    <Text style={styles.cardText1}>Your new password set successfully </Text>
                    <Text style={styles.cardText2}> for Mobile App</Text>
                </View>
                <View style={styles.btnColumn}>
                            <Button
                                label={Labels.loginNow}
                                color={''}
                                backgroundColor={CommonColors.orange}
                                onPress={this.submit}
                                disable={this.state.disableSubmitButton}
                            />
                        </View>
            </Card>
        )
    }
}
const styles = EStyleSheet.create({
    icon: { alignSelf: 'center' },
    rowViewsecond: { marginTop: Labels.m48 },
    cardText1: { color: CommonColors.black, fontFamily: Fonts.globalrobotofonts.Rbold, fontSize: Labels.md, textAlign: 'center', },
    cardText2: { color: CommonColors.black, fontFamily: Fonts.globalrobotofonts.Rbold, fontSize: Labels.md, textAlign: 'center',},
    commonView: { marginTop: Labels.m6 },
    btnColumn: { margin: Labels.m4 ,marginTop: Labels.m48},
})

export default WelcomeScreen;