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
class MultiSelectDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            schemesSelectCount: 0,
            schemeListing: [],
            schemeListingCopy: [],
            selectedDropdownValues: [],
            count: 12,
            dummyData: []
        }
    }

    componentDidMount = () => {
        // if (isNotEmpty(this.props.multiSelectedValueList) && isNotEmpty(this.props.multiSelectCount) && isNotEmpty(this.props.multiSelectSelectedValue)) {
        //     this.setState({
        //         schemeListing: this.props.multiSelectedValueList.slice(0, 12),
        //         schemeListingCopy: this.props.multiSelectedValueList,
        //         schemesSelectCount: this.props.multiSelectCount,
        //         selectedDropdownValues: this.props.multiSelectSelectedValue,
        //         count: 12,
        //         dummyData: this.props.multiSelectedValueList,
        //     })
        // }
        if (isNotEmpty(this.props.data)) {
            this.setState({
                schemeListing: this.props.data.slice(0, 12),
                schemeListingCopy: this.props.data,
                schemesSelectCount: 0,
                selectedDropdownValues: [],
                count: 12,
                dummyData: this.props.data
            })
        }
        else {
            this.setState({
                schemesSelectCount: 0,
                schemeListing: [],
                schemeListingCopy: [],
                selectedDropdownValues: [],
                count: 12,
                dummyData: []
            })
        }
    }

    componentDidUpdate = () => {
        if (this.state.dummyData != this.props.multiSelectedValueList) {
            if (isNotEmpty(this.props.multiSelectedValueList)) {
                this.setState({
                    count: 12,
                    dummyData: this.props.multiSelectedValueList,
                })
            }
            else {
                if (isNotEmpty(this.state.dummyData) && !isNotEmpty(this.props.multiSelectedValueList)) {
                    let listData = this.state.dummyData.map(item => {
                        return {
                            ...item, isChecked: false
                        }
                    })

                    this.setState({
                        schemeListing: listData.slice(0, 12),
                        schemeListingCopy: listData,
                        doneListingData: listData,
                        count: 12,
                        schemesSelectCount: 0,
                    })
                }

                this.setState({
                    selectedDropdownValues: [],
                    count: 12,
                    dummyData: this.props.multiSelectedValueList
                })
            }
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
        let checkedName = this.state.schemeListing.map(item => {
            if (item.ID == id) {
                return {
                    ...item, isChecked: !item.isChecked
                }
            }
            else {
                return item;
            }
        })


        let checkedNameCopy = this.state.schemeListingCopy.map(item => {
            if (item.ID == id) {
                return {
                    ...item, isChecked: !item.isChecked
                }
            }
            else {
                return item;
            }
        })
        this.setState({
            schemeListing: checkedName,
            schemeListingCopy: checkedNameCopy,
        })

        this.setState({
            schemesSelectCount: checkedNameCopy.filter(e => e.isChecked == true).length
        })

    }

    clear = () => {
        let checkedName = this.state.schemeListing.map(item => {
            return {
                ...item, isChecked: false
            }
        })


        let checkedNameCopy = this.state.schemeListingCopy.map(item => {
            return {
                ...item, isChecked: false
            }
        })

        this.setState({
            schemeListing: checkedName.slice(0, 12),
            schemeListingCopy: checkedNameCopy,
            count: 12,
        })

        this.setState({
            schemesSelectCount: 0
        })
    }

    done = async () => {
        // While click the Done button selected or non selected listing datas are stored in another state.
        // This state is used for, while did unchecked or checked check box , but not click the done button. those time user come again RBSheet, this state datas only shown
        this.setState({
            doneListingData: this.state.schemeListingCopy
        })


        this.setState({
            schemesSelectCount: this.state.schemeListingCopy.filter(e => e.isChecked == true).length
        }, () => {
            if (this.state.schemesSelectCount == 0) {
                this.setState({
                    selectedDropdownValues: []
                }, () => {
                    // Value passed to parent component
                    this.props.done(this.state.schemeListingCopy, this.state.schemesSelectCount, this.state.selectedDropdownValues)
                })
            }
            else if (this.state.schemesSelectCount == 1) {
                this.setState({
                    selectedDropdownValues: this.state.schemeListingCopy.filter((i => i.isChecked == true))[0].name
                }, () => {
                    // Value passed to parent component
                    this.props.done(this.state.schemeListingCopy, this.state.schemesSelectCount, this.state.selectedDropdownValues)
                })
            }
            else {
                this.setState({
                    selectedDropdownValues: this.state.schemesSelectCount + Labels.selected
                }, () => {
                    // Value passed to parent component
                    this.props.done(this.state.schemeListingCopy, this.state.schemesSelectCount, this.state.selectedDropdownValues)
                })
            }
        })

        this.RBSheetOfMultiSelect.close();
        this.setState({
            dummyData: []
        })


    }

    rBSheetOfMultiSelect = () => {
        this.RBSheetOfMultiSelect.open();

        if (isNotEmpty(this.state.doneListingData)) {
            this.setState({
                schemeListing: this.state.doneListingData.slice(0, 12),
                schemeListingCopy: this.state.doneListingData,
                schemesSelectCount: this.state.doneListingData.filter(e => e.isChecked == true).length,
                count: 12,
                search: '',
            })
        }
        else if (isNotEmpty(this.props.data)) {
            this.setState({
                schemeListing: this.props.data.slice(0, 12),
                schemeListingCopy: this.props.data,
                schemesSelectCount: 0,
                selectedDropdownValues: [],
                count: 12,
                dummyData: this.props.data,
                search: '',
            })
        }
        else {
            this.setState({
                schemesSelectCount: 0,
                schemeListing: [],
                schemeListingCopy: [],
                selectedDropdownValues: [],
                count: 12,
                dummyData: [],
                search: '',
            })
        }
    }

    searchBack = () => {
        this.RBSheetOfMultiSelect.close();
    }

    // LAZY LOADING
    handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.y;
        const contentLength = event.nativeEvent.contentSize.height;
        const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;

        const endPosition = contentLength - scrollViewHeight;

        if (scrollPosition >= (endPosition - 60)) {
            if (commonFunction(this.state.schemeListingCopy)) {
                const { schemeListing, schemeListingCopy, count } = this.state;

                const remainingData = schemeListingCopy.slice(count);

                // Calculate the number of items to load (e.g., 10)
                const itemsToLoad = Math.min(remainingData.length, 12);
                // Append the next `itemsToLoad` elements to the visible data array
                const nextleadListLazyLoadData = schemeListing.concat(remainingData.slice(0, itemsToLoad));

                // Scroll has reached the end          
                this.setState({
                    schemeListing: nextleadListLazyLoadData,
                    count: count + itemsToLoad
                })
            }
        }
    }



    render() {
        return (
            <View>
                <RBSheet
                    animationType={'none'}
                    ref={ref => {
                        this.RBSheetOfMultiSelect = ref;
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
                                        clearIcon={{ iconStyle: { padding: Labels.per0_3, backgroundColor: CommonColors.dimGray, borderRadius: 100, color: CommonColors.white } }}
                                    />
                                </View>
                            </View>
                        </Card>
                        <View style={styles.listSchemeView}>
                            <View style={styles.listHeaderViewFirst}>
                                <Text ellipsizeMode={Labels.tail} numberOfLines={1} style={styles.listScheme}>{this.state.search != "" ? this.props.searchResult : this.props.listOfSchemes}</Text>
                            </View>

                            <View style={styles.listHeaderViewSecond}>
                                {/* {this.state.schemesSelectCount != 0 &&
                                    <> */}
                                <View style={{ flex: 0.5 }} />
                                <TouchableOpacity activeOpacity={0.8} style={styles.doneButton} onPress={this.clear}>
                                    <Text style={styles.doneText}>{Labels.clear}</Text>
                                </TouchableOpacity>
                                <View style={{ flex: 0.5 }} />
                                <TouchableOpacity activeOpacity={0.8} style={styles.doneButton} onPress={this.done}>
                                    <Text style={styles.doneText}>{this.state.schemesSelectCount == 0 ? Labels.done : Labels.done + " (" + this.state.schemesSelectCount + ")"}</Text>
                                </TouchableOpacity>
                                <View style={{ flex: 0.2 }} />
                                {/* </>
                                } */}
                            </View>

                        </View>
                        <View style={styles.divider} />
                        <View style={{ flex: 12 }}>
                            {isNotEmpty(this.state.schemeListing) ?
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
                                                        <View style={styles.flatListColumnViewFirst}>
                                                            <Checkbox isChecked={item.isChecked} />
                                                        </View>
                                                        <View style={styles.flatListColumnViewSecond}>
                                                            <Text style={styles.textScheme}>{isNotEmpty(item.name) ? item.name : Labels.na}</Text>
                                                        </View>
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
                    onPress={this.rBSheetOfMultiSelect}
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
            </View >
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
        flexDirection: 'row',
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
        marginTop: Labels.m5,
        paddingBottom: Labels.p5
    },
    listHeaderViewFirst: { flex: 1.2, justifyContent: 'center' },
    listHeaderViewSecond: { flex: 1.5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
    listScheme: {
        fontSize: Labels.md,
        color: CommonColors.black,
        textAlign: 'center',
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
    doneButton: {
        flex: 3,
        borderWidth: Labels.borderWidthSize,
        borderColor: CommonColors.primary,
        borderRadius: Labels.borderRadius25,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    doneText: {
        color: CommonColors.primary,
        fontSize: Labels.sm,
        padding: Labels.p4,
        textAlign: "center"
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
    flatListRowView: { flex: 1, flexDirection: 'row', padding: Labels.p12 },
    flatListColumnViewFirst: { flex: 0.6, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: Labels.p10 },
    flatListColumnViewSecond: { flex: 6, justifyContent: 'center' },
    extraView: { marginTop: Labels.m10 },
    nodataView: { marginTop: Labels.width50 }
});

export default MultiSelectDropdown;