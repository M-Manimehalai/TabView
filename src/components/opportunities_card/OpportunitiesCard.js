import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from "../../utils/constants/labels/Labels";
import CommonColors from "../../utils/constants/colors/CommonColors";
import { Fonts } from "../../utils/constants/fonts/Fonts";
import Icon from 'react-native-vector-icons/Entypo';
import MenuCard from "../modal_popup/MenuCard";

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

function OpportunitiesCard(props) {
    return (
        <View>
            {props.flag == 'addOpportunity' ?
                <View>
                    <Card style={styles.cardContainer}>
                        <View style={styles.rowView}>
                            <View style={styles.imageView}>
                                <Image source={props.source} style={styles.imageView}/>
                            </View>
                            <View style={styles.nameView}>
                                <Text style={styles.valueText}>{props.name}</Text>
                                <Text style={styles.labelText}>{props.amount}</Text>
                            </View>
                        </View>
                        <View style={styles.commonView}></View>
                        <View style={styles.rowView}>
                            <View style={styles.columnFirstView}>
                                <Text style={styles.labelView}>{Labels.mobileNo}</Text>
                                <Text style={styles.valueView}>{props.call}</Text>
                            </View>
                            <View style={styles.columnEndView}>
                                <Text style={styles.labelView}>{Labels.emailID}</Text>
                                <Text style={styles.valueView}>{props.email}</Text>
                            </View>
                        </View>
                    </Card>
                </View>
                :
                <Card style={styles.cardContainer} onPress={props.onPress}>
                    {/* <TouchableOpacity onPress={props.onPress}> */}
                    <View style={styles.rowView}>
                        <View style={styles.columnFirstView}>
                            <Image source={props.source} />
                        </View>
                        <View style={styles.columnFirstView}>
                            <Text style={styles.valueText}>{props.name}</Text>
                            <Text style={styles.labelText}>{props.amount}</Text>
                        </View>
                        <View style={styles.columnEndView}>
                            <Text style={styles.valueText}>{props.ratio}</Text>
                            <Text style={styles.labelText}>{props.revenue}</Text>
                        </View>
                        <View style={styles.icon}>
                            <MenuCard menuCardList={props.menuCardList} hideMenu={(val) => { props.menuCardValue(val) }} />
                        </View>
                    </View>
                    <View style={styles.rowDateView}>
                        <View style={styles.columnFirstView}>
                            <Text style={styles.labelText}>{props.targateDateLabel}</Text>
                        </View>
                        <View style={styles.columnFirstView}>
                            <Text style={styles.valueText}>{props.targateDate}</Text>
                        </View>
                        <View style={styles.columnEndView}>
                            <Text style={styles.labelText}>{props.invtAmountLabel}</Text>
                        </View>
                        <View style={styles.columnEndView}>
                            <Text style={styles.valueText}>{props.invtAmount}</Text>
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.columnFirstView}>
                            <Text style={styles.labelText}>{props.productTypeLabel}</Text>
                            <Text style={styles.valueText}>{props.productTypes}</Text>
                        </View>
                        <View style={styles.columnEndView}>
                            <Text style={styles.labelText}>{props.assignedLabel}</Text>
                            <Text style={styles.valueText}>{props.assignedName}</Text>
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.columnFirstView}>
                            <Text style={styles.labelText}>{props.oppertunityStageLabel}</Text>
                            <Text style={styles.valueText}>{props.oppertunityStage}</Text>
                        </View>
                        <View style={styles.columnEndView}>
                            <Text style={styles.labelText}>{props.probabilityTaggingLabel}</Text>
                            <Text style={styles.valueText}>{props.probabilityTagging}</Text>
                        </View>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.columnFirstView}>
                            <Text style={styles.labelText}>{props.fiscalPeriodLabel}</Text>
                            <Text style={styles.valueText}>{props.fiscalPeriod}</Text>
                        </View>
                        <View style={styles.columnEndView}>
                            <Text style={styles.labelText}>{props.historyLabel}</Text>
                            <MaterialCommunityIcons name={"clock-fast"} size={40} margin={5} alignSelf='flex-end' />
                        </View>
                    </View>
                    {/* </TouchableOpacity> */}
                </Card>
            }
        </View>
    )
}

const styles = EStyleSheet.create({
    cardContainer: { margin: Labels.m5, backgroundColor: CommonColors.white, marginTop: Labels.m2, borderRadius: Labels.borderRadiusLG },
    rowView: { flexDirection: 'row' },
    rowDateView: { flexDirection: 'row', backgroundColor: CommonColors.cosmicLatte },
    columnFirstView: { flexDirection: 'column', alignItems: 'flex-start', marginLeft: Labels.m18, marginTop: Labels.m8 },
    columnEndView: { flexDirection: 'column', flex: 1, alignItems: "flex-end", marginLeft: Labels.m18, marginTop: Labels.m8 },
    columnEndHeaderView: { flexDirection: 'column', alignItems: "flex-end", marginTop: Labels.m5, marginRight: Labels.m5 },
    labelText: {
        fontSize: Labels.xs,
        color: CommonColors.tableheader,
        fontFamily: Fonts.globalrobotofonts.Rregular
    },
    valueText: {
        fontSize: Labels.xs,
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rmedium,
    },
    valueView: {
        fontSize: Labels.xs,
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rmedium,
        marginLeft: Labels.m28,
        marginRight: Labels.m16
    },
    labelView: {
        fontSize: Labels.xs,
        color: CommonColors.tableheader,
        fontFamily: Fonts.globalrobotofonts.Rregular,
        marginLeft: Labels.m28,
        marginRight: Labels.m16
    },
    icon: { marginTop: Labels.m16 },
    commonView: { marginTop: Labels.m6 },
    imageView: {flexDirection: 'column', alignItems: 'flex-start', marginLeft: Labels.m5, marginTop: Labels.m5 },
    nameView: {flexDirection: 'column', alignItems: 'flex-start', marginLeft: Labels.m10, marginTop: Labels.m5}
});

export default OpportunitiesCard;
