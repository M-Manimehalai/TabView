import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Tabview from '../../components/tab_view/TabViews';
import Labels from '../../utils/constants/labels/Labels';


class Prospectsdata extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { route } = this.props;
    const searchbar = route.params.data;
    
    return (
      <View style = {{flex : 1 }}>
      <Tabview  dashBoard = {true}{...this.props}> {searchbar}
      </Tabview>
      </View>
    );
  }
}

export default Prospectsdata;
