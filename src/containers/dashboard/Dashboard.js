import React, { Component } from 'react';
import { Text, View, StyleSheet, ToastAndroid, Dimensions } from 'react-native';
import Header from '../../components/header/Header';
import Labels from '../../utils/constants/labels/Labels';
import Button from '../../components/button/Button';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { Login } from '../../utils/common/dataservices/DataServices';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sampleDetailsEmptyAction } from "../../redux/actions/login_info_action/LoginInfoAction";
import { sampleAction } from '../../redux/actions/sample_action/SampleAction';
import EStyleSheet from 'react-native-extended-stylesheet';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        // Login Redux api call
        let data = {
            EmailID: 'Zoi',
            Password: 1234,
        }
        this.props.sampleAction(data);
    }

    componentDidUpdate = () => {

    }

    componentWillUnmount() {

    }

    submit = () => {
        let data = {
            EmailID: 'Zoi',
            Password: 1234,
        }
        Login(data).then((resp) => {
            if (resp.status == Labels.success) {
                ToastAndroid.show(resp.message, ToastAndroid.SHORT);
            }
            else {
                ToastAndroid.show(resp.message, ToastAndroid.SHORT);
                this.props.navigation.navigate("Sample");
                this.props.sampleDetailsEmptyAction('Empty'); // To do Empty the all redux stored data
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Header header={Labels.dashboard} /> */}
                <View style={styles.container}>
                    <View style={styles.commonView}>
                        {/* <Button
                            label={Labels.goToNextPage}
                            color={''}
                            backgroundColor={""}
                            onPress={this.submit}
                        /> */}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: { flex: 1 },
    commonView: { flex: 1, marginTop: Labels.m24, justifyContent: 'center' }
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        sampleDetailsEmptyAction, sampleAction
    }, dispatch)
}

export default (connect(null, mapDispatchToProps)(Dashboard)); 