import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Menu, MenuItem } from 'react-native-material-menu';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import Labels from '../../utils/constants/labels/Labels';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

class SearchableDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      searchText: '',
      selectedValue: props.selectedValue || '',
    };
  }

  showMenu = () => {
    this.setState({
      visible: true,
    });
  };

  hideMenu = () => {
    this.setState({
      visible: false,
    });
  };

  select = (ID, name) => {
    this.setState({
      selectedValue: name,
    });
    this.props.onSelect(ID, name);
    this.hideMenu();
  };

  searchFilter = (text) => {
    this.setState({ searchText: text });
  };

  filterDropdownData = () => {
    const { dropdowndata } = this.props;
    const { searchText } = this.state;

    if (!searchText) {
      return dropdowndata;
    }

    return dropdowndata.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  render() {
    const { searchText, selectedValue } = this.state;
    const { label, placeholder, error } = this.props;
    const filteredData = this.filterDropdownData();

    return (
      <View>
        <Text style={styles.inputBoxTextLabel}>{label}</Text>
        <Menu
          visible={this.state.visible}
          anchor={
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.showMenu()}
              style={styles.inputBoxDropdown}
            >
              <View style={styles.dropdownViewFirstColum}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={[
                    styles.dropdownTextStyle,
                    {
                      color:
                        selectedValue === '' ? CommonColors.tableheader : CommonColors.black,
                    },
                  ]}
                >
                  {selectedValue === '' ? placeholder : selectedValue}
                </Text>
              </View>
              <View style={styles.dropdownViewSecondColum}>
                <AntDesign name="down" size={20} color={CommonColors.tableheader} />
              </View>
            </TouchableOpacity>
          }
          onRequestClose={this.hideMenu}
          style={{ width: '96%' }}
        >
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            onChangeText={(text) => this.searchFilter(text)}
            value={searchText}
          />

          {isNotEmpty(filteredData) && filteredData.length > 0 ? (
            <FlatList
              data={filteredData}
              keyExtractor={({ ID }, index) => ID}
              renderItem={({ item }) => (
                <MenuItem onPress={() => this.select(item.ID, item.name)}>
                  {isNotEmpty(item.name) ? item.name : 'NA'}
                </MenuItem>
              )}
            />
          ) : (
            <MenuItem textStyle={[styles.dropdownTextStyle, { textAlign: 'center' }]}>
              {Labels.nodataAvailable}
            </MenuItem>
          )}
        </Menu>
        <Text style={styles.inputBoxErrorText}>{isNotEmpty(error) && error}</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  inputBoxDropdown: {
    borderColor: CommonColors.black,
    height: Labels.textBoxHeight,
    borderWidth: Labels.borderWidthSize,
    borderRadius: Labels.borderRadiusLG,
    paddingLeft: Labels.p16,
    marginTop: Labels.m4,
    flexDirection: 'row'
  },
  inputBoxTextLabel: {
    fontSize: Labels.sm,
    color: CommonColors.gray44,
    fontFamily: Fonts.globalrobotofonts.Rmedium
  },
  inputBoxErrorText: {
    fontSize: Labels.sm,
    color: CommonColors.errorColor,
    fontFamily: Fonts.globalrobotofonts.Rmedium
  },
  dropdownViewFirstColum: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  dropdownViewSecondColum: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownTextStyle: {
    fontSize: Labels.sm,
    color: CommonColors.black,
    fontFamily: Fonts.globalrobotofonts.Rmedium,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: CommonColors.black,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginLeft:Labels.p16
  },
});

export default SearchableDropdown;