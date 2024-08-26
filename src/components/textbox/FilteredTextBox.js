import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CommonColors from '../../utils/constants/colors/CommonColors';
import Labels from '../../utils/constants/labels/Labels';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';

const FilteredTextbox = (props) => {
  const [filter, setFilter] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [filteredData, setFilteredData] = useState(props.data); // Initialize with the full data
  const [showDataCard, setShowDataCard] = useState(true); // Control whether to show the data card

  useEffect(() => {
    if (props.value) {
      setSelectedValue(props.value);
    }
  }, [props.value]);

  useEffect(() => {
    // Filter the data whenever the filter text changes
    setFilteredData(props.data.filter((item) =>
      item.toLowerCase().startsWith(filter.toLowerCase())
    ));
  }, [filter, props.data]);

  const handleItemPress = (item) => {
    setSelectedValue(item);
    setIsFocused(false); // Hide the card when an item is selected
    setShowDataCard(false);
    props.onChangeText(item);
  };

  const clearText = () => {
    setSelectedValue('');
    props.onChangeText('');
    setShowDataCard(false); // Hide the data card when clearing the text
  };

  return (
    <View>
      <Text style={styles.inputBoxTextLabel}>{props.label}</Text>
      <View style={styles.inputBoxContainer}>
        <TextInput
          style={[
            styles.inputBox,
            { height: props.height != undefined ? props.height : Labels.textBoxHeight },
          ]}
          placeholder={selectedValue ? selectedValue : props.label}
          value={selectedValue}
          onChangeText={(value) => {
            setFilter(value);
            setSelectedValue(value);
            setShowDataCard(true); // Show the data card when typing in the textbox
            props.onChangeText(value);
          }}
          onFocus={() => setIsFocused(true)}
        />
        {selectedValue !== '' && showDataCard && (
          <TouchableOpacity style={styles.clearIconContainer} onPress={clearText}>
            <Text style={styles.clearIcon}>X</Text>
          </TouchableOpacity>
        )}
      </View>
      {showDataCard && isFocused && (
        <TouchableOpacity activeOpacity={1} style={styles.dropdownContainer}>
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleItemPress(item)}>
                <Text style={styles.cardItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.inputBoxErrorText}>
        {isNotEmpty(props.error) && props.error}
      </Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  inputBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBox: {
    flex: 1,
    borderColor: CommonColors.black,
    borderWidth: Labels.borderWidthSize,
    borderRadius: Labels.borderRadiusLG,
    fontSize: Labels.sm,
    paddingLeft: Labels.p16,
    marginTop: Labels.m4,
    fontFamily: Fonts.globalrobotofonts.Rmedium,
    backgroundColor: CommonColors.white,
  },
  inputBoxTextLabel: {
    fontSize: Labels.sm,
    color: CommonColors.gray44,
    fontFamily: Fonts.globalrobotofonts.Rmedium,
    marginTop: Labels.m4,
  },
  clearIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: Labels.p8,
  },
  clearIcon: {
    color: CommonColors.gray44,
  },
  dropdownContainer: {
    position: 'absolute',
    top: 80,
    width: '100%',
    backgroundColor: CommonColors.white,
    borderColor: CommonColors.black,
    borderWidth: Labels.borderWidthSize,
    borderRadius: Labels.borderRadiusLG,
    elevation: 2,
    zIndex: 1,
  },
  cardItem: {
    fontSize: Labels.sm,
    padding: Labels.p8,
    borderBottomWidth: 0,
  },
});

export default FilteredTextbox;
