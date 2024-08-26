import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import Labels from '../../utils/constants/labels/Labels';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Card } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import Checkbox from '../checkbox/Checkbox';
import NodataAvailable from '../nodata_available/NodataAvailable';
import EStyleSheet from 'react-native-extended-stylesheet';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
class SingleSelectDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            schemeListing: [],
            schemeListingCopy: [],
            selectedDropdownValues: [],
            count: 12
        }
    }

    componentDidMount = () => {
        if (isNotEmpty(this.props.data)) {
            this.setState({
                schemeListing: this.props.data.slice(0, 12),
                schemeListingCopy: this.props.data,
                selectedDropdownValues: [],
                count: 12
            })
        }
        else {
            this.setState({
                schemeListing: [],
                schemeListingCopy: [],
                selectedDropdownValues: [],
                count: 12
            })
        }
    }

    componentDidUpdate = () => {
        if (this.props.singleSelectedValue != this.state.selectedDropdownValues) {
            this.setState({
                selectedDropdownValues: this.props.singleSelectedValue
            })
        }
    }

    SearchFilterFunction = (text) => {
        try {
            const newData = isNotEmpty(this.state.schemeListingCopy) && this.state.schemeListingCopy.filter(function (item) {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;

            });
            this.setState({
                schemeListing: newData.slice(0, 12),
                count: 12,
                search: text,
            });
        }
        catch (err) {
            console.log(err, "Search")
        }
    }

    select = (id) => {

        let filterData = this.state.schemeListing.filter((item) => (item.ID == id))

        if (filterData.length > 0) {
            this.props.singleSelect(filterData);
            this.setState({
                selectedDropdownValues: filterData[0].name
            })
        }
        this.RBSheetOfSingleSelect.close();
    }

    searchBack = () => {
        this.RBSheetOfSingleSelect.close();
    }

    render() {
        return (
            <View>
                <RBSheet
                    animationType={'none'}
                    ref={ref => {
                        this.RBSheetOfSingleSelect = ref;
                    }}
                    height={Dimensions.get('window').height}

                    customStyles={{
                        container: {
                            backgroundColor: CommonColors.white
                        }
                    }}
                >
                    <View style={styles.container}>
                        <Card style={styles.cardContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.logoStyle}>
                                    <TouchableOpacity onPress={this.searchBack}>
                                        <AntDesign size={25} name="left" color={CommonColors.black} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.searchBarView}>
                                    <SearchBar
                                        round
                                        autoFocus={true}
                                        searchIcon={false}
                                        onChangeText={text => this.SearchFilterFunction(text)}
                                        onClear={text => this.SearchFilterFunction('')}
                                        placeholder={this.props.placeholderSearch}
                                        value={this.state.search}
                                        containerStyle={styles.searchbar}
                                        placeholderTextColor={CommonColors.tableheader}
                                        inputStyle={styles.searchbarInputStyle}
                                        inputContainerStyle={styles.searchbar_container}
                                        selectionColor={CommonColors.brown}
                                        clearIcon={{ iconStyle: { padding: '0.3%', backgroundColor: CommonColors.dimGray, borderRadius: 100, color: CommonColors.white } }}
                                    />
                                </View>
                            </View>
                        </Card>
                        <View style={styles.listSchemeView}>
                            <View style={styles.listHeaderViewFirst}>
                                <Text ellipsizeMode={Labels.tail} numberOfLines={1} style={styles.listScheme}>{this.state.search != "" ? this.props.searchResult : this.props.listOfSchemes}</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <View style={{ flex: 12 }}>
                            {this.state.schemeListing != null && this.state.schemeListing != "" && this.state.schemeListing != undefined ?
                                <ScrollView onScroll={this.handleScroll}>
                                    <FlatList
                                        data={this.state.schemeListing}
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={(item, index) => String(index)}
                                        renderItem={({ item, index }) => (
                                            <View key={index}>
                                                <TouchableWithoutFeedback onPress={() => this.select(item.ID)}>
                                                    <View style={styles.flatListRowView}>
                                                        <Text style={styles.textScheme}>{isNotEmpty(item.name) ? item.name : Labels.na}</Text>
                                                    </View>
                                                </TouchableWithoutFeedback>
                                                <View style={styles.divider} />
                                            </View>
                                        )}
                                    />
                                    <View style={styles.extraView} />
                                </ScrollView>
                                :
                                <View style={styles.nodataView}>
                                    <NodataAvailable />
                                </View>
                            }
                        </View>
                    </View>
                </RBSheet>


                <Text style={styles.inputBoxTextLabel}>{this.props.label}</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.inputBoxDropdown}
                    onPress={() => { this.RBSheetOfSingleSelect.open() }}
                >
                    <View style={styles.dropdownViewFirstColum}>
                        <Text numberOfLines={1} ellipsizeMode={Labels.tail}
                            style={[styles.dropdownTextStyle, { color: isNotEmpty(this.state.selectedDropdownValues) ? CommonColors.black : CommonColors.tableheader }]}>
                            {isNotEmpty(this.state.selectedDropdownValues) ? this.state.selectedDropdownValues : this.props.placeholder}
                        </Text>
                    </View>
                    <View style={styles.dropdownViewSecondColum}>
                        <AntDesign name="down" size={20} color={CommonColors.tableheader} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.inputBoxErrorText}>{isNotEmpty(this.props.error) && this.props.error}</Text>
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
        color: CommonColors.tableheader,
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
        justifyContent: 'center'
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
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },

    // RBSHEET DESIGN
    container: {
        flex: 1,
        backgroundColor: CommonColors.white,
    },
    cardContainer: { justifyContent: 'center', alignItems: 'stretch', elevation: Labels.elavation10, height: Labels.searchBarHeight, width: Labels.width100 },
    logoStyle: {
        justifyContent: 'center',
        flex: 0.5,
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: Labels.m5
    },
    searchBarView: { flex: 6, flexDirection: 'column', justifyContent: 'center' },
    searchbar: {
        backgroundColor: CommonColors.white,
        borderBottomWidth: Labels.zero,
        borderTopWidth: Labels.zero,
    },
    searchbar_container: {
        backgroundColor: CommonColors.white,
        borderColor: CommonColors.tableheader,
        color: CommonColors.errorColor

    },
    searchbarInputStyle: {
        fontFamily: Fonts.globalrobotofonts.Rregular,
        fontSize: Labels.xsm,
        color: CommonColors.black
    },
    listSchemeView: {
        flex: 0.6,
        flexDirection: 'row',
        marginTop: Labels.m12
    },
    listHeaderViewFirst: { flex: 1 },
    listScheme: {
        fontSize: Labels.md,
        color: CommonColors.black, marginLeft: Labels.m16,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
    divider: {
        borderBottomColor: CommonColors.grayLight,
        borderBottomWidth: Labels.bordeWidthSize2,
    },
    textScheme: {
        fontSize: Labels.xsm,
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rregular,
        alignSelf: 'flex-start',
    },
    flatListRowView: { flex: 1, flexDirection: 'row', padding: Labels.p16 },
    flatListColumnViewFirst: { flex: 0.6, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: Labels.p10 },
    flatListColumnViewSecond: { flex: 6, justifyContent: 'center' },
    extraView: { marginTop: Labels.m10 },
    nodataView: { marginTop: Labels.width50 }
});

export default SingleSelectDropdown;