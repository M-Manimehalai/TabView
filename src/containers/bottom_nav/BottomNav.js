import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, StatusBar, Image } from 'react-native';
import Labels from '../../utils/constants/labels/Labels';
import Iconic from 'react-native-vector-icons/MaterialCommunityIcons';
import LeadIcon from 'react-native-vector-icons/Feather';
import Activity from 'react-native-vector-icons/SimpleLineIcons';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button/Button';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';

StatusBar.setBarStyle('dark-content');
class BottomNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'down',
            modalVisible: false,
            iconVisible: true,
        };
    }

    modalVisible = () => {
        this.setState(
            { modalVisible: this.state.modalVisible ? false : true });
    }


  
    render() {
        const { type } = this.state;

        return (
            <View>

                <View style={[Styles.cardContainer, Styles.container]}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={this.closeModal}
                    >
                        <View style={Styles.modal}>
                            <TouchableOpacity>
                                <Text style={Styles.text}>Add Lead</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={Styles.text}>Add Opertunity</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={Styles.text}>Add Activity</Text>
                            </TouchableOpacity>
                        </View>


                    </Modal>

                    <View style={Styles.leftIcon}>
                        <TouchableOpacity
                            onPress={() => {
                                console.log('onClick')
                                this.props.navigation.navigate("Sample");
                            }}>
                            <Image
                                source={require('../../assets/images/png/dashboard.png')}
                                style={Styles.image}
                                resizeMode='contain'

                            />
                            <Text>{Labels.dashboard}</Text>

                        </TouchableOpacity>
                        <View style={Styles.space}></View>

                        <TouchableOpacity
                            onPress={() => {
                                console.log('onClick')
                                this.props.navigation.navigate("Sample");
                            }}>
                            <Image
                                source={require('../../assets/images/png/lead.png')}
                                style={Styles.image}
                                resizeMode='contain'

                            />
                            <Text>{Labels.leadClient}</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={Styles.rightIcon}>

                        <TouchableOpacity
                            onPress={() => {
                                console.log('onClick')
                                this.props.navigation.navigate("Sample");
                            }}>
                            <Image
                                source={require('../../assets/images/png/active.png')}
                                style={Styles.image}
                                resizeMode='contain'

                            />
                            <Text>{Labels.oppertunities}</Text>

                        </TouchableOpacity>


                        <View style={Styles.space}></View>


                        <TouchableOpacity
                            onPress={() => {
                                console.log('onClick')
                                this.props.navigation.navigate("Sample");
                            }}>
                            <Image
                                source={require('../../assets/images/png/Union.png')}
                                style={Styles.image}
                                resizeMode='contain'

                            />
                            <Text>{Labels.activity}</Text>

                        </TouchableOpacity>

                    </View>




                </View>
                <View style={Styles.addIcon}>
                    {
                        this.state.iconVisible == true ? (
                            <Ionicons
                                name={Labels.addCircle}
                                size={55}
                                onPress={this.modalVisible}
                                color={CommonColors.orange}
                            />
                        )
                            :
                            (<Ionicons
                                name={Labels.closeCircleSharp}
                                size={55}
                                onPress={this.modalVisible}
                                color={CommonColors.red}
                            />
                            )

                    }


                </View>
            </View>

        )
    }
}






const Styles = StyleSheet.create({
    text: {
        textAlign: 'right',
        fontSize: 17,
        color: CommonColors.greyDark,
        fontWeight: Labels.bold
    },
    leftIcon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    rightIcon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    cardContainer: {
        width: 415,
        height: 70,
        backgroundColor: (CommonColors.white),
        elevation: 7,
        borderRadius: 8,
        paddingVertical: 20,
        position: 'fixed',
        marginTop: 692,


    },

    space: {
        width: 30,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    card: {
        height: 70,
        width: 420,
        backgroundColor: (CommonColors.white),
        borderRadius: 12,
        margin: 0,
        padding: 0,

        position: 'fixed',
        elevation: 5,


    },
    btnCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        bottom: 28
    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },

    image: {
        width: '100%',
        height: '100%'
    },

    modal: {

        justifyContent: "space-evenly",
        alignItems: 'flex-start',
        height: 118,
        width: 190,
        backgroundColor: CommonColors.white,
        borderRadius: 2,
        marginTop: 600,
        marginLeft: 120,
        paddingHorizontal: 12

    },

    addIcon: {
        alignItems: 'center',
        marginTop: -97,
        marginLeft: 12,
    }
})
export default BottomNav;