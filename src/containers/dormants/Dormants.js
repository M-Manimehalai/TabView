import React from 'react';
import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Icon from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';




let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Prospectcontact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [
                {
                    id: '1',
                    imageUrl: require("../../assets/images/png/RR.png"),
                    name: Labels.rameshRemma,
                    leadId: Labels.leadId1,
                    revenueAmount: Labels.days320,
                    revenuAmountInLac: Labels.days,
                    styles: styles.firstcard

                },
                {
                    id: '2',
                    imageUrl: require("../../assets/images/png/SJ.png"),
                    name: Labels.sirishaJain,
                    leadId: Labels.leadId2,
                  
                    revenueAmount: Labels.days240,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '3',
                    imageUrl: require("../../assets/images/png/userImage(2).png"),
                    name: Labels.leadName3,
                    leadId: Labels.leadId1,
                 
                    revenueAmount: Labels.days220,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '4',
                    imageUrl: require("../../assets/images/png/userImage(3).png"),
                    name: Labels.leadName4,
                    leadId: Labels.leadId4,
                  
                    revenueAmount: Labels.days190,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '5',
                    imageUrl: require("../../assets/images/png/userImage(4).png"),
                    name: Labels.leadName5,
                    leadId: Labels.leadId4,
                  
                    revenueAmount: Labels.days160,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '6',
                    imageUrl: require("../../assets/images/png/RR.png"),
                    name: Labels.rameshRemma,
                    leadId: Labels.leadId1,
                    revenueAmount: Labels.days100,
                    revenuAmountInLac: Labels.days,

                },
                {
                    id: '7',
                    imageUrl: require("../../assets/images/png/SJ.png"),
                    name: Labels.sirishaJain,
                    leadId: Labels.leadId2,
                  
                    revenueAmount: Labels.days80,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '8',
                    imageUrl: require("../../assets/images/png/userImage(2).png"),
                    name: Labels.leadName3,
                    leadId: Labels.leadId1,
                 
                    revenueAmount: Labels.days68,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '9',
                    imageUrl: require("../../assets/images/png/userImage(3).png"),
                    name: Labels.leadName4,
                    leadId: Labels.leadId4,
                  
                    revenueAmount: Labels.days65,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '10',
                    imageUrl: require("../../assets/images/png/userImage(4).png"),
                    name: Labels.leadName5,
                    leadId: Labels.leadId4,
                  
                    revenueAmount: Labels.days54,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '11',
                    imageUrl: require("../../assets/images/png/RR.png"),
                    name: Labels.rameshRemma,
                    leadId: Labels.leadId1,
                    revenueAmount: Labels.days52,
                    revenuAmountInLac: Labels.days,

                },
                {
                    id: '12',
                    imageUrl: require("../../assets/images/png/userImage(3).png"),
                    name: Labels.leadName4,
                    leadId: Labels.leadId4,
                  
                    revenueAmount: Labels.days50,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '13',
                    imageUrl: require("../../assets/images/png/userImage(2).png"),
                    name: Labels.leadName3,
                    leadId: Labels.leadId1,
                 
                    revenueAmount: Labels.days49,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '14',
                    imageUrl: require("../../assets/images/png/SJ.png"),
                    name: Labels.sirishaJain,
                    leadId: Labels.leadId2,
                  
                    revenueAmount: Labels.days320,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '15',
                    imageUrl: require("../../assets/images/png/SJ.png"),
                    name: Labels.sirishaJain,
                    leadId: Labels.leadId2,
                  
                    revenueAmount: Labels.days320,
                    revenuAmountInLac: Labels.days,
                },
                {
                    id: '16',
                    imageUrl: require("../../assets/images/png/SJ.png"),
                    name: Labels.sirishaJain,
                    leadId: Labels.leadId2,
                  
                    revenueAmount: Labels.days320,
                    revenuAmountInLac: Labels.days,
                },
               
            ],
            searchName: '',
            filteredName: [],
            noResult: false,
        };
    }
    handleSearch = (text) => {
        const { contactList } = this.state;
        const searchName = text.toLowerCase();
        const filteredName = this.state.contactList.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        this.setState({ searchName, filteredName, noResults: filteredName.length === 0, });
    };
    clearSearch = () => {
        this.setState({
            searchName: '',
            filteredName: [],
            noResults: false,
        });
    };
    leadsPress = () => {
        this.setState({
            isClicked: !this.state.isClicked,
        });
    };
    render() {
        const { searchName, filteredName, noResults } = this.state;
        return (

            <View style={styles.prospectcontactView}>
                <View style={styles.container}>
                    <EvilIcons name="search" size={28}></EvilIcons>
                    <TextInput
                        style={styles.input}
                        placeholder={Labels.placeholder}
                        placeholderTextColor={CommonColors.grayShade}
                        onChangeText={this.handleSearch}
                        value={searchName}>
                    </TextInput>
                    {searchName.length > 0 && (
                        <AntDesign name="closecircle" size={20}
                            style={styles.closeicon} onPress={this.clearSearch}
                        />
                    )}
                </View> 
                
                <View >
                    <View style={styles.leadsTitleView}>
                        <Text style={styles.leadsnameView}>{Labels.name}</Text>
                        <Text style={styles.leadsnameView}>{Labels.clientcode}</Text>
                        <View style={styles.leadsmettingView}>
                            <Text style={styles.leadstextView}>{Labels.dormants}</Text>
                            <Text style={styles.leadstextView}>{Labels.since}</Text>
                        </View>
                    </View>
                    <ScrollView>
                        {noResults ? (
                            <View style={styles.noResultView}>
                                <EvilIcons name="search" size={38}></EvilIcons>
                                <Text>No results found</Text>
                            </View>
                        ) : (<FlatList
                            data={filteredName.length > 0 ? filteredName : this.state.contactList}
                            numColumns={1}
                            style={styles.flatListView}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <View style={[styles.contactDetailsView, item.styles]}>
                                    <View style={styles.userDetailsView}>
                                        <Image style={styles.userImageView} source={item.imageUrl} resizeMode="contain"></Image>
                                        <View>
                                            <Text style={styles.nameTextView}>{item.name}</Text>
                                            <Text style={styles.leadIdView}>{item.leadId}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.mettingsView}>
                                        <Text style={styles.mettingtextView}>{item.mettingsDone}</Text>
                                    </View>
                                    <View style={styles.revenueAmountView}>
                                        <View>
                                            <Text style={styles.revenueAmountTextView}>{item.revenueAmount}</Text>
                                            <Text style={styles.leadIdView}>{item.revenuAmountInLac}</Text>
                                        </View>
                                        <Icon name="dots-three-vertical" size={18}></Icon>
                                    </View>
                                </View>}
                        />)}
                    </ScrollView>

                </View>
           
            </View >
        )
    }
};
const styles = EStyleSheet.create({
    contactDetailsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: Labels.m1,
        backgroundColor: CommonColors.white,
        height: Labels.textBoxHeight,
        marginHorizontal: Labels.m12,
        alignItems: 'center',
    },
    leadIdView: {
        marginLeft: Labels.m10
    },
    userDetailsView: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: Labels.width60
    },
    userImageView: {
        alignItems: "center"
    },
    nameTextView: {
        fontSize: Labels.xsm,
        color: CommonColors.black,
        paddingHorizontal: Labels.p10
    },
    mettingtextView: {
        fontSize: Labels.xsm,
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rbold,
    },
    revenueAmountTextView: {
        fontSize: Labels.xsm,
        color: CommonColors.black,
        paddingHorizontal: Labels.p10,
        fontFamily: Fonts.globalrobotofonts.Rbold,
    },
    mettingsView: {
        width: Labels.width10
    },
    revenueAmountView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leadsTitleView: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: CommonColors.litegreen,
        height: Labels.textBoxHeight,
        paddingHorizontal: Labels.p10,
    },
    prospectcontactView: {
        flex: 1,
        backgroundColor: CommonColors.litegreen,
    },
    leadsheaderView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: CommonColors.white,
        height: Labels.textBoxHeight,
        //marginHorizontal: Labels.m12,
        paddingRight: Labels.p30,
    },
    textLeads: {
        fontSize: Labels.xsm,
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rmedium,
        borderBottomWidth: 2,
        padding: Labels.p14,
        paddingHorizontal: 50,
        //width: "100%",
        borderBottomColor: CommonColors.black,
    },
    leadsnameView: {
        textAlign: "left",
        color: CommonColors.blackgreen,
        fontFamily: Fonts.globalrobotofonts.Rmedium,
        fontSize: Labels.xs,
        marginLeft: 15,
    },
    leadsmettingView: {
        marginLeft: 210
    },
    leadstextView: {
        color: CommonColors.blackgreen,
        fontFamily: Fonts.globalrobotofonts.Rmedium,
        fontSize: Labels.xs,
        textAlign: "right",
    },
    leadsAmountView: {
        marginLeft: Labels.m16
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: CommonColors.Tana,
        borderColor: CommonColors.RumSwizzle,
        paddingHorizontal: 20,

    },
    closeicon: {
        paddingLeft: 120,
        color: CommonColors.black
    },
    input: {
        fontSize: 16,
    },
    firstcard: {
        borderTopLeftRadius: Labels.borderRadiusXL,
        borderTopRightRadius: Labels.borderRadiusXL,
    },
    noResultView: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: CommonColors.white,
        borderRadius: Labels.borderRadiusXL,
        marginHorizontal: Labels.m12,
        height: Labels.cardviewHeight,
    },
    leads: {

    }
});
export default Prospectcontact;