import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Labels from '../../utils/constants/labels/Labels';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Feather';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Button from '../button/Button';
import Dashboardnew from '../../containers/dashboardNew/Dashboardnew';
import { TouchableOpacity } from 'react-native-gesture-handler';


let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

// class Header extends Component {
//   constructor(props){
//     super(props)
//   }
//     render() {
const Header = (props) => {
  return (
    // <View style={styles.headerStyle}>
    //     <View style={styles.headerContainer}>
    //         <View style={styles.imageViewSecond}>
    //             <Image style={styles.headerImageView} source={require('../../assets/images/png/wealth-test.png')} />
    //         </View>
    //         <View style={styles.textView}>
    //             <Text numberOfLines={1} ellipsizeMode={Labels.tail} style={styles.headerText}>{this.props.header}</Text>
    //         </View>
    //     </View>
    // </View>
    // <View style={styles.headerStyle}>
    //     <Icon name={this.props.iconname} size={24} style={styles.iconView}>
    //     <AntDesign name={this.props.leftIconname} size={20} style={styles.leftIconView} ></AntDesign>

    //         <View style={styles.textView}>

    //             <Text style={styles.headerText}>{this.props.headername}{this.props.name}</Text>
    //         </View>
    //     </Icon>
    //     <OcticonIcon name={this.props.bellicon} size={20} style={styles.octiconIcon}></OnIcon>
    //     {/* <Text>{this.props.all}</Text>
    //     <EvilIcons name={this.props.chevrondown} size={20} style={styles.octiconIcon}></EvilIcons> */}
    // </View>
    <View style={styles.headerStyle}>
      {props.Dashboard && (
        <>
        <TouchableOpacity onPress={props.onPress}>
          <Icon name="menu" size={24} style={styles.iconView}> </Icon>
          </TouchableOpacity>
            <View style={styles.textView}>
              <Text style={styles.headerText}>{Labels.dashboard}</Text>
            </View>
         
          <OcticonIcon name="bell" size={24} style={styles.octiconIcon} ></OcticonIcon>
        </>
      )}

      {props.Activity && (
        <>
          <Icon name="menu" size={24} style={styles.iconView}>
            <View style={styles.textView}>
              <Text style={styles.headerText}>{Labels.activity}</Text>
            </View>
          </Icon>
          <OcticonIcon name="bell" size={24} style={styles.octiconIcon}></OcticonIcon>
        </>
      )}
      {/* <Text>{this.props.all}</Text>
            //     <EvilIcons name={this.props.chevrondown} size={20} style={styles.octiconIcon}></EvilIcons> */}
      {props.showHeader && (
        <>
          <Icon name="menu" size={24} style={styles.iconView}>
            <View style={styles.textView}>
              <Text style={styles.headerText}>{Labels.oppertunities}</Text>
            </View>
          </Icon>
          <OcticonIcon name="bell" size={24} style={styles.octiconIcon}></OcticonIcon>
        </>
      )}
      {props.addLeadHeader && (
        <>
          <View style={styles.titleRow}>
            <AntDesign name="left" size={24} style={styles.arrowIcon}> </AntDesign>
            <View style={styles.titleColumn}>
              <View style={styles.textView}>
                <Text style={styles.topText}>{props.labelTop}</Text>
                <Text style={styles.bottomText}>{props.labelBottom}</Text>
              </View>
            </View>
          </View>
          <Button
            backgroundColor={CommonColors.CostaDelSol}
            borderColor={CommonColors.white}
            label={Labels.save}
            width={90}
            height={40}
            marginRight={7}
            marginTop={6}
          // onPress={this.saveNext}
          />
        </>
      )}
    </View>
  );
}


const styles = EStyleSheet.create({
  headerStyle: {
    backgroundColor: CommonColors.CostaDelSol,
    height: Labels.textBoxHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Labels.p9,
    marginTop: 0,
  },
  textView: {
    paddingHorizontal: Labels.p16,
  },
  iconView: { color: CommonColors.white },
  arrowIcon: { color: CommonColors.golden },
  headerText: {
    color: CommonColors.golden, fontFamily: Fonts.globalrobotofonts.Rbold, fontSize: Labels.headerSize,
    paddingTop: 0,
  },
  octiconIcon: { color: CommonColors.white },
  leftIconView: { color: CommonColors.golden },
  topText: { color: CommonColors.golden, fontFamily: Fonts.globalrobotofonts.Rbold, fontSize: Labels.ss },
  bottomText: {
    color: CommonColors.golden, fontFamily: Fonts.globalrobotofonts.Rbold, fontSize: Labels.headerSize,
    paddingTop: 0,
  },
  octiconIcon: { color: CommonColors.white },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  titleColumn: { flexDirection: 'column' }, // Updated to 'row'
});

export default Header;


