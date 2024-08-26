import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import MenuCard from '../modal_popup/MenuCard';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';

function ActivityCard(props) {
    console.log(props.history, 'activity')
    return (
        <View style={styles.card}>
            {/* row 1 */}
            <View style={styles.prospectDetail}>

                <View style={styles.leftContainer}>
                    <View>
                        <TouchableOpacity>
                            <View style={[styles.icon, { backgroundColor: isNotEmpty(props.iconColor) ? props.iconColor : CommonColors.Avocado }]}>
                                <View style={styles.iconContent}>
                                    <Text style={styles.iconText}>{props.iconText}</Text>
                                </View>
                            </View>
                            {props.history != 0 && (
                                <View style={styles.activeIndicator}></View>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.leftTextContainer}>
                        <Text style={styles.font}>{props.name}</Text>
                        <View style={styles.lineSpace}></View>
                        <Text style={styles.label}>{props.code}</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <View>
                        <View style={styles.rightTextContainer}>
                            <Text style={[styles.rightAlign, styles.font]}>{Labels.ratio}</Text>
                            <View style={styles.lineSpace}></View>
                            <Text style={[styles.rightAlign, styles.label]}>{Labels.revenu}</Text>
                        </View>
                    </View>

                    <View>

                        <MenuCard menuCardList={props.activityList}
                            hideMenu={(val) => { props.menuCardValue }}
                        />

                    </View>
                </View>
            </View>
            <View style={styles.verticalSpace}></View>


            {/* row 2 */}

            <View style={styles.prospectDetail}>
                <View style={styles.leftContainerRow2}>
                    <View style={styles.leftTextContainerRow2}>
                        <View>
                            <TouchableOpacity
                                style={[styles.badge,
                                {
                                    backgroundColor: props.badgeColor,
                                    borderColor: props.badgeBorder
                                }
                                ]}
                            >
                                <Text style={[styles.badgeText,
                                { color: isNotEmpty(props.badgeBorder) ? props.badgeBorder : Labels.white }]}>
                                    {props.badgeText}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.rightContainer2}>
                    <View style={[styles.rightTextContainerRow2, styles.prospectDetail]}>
                        <Text style={styles.label}>{Labels.activityStatus}</Text>
                        <Text style={styles.text}>Held</Text>
                    </View>
                </View>
            </View>
            <View style={styles.verticalSpace}></View>

            {/* row 3 */}
            <View style={styles.prospectDetail}>

                <View style={styles.leftContainerRow2}>
                    <View style={styles.leftTextContainerRow2}>
                        <Text style={styles.label}>{Labels.assignedTo}</Text>
                        <View style={styles.lineSpace}></View>
                        <Text style={styles.text}>{Labels.anandMishra}</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <View style={styles.rightTextContainerRow3}>
                        <Text style={[styles.label, styles.rightAlign]}>{Labels.invitee}</Text>
                        <View style={styles.lineSpace}></View>
                        <Text style={[styles.text, styles.rightAlign]}>{Labels.yogeshDhayfule}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.verticalSpace}></View>

            {/* row 4 */}

            <View style={styles.prospectDetail}>
                <View style={styles.leftContainerRow2}>
                    <View style={styles.leftTextContainerRow2}>
                        <Text style={styles.label}>{Labels.tagging}</Text>
                        <View style={styles.lineSpace}></View>
                        <Text style={styles.text}>{Labels.preferred}</Text>
                    </View>

                </View>

                <View style={styles.rightContainer}>
                    <View style={styles.rightTextContainerRow4}>
                        <Text style={[styles.label, styles.rightAlign]}>{Labels.ActivityCreatedDate}</Text>
                        <View style={styles.lineSpace}></View>
                        <Text style={[styles.text, styles.rightAlign]}>22 may 2023, 10:45</Text>
                    </View>

                </View>
            </View>
            <View style={styles.verticalSpace}></View>

            {/* row 5 */}

            <View style={styles.prospectDetail}>
                <View style={styles.leftContainerRow5}>
                    <View style={styles.leftTextContainer}>
                        <Text style={styles.label}>{Labels.outcome}</Text>
                        <View style={styles.lineSpace}></View>

                        <Text style={styles.text}>Lorem ipsum dolor sit amet,</Text>
                        <Text style={styles.text}>consectetur adipiscing elit...</Text>
                    </View>
                </View>

                <View style={styles.rightContainerRow5}>
                    <View style={styles.rightTextContainerRow5}>
                        <View>
                            <Text style={[styles.label, styles.rightAlign]}>{Labels.history}</Text>
                            <View style={styles.lineSpace}></View>
                        </View>
                        <View style={styles.lineSpace}></View>
                        <View>
                            <View style={[styles.prospectDetail, styles.rightTextContainerRow6]}>
                                <Text style={[styles.text, styles.rightAlign]}>4</Text>
                                {props.history == 0 ?
                                    (<Image
                                        source={require('../../assets/images/png/DisabledClock.png')}
                                        style={styles.image}
                                        resizeMode='contain'
                                    />) :
                                    (<Image
                                        source={require('../../assets/images/png/EnabledClock.png')}
                                        style={styles.image}
                                        resizeMode='contain'
                                    />) 
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ActivityCard;


const styles = EStyleSheet.create({
    card: {
        height: Labels.height270,
        backgroundColor: (CommonColors.white),
        elevation: Labels.elevation7,
        borderRadius: Labels.borderRadiusXL,
        margin: Labels.m10,
        padding: Labels.p10,
    },

    //icon

    icon: {
        width: Labels.iconWidth,
        height: Labels.iconHeight,
        borderRadius: Labels.borderRadius25,
        position: 'relative',
    },

    iconText: {
        fontSize: Labels.xss,
        fontWeight: Labels.bold,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: CommonColors.white,
    },

    iconContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    //font
    font: {
        fontWeight: Labels.bold,
        fontSize: Labels.md,
        color: CommonColors.black
    },
    label: {
        color: CommonColors.activityLabel,
        fontSize: Labels.ss
    },

    text: {
        color: CommonColors.activityText,
        fontSize: Labels.xs,
        fontWeight: '500'
    },

    //badge 

    badge: {
        height: Labels.height23,
        minWidth: Labels.width50,
        borderRadius: Labels.borderRadiusLG,
        borderWidth: Labels.borderWidthSize,
        padding: Labels.p1,
        paddingHorizontal: Labels.p5
    },

    badgeText: {
        fontWeight: Labels.bold
    },

    activeIndicator: {
        position: 'absolute',
        width: 10,
        height: 10,
        borderRadius: 5,
        left: 25,
        backgroundColor: CommonColors.activeIndicator,
        borderWidth: Labels.borderWidthSize,
        borderColor: CommonColors.white
    },


    image: {
        height: Labels.height23,
       
    },

    //space

    verticalSpace: {
        height: Labels.height10,
    },

    lineSpace: {
        height: Labels.height3,
    },

    //row 1

    prospectDetail: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    leftContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0,
        backgroundColor: CommonColors.white
    },

    rightContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 0,
        backgroundColor: CommonColors.white
    },

    rightTextContainer: {
        alignSelf: 'flex-end',
        paddingHorizontal: Labels.p7,
        paddingLeft: Labels.p65
    },

    leftTextContainer: {
        alignSelf: 'flex-start',
        paddingLeft: Labels.p10
    },

    rightAlign: {
        textAlign: 'right',
    },

    //row 2

    leftContainerRow2: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: Labels.p30,
        backgroundColor: CommonColors.white
    },

    leftTextContainerRow2: {
        alignSelf: 'flex-start',
        paddingLeft: Labels.p10
    },

    rightContainer2: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 0,
        backgroundColor: CommonColors.white
    },

    rightTextContainerRow2: {
        alignSelf: 'flex-end',
        paddingHorizontal: Labels.p7,
        paddingLeft: Labels.p40
    },

    //row3


    rightTextContainerRow3: {
        alignSelf: 'flex-end',
        paddingHorizontal: Labels.p7,
        paddingLeft: Labels.p7
    },


    //row 4

    rightTextContainerRow4: {
        alignSelf: 'flex-end',
        paddingHorizontal: Labels.p7,
        paddingLeft: 45
    },

    //row 5

    leftContainerRow5: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: Labels.p30,
        backgroundColor: CommonColors.white
    },

    rightContainerRow5: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 0,
        backgroundColor: CommonColors.white
    },

    rightTextContainerRow5: {
        alignSelf: 'flex-end',
        paddingHorizontal: Labels.p7,
        paddingLeft: Labels.p40,

    },

    rightTextContainerRow6: {
        alignSelf: 'flex-end',
        paddingHorizontal: 0,
        paddingLeft: Labels.p30,
        backgroundColor: CommonColors.white,
    },

})