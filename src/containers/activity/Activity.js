import { Text, View, TouchableOpacity, Image, ScrollView, Modal, Dimensions, FlatList, TextInput } from 'react-native'
import React, { Component } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Labels from '../../utils/constants/labels/Labels';
import Button from '../../components/button/Button';
import Textbox from '../../components/textbox/Textbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuCard from '../../components/modal_popup/MenuCard';
import RBSheet from 'react-native-raw-bottom-sheet';
import ActivityFilter from '../activity_filter/ActivityFilter';
import ActivityCard from '../../components/activity_card/ActivityCard';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import Header from '../../components/header/Header';
import DynamicTab from '../../components/dynamic_tab/DynamicTab';
import Tabview from '../../components/tab_view/TabViews'



let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const tabConfig = {
  routes: [
    { key: 'leads', componentPath: './LeadandClient' },
    { key: 'clients', componentPath: './LeadandClient' },
    { key: 'dormants', componentPath: './Dormants' },
    // Add more tabs as needed
  ],
};
export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Tab1',
      tabBar: [],
      selfJoint: [{
        id: '1',
        name: Labels.baveshKasppsadiya,
        code: Labels.code,
        ratio: Labels.ratio,
        revenue: Labels.revenu,
        badgeColor: CommonColors.phoneCallbadgeColor,
        badgeBorder: CommonColors.phoneCall,
        badgeText: Labels.phoneCall,
        assignee: Labels.anandMishra,
        invitee: Labels.yogeshDhayfule,
        tag: Labels.preferred,
        outCome: Labels.mettingDetails,
        iconColor: CommonColors.bhaveshIconColor,
        hours: Labels.hours4,
      }, {
        id: '2',
        name: Labels.smithaIyar,
        code: Labels.code,
        ratio: Labels.ratio,
        revenue: Labels.revenu,
        badgeColor: CommonColors.nonBusinessBadgeColor,
        badgeBorder: CommonColors.nonBussiness,
        badgeText: Labels.nonBusinessMeet,
        assignee: Labels.anandMishra,
        invitee: Labels.yogeshDhayfule,
        tag: Labels.preferred,
        outCome: Labels.mettingDetails,
        iconColor: CommonColors.smithIconColor,
        hours: Labels.hours0,
      }, {
        id: '3',
        name: Labels.nagadharBandi,
        code: Labels.code,
        ratio: Labels.ratio,
        revenue: Labels.revenu,
        badgeColor: CommonColors.phoneCallbadgeColor,
        badgeBorder: CommonColors.phoneCall,
        badgeText: Labels.phoneCall,
        assignee: Labels.anandMishra,
        invitee: Labels.yogeshDhayfule,
        tag: Labels.preferred,
        outCome: Labels.mettingDetails,
        iconColor: CommonColors.nagadharIconColor,
        hours: Labels.hours4,
      }],
      filteredName: [],
      firstLetter: '',
      modalVisible: false,
      modal: [],
      modalEnable: false,
      searchInput: '',
      menuList: [],
    };
    this.data = [...this.state.selfJoint]

  }


  modalVisible = () => {
    console.log('open')
    this.setState(
      { modalVisible: this.state.modalVisible ? false : true });
    console.log(this.state.modalVisible, 'something')
  }

  modalEnable = () => {
    this.setState(
      { modalEnable: this.state.modalEnable ? false : true });
  }

  closeModal = () => {
    console.log('close')
    this.setState({
      modalVisible: false,
    });
    console.log(this.state.modalVisible, 'modalvisible')
  };

  navigateToStackScreen = () => {

    this.props.navigation.navigate('ActivityInvitedBy');
  }

  componentDidMount() {
    var modalDetails = [];
    var tab = [];
    var self = [];
    var menu = [];

    menu.push({
      id: '1',
      value: Labels.call,
    }),
      menu.push({
        id: '2',
        value: Labels.message,
      }),
      menu.push({
        id: '3',
        value: Labels.addActivity,
      }),
      menu.push({
        id: '4',
        value: Labels.editActivity,
      }),
      menu.push({
        id: '5',
        value: Labels.addOppertunity,
      }),

      modalDetails.push({
        id: '1',
        ARCARECode: Labels.careCode,
        clientCode: Labels.cCode,
        created: Labels.createdOn,
      });


    self.push({
      id: '1',
      name: Labels.baveshKasppsadiya,
      code: Labels.code,
      badgeColor: CommonColors.phoneCallbadgeColor,
      badgeBorder: CommonColors.phoneCall,
      badgeText: Labels.phoneCall,
      iconColor: CommonColors.bhaveshIconColor,
      history: 4,
    });

    self.push({
      id: '2',
      name: Labels.smithaIyar,
      code: Labels.code,
      badgeColor: CommonColors.nonBusinessBadgeColor,
      badgeBorder: CommonColors.nonBussiness,
      badgeText: Labels.nonBusinessMeet,
      iconColor: CommonColors.smithIconColor,
      history: 0,
    });

    self.push({
      id: '3',
      name: Labels.nagadharBandi,
      code: Labels.code,
      badgeColor: CommonColors.phoneCallbadgeColor,
      badgeBorder: CommonColors.phoneCall,
      badgeText: Labels.phoneCall,
      iconColor: CommonColors.nagadharIconColor,
      history: 4,
    });

    tab.push({
      id: '1',
      tab: Labels.SelfJoint
    });

    tab.push({
      id: '1',
      tab: Labels.InvitedBy
    });

    this.setState({
      tabBar: tab,
      selfJoint: self,
      modal: modalDetails,
      menuList: menu
    });




  }

  componentDidUpdate(prevState) {
    if (prevState.selfJoint !== this.state.selfJoint) {
      this.data = [...this.state.selfJoint];
    }
  }

  handleOverlayClick = (e) => {
    const { modalVisible } = this.state;
    if (modalVisible) {
      // Check if the click occurred outside the modal
      if (e.target === e.currentTarget) {
        this.closeModal();
      }
    }
  }

  filteredResult = (text) => {
    // const filtered = this.state.selfJoint.filter((item) =>
    //   item.name.toLowerCase().includes(text.toLowerCase()));
    // if (text != '') {
    //   this.setState({
    //     selfJoint: filtered
    //   })
    // }
    // else ({

    // })
    this.setState({
      // selfJoint: text !== '' ? filtered : this.state.selfJoint,
      searchInput: text,

    })



  }
  menuCardValue = (val) => {
    console.log(val, 'val')
  }




  render() {
    self = this.state.selfJoint.map(item => {
      const name = item.name;
      const firstLetters = name
        .split(' ')
        .map(word => word[0])
        .join('');
      item.firstLetter = firstLetters;
      return item;
    });
    console.log(this.state.selfJoint[0].firstLetter, 'etter')
    const data = this.state.filteredName.length > 0 ? this.state.filteredName : this.state.selfJoint;
    const selfJoint = this.state.selfJoint.filter((text) =>
      text.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    );
    return (
      // <View style={Styles.background}>
      //   <Header
      //     Activity={true}
      //   />
      //   {/* Top tab */}

      //   <View style={Styles.container}>
      //     <View style={Styles.switchContainer}>
      //       <TouchableOpacity
      //         style={Styles.selfJoint}
      //       >
      //         <Text style={Styles.selfJointText}>{Labels.SelfJoint}</Text>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style={Styles.invitedBy}
      //         onPress={this.navigateToStackScreen}

      //       >
      //         <Text style={Styles.invitedByText}>{Labels.InvitedBy}</Text>
      //       </TouchableOpacity>
      //     </View>
      //   </View>

      //   {/* Search Box */}
      //   <View style={Styles.searchBoxContainer}>
      //     <AntDesign
      //       name={Labels.search1}
      //       size={23}
      //       color={CommonColors.leadTextColor}
      //       style={Styles.icon}
      //     />
      //     <TextInput
      //       style={Styles.textInput}
      //       placeholder={Labels.searchBy}
      //       placeholderTextColor={CommonColors.leadTextColor}
      //       onChangeText={this.filteredResult}
      //       value={this.state.searchInput}
      //     >
      //     </TextInput>
      //     <TouchableOpacity
      //       onPress={() => this.RBSheet.open()}
      //     >
      //       <Image
      //         source={require('../../assets/images/png/Sliders.png')}
      //         style={Styles.image}
      //         resizeMode='contain'
      //       />

      //     </TouchableOpacity>
      //     <RBSheet
      //       ref={ref => {
      //         this.RBSheet = ref;
      //       }}
      //       height={700}

      //       customStyles={{
      //         container: {
      //           padding: 23,
      //           borderTopLeftRadius: 40,
      //           borderTopRightRadius: 40,
      //         }
      //       }}
      //     >
      //       <ActivityFilter />
      //     </RBSheet>

      //   </View>

      //   {/* card */}
      //   <ScrollView>
      //     < View style={Styles.scrollEndSpace}>

      //       {isNotEmpty(this.state.selfJoint) ?
      //         selfJoint.map((item) => (
      //           <View key={item.name}>
      //             <ActivityCard
      //               iconText={item.firstLetter}
      //               name={item.name}
      //               ratio={item.ratio}
      //               code={item.code}
      //               assignee={item.assignee}
      //               invitee={item.invitee}
      //               tag={item.tag}
      //               outcome={item.outCome}
      //               history={item.hours}
      //               iconColor={item.iconColor}
      //               badgeColor={item.badgeColor}
      //               badgeBorder={item.badgeBorder}
      //               badgeText={item.badgeText}
      //               activityList={this.state.menuList}
      //               menuCardValue={() => this.menuCardValue(val)}
      //             />
      //           </View>
      //         ))
      //         :
      //         <View style={Styles.nodataView}>
      //           <NodataAvailable />
      //         </View>
      //       }

      //       {this.state.selfJoint.map((item) => (
      //         <View key={item.name}>
      //           <View style={Styles.card}>
      //             {/* row 1 */}
      //             <View style={Styles.prospectDetail}>
      //               <View style={Styles.leftContainer}>
      //                 <View>
      //                   <TouchableOpacity>
      //                     <View style={[Styles.icon, { backgroundColor: item.iconColor }]}>
      //                       <View style={Styles.iconContent}>
      //                         <Text style={Styles.iconText}>{item.firstLetter}</Text>
      //                       </View>
      //                     </View>
      //                     {item.history != 0 && (
      //                       <View style={Styles.activeIndicator}></View>
      //                     )}
      //                   </TouchableOpacity>
      //                 </View>
      //                 <View style={Styles.leftTextContainer}>
      //                   <Text style={Styles.font}>{item.name}</Text>
      //                   <View style={Styles.lineSpace}></View>
      //                   <Text style={Styles.label}>{item.code}</Text>
      //                 </View>
      //               </View>
      //               <View style={Styles.rightContainer}>
      //                 <View>
      //                   <View style={Styles.rightTextContainer}>
      //                     <Text style={[Styles.rightAlign, Styles.font]}>1.40/80.60</Text>
      //                     <View style={Styles.lineSpace}></View>
      //                     <Text style={[Styles.rightAlign, Styles.label]}>Rev./AUM(In Lac)</Text>
      //                   </View>
      //                 </View>
      //                 <View>
      //                   <MenuCard menuCardList={this.state.menuList}
      //                     hideMenu={(val) => { this.menuCardValue(val) }}
      //                   />
      //                 </View>
      //               </View>
      //             </View>
      //             <View style={Styles.verticalSpace}></View>
      //             {/* row 2 */}
      //             <View style={Styles.prospectDetail}>
      //               <View style={Styles.leftContainerRow2}>
      //                 <View style={Styles.leftTextContainerRow2}>
      //                   <View>
      //                     <TouchableOpacity
      //                       style={[Styles.badge, {
      //                         backgroundColor: item.badgeColor,
      //                         borderColor: item.badgeBorder
      //                       }]}
      //                     >
      //                       <Text style={[Styles.badgeText, { color: item.badgeBorder }]}>{item.badgeText}</Text>
      //                     </TouchableOpacity>
      //                   </View>
      //                 </View>
      //               </View>
      //               <View style={Styles.rightContainer2}>
      //                 <View style={[Styles.rightTextContainerRow2, Styles.prospectDetail]}>
      //                   <Text style={Styles.label}>Activity Status : </Text>
      //                   <Text style={Styles.text}>Held</Text>
      //                 </View>
      //               </View>
      //             </View>
      //             <View style={Styles.verticalSpace}></View>
      //             {/* row 3 */}
      //             <View style={Styles.prospectDetail}>
      //               <View style={Styles.leftContainerRow2}>
      //                 <View style={Styles.leftTextContainerRow2}>
      //                   <Text style={Styles.label}>Assigned to</Text>
      //                   <View style={Styles.lineSpace}></View>
      //                   <Text style={Styles.text}>Anand Mishra(60020)</Text>
      //                 </View>
      //               </View>
      //               <View style={Styles.rightContainer}>
      //                 <View style={Styles.rightTextContainerRow3}>
      //                   <Text style={[Styles.label, Styles.rightAlign]}>Invitee</Text>
      //                   <View style={Styles.lineSpace}></View>
      //                   <Text style={[Styles.text, Styles.rightAlign]}>Yogesh dhayafule (70008)</Text>
      //                 </View>
      //               </View>
      //             </View>
      //             <View style={Styles.verticalSpace}></View>
      //             {/* row 4 */}
      //             <View style={Styles.prospectDetail}>
      //               <View style={Styles.leftContainerRow2}>
      //                 <View style={Styles.leftTextContainerRow2}>
      //                   <Text style={Styles.label}>Tagging</Text>
      //                   <View style={Styles.lineSpace}></View>
      //                   <Text style={Styles.text}>Prefered</Text>
      //                 </View>
      //               </View>
      //               <View style={Styles.rightContainer}>
      //                 <View style={Styles.rightTextContainerRow4}>
      //                   <Text style={[Styles.label, Styles.rightAlign]}>Activity created date</Text>
      //                   <View style={Styles.lineSpace}></View>
      //                   <Text style={[Styles.text, Styles.rightAlign]}>22 may 2023, 10:45</Text>
      //                 </View>
      //               </View>
      //             </View>
      //             <View style={Styles.verticalSpace}></View>

      //             {/* row 5 */}
      //             <View style={Styles.prospectDetail}>
      //               <View style={Styles.leftContainerRow5}>
      //                 <View style={Styles.leftTextContainer}>
      //                   <Text style={Styles.label}>Outcome</Text>
      //                   <View style={Styles.lineSpace}></View>
      //                   <Text style={Styles.text}>Lorem ipsum dolor sit amet,</Text>
      //                   <Text style={Styles.text}>consectetur adipiscing elit...</Text>
      //                 </View>
      //               </View>
      //               <View style={Styles.rightContainerRow5}>
      //                 <View style={Styles.rightTextContainerRow5}>
      //                   <View>
      //                     <Text style={[Styles.label, Styles.rightAlign]}>History</Text>
      //                     <View style={Styles.lineSpace}></View>
      //                   </View>
      //                   <View style={Styles.lineSpace}></View>
      //                   <View>
      //                     <View style={[Styles.prospectDetail, Styles.rightTextContainerRow6]}>
      //                       <Text style={[Styles.text, Styles.rightAlign]}>{item.history}</Text>
      //                       {item.history == 0 ?
      //                         (<Image
      //                           source={require('../../assets/images/png/DisabledClock.png')}
      //                           style={Styles.image}
      //                           resizeMode='contain'
      //                         />) :
      //                         (<Image
      //                           source={require('../../assets/images/png/EnabledClock.png')}
      //                           style={Styles.image}
      //                           resizeMode='contain'
      //                         />)
      //                       }
      //                     </View>
      //                   </View>
      //                 </View>
      //               </View>
      //             </View>
      //           </View>
      //         </View>
      //       ))
      //       }
      //     </View >
      //   </ScrollView >
      // </View >
      <View style={{ flex: 1 }}>
        <Text>something</Text>
        <Tabview activity={true}></Tabview>
      </View>
    )
  }
}

