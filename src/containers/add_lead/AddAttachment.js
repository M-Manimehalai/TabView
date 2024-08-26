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
import IconButton from '../../components/button/IconButton';
import Header from '../../components/header/Header';


class AddAttachment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount = () => {
    }
    render(){
        return (
            <View>
            <Header addLeadHeader={true} labelTop={Labels.addLead4} labelBottom={Labels.otherDetails}/>
            <View style={styles.container}>
                <Card style={styles.cardContainer}>
                    <Text>Add Attachment</Text>   
                </Card>
            </View>
            </View>
        )
    }
}
const styles = EStyleSheet.create({
    container: { flex: 1, marginTop: Labels.m10 },
     cardContainer: {padding:Labels.p15,height:140,borderRadius:0, borderWidth:0,},
    commonView: { marginTop: Labels.m15 },
    icon:{position:"absolute",justifyContent:"center",marginLeft:20},
    btnRow: { flexDirection: 'row' },
    btnColumn: { flexDirection: 'column', flex: 1 },
    bottomCard: { backgroundColor: CommonColors.white,height:80,padding:Labels.p10,marginTop:500},
})

export default AddAttachment;