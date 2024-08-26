import { Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import EStyleSheet, { create } from 'react-native-extended-stylesheet';
import { useRoute } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Labels from '../../utils/constants/labels/Labels';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';



let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
class OpportunityDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHistoryOpen: false,
            details: ''
        }
    }

    componentDidMount = () => {
        if (isNotEmpty(this.props.route.params.selectedItem)) {
            this.setState({
                details: this.props.route.params.selectedItem
            })
        }
        else {
            this.setState({
                details: ''
            })
        }
    }

    componentDidUpdate = () => {

    }

    componentWillUnmount() {

    }
    historyOpen = () => {
        // this.setState({
        //     isVisibleHistory: !this.state.isVisibleHistory,

        // })
        this.setState((prevState) => ({
            //isHistoryOpen: !prevState.isHistoryOpen,
            isHistoryOpen: !this.state.isHistoryOpen,
        }));

    }
    render() {
        //console.log(this.state.details, 'details')
        return (
            <View>
            <Header
          dashboardHeader={true}
          headername = {Labels.dashboard} 
          iconname = "menu"
          bellicon = "bell"/>
          
            <View style={styles.container}>
                <ScrollView>
                    <Card style={styles.cardTop}></Card>
                    <View style={styles.mainView}>
                        <Image source={isNotEmpty(this.state.details.imageUrl) ? this.state.details.imageUrl : 'NA'} style={styles.cardImage} />
                    </View>
                    <Card style={styles.cardContainer}>
                        <View style={styles.commonView}></View>
                        <View style={styles.commonView}></View>
                        <Text style={styles.cardText}>{isNotEmpty(this.state.details.name) ? this.state.details.name : 'NA'}</Text>
                        <View style={styles.commonView}></View>
                        <View style={styles.rowView}>
                            <Text style={styles.labelText}>{Labels.lastCreated}{" "}</Text>
                            <Text style={styles.valueText}>{Labels.targateDate}</Text>
                        </View>
                        <View style={styles.commonView}></View>
                        <View style={styles.commonView}></View>
                        <Card style={styles.cardCenterContainer}>
                            <View style={styles.rowView}>
                                <View style={styles.columnFirstView}>
                                    <Text style={styles.labelText}>{Labels.ARCARESCodeLabel}</Text>
                                    <Text style={styles.valueText}>{Labels.ARCARESCode}</Text>
                                </View>
                                <View style={styles.columnEndView}>
                                    <Text style={styles.labelText}>{Labels.clientCodeLabel}</Text>
                                    <Text style={styles.valueText}>{Labels.clientCode}</Text>
                                </View>
                            </View>
                            <View style={styles.commonView}></View>
                            <View style={styles.commonView}></View>
                            <View style={styles.rowView}>
                                <Text style={styles.labelText}>{Labels.created}{" "}</Text>
                                <Text style={styles.valueText}>{Labels.targateDate}</Text>
                            </View>
                            <View style={styles.rowViewsecond}></View>
                        </Card>
                        <View style={[styles.rowView]} >
                            <View style={styles.columnFirstView}>
                                <Text style={[styles.valueText, { textAlign: 'center' }]}>{isNotEmpty(this.state.details.ratio) ? this.state.details.ratio : 'NA'}</Text>
                                <Text style={[styles.labelText, { textAlign: 'center' }]}>{Labels.revenuePotential}</Text>
                            </View>
                            <View style={styles.horizontalLine}>
                                <Text style={[styles.valueText, { textAlign: 'center' }]}>{isNotEmpty(this.state.details.ratio) ? this.state.details.ratio : 'NA'}</Text>
                                <Text style={[styles.labelText, { textAlign: 'center' }]}>{Labels.aum}</Text>
                            </View>
                        </View>
                        <View style={styles.rowViewsecond}></View>
                        <View style={styles.columnPhoneView}>
                            <View style={styles.columnPhoneFirstView}>
                                <Feather name={"phone-call"} size={15} />
                                <Text style={styles.valueText}>{" "} {Labels.calls}</Text>
                            </View>
                            <View style={styles.columnPhoneFirstView}>
                                <Fontisto name={"email"} size={20} />
                                <Text style={styles.valueText}>{" "} {Labels.email}</Text>
                            </View>
                        </View>
                    </Card>
                    <View style={styles.commonView}></View>
                    <View style={styles.commonView}></View>
                    <Card style={styles.cardBottom}>
                        <View style={styles.rowView}>
                            <View style={styles.columnIconView}>
                                <AntDesign name={"edit"} size={20} />
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.columnSecondView}>
                                <Text style={styles.labelText}>{Labels.productType}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.valueText}>{isNotEmpty(this.state.details.productTypes) ? this.state.details.productTypes : 'NA'}</Text>
                            </View>
                        </View>

                        <View style={styles.rowView}>
                            <View style={styles.columnSecondView}>
                                <Text style={styles.labelText}>{Labels.opportunityStageLabel}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.valueText}>{isNotEmpty(this.state.details.oppertunityStage) ? this.state.details.oppertunityStage : 'NA'}</Text>
                            </View>
                        </View>

                        <View style={styles.rowView}>
                            <View style={styles.columnSecondView}>
                                <Text style={styles.labelText}>{Labels.invtAmountLabel}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.valueText}>{isNotEmpty(this.state.details.invtAmount) ? this.state.details.invtAmount : 'NA'}</Text>
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.columnSecondView}>
                                <Text style={styles.labelText}>{Labels.targateDateLabel}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.valueText}>{isNotEmpty(this.state.details.targateDate) ? this.state.details.targateDate : 'NA'}</Text>
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.columnSecondView}>
                                <Text style={styles.labelText}>{Labels.assignedTo}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.valueText}>{isNotEmpty(this.state.details.assignedName) ? this.state.details.assignedName : 'NA'}</Text>
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.columnSecondView}>
                                <Text style={styles.labelText}>{Labels.probability}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.valueText}>{isNotEmpty(this.state.details.probability) ? this.state.details.probability : 'NA'}</Text>
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.columnSecondView}>
                                <Text style={styles.labelText}>{Labels.tagging}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.valueText}>{isNotEmpty(this.state.details.probability) ? this.state.details.probability : 'NA'}</Text>
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.columnSecondView}>
                                <Text style={styles.labelText}>{Labels.fiscalPeriodLabel}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.valueText}>{isNotEmpty(this.state.details.fiscalPeriod) ? this.state.details.fiscalPeriod : 'NA'}</Text>
                            </View>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.columnSecondView}>
                                <Text style={styles.labelText}>{Labels.updateDateTimeLabel}</Text>
                            </View>
                            <View style={styles.columnView}>
                                <Text style={styles.valueText}>{Labels.updateDateTime}</Text>
                            </View>
                        </View>
                        <View style={styles.rowViewsecond}></View>
                    </Card>
                    <View style={styles.rowViewsecond}></View>
                    <Card style={[styles.cardBottom, { backgroundColor: this.state.isHistoryOpen ? CommonColors.whiteSmoke : 'white' }]}>
                        <View style={styles.rowView}>
                            <View style={styles.columnFirstView}>
                                <Text style={styles.valueText}>{Labels.history}</Text>
                            </View>
                            <View style={styles.columnEndView}>
                                <FontAwesome6 name={this.state.isHistoryOpen ? "chevron-up" : "chevron-down"} size={20} onPress={this.historyOpen} />
                            </View>
                        </View>
                        <View style={styles.commonView}></View>
                    </Card>
                    {this.state.isHistoryOpen &&
                        <View>
                            <Card style={styles.cardBottom}>
                                <View style={styles.rowView}>
                                    <View style={styles.columnFirstView}>
                                        <Text style={styles.valueText}>{isNotEmpty(this.state.details.productTypes) ? this.state.details.productTypes : 'NA'}</Text>
                                        <Text style={styles.labelText}>{Labels.completed}</Text>
                                    </View>
                                    <View style={styles.columnEndView}>
                                        <Text style={styles.valueText}>{isNotEmpty(this.state.details.ratio) ? this.state.details.ratio : 'NA'}</Text>
                                        <Text style={styles.labelText}>{Labels.revenu}</Text>
                                    </View>
                                </View>
                                <View style={styles.rowView}>
                                    <View style={styles.columnFirstView}>
                                        <Text style={styles.valueText}>{isNotEmpty(this.state.details.probability) ? this.state.details.probability : 'NA'}</Text>
                                        <Text style={styles.labelText}>{Labels.probability}</Text>
                                    </View>
                                    <View style={styles.columnEndView}>
                                        <Text style={styles.valueText}>{Labels.targateDateTime}</Text>
                                        <Text style={styles.labelText}>{isNotEmpty(this.state.details.targateDate) ? this.state.details.targateDate : 'NA'}</Text>
                                    </View>
                                </View>
                                <View style={styles.rowView}>
                                    <View style={styles.columnFirstView}>
                                        <Text style={styles.valueText}>{Labels.fiscalPeriodLabel}</Text>
                                        <Text style={styles.labelText}>{isNotEmpty(this.state.details.fiscalPeriod) ? this.state.details.fiscalPeriod : 'NA'}</Text>
                                    </View>
                                    <View style={styles.columnEndView}>
                                        <Text style={styles.valueText}>{Labels.updateDateTime}</Text>
                                        <Text style={styles.labelText}>{Labels.updateDateTimeLabel}</Text>
                                    </View>
                                </View>
                            </Card>
                            <View style={styles.commonView}></View>
                            <Card style={styles.cardBottom}>
                                <View style={styles.rowView}>
                                    <View style={styles.columnFirstView}>
                                        <Text style={styles.valueText}>{Labels.etfBond}</Text>
                                        <Text style={styles.labelText}>{Labels.completed}</Text>
                                    </View>
                                    <View style={styles.columnEndView}>
                                        <Text style={styles.valueText}>{isNotEmpty(this.state.details.ratio) ? this.state.details.ratio : 'NA'}</Text>
                                        <Text style={styles.labelText}>{Labels.revenu}</Text>
                                    </View>
                                </View>
                                <View style={styles.rowView}>
                                    <View style={styles.columnFirstView}>
                                        <Text style={styles.valueText}>{isNotEmpty(this.state.details.probability) ? this.state.details.probability : 'NA'}</Text>
                                        <Text style={styles.labelText}>{Labels.probability}</Text>
                                    </View>
                                    <View style={styles.columnEndView}>
                                        <Text style={styles.valueText}>{Labels.targateDateTime}</Text>
                                        <Text style={styles.labelText}>{isNotEmpty(this.state.details.targateDate) ? this.state.details.targateDate : 'NA'}</Text>
                                    </View>
                                </View>
                                <View style={styles.rowView}>
                                    <View style={styles.columnFirstView}>
                                        <Text style={styles.valueText}>{Labels.fiscalPeriodLabel}</Text>
                                        <Text style={styles.labelText}>{isNotEmpty(this.state.details.fiscalPeriod) ? this.state.details.fiscalPeriod : 'NA'}</Text>
                                    </View>
                                    <View style={styles.columnEndView}>
                                        <Text style={styles.valueText}>{Labels.updateDateTime}</Text>
                                        <Text style={styles.labelText}>{Labels.updateDateTimeLabel}</Text>
                                    </View>
                                </View>
                            </Card>
                        </View>

                    }
                </ScrollView>
            </View>
            </View>
        )
    }

}
const styles = EStyleSheet.create({
    cardTop: {
        backgroundColor: CommonColors.triadic,
        height: Labels.textBoxHeight,
        borderRadius: Labels.borderRadiusXS,
        borderBottomRadius: Labels.borderRadius25,
        marginTop: Labels.m0
    },
    cardContainer: {
        //backgroundColor: CommonColors.triadic,
        //height: '39%',
        borderRadius: Labels.borderRadiusXS
    },
    cardBottom: {
        //height: '45%',
        borderRadius: Labels.borderRadiusXS,

    },
    cardImage: {
        alignSelf: 'center',
    },
    commonView: { marginTop: Labels.m6 },
    cardText: {
        alignSelf: 'center',
        fontFamily: Fonts.globalrobotofonts.Rbold,
        size: Labels.md,
        color: CommonColors.black
    },
    labelText: {
        fontSize: Labels.xs,
        color: CommonColors.tableheader,
        fontFamily: Fonts.globalrobotofonts.Rregular,
        //alignSelf: 'center'
    },
    valueText: {
        fontSize: Labels.xs,
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rmedium,
        //alignSelf: 'center',
    },
    rowView: { flexDirection: 'row', alignSelf: 'center', },
    rowViewsecond: { marginTop: Labels.m8 },
    columnSecondView: { flexDirection: 'column', flex: 1, alignItems: 'flex-start', marginLeft: Labels.m12, marginTop: Labels.m8 },
    columnView: { flexDirection: 'column', flex: 1, marginTop: Labels.m8 },
    cardCenterContainer: {
        height: Labels.searchBarHeight,
        borderRadius: Labels.borderRadiusXS,
        backgroundColor: CommonColors.whiteSmoke
    },
    columnPhoneView: { flexDirection: 'row', marginLeft: Labels.m12 },
    columnPhoneFirstView: { flexDirection: 'row', flex: 1 },
    columnIconView: { flexDirection: 'column', flex: 1, alignItems: "flex-end" },
    columnFirstView: { flexDirection: 'column', flex: 1, marginTop: Labels.m8, marginLeft: Labels.m12 },
    columnEndView: { flexDirection: 'column', flex: 1, alignItems: "flex-end", marginTop: Labels.m8, marginRight: Labels.m12, },
    horizontalLine: {
        borderLeftWidth: 2, // Adjust the thickness of the horizontal line
        borderLeftColor: CommonColors.paleGray,
        flexDirection: 'column', flex: 1, marginTop: Labels.m8, marginRight: Labels.m12
    },
    container: { backgroundColor: CommonColors.ivory },
    mainView: { borderRadius: Labels.borderRadius50, backgroundColor: CommonColors.white, alignSelf: 'center', padding: Labels.p8, marginTop: '-20rem' },
})
export default OpportunityDetail;
