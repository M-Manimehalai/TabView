import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import CommonColors from '../../utils/constants/colors/CommonColors'
import Labels from '../../utils/constants/labels/Labels'
import Button from '../button/Button';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';


function ModalPopUp(props) {
    const navigation = useNavigation();

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.isVisible}
                onRequestClose={props.closeModal}
            >
                <View style={Styles.modal}>
                    <Button
                        backgroundColor={CommonColors.white}
                        label={props.addLead}
                        color={CommonColors.black}
                        onPress={()=>{
                            navigation.navigate("Add Lead")
                        }}
                        
                    />
                     <Button
                        backgroundColor={CommonColors.white}
                        label={props.addOppertunity}
                        color={CommonColors.black}
                        onPress={()=>{
                            navigation.navigate("Add Lead")
                        }}
                        
                    />
                     <Button
                        backgroundColor={CommonColors.white}
                        label={props.addActivity}
                        color={CommonColors.black}
                        onPress={()=>{
                            navigation.navigate("Add Lead")
                        }}
                    />
                </View>
            </Modal>
        </View>
    )
}
export default ModalPopUp;

const Styles = EStyleSheet.create({
    text: {
        textAlign: 'right',
        fontSize:Labels.xs,
        color: CommonColors.greyDark,
        fontWeight: Labels.bold
    },

    modal: {
        justifyContent: "space-evenly",
        alignItems: 'flex-start',
        height: Labels.modalPopUpHeight,
        width: Labels.modalPopUpWidth,
        backgroundColor: CommonColors.white,
        borderRadius: Labels.modalRadius,
        marginTop: Labels.modalM_Top,
        marginLeft: Labels.modalM_Left,
        paddingHorizontal: Labels.modalP_Horizontal,
        elevation:5
        

    },

})