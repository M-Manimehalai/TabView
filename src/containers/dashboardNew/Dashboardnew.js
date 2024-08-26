import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Header from '../../components/header/Header';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Card from '../../components/card/Card';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Prospectcontact from '../leadandclient/LeadandClient';
import Prospects from '../../components/prospects/Prospects';
import Toggle from '../../components/toggle/Toggle';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import Leaddetailscard from '../../components/leadDetailsCard/Leaddetailscard';
import ModalPopUp from '../../components/modal_popup/ModalPopUp';
import Tabview from '../../components/tab_view/TabViews';
import MyComponent from '../drawer/Drawer';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Dashboardnew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchbar: true,
      isEnabled: false,
      isClickedLeads: false,
      contactList: [{
        id: '1',
        imageUrl: require("../../assets/images/png/userImage.png"),
        name: Labels.leadName1,
        leadId: Labels.leadId1,
        mettingsDone: Labels.meetingdone1,
        revenueAmount: Labels.revenuAmount1,
        revenuAmountInLac: Labels.revenuAmountInLac1,
      },
      {
        id: '2',
        imageUrl: require("../../assets/images/png/userImage(1).png"),
        name: Labels.leadName2,
        leadId: Labels.leadId2,
        mettingsDone: Labels.meetingdone2,
        revenueAmount: Labels.revenuAmount2,
        revenuAmountInLac: Labels.revenuAmountInLac2,
        iconname: "dots-three-vertical",
      },
      {
        id: '3',
        imageUrl: require("../../assets/images/png/userImage(2).png"),
        name: Labels.leadName3,
        leadId: Labels.leadId1,
        mettingsDone: Labels.meetingdone3,
        revenueAmount: Labels.revenuAmountInLac3,
        revenuAmountInLac: Labels.revenuAmountInLac3,
        iconname: "dots-three-vertical",
      },
      {
        id: '4',
        imageUrl: require("../../assets/images/png/userImage(3).png"),
        name: Labels.leadName4,
        leadId: Labels.leadId4,
        mettingsDone: Labels.meetingdone4,
        revenueAmount: Labels.revenuAmountInLac4,
        revenuAmountInLac: Labels.revenuAmountInLac4,
        iconname: "dots-three-vertical",
      },
      {
        id: '5',
        imageUrl: require("../../assets/images/png/userImage(4).png"),
        name: Labels.leadName5,
        leadId: Labels.leadId4,
        mettingsDone: Labels.meetingdone5,
        revenueAmount: Labels.revenuAmountInLac5,
        revenuAmountInLac: Labels.revenuAmountInLac5,
        iconname: "dots-three-vertical",
      }
      ],
      leadDetailsList: [
        {
          id: '1',
          imageUrl: require('../../assets/images/png/leaduser(1).png'),
          name: Labels.baveshKapsadia,
          styles: styles.meetingView,
          text: Labels.meeting,
          textStyle: styles.meetingText,

        },
        {
          id: '2',
          imageUrl: require('../../assets/images/png/leaduser(2).png'),
          name: Labels.nagadharBandi,
          styles: styles.callView,
          text: Labels.calls,
          textStyle: styles.callText,

        },
        {
          id: '3',
          imageUrl: require('../../assets/images/png/leaduser(3).png'),
          name: Labels.smithaIyar,
          styles: styles.noMeetView,
          text: Labels.nonbusinessmeet,
          textStyle: styles.noMeetText,

        }
      ],
      menuList: [{
        id: '1',
        value: Labels.call9837432473,
        label: '1'
      },
      {
        id: '2',
        value: Labels.updateactivity,
        label: '2'
      },
      {
        id: '3',
        value: Labels.addActivity,
        label: '3'
      },
      {
        id: '4',
        value: Labels.addOpportunity,
        label: '4'
      }],
      activityList: [{
        id: '1',
        value: Labels.addActivity,
        label: '1'
      },
      {
        id: '2',
        value: Labels.addOppertunity,
        label: '2'
      }]
    }
  }
  componentDidMount = () => {

  }
  componentDidUpdate = () => {

  }

  componentWillUnmount() {

  }
  // onPressLeads = () => {
  //   this.setState({ isClickedLeads: !this.state.isClickedLeads });
  // };
  navigateprospects = () => {
    const { isSearchbar } = this.state;
    this.props.navigation.navigate('Prospects', { data: isSearchbar })

  }
  toggleSwitch = () => {
    this.setState({
      isEnabled: !this.state.isEnabled
    });
  }
  handleCardPress = (cardId) => {

    this.setState({ isSelected: cardId });
  }
  menuCardValue = (val) => {
    console.log(val)
  }
  activityCardValue = (value) => {
    console.log(value)
  }
  openDrawer = () => {
    this.props.navigation.navigate('myComponent')
  }
  render(props) {
    const { isEnabled } = this.state;
    return (
      <View style={styles.dadhboardView}>

        <MyComponent Dashboard={true} />
        <ScrollView>
           <View style={styles.lineView} /> 
           <View style={styles.targetView}>
            <View style={styles.cardHeaderText}>
              <Text style={styles.targetText}>{Labels.targetvsAchievement}</Text>
              <Text style={styles.monthText}>{Labels.thismonth}</Text>
            </View>
          </View> 

           <View style={styles.dashboardBottomView}> 
             <View style={styles.cardMergeView}>
              <Card />

            </View> 

             <View style={styles.prospectsView}>
              <Text style={styles.prospectsTextView}>{Labels.propspects}</Text>
              <TouchableOpacity onPress={this.navigateprospects} >
                <Icon name="chevron-right" size={24} style={styles.prospectsIconView} ></Icon>
              </TouchableOpacity>
            </View>

            {/* <View style={styles.leadsheaderView}>
         <TouchableOpacity onPress={this.prospects}>
           <Icon name="chevron-right" size={24} style={styles.prospectsIconView} ></Icon>
         </TouchableOpacity>
       </View>
        {/* <View style={styles.leadsheaderView}>
         <Text style={styles.textLeads}>{Labels.leads}</Text>
         <Text>{Labels.clients}</Text>
         <Text>{Labels.dormants}</Text>

       </View> 
              <View style={{flex: 1, height: 350 ,marginTop:20 }}>
              <Tabview dashBoard={true} />
            </View>   
            {/* <View style={styles.leadsTitleView}>
              <Text style={styles.leadsnameView}>{Labels.name}</Text>
              <Text style={styles.leadsnameView}>{Labels.leadsId}</Text>
              <View style={styles.leadsmettingView}>
                <Text style={styles.leadstextView}>{Labels.metting}</Text>
                <Text style={styles.leadstextView}>{Labels.done}</Text>
              </View>
              <View style={styles.leadsAmountView}>
                <Text style={styles.leadstextView}>{Labels.revenue}</Text>
                <Text style={styles.leadstextView}>{Labels.amount}</Text>
              </View>
            </View>
            <View>
              <FlatList
                data={this.state.contactList}
                numColumns={1}
                style={styles.flatListView}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                  <Prospects
                    imageUrl={item.imageUrl}
                    name={item.name}
                    leadId={item.leadId}
                    mettingsDone={item.mettingsDone}
                    revenueAmount={item.revenueAmount}
                    revenuAmountInLac={item.revenuAmountInLac}
                    iconname={item.iconname} />}
              />
            </View> */}
           </View> 
          <View style={styles.leadsAndClientView}>
            <View style={styles.mergerCard}>
              <View style={styles.toggleLeadView}>
                <View style={styles.textAndToggleView}>
                  <Text style={[styles.toggletext, isEnabled ? styles.dimmedText : null]}>{Labels.leads}</Text>
                  <Toggle isEnabled={isEnabled}
                    onToggle={this.toggleSwitch} />
                  <Text style={[styles.toggletext, isEnabled ? null : styles.dimmedText]}>{Labels.clients}</Text>
                </View>
                <View style={styles.textAndToggleView}>
                  <Text style={styles.monthtext}>{Labels.thismonth}</Text>
                </View>
              </View>
              {isEnabled ? (<View style={styles.scheduleView}>
                <View style={styles.clientCount}>
                  <Text style={styles.leadCardValue}>{Labels.clients480}</Text>
                  <Text>{Labels.Totalclient}</Text>
                </View>
              </View>) :
                (
                  <View style={styles.scheduleView}>
                    <View style={styles.leadsDetailsView}>
                      <Text style={styles.leadCardValue}>{Labels.lead180}</Text>
                    </View>
                    <View style={styles.inProcessCard}>
                      <View style={styles.newView}>
                        <Text style={styles.newValueView}>{Labels.lead10}</Text>
                        <Text style={styles.newTextView}>{Labels.new}</Text>
                      </View>
                      <View style={styles.verticalLine}></View>
                      <View style={styles.newView}>
                        <Text style={styles.newValueView}>{Labels.lead04}</Text>
                        <Text style={styles.newTextView}>{Labels.Assigned}</Text>
                      </View>
                      <View style={styles.verticalLine}></View>
                      <View style={styles.newView}>
                        <Text style={styles.newValueView}>{Labels.lead140}</Text>
                        <Text style={styles.newTextView}>{Labels.inprocess}</Text>
                      </View>
                      <View style={styles.verticalLine}></View>
                      <View style={styles.newView}>
                        <Text style={styles.newValueView}>{Labels.lead20}</Text>
                        <Text style={styles.newTextView}>{Labels.Converted}</Text>
                      </View>
                      <View style={styles.verticalLine}></View>
                      <View style={styles.newView}>
                        <Text style={styles.newValueView}>{Labels.lead06}</Text>
                        <Text style={styles.newTextView}>{Labels.Others}</Text>
                      </View>
                    </View>
                  </View>
                )}
              <View style={styles.scheduleIconview}>
                <View style={styles.rightChevron}>
                  <Feather name="chevron-left" size={24} style={styles.iconColor}></Feather>
                </View>
                <View style={styles.scheduleDetailsView}>
                  <Text>{Labels.schedule}</Text>
                  <Text style={styles.scheduleTextView}>{Labels.scheduleDateTime}</Text>
                </View>
                <View style={styles.leftChevron}>
                  <Feather name="chevron-right" size={24} style={styles.iconColor}></Feather>
                </View>
              </View>
              <View>
                <FlatList
                  data={this.state.leadDetailsList}
                  numColumns={1}
                  style={styles.leadFlatlistView}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) =>
                    <Leaddetailscard
                      id={item.id}
                      imageUrl={item.imageUrl}
                      name={item.name}
                      styles={item.styles}
                      text={item.text}
                      textStyle={item.textStyle}
                      menuCardList={this.state.menuList}
                      menuCardValue={(val) => this.menuCardValue(val)}
                    />
                  }
                />

              </View>
            </View>
            <View style={styles.NewAssignedLeadsHeaderView}>
              <Text style={styles.newAssignedleadsText}>{Labels.newAssignedleads}</Text>
            </View>
            <View style={styles.NewAssignedLeadsView}>
              <View style={styles.newleadnameView}>
                <View style={styles.newnameImageView}>
                  <Image style={styles.newleadImageView} source={(require('../../assets/images/png/newAssignedleadUser.png'))} ></Image>
                  <View style={styles.newtextwrap}>
                    <Text style={styles.newleadtextView}> {Labels.AndrewNolan}</Text>
                    <Text style={styles.newleadId}>{Labels.leadId1}</Text>
                  </View>
                </View>
                <Icon name="dots-three-vertical" size={18} style={styles.dotsIcon}></Icon>
              </View>
              <View style={styles.referralDaysView} >
                <View style={styles.referralView}>
                  <Text style={styles.referralTextView}>{Labels.Referral}</Text>
                </View>
                <Text style={styles.Ageing}>{Labels.Ageing} <Text style={styles.days}>{Labels.days15}</Text></Text>
              </View>
              <View style={styles.MarvinView}>
                <Image style={styles.newMarvinImageView} source={(require('../../assets/images/png/Marvin.png'))}></Image>
                <Text style={styles.marvinText}>{Labels.marvinmckinney}</Text>
              </View>
            </View>
          </View>
        </ScrollView >
      </View >

    )

  }
}
const styles = EStyleSheet.create({
  targetView: {
    width: Labels.width100,
    height: Labels.targetViewHeight,
    backgroundColor: CommonColors.CostaDelSol,
  },
  targetText: {
    fontSize: Labels.md,
    flex: 1,
    color: CommonColors.white
  },
  monthText: {
    fontSize: Labels.md,
    textAlign: 'right',
    color: CommonColors.white

  },
  textLeads: {
    fontSize: Labels.xsm,
    color: CommonColors.black,
    fontFamily: Fonts.globalrobotofonts.Rmedium,
    borderBottomWidth: Labels.m2,
    padding: Labels.p14,
    borderBottomColor: CommonColors.black,
  },
  leadsOnPress: {
    color: CommonColors.CostaDelSol,
  },
  cardHeaderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Labels.p24,
    marginTop: Labels.m18
  },

  lineView: {
    width: Labels.width100,
    height: 0.5,
    backgroundColor: CommonColors.golden,

  },
  dadhboardView: {
    flex: 1
  },
  leadstextView: {
    color: CommonColors.blackgreen,
    fontFamily: Fonts.globalrobotofonts.Rmedium,
    fontSize: Labels.xs,
    textAlign: "right",
  },
  leadHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leadsTitleView: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: CommonColors.litegreen,
    height: Labels.textBoxHeight,
    marginHorizontal: Labels.m12,
    paddingHorizontal: Labels.p10,
  },

  leadsmettingView: {
    marginLeft: 120,
  },
  leadsnameView: {
    textAlign: "left",
    color: CommonColors.blackgreen,
    fontFamily: Fonts.globalrobotofonts.Rmedium,
    fontSize: Labels.xs,
  },
  prospectsTextView: {
    color: CommonColors.white,
    fontFamily: Fonts.globalrobotofonts.Rbold,
    fontSize: Labels.xsm,
  },
  prospectsIconView: {
    color: CommonColors.white,
  },
  leadsAmountView: {
    marginLeft: Labels.m24,
  },
  dashboardBottomView: {
    flex: 1,
    backgroundColor: CommonColors.litegreen,
  },
  prospectsView: {

    backgroundColor: CommonColors.darkgolden,
    height: Labels.textBoxHeight,
    marginTop: Labels.propspectsHeight,
    marginHorizontal: Labels.m12,
    borderTopLeftRadius: Labels.borderRadiusXL,
    borderTopRightRadius: Labels.borderRadiusXL,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Labels.p18,
  },
  leadsheaderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: CommonColors.white,
    height: Labels.textBoxHeight,
    marginHorizontal: Labels.m12,
    paddingHorizontal: Labels.p24,
  },

  cardMergeView: {
    marginVertical: Labels.cardDivder
  },
  flatListView: {
    //marginTop: Labels.m28,
    //alignItems: 'center',
    //justifyContent: 'space-between',
    //flexDirection: 'row',
    //flexWrap: 'wrap',
  },
  leadsAndClientView: {
    flex: 1,
    backgroundColor: CommonColors.litegreen,
    paddingBottom: Labels.m80
  },
  toggleLeadView: {
    width: Labels.width100,
    height: Labels.leadcardHeight,
    backgroundColor: CommonColors.darkGreen,
    backgroundColor: CommonColors.CostaDelSol,
    marginTop: Labels.m16,
    borderBottomLeftRadius: Labels.borderRadiusXL,
    borderBottomRightRadius: Labels.borderRadiusXL,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    //flexDirection: 'column', 
    //paddingHorizontal: 40,
  },
  textAndToggleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Labels.m16,
  },
  monthtext: {
    fontSize: Labels.md,
    color: CommonColors.white
  },
  toggletext: {
    fontSize: Labels.md,
    color: CommonColors.white,

  },
  toggleStyle: {
    //boderColor : 'green', 
    //fontSize: Labels.md,
    //borderWidth: 2, // Border width
    //borderRadius: 20, // Border radius (adjust as needed)
    //borderColor: 'blue'
    //color: CommonColors.white,
  },
  leadCardValue: {
    textAlign: "center",
    fontFamily: Fonts.globalrobotofonts.Rbold,
    fontSize: Labels.xl,
    color: CommonColors.black,
    marginTop: Labels.m6,
    flexWrap: "wrap",
  },
  dimmedText: {
    opacity: Labels.opacity0_5,
  },
  leadsDetailsView: {
    flex: 1,
    backgroundColor: CommonColors.white,
    borderRadius: Labels.borderRadiusXL,
    marginHorizontal: Labels.m12,
    marginVertical: Labels.leadclientcard,
    padding: Labels.p10,
    height: Labels.leadheight,
  },
  inProcessCard: {
    flexDirection: "row",
    backgroundColor: CommonColors.ChileanHeath,
    height: Labels.textBoxHeight,
    marginHorizontal: Labels.m12,
    marginTop: Labels.m12,
    paddingHorizontal: Labels.p24,
    justifyContent: "space-between",
  },
  newView: {
    //alignItems : "center",
    justifyContent: "center",
    flexWrap: 'wrap',
    alignItems: "center"
  },
  newValueView: {

    fontSize: Labels.xsm,
    color: CommonColors.black,
    fontFamily: Fonts.globalrobotofonts.Rbold,
  },
  newTextView: {
    fontSize: Labels.xs,
  },
  verticalLine: {
    width: Labels.borderWidthSize2,
    height: "60%",
    alignItems: "center",
    backgroundColor: CommonColors.MintJulep,
    marginTop: Labels.m10,
  },
  scheduleView: {
    flex: 1,
    //backgroundColor: Labels.litegreen
  },
  scheduleDetailsView: {
    marginTop: Labels.m15,
    backgroundColor: CommonColors.white,
    height: Labels.scheduleBarHeight,
    //marginHorizontal: Labels.m80,
    paddingHorizontal: Labels.p50,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap,",
    marginBottom: Labels.m3,

  },
  scheduleIconview: {
    flexDirection: "row",
    marginHorizontal: Labels.m10,
  },
  rightChevron: {
    marginTop: Labels.m15,
    backgroundColor: CommonColors.white,
    marginHorizontal: Labels.m1,
    width: "17%",
    padding: Labels.p10,
    height: Labels.scheduleBarHeight,
    justifyContent: "center",
    alignItems: "center",

  },
  scheduleTextView: {
    fontSize: Labels.md,
    color: CommonColors.Rhino,
    fontFamily: Fonts.globalrobotofonts.Rbold,
  },
  leftChevron: {
    marginTop: Labels.m15,
    backgroundColor: CommonColors.white,
    marginHorizontal: Labels.m1,
    width: "17%",
    height: Labels.scheduleBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  iconColor: {
    color: CommonColors.Rhino,
  },
  NewAssignedLeadsHeaderView: {
    flex: 1,
    marginTop: Labels.m15,
    borderTopLeftRadius: Labels.borderRadiusXL,
    borderTopRightRadius: Labels.borderRadiusXL,
    backgroundColor: CommonColors.Rhino,
    //marginVertical: Labels.cardDivder,
    height: Labels.textBoxHeight,
    marginHorizontal: Labels.m12,
    marginBottom: Labels.m1,
    paddingTop: Labels.p15,
  },
  NewAssignedLeadsView: {
    flex: 1,
    marginTop: Labels.m0,
    backgroundColor: CommonColors.white,
    //marginVertical: Labels.cardDivder,
    height: Labels.cardHeight160,
    marginHorizontal: Labels.m12,
    marginBottom: Labels.m1,
    paddingTop: Labels.p15,
    borderBottomLeftRadius: Labels.borderRadiusXL,
    borderBottomRightRadius: Labels.borderRadiusXL,
  },
  newAssignedleadsText: {
    fontSize: Labels.xsm,
    color: CommonColors.white,
    fontFamily: Fonts.globalrobotofonts.Rbold,
    paddingHorizontal: Labels.p12
  },
  newleadnameView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Labels.m16,
  },
  newnameImageView: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  newleadImageView: {

  },
  newtextwrap: {
    //flexWrap: 'wrap',
  },
  newleadtextView: {

    fontSize: Labels.md,
    color: CommonColors.black,
    paddingHorizontal: Labels.p10,
    fontFamily: Fonts.globalrobotofonts.Rbold,
  },
  newleadId: {
    marginLeft: Labels.m12,
    marginRight: Labels.m8
  },
  referralView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    marginTop: Labels.m15,
    backgroundColor: CommonColors.PersianGreenlite,
    width: "18%",
    marginHorizontal: Labels.m40,
    marginBottom: Labels.lineHeight20,
    borderWidth: Labels.borderWidthSize,
    borderColor: CommonColors.PersianGreenBorder,
    borderRadius: Labels.borderRadiusMD,
  },
  referralTextView: {
    fontSize: Labels.xss,
    fontFamily: Fonts.globalrobotofonts.Rmedium,
    color: CommonColors.PersianGreen
  },
  referralDaysView: {
    justifyContent: 'space-between',
    flexDirection: "row",
    marginHorizontal: Labels.m10,
  },
  Ageing: {
    marginTop: Labels.m10,
    //paddingLeft: 80
    //paddingHorizontal : 30
  },
  MarvinView: {
    flexDirection: "row",
    marginBottom: Labels.lineHeight20,
    marginHorizontal: Labels.m48
  },
  marvinText: {
    paddingHorizontal: Labels.p10,
    color: CommonColors.black,
    fontFamily: Fonts.globalrobotofonts.Rmedium,
  },
  meetingView: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: Labels.m15,
    backgroundColor: CommonColors.ElectricVioletlite,
    width: "20%",
    marginHorizontal: Labels.m8,
    height: Labels.mettingCard,
    borderWidth: Labels.borderWidthSize,
    borderColor: CommonColors.ElectricVioletBorder,
    borderRadius: Labels.borderRadiusMD,
  },
  meetingText: {
    alignItems: "center",
    justifyContent: 'center',
    color: CommonColors.ElectricViolet,
    fontSize: Labels.xs,
    fontFamily: Fonts.globalrobotofonts.Rbold,
  },
  callView: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: Labels.m15,
    backgroundColor: CommonColors.Sciencebluelite,
    width: "10%",
    marginHorizontal: Labels.m8,
    height: Labels.mettingCard,
    borderWidth: Labels.borderWidthSize,
    borderColor: CommonColors.ScienceblueBorder,
    borderRadius: Labels.borderRadiusMD,
  },
  callText: {
    alignItems: "center",
    justifyContent: 'center',
    color: CommonColors.Scienceblue,
    fontSize: Labels.xs,
    fontFamily: Fonts.globalrobotofonts.Rbold,
  },
  noMeetView: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: Labels.m15,
    backgroundColor: CommonColors.Thunderbirdlite,
    width: "40%",
    marginHorizontal: Labels.m8,
    height: Labels.mettingCard,
    borderWidth: Labels.borderWidthSize,
    borderColor: CommonColors.Thunderbirdborder,
    borderRadius: Labels.borderRadiusMD,
  },
  noMeetText: {
    alignItems: "center",
    justifyContent: 'center',
    color: CommonColors.Thunderbird,
    fontSize: Labels.xs,
    fontFamily: Fonts.globalrobotofonts.Rbold,
  },
  days: {
    color: CommonColors.black,
    fontFamily: Fonts.globalrobotofonts.Rbold,
  },
  clientCount: {
    flex: 1,
    backgroundColor: CommonColors.white,
    borderRadius: Labels.borderRadiusXL,
    marginHorizontal: Labels.m12,
    marginVertical: Labels.leadclientcard,
    padding: Labels.p10,
    height: Labels.leadheight,
    marginBottom: Labels.m1,
    alignItems: "center",
    justifyContent: 'center',
  },



});
export default Dashboardnew;