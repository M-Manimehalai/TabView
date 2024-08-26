import { Text, View, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../../navigations/Navigations'
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PieChart from 'react-native-pie-chart';
import EStyleSheet from 'react-native-extended-stylesheet';
import { color } from 'react-native-elements/dist/helpers';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons'


let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default class Lead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            month: '',
            leadDetails: [],
            months: [],
            currentMonth: new Date().getMonth() + 1,
            currentMonthStr: new Date().toLocaleString('default', { month: 'long' }),


        }

    }


    componentDidMount() {

        var List = [];
        var monthList = [];

        monthList.push({
            id: '1',
            month: Labels.jan,
            style: Styles.scrollEndSpace
        });
        monthList.push({
            id: '2',
            month: Labels.feb
        });
        monthList.push({
            id: '3',
            month: Labels.mar
        });
        monthList.push({
            id: '4',
            month: Labels.apr
        });
        monthList.push({
            id: '5',
            month: Labels.may
        });
        monthList.push({
            id: '6',
            month: Labels.june
        });

        monthList.push({
            id: '7',
            month: Labels.july
        });
        monthList.push({
            id: '8',
            month: Labels.aug
        });
        monthList.push({
            id: '9',
            month: Labels.sep
        });

        monthList.push({
            id: '10',
            month: Labels.oct
        });
        monthList.push({
            id: '11',
            month: Labels.nov
        });
        monthList.push({
            id: '12',
            month: Labels.dec
        });


        List.push({
            key: '1',
            text: Labels.new,
            number: 40,
            color: CommonColors.new
        });

        List.push({
            key: '2',
            text: Labels.inProcess,
            number: 60,
            color: CommonColors.inProcess

        });

        List.push({
            key: '3',
            text: Labels.converted,
            number: 20,
            color: CommonColors.converted

        });

        List.push({
            key: '4',
            text: Labels.notInteres,
            number: 30,
            color: CommonColors.notInterest

        });

        List.push({
            key: '5',
            text: Labels.notContactable,
            number: 18,
            color: CommonColors.notContactable

        });

        List.push({
            key: '6',
            text: Labels.assigned,
            number: 12,
            color: CommonColors.assigned

        });


        this.setState({
            leadDetails: List,
            months: monthList
        });

        // this.interval = setInterval(() => {
        //     this.updateCurrentMonth();
        // }, 60000);
    }

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    // updateCurrentMonth = () => {
    //     this.setState({ currentMonth: new Date().getMonth() + 1 });

    // }
    //lead details

    leadDetails = () => {
        return (
            <FlatList
                data={this.state.leadDetails}
                renderItem={({ item }) => {
                    {
                        return (


                            <View style={Styles.leadDetail}>
                                <View style={Styles.leftContainer}>
                                    <View style={[Styles.leadLegend, { backgroundColor: item.color }]}></View>
                                    <Text>{item.text}</Text>
                                </View>
                                <View style={Styles.rightContainer}>
                                    <Text style={Styles.number}>{item.number}</Text>
                                </View>
                            </View>
                        )
                    }
                }}
                keyExtractor={(item) => item.key}
                numColumns={1}
                contentContainerStyle={Styles.space}
            />
        )
    }

    render() {


        const monthlyData = this.state.months
            .filter(item => item.id < this.state.currentMonth)
            .reverse();

        const widthAndHeight = 150
        const series = [123, 5, 321, 5, 123, 5, 789, 5, 537, 5, 123, 5]
        const sliceColor = [
            CommonColors.new,
            CommonColors.white,
            CommonColors.assigned,
            CommonColors.white,
            CommonColors.converted,
            CommonColors.white,
            CommonColors.notInterest,
            CommonColors.white,
            CommonColors.notContactable,
            CommonColors.white,
            CommonColors.inProcess,
            CommonColors.white,
        ]
        const currentMonthShort = this.state.currentMonthStr.slice(0, 3);
        return (
            <View style={Styles.background}>

                <View>
                    <View style={[Styles.leadCount, Styles.LeadCountCountainer]}>
                        <Text style={Styles.leadCountFont}>680</Text>
                    </View>

                    <View style={[Styles.leadDetails, Styles.leadDetailsContainer]}>
                        <View>
                            <Text style={Styles.monthFont}>180</Text>
                            <Text style={Styles.headerLabel}>{Labels.new}</Text>
                        </View>

                        <View style={Styles.verticleLine}></View>

                        <View>
                            <Text style={Styles.monthFont}>80</Text>
                            <Text style={Styles.headerLabel}>{Labels.assignedLabel}</Text>
                        </View>

                        <View style={Styles.verticleLine}></View>

                        <View>
                            <Text style={Styles.monthFont}>420</Text>
                            <Text style={Styles.headerLabel}>{Labels.inProcess}</Text>
                        </View>

                        <View style={Styles.verticleLine}></View>

                        <View>
                            <Text style={Styles.monthFont}>160</Text>
                            <Text style={Styles.headerLabel}>{Labels.converted}</Text>
                        </View>

                        <View style={Styles.verticleLine}></View>

                        <View>
                            <Text style={Styles.monthFont}>120</Text>
                            <Text style={Styles.headerLabel}>{Labels.others}</Text>
                        </View>
                    </View>

                    <ScrollView>
                        {/* no data card */}

                        {this.state.currentMonth == 10 && <View style={{ padding: 12 }}>
                            <View style={Styles.leadDataCardHead}>
                                <View style={Styles.leadDataHeader}>
                                    <View>
                                        <Text style={Styles.monthFont}>{currentMonthShort}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={Styles.noDataCardBody}>
                                <View style={Styles.noDataContent}>
                                    <Octicons
                                        name={Labels.circleSlash}
                                        color={CommonColors.leadTextColor}
                                        size={30}
                                    />
                                    <View style={Styles.space}></View>
                                    <Text>No leads available for</Text>
                                    <Text>current month</Text>
                                </View>
                            </View>
                        </View>}



                        <View style={Styles.scrollEndSpace}>

                            {monthlyData.map((item) => (
                                <View key={item.month}>
                                    <View style={{ padding: 12 }}>
                                        <View style={Styles.leadDataCardHead}>
                                            <View style={Styles.leadDataHeader}>
                                                <View>
                                                    <Text style={Styles.monthFont}>{item.month}</Text>
                                                </View>

                                                <View>
                                                    <AntDesign
                                                        name={Labels.right}
                                                        size={17}
                                                        color={CommonColors.black}
                                                    />
                                                </View>
                                            </View>
                                        </View>

                                        <View style={Styles.leadDataCardBody}>
                                            <View style={Styles.pieContainer}>
                                                <PieChart
                                                    widthAndHeight={widthAndHeight}
                                                    series={series}
                                                    sliceColor={sliceColor}
                                                    coverRadius={0.45}
                                                    coverFill={'#FFF'}
                                                />

                                                <View style={Styles.pieTextContent}>
                                                    <Text style={Styles.pieText}>180</Text>
                                                </View>

                                                <View style={Styles.pieSubTextContent}>
                                                    <Text style={Styles.pieSubText}>Total</Text>
                                                </View>
                                            </View>

                                            <View style={Styles.detailsContainer}>

                                                <View style={Styles.leadDetail}>
                                                    <View style={Styles.leftContainer}>
                                                        <View style={[Styles.leadLegend, { backgroundColor: CommonColors.new }]}></View>
                                                        <Text>{Labels.new}</Text>
                                                    </View>
                                                    <View style={Styles.rightContainer}>
                                                        <Text style={Styles.number}>{this.state.leadDetails[0].number}</Text>
                                                    </View>
                                                </View>

                                                <View style={Styles.leadDetail}>
                                                    <View style={Styles.leftContainer}>
                                                        <View style={[Styles.leadLegend, { backgroundColor: CommonColors.inProcess }]}></View>
                                                        <Text>{Labels.inProcess}</Text>
                                                    </View>
                                                    <View style={Styles.rightContainer}>
                                                        <Text style={Styles.number}>{this.state.leadDetails[1].number}</Text>
                                                    </View>
                                                </View>

                                                <View style={Styles.leadDetail}>
                                                    <View style={Styles.leftContainer}>
                                                        <View style={[Styles.leadLegend, { backgroundColor: CommonColors.converted }]}></View>
                                                        <Text>{Labels.converted}</Text>
                                                    </View>
                                                    <View style={Styles.rightContainer}>
                                                        <Text style={Styles.number}>{this.state.leadDetails[2].number}</Text>
                                                    </View>
                                                </View>

                                                <View style={Styles.leadDetail}>
                                                    <View style={Styles.leftContainer}>
                                                        <View style={[Styles.leadLegend, { backgroundColor: CommonColors.notInterest }]}></View>
                                                        <Text>{Labels.notInteres}</Text>
                                                    </View>
                                                    <View style={Styles.rightContainer}>
                                                        <Text style={Styles.number}>{this.state.leadDetails[3].number}</Text>
                                                    </View>
                                                </View>

                                                <View style={Styles.leadDetail}>
                                                    <View style={Styles.leftContainer}>
                                                        <View style={[Styles.leadLegend, { backgroundColor: CommonColors.notContactable }]}></View>
                                                        <Text>{Labels.notContactable}</Text>
                                                    </View>
                                                    <View style={Styles.rightContainer}>
                                                        <Text style={Styles.number}>{this.state.leadDetails[4].number}</Text>
                                                    </View>
                                                </View>

                                                <View style={Styles.leadDetail}>
                                                    <View style={Styles.leftContainer}>
                                                        <View style={[Styles.leadLegend, { backgroundColor: CommonColors.assigned }]}></View>
                                                        <Text>{Labels.assignedLabel}</Text>
                                                    </View>
                                                    <View style={Styles.rightContainer}>
                                                        <Text style={Styles.number}>{this.state.leadDetails[5].number}</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>

                </View>
            </View>

        )
    }
}

export const Styles = EStyleSheet.create({

    scrollEndSpace: {
        marginBottom: Labels.m200
    },

    background: {
        flex: 1,
        backgroundColor: CommonColors.leadBackgroundcolor,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    leadCount: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    space: {
        height: Labels.height10
    },

    leadDetails: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    leadDetail: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    noDataContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    LeadCountCountainer: {
        width: Labels.width100,
        height: Labels.height55,
        backgroundColor: (CommonColors.white),
        elevation: Labels.elevation7,
        borderRadius: Labels.borderRadiusMD,
    },

    leadDetailsContainer: {
        width: Labels.width100,
        height: Labels.height55,
        backgroundColor: (CommonColors.leadCardHeaderColor),
        elevation: Labels.elevation7,
        borderRadius: Labels.borderRadiusMD,
    },

    leadCountFont: {
        color: CommonColors.black,
        fontWeight: Labels.bold,
        fontSize: Labels.xl
    },

    monthFont: {
        color: CommonColors.black,
        fontWeight: Labels.bold,
        fontSize: Labels.xs
    },

    headerLabel: {
        color: CommonColors.leadTextColor,
        fontSize: Labels.xs
    },

    verticleLine: {
        height: Labels.height30,
        width: Labels.verticleLineWidth,
        backgroundColor: CommonColors.verticalLine,
    },

    leadDataCardHead: {
        width: Labels.leadDataCardHeadWidth,
        height: Labels.height55,
        backgroundColor: (CommonColors.leadCardHeaderColor),
        elevation: Labels.elevation7,
        borderTopLeftRadius: Labels.bottomRadius,
        borderTopRightRadius: Labels.bottomRadius,

    },

    leadDataCardBody: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Labels.leadDataCardBodyWidth,
        height: Labels.leadDataCardBodyHeight,
        backgroundColor: (CommonColors.white),
        elevation: Labels.elevation7,
        borderBottomLeftRadius: Labels.bottomRadius,
        borderBottomRightRadius: Labels.bottomRadius,
        padding: Labels.rightContainerPadding
    },

    noDataCardBody: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Labels.noDataWidth,
        height: Labels.noDataHeight,
        backgroundColor: (CommonColors.white),
        elevation: Labels.elevation7,
        borderBottomLeftRadius: Labels.bottomRadius,
        borderBottomRightRadius: Labels.bottomRadius,
        padding: Labels.rightContainerPadding
    },


    leadDataHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Labels.leadDataHeaderPadding,
    },

    pieContainer: {
        flex: 1,
        padding: Labels.pieContainerPadding,
    },

    detailsContainer: {
        flex: 1,
    },

    pieTextContent: {
        position: 'absolute',
        alignItems: 'Center',
        paddingLeft: Labels.p72,
        paddingTop: Labels.p72
    },

    pieText: {
        fontSize: Labels.pieTextSize,
        fontWeight: Labels.bold,
        color: CommonColors.black,
    },

    pieSubTextContent: {
        position: 'absolute',
        alignItems: 'Center',
        paddingLeft: Labels.p75,
        paddingTop: Labels.p97
    },

    pieSubText: {
        fontSize: Labels.xs,
        fontWeight: Labels.bold,
        color: CommonColors.leadTextColor,
    },


    legendView: {

        justifyContent: 'center',
        alignItems: 'flex-end',

    },

    leadLegend: {
        width: 7,
        height: 7,
        borderRadius: Labels.borderRadiusXXL,
        marginRight: 3

    },
    convertedlegend: {
        width: Labels.leagendwidth,
        height: Labels.leagendHeight,
        borderRadius: Labels.borderRadiusXXL,
        backgroundColor: CommonColors.darkSandle,

    },

    leftContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        padding: Labels.leftContainerPadding,

    },

    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        padding: Labels.p5
    },

    number: {
        fontWeight: Labels.bold,
        color: CommonColors.black
    }


})