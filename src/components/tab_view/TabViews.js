import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import EStyleSheet from 'react-native-extended-stylesheet';
import Header from '../../components/header/Header';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import LeadandClient from '../../containers/leadandclient/LeadandClient';
import Dormants from '../../containers/dormants/Dormants';
import ActivityInvitedBy from '../../containers/activity_invitedby/ActivityInvitedBy';
import ActivitySelfJoint from '../../containers/activity_selfjoint/ActivitySelfJoint';


let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

function Tabview(props) {
  const [index, setIndex] = React.useState(0);

  if (props.dashBoard) {
    var [routes] = useState([
      { key: 'leads', title: 'leads' },
      { key: 'clients', title: 'clients' },
      { key: 'dormants', title: 'dormants' },
    ]);
    var renderScene = SceneMap({
      leads: () => <LeadandClient></LeadandClient>,
      clients: () => <LeadandClient ></LeadandClient>,
      dormants: () => <Dormants></Dormants>
    });
  }
  if (props.activity) {
    var [routes] = useState([
      { key: 'ActivitySelfJoint', title: 'ActivitySelfJoint' },
      { key: 'ActivityInvitedBy', title: 'ActivityInvitedBy' },
    ]);
    var renderScene = SceneMap({
      ActivitySelfJoint: () => <ActivitySelfJoint />,
      ActivityInvitedBy: () => <ActivityInvitedBy />,
    });
  }
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorView}
      style={styles.tabBar}
      labelStyle={styles.tabLabel}
    />
  )
  return (

    <View style={{ flex: 1 }}>
      {/* <Header
        name={Labels.propspects}
        leftIconname="left"
        all={Labels.all}
        chevrondown={Labels.chevronDown}>
      </Header> */}

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: entireScreenWidth.width }}
      />

    </View>
  );
}

const styles = EStyleSheet.create({
  tabBar: {
    // backgroundColor: 'white',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //    elevation: 2,
    //     shadowColor: 'black',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 2,
    backgroundColor: 'white',
  },
  tabLabel: {
    color: CommonColors.black,
    fontSize: 14,
    padding: 5,
  },
  indicatorView: {
    backgroundColor: CommonColors.CostaDelSol,
    //backgroundColor: 'white'
  }
});
export default Tabview;