const Styles = EStyleSheet.create({
  nodataView: {
    flex: 1,
    justifyContent: 'center'
  },

  scrollEndSpace: {
    marginBottom: Labels.m200
  },
  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backdrop: {
  },
  menuOptions: {
    padding: 50,
  },
  menuTrigger: {
    padding: 5,
  },
  triggerText: {
    fontSize: 20,
  },
  contentText: {
    fontSize: 18,
  },

  modal: {
    height: Labels.height150,
    width: Labels.width40,
    backgroundColor: CommonColors.white,
    borderRadius: Labels.borderRadiusLG,
    elevation: Labels.elevation7,
    padding: Labels.p12,
    marginTop: Labels.m200,
    marginLeft: Labels.m10,
  },

  modalText: {
    color: CommonColors.black,
    fontWeight: Labels.bold,
    fontSize: Labels.ss
  },

  background: {
    flex: 1,
    backgroundColor: CommonColors.leadBackgroundcolor,
  },

  container: {
    width: Labels.width100,
    height: Labels.height55,
    backgroundColor: (CommonColors.white),
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    elevation: Labels.elevation7,
  },

  selfJointText: {
    fontSize: Labels.sm,
    textAlign: 'center',
    color: CommonColors.black,
    fontWeight: Labels.bold,
    paddingTop: Labels.p15
  },

  invitedByText: {
    fontSize: Labels.sm,
    textAlign: 'center',
    color: CommonColors.leadTextColor,
    paddingTop: Labels.p15
  },

  selfJoint: {
    height: Labels.height55,
    width: Labels.width50,
    backgroundColor: CommonColors.white,
    borderBottomWidth: 1,
    borderBottomColor: CommonColors.topTabTextColor
  },

  invitedBy: {
    height: Labels.height55,
    width: Labels.width50,
    backgroundColor: CommonColors.white,

  },

  searchIcon: {
    flex: 1,
  },

  textInput: {
    height: Labels.textBoxHeight,
    width: Labels.width80,
    backgroundColor: CommonColors.searchBoxColor,
    fontSize: Labels.xsm,
    fontFamily: Fonts.globalrobotofonts.Rregular,
    paddingLeft: Labels.p12,

  },

  searchBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: CommonColors.searchBoxColor,
    maxWidth: Labels.width100,
    paddingHorizontal: 10
  },

  image: {
    height: 23
  },

  card: {
    height: Labels.height270,
    backgroundColor: (CommonColors.white),
    elevation: Labels.elevation7,
    borderBottomLeftRadius: Labels.bottomRadius,
    borderBottomRightRadius: Labels.bottomRadius,
    margin: Labels.m10,
    padding: Labels.p10,
  },

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

  // row 1

  prospectDetail: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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

  // row 3

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

  badge: {
    height: 23,
    minWidth: 50,
    borderRadius: 5,
    borderWidth: 1,
    padding: 3,
  },

  badgeText: {
    fontWeight: Labels.bold
  },

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
    color: CommonColors.black,
    fontSize: Labels.xs
  },

  verticalSpace: {
    height: Labels.height10,
  },

  lineSpace: {
    height: Labels.height3,
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

  modalContent: {
    height: Labels.heigh200,
    width: Labels.width40,
    backgroundColor: CommonColors.white,
    elevation: Labels.elevation7,
    marginLeft: Labels.m217,
    marginBottom: 300,
    borderRadius: Labels.borderRadiusLG,
  },

  modalButton: {
    backgroundColor: CommonColors.white,
    padding: Labels.p9
  },

  modalAddText: {
    color: CommonColors.modalTextColor,
    fontSize: Labels.xsm,
    textAlign: 'left',
    textAlignVertical: 'center'
  },

  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});