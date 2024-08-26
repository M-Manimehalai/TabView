import React, { Component } from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Icon from 'react-native-vector-icons/Feather';
import Labels from '../../utils/constants/labels/Labels';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import { Fonts } from '../../utils/constants/fonts/Fonts';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.drawer = React.createRef();
    this.state = {
      drawerPosition: 'left',
    };
  }

 

  renderNavigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => this.drawer.current && this.drawer.current.closeDrawer()}
      />
    </View>
  );

  render() {
  
    const { drawerPosition } = this.state;

    return (
      <DrawerLayoutAndroid
        ref={this.drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={this.renderNavigationView}>
       
        <View style={styles.headerStyle}>
        {this.props.Dashboard && (
            <>
        <TouchableOpacity onPress={() => this.drawer.current && this.drawer.current.openDrawer()}>
          <Icon name="menu" size={24}> </Icon>
          </TouchableOpacity>
          <View style={styles.textView}>
              <Text style={styles.headerText}>{Labels.dashboard}</Text>
            </View>
          <OcticonIcon name="bell" size={24} style={styles.octiconIcon} ></OcticonIcon>
          </>
       )}
        </View>
      </DrawerLayoutAndroid>
       
    );
  }
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: CommonColors.white,
        height: Labels.textBoxHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Labels.p9,
        marginTop: 0,
      },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
//   textView: {
//     paddingHorizontal: Labels.p16,
//   },
//   headerText: {
//     color: CommonColors.golden, fontFamily: Fonts.globalrobotofonts.Rbold, fontSize: Labels.headerSize,
//     paddingTop: 0,
//   },
//   octiconIcon: { color: CommonColors.white },
});

export default MyComponent;
