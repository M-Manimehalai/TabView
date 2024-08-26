import { Text, View, Dimensions, ScrollView, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { Component } from 'react'
import { Card, List, Searchbar } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather'
import Labels from '../../utils/constants/labels/Labels';
import Icon from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';
import CommonColors from '../../utils/constants/colors/CommonColors';
import OpportunitiesCard from '../../components/opportunities_card/OpportunitiesCard';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import Header from '../../components/header/Header';
import ModalPopUp from '../../components/modal_popup/ModalPopUp';
import RBSheet from 'react-native-raw-bottom-sheet';
import OppertunityFilter from '../opportunity_filter/OpportunityFilter';
import Button from '../../components/button/Button';
import { Fonts } from '../../utils/constants/fonts/Fonts';
//import MyModal from '../../components/MyModel';
//import { Modal } from 'react-native-modal'; 


let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
export default class Oppertunities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      searchQuery: '',
      contactList: [{
        id: '1',
        imageUrl: require("../../assets/images/png/userImage.png"),
        name: Labels.leadName1,
        leadId: Labels.leadId1,
        ratio: Labels.ratio,
        revenu: Labels.revenu,
        targateDateLabel: Labels.targateDateLabel,
        targateDate: Labels.targateDate,
        invtAmount: Labels.invtAmounts,
        invtAmountLabel: Labels.invtAmount,
        productTypeLabel: Labels.productTypeLabel,
        productTypes: Labels.productTypes,
        oppertunityStageLabel: Labels.opportunityStageLabel,
        oppertunityStage: Labels.opportunityStage,
        probabilityLabel: Labels.probabilityLabel,
        probability: Labels.probabilitys,
        assignedLabel: Labels.assignedLabel,
        assignedName: Labels.assignedName,
        fiscalPeriodLabel: Labels.fiscalPeriodLabel,
        fiscalPeriod: Labels.fiscalPeriod,
        history: Labels.history

      },
      {
        id: '2',
        imageUrl: require("../../assets/images/png/userImage(1).png"),
        name: Labels.leadName2,
        leadId: Labels.leadId2,
        ratio: Labels.ratio,
        revenu: Labels.revenu,
        targateDateLabel: Labels.targateDateLabel,
        targateDate: Labels.targateDate,
        invtAmount: Labels.invtAmounts,
        invtAmountLabel: Labels.invtAmount,
        productTypeLabel: Labels.productTypeLabel,
        productTypes: Labels.productTypes,
        oppertunityStageLabel: Labels.opportunityStageLabel,
        oppertunityStage: Labels.opportunityStage,
        probabilityLabel: Labels.probabilityLabel,
        probability: Labels.probabilitys,
        assignedLabel: Labels.assignedLabel,
        assignedName: Labels.baveshKapsadia,
        fiscalPeriodLabel: Labels.fiscalPeriodLabel,
        fiscalPeriod: Labels.fiscalPeriod,
        history: Labels.history
      },
      {
        id: '3',
        imageUrl: require("../../assets/images/png/userImage(2).png"),
        name: Labels.leadName3,
        leadId: Labels.leadId1,
        ratio: Labels.ratio,
        revenu: Labels.revenu,
        targateDateLabel: Labels.targateDateLabel,
        targateDate: Labels.targateDate,
        invtAmount: Labels.invtAmounts,
        invtAmountLabel: Labels.invtAmount,
        productTypeLabel: Labels.productTypeLabel,
        productTypes: Labels.productTypes,
        oppertunityStageLabel: Labels.opportunityStageLabel,
        oppertunityStage: Labels.opportunityStage,
        probabilityLabel: Labels.probabilityLabel,
        probability: Labels.probabilitys,
        assignedLabel: Labels.assignedLabel,
        assignedName: Labels.nagadharBandi,
        fiscalPeriodLabel: Labels.fiscalPeriodLabel,
        fiscalPeriod: Labels.fiscalPeriod,
        history: Labels.history
      },
      {
        id: '4',
        imageUrl: require("../../assets/images/png/userImage(3).png"),
        name: Labels.leadName4,
        leadId: Labels.leadId4,
        ratio: Labels.ratio,
        revenu: Labels.revenu,
        targateDateLabel: Labels.targateDateLabel,
        targateDate: Labels.targateDate,
        invtAmount: Labels.invtAmounts,
        invtAmountLabel: Labels.invtAmount,
        productTypeLabel: Labels.productTypeLabel,
        productTypes: Labels.productTypes,
        oppertunityStageLabel: Labels.opportunityStageLabel,
        oppertunityStage: Labels.opportunityStage,
        probabilityLabel: Labels.probabilityLabel,
        probability: Labels.probabilitys,
        assignedLabel: Labels.assignedLabel,
        assignedName: Labels.smithaIyar,
        fiscalPeriodLabel: Labels.fiscalPeriodLabel,
        fiscalPeriod: Labels.fiscalPeriod,
        history: Labels.history
      },
      {
        id: '5',
        imageUrl: require("../../assets/images/png/userImage(4).png"),
        name: Labels.leadName5,
        leadId: Labels.leadId4,
        ratio: Labels.ratio,
        revenu: Labels.revenu,
        targateDateLabel: Labels.targateDateLabel,
        targateDate: Labels.targateDate,
        invtAmount: Labels.invtAmounts,
        invtAmountLabel: Labels.invtAmount,
        productTypeLabel: Labels.productTypeLabel,
        productTypes: Labels.productTypes,
        oppertunityStageLabel: Labels.opportunityStageLabel,
        oppertunityStage: Labels.opportunityStage,
        probabilityLabel: Labels.probabilityLabel,
        probability: Labels.probabilitys,
        assignedLabel: Labels.assignedLabel,
        assignedName: Labels.assignedName,
        fiscalPeriodLabel: Labels.fiscalPeriodLabel,
        fiscalPeriod: Labels.fiscalPeriod,
        history: Labels.history

      },
      ],
      menuList: [{
        id: '1',
        value: Labels.call,
        label: '1'
      },
      {
        id: '2',
        value: Labels.message,
        label: '2'
      },
      {
        id: '3',
        value: Labels.addActivity,
        label: '3'
      },
      {
        id: '4',
        value: Labels.editOpportunity,
        label: '4'
      },
      {
        id: '5',
        value: Labels.addOpportunity,
        label: '5'
      }]
    }
  }

  componentDidMount = () => {
    console.log('oper', this.props)
  }

  componentDidUpdate = () => {

  }

  componentWillUnmount() {

  }
  // toggleModal = () => {
  //   this.setState({ isModalVisible: !this.state.isModalVisible });
  // };
  addToCart(val) {
    // You can navigate to the "OpportunityDetails" page and pass the selected item as a parameter here
    this.props.navigation.navigate('Opportunity Details', { selectedItem: val });
    //console.log(this.props.navigation.navigate)
    //alert('hii');
  }
  menuCardValue = (val) => {
    //console.log(val, 'val')
  }
  rBSheetClose = () => {
    this.RBSheet.close();
  };

  openRBSheet = () => {
    this.RBSheet.open();
  };
  handleSearch = (text) => {
    this.setState({ searchQuery: text }); // Update the searchQuery state
  };
  render() {
    const contactList = this.state.contactList.filter((details) =>
      details.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );
    return (
      <View style={{ flex: 1 }}>
        <Header
          dashboardHeader={true}
          headername = {Labels.dashboard} 
          iconname = "menu"
          bellicon = "bell"/>
        <View>
          <Searchbar
            placeholder={Labels.searchOppertunities}
            onChangeText={this.handleSearch}
            value={this.state.searchQuery}
            style={styles.searchBar}
          />
        </View>

        <Feather name={"sliders"} size={20} color="gray" style={{ marginTop: -38, marginLeft: '90%' }} onPress={this.openRBSheet} />
        {isNotEmpty(this.state.contactList) ?
          <ScrollView>

            <FlatList
              data={contactList}
              numColumns={1}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
                <OpportunitiesCard
                  flag={"opportunity"}
                  onPress={() => this.addToCart(item)}
                  menuCardValue={(val) => this.menuCardValue(val)}
                  source={item.imageUrl} // Provide the image source
                  name={item.name}
                  amount={item.leadId}
                  ratio={item.ratio}
                  revenue={item.revenu}
                  targateDateLabel={item.targateDateLabel}
                  targateDate={item.targateDate}
                  invtAmountLabel={item.invtAmountLabel}
                  invtAmount={item.invtAmount}
                  productTypeLabel={item.productTypeLabel}
                  productTypes={item.productTypes}
                  assignedLabel={item.assignedLabel}
                  assignedName={item.assignedName}
                  oppertunityStageLabel={item.oppertunityStageLabel}
                  oppertunityStage={item.oppertunityStage}
                  probabilityTaggingLabel={item.probabilityLabel}
                  probabilityTagging={item.probability}
                  fiscalPeriodLabel={item.fiscalPeriodLabel}
                  fiscalPeriod={item.fiscalPeriod}
                  historyLabel={item.history}
                  menuCardList={this.state.menuList}
                />
              }
            />
          </ScrollView>
          :
          <View style={styles.nodataView}>
            <NodataAvailable />
          </View>
        }
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={700}
          animationType="slide"
          customStyles={{
            container: {
              backgroundColor: CommonColors.white,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              //borderRadius: Labels.borderRadiusXL,
            },
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.6)", // Background dimming color and opacity
            },
          }}
        >
          <OppertunityFilter
            closeRBSheet={() => { this.rBSheetClose() }}
          />
        </RBSheet>

      </View >
    )
  }
}
const styles = EStyleSheet.create({
  searchBar: { borderRadius: Labels.borderRadiusXS, backgroundColor: CommonColors.tints ,fontFamily: Fonts.globalrobotofonts.Rlight,size: Labels.md,},
  container: { backgroundColor: CommonColors.ivory, marginTop: Labels.m8 },
  nodataView: { justifyContent: 'center' },
  commonView: { marginTop: Labels.m6 },
  //btnColumn: { flexDirection: 'column', flex: 1, margin: Labels.m4 },
});
