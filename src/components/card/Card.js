// <<<<<<< HEAD
// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Card() {
//   return (
//     <View>
//       <Text>Card</Text>
//     </View>
//   )
// }

import React, { Component } from "react";
import { Text, View, ScrollView,Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Labels from "../../utils/constants/labels/Labels";
import CommonColors from "../../utils/constants/colors/CommonColors";
import { Fonts } from '../../utils/constants/fonts/Fonts';
import Pie from 'react-native-pie'

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <ScrollView horizontal={true} style={styles.container} >
        <View style={{ flexDirection: "row"}}>
          <View style={styles.cardView}>
            <View style={styles.textHeaderView}>
              <Text style={styles.textView}>{Labels.leads}</Text>
            </View>
            <View style={styles.generateAndConvertedView}>
               <View>
                <Text style={styles.generatedTextValue}>{Labels.generatedValue}</Text>
                <Text style={styles.generatedTextView}>{Labels.generated}</Text>
              </View> 
               <Pie
                radius={Labels.radius}
                innerRadius={Labels.innerRadius}
                sections={[
                  {
                    percentage: Labels.percentagevalue25,
                    color: CommonColors.paleGray
                  },
                  {
                    percentage: Labels.percentageValue10,
                    color: CommonColors.darkSandle,
                  },
                  {
                    percentage: Labels.percentageValue40,
                    color: CommonColors.lightSandle,
                  },
                  {
                    percentage: Labels.percentagevalue25,
                    color: CommonColors.leafGreen,
                  },
                ]}
              /> 
               <View>
                <Text style={styles.convertedTextValue}>{Labels.convartedValue}</Text>
                <Text style={styles.convertedTextView}>{Labels.converted}</Text>
              </View> 
            </View>
            <View style={styles.legendView}>
              <View style={styles.leadLegend} />
              <Text>{Labels.leads}</Text>
              <View style={styles.convertedlegend} />
              <Text style={styles.convertedText}>{Labels.converted}</Text>
            </View>
          </View>
          <View style={styles.opportunitiesView}>
            <View style={styles.textHeaderView}>
              <Text style={styles.oppertunitiestextView}>{Labels.oppertunities}</Text>
            </View>
            <View style={styles.generateAndConvertedView}>
               <View>
                <Text style={styles.generatedTextValue}>{Labels.createdcount}</Text>
                <Text style={styles.createdTextView}>{Labels.created}</Text>
              </View> 
               <Pie
                radius={Labels.radius}
                innerRadius={Labels.innerRadius}
                sections={[
                  {
                    percentage: Labels.percentagevalue25,
                    color: CommonColors.paleGray
                  },
                  {
                    percentage: Labels.percentageValue10,
                    color: CommonColors.GrannySmithApple,
                  },
                  {
                    percentage: Labels.percentageValue40,
                    color: CommonColors.Feta,
                  },
                  {
                    percentage: Labels.percentagevalue25,
                    color: CommonColors.PersianBlue,
                  },
                ]}
              /> 
               <View>
                <Text style={styles.convertedTextValue}>{Labels.closecount}</Text>
                <Text style={styles.closedTextView}>{Labels.closed}</Text>
              </View> 
            </View>
            <View style={styles.legendView}>
              <View style={styles.createdLegend} />
              <Text>{Labels.created}</Text>
              <View style={styles.closedlegend} />
              <Text style={styles.convertedText}>{Labels.closed}</Text>
            </View>
          </View>
          <View style={styles.opportunitiesView}>
            <View style={styles.textHeaderView}>
              <Text style={styles.oppertunitiestextView}>{Labels.meeting}</Text>
            </View>
            <View style={styles.generateAndConvertedView}>
              <View style={styles.generatedvaluetextView}>
                <Text style={styles.generatedTextValue}>{Labels.generatedcount}</Text>
                <Text style={styles.generatedTextView}>{Labels.target}</Text>
              </View> 
              <Pie
                radius={Labels.radius}
                innerRadius={Labels.innerRadius}
                sections={[
                  {
                    percentage: Labels.percentagevalue25,
                    color: CommonColors.paleGray,
                  },

                  {
                    percentage: Labels.percentageValue8,
                    color: CommonColors.CaribbeanGreen,
                  },

                  {
                    percentage: Labels.percentageValue42,
                    color: CommonColors.AquaSqueeze
                  },
                  {
                    percentage: Labels.percentagevalue25,
                    color: CommonColors.CloudBurst,
                  },
                ]}
              /> 
               <View style={styles.convertedvaluetextView}>
                <Text style={styles.convertedTextValue}>{Labels.convertedcount}</Text>
                <Text style={styles.convertedTextView}>{Labels.achievement}</Text>
              </View> 
            </View>
            <View style={styles.legendView}>
              <View style={styles.targetLegend} />
              <Text>{Labels.target}</Text>
              <View style={styles.achievementlegend} />
              <Text style={styles.convertedText}>{Labels.achievement}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = EStyleSheet.create({
  cardView: {
    backgroundColor: CommonColors.white,
    borderRadius: Labels.borderRadiusXL,
    marginHorizontal: Labels.m12,
    padding: Labels.p10,
    marginBottom : Labels.m18,
    width : "30%",
    //height: Labels.cardviewHeight,
  },
  convertedTextValue: {
    fontFamily: Fonts.globalrobotofonts.Rbold,
    fontSize: Labels.lg,
    color: CommonColors.black,
    marginHorizontal: Labels.m18,
  },
  generatedTextValue: {
    fontFamily: Fonts.globalrobotofonts.Rbold,
    fontSize: Labels.lg,
    color: CommonColors.black,
    marginHorizontal: Labels.m18,
  },
  textHeaderView: {
    paddingRight : Labels.p40,
    alignItems: 'center',
    width: Labels.pieChartCard,
  },
 
  textView: {
    fontFamily: Fonts.globalrobotofonts.Rbold,
    fontSize: Labels.md,
    color: CommonColors.black,
  },
  legendView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Labels.m5,
  },
  leadLegend: {
    width: Labels.leagendwidth,
    height: Labels.leagendHeight,
    borderRadius: Labels.borderRadiusXXL,
    backgroundColor: CommonColors.leafGreen,
    marginHorizontal: Labels.m12
  },
  convertedlegend: {
    width: Labels.leagendwidth,
    height: Labels.leagendHeight,
    borderRadius: Labels.borderRadiusXXL,
    backgroundColor: CommonColors.darkSandle,
    marginHorizontal: Labels.m12
  },
  generateAndConvertedView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Labels.m18,
    paddingVertical: Labels.p10,
    alignItems: 'center',
  },
  opportunitiesView: {
    backgroundColor: CommonColors.white,
    borderRadius: Labels.borderRadiusXL,
    marginHorizontal: Labels.m12,
    padding: Labels.p10,
    marginBottom : Labels.m18,
    marginLeft : Labels.p1,
    width : "30%",
    //height: Labels.cardviewHeight,
  },
  oppertunitiestextView: {
    fontFamily: Fonts.globalrobotofonts.Rbold,
    fontSize: Labels.md,
    color: CommonColors.HunterGreen,
  },
  createdLegend: {
    width: Labels.leagendwidth,
    height: Labels.leagendHeight,
    borderRadius: Labels.borderRadiusXXL,
    backgroundColor: CommonColors.PersianBlue,
    marginHorizontal: Labels.m12
  },
  closedlegend: {
    width: Labels.leagendwidth,
    height: Labels.leagendHeight,
    borderRadius: Labels.borderRadiusXXL,
    backgroundColor: CommonColors.GrannySmithApple,
    marginHorizontal: Labels.m12
  },
  targetLegend : {
    width: Labels.leagendwidth,
    height: Labels.leagendHeight,
    borderRadius: Labels.borderRadiusXXL,
    backgroundColor: CommonColors.CloudBurst,
    marginHorizontal: Labels.m12
  },
  achievementlegend : {
    width: Labels.leagendwidth,
    height: Labels.leagendHeight,
    borderRadius: Labels.borderRadiusXXL,
    backgroundColor: CommonColors.CaribbeanGreen,
    marginHorizontal: Labels.m12
  },
  createdTextView :{
    textAlign : 'center',
  },
  closedTextView : {
    textAlign : 'center',
  },
  generatedTextView: {
    textAlign : 'center',
  },
  convertedTextView : {
    textAlign : 'center',
  }
});
export default Card;
