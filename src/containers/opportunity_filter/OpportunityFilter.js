import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommonColors from '../../utils/constants/colors/CommonColors';
import MultiSelectDropdown from '../../components/dropdown/MultiSelectDropdown';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import { Card, Divider } from 'react-native-paper';
import Button from '../../components/button/Button';


let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
class OppertunityFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

            ProductTypeList: [{ ID: 1, name: 'Mutual Fund', isChecked: false }, { ID: 2, name: 'Insurance', isChecked: false },
            { ID: 3, name: 'Bonds', isChecked: false }],
            multiSelectedValueProductTypeList: [],
            multiSelectCountProductType: 0,
            multiSelectSelectedValueProductType: [],
            ProductTypeError: "",

            AssignedToList: [{ ID: 1, name: 'Anand Sharma', isChecked: false }, { ID: 2, name: 'Amol Mul Chandrakant', isChecked: false },
            { ID: 3, name: 'Ramesh Kadam', isChecked: false }, { ID: 4, name: 'Smitha Kasturi', isChecked: false }],
            multiSelectedValueAssignedToList: [],
            multiSelectCountAssignedTo: 0,
            multiSelectSelectedValueAssignedTo: [],
            AssignedToError: "",

            OppertunityStageList: [{ ID: 1, name: 'Agreement', isChecked: false }, { ID: 2, name: 'Closure', isChecked: false }],
            multiSelectedValueOppertunityStageList: [],
            multiSelectCountOppertunityStage: 0,
            multiSelectSelectedValueOppertunityStage: [],
            OppertunityStageError: "",

            ProbabilityList: [{ ID: 1, name: '80%', isChecked: false }, { ID: 2, name: '60%', isChecked: false }],
            multiSelectedValueProbabilityList: [],
            multiSelectCountProbability: 0,
            multiSelectSelectedValueProbability: [],
            ProbabilityError: "",

            FiscalPeriodList: [{ ID: 1, name: ' FY 23-24', isChecked: false }, { ID: 2, name: ' FY 21-22', isChecked: false }],
            multiSelectedValueFiscalPeriodList: [],
            multiSelectCountFiscalPeriod: 0,
            multiSelectSelectedValueFiscalPeriod: [],
            FiscalPeriodError: "",
        }
    }

    componentDidMount = () => {

    }

    componentDidUpdate = () => {

    }

    componentWillUnmount() {

    }

    multiselectedProductType = (val, count, selectedVal) => {
        if (isNotEmpty(val)) {
            this.setState({
                multiSelectedValueProductTypeList: val,
                multiSelectCountProductType: count,
                multiSelectSelectedValueProductType: selectedVal,
                ProductTypeError: '',
            })
        }
    }
    multiselectedAssignedTo = (val, count, selectedVal) => {
        if (isNotEmpty(val)) {
            this.setState({
                multiSelectedValueAssignedToList: val,
                multiSelectCountAssignedTo: count,
                multiSelectSelectedValueAssignedTo: selectedVal,
                AssignedToError: "",
            })
        }
    }
    multiselectedFiscalPeriod = (val, count, selectedVal) => {
        if (isNotEmpty(val)) {
            this.setState({
                multiSelectedValueFiscalPeriodList: val,
                multiSelectCountFiscalPeriod: count,
                multiSelectSelectedValueFiscalPeriod: selectedVal,
                FiscalPeriodError: "",
            })
        }
    }
    multiselectedProbability = (val, count, selectedVal) => {
        if (isNotEmpty(val)) {
            this.setState({
                multiSelectedValueProbabilityList: val,
                multiSelectCountProbability: count,
                multiSelectSelectedValueProbability: selectedVal,
                ProbabilityError: "",
            })
        }
    }
    multiselectedOppertunityStage = (val, count, selectedVal) => {
        if (isNotEmpty(val)) {
            this.setState({
                multiSelectedValueOppertunityStageList: val,
                multiSelectCountOppertunityStage: count,
                multiSelectSelectedValueOppertunityStage: selectedVal,
                OppertunityStageError: "",
            })
        }
    }
    render() {
        return (
                <View>
                    <ScrollView>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 0.9, flexDirection: 'column', marginTop: 10 }}>
                                <Text style={styles.title}>
                                    {Labels.filter}
                                </Text>
                            </View>
                            <View style={{ flex: 0.1, flexDirection: 'column', marginTop: 10 }}>
                                <AntDesign name={"closecircleo"} size={20} color={CommonColors.black} onPress={this.props.closeRBSheet} />
                            </View>
                        </View>
                        <View style={styles.commonView}></View>
                        <View style={styles.commonView}></View>
                        <Divider />
                        <View style={styles.commonView}></View>
                        <View style={styles.commonView}></View>

                        <View style={styles.dropDownSize}>
                            <MultiSelectDropdown
                                label={Labels.productType}
                                placeholder={Labels.selectproductType}
                                data={this.state.ProductTypeList}
                                error={this.state.ProductTypeError}
                                placeholderSearch={Labels.placeHolderSearchProductType}
                                searchResult={Labels.searchResult}
                                listOfSchemes={Labels.listofProductType}

                                // get a value from multi select dropdown
                                done={(val, count, selectedVal) => { this.multiselectedProductType(val, count, selectedVal) }}

                                // Return Value send to multiselect dropdown
                                multiSelectedValueList={this.state.multiSelectedValueProductTypeList}
                                multiSelectCount={this.state.multiSelectCountProductType}
                                multiSelectSelectedValue={this.state.multiSelectSelectedValueProductType}
                            />
                        </View>
                        <View style={styles.dropDownSize}>
                            <MultiSelectDropdown
                                label={Labels.assignedTo}
                                placeholder={Labels.selectAssignedTo}
                                data={this.state.AssignedToList}
                                error={this.state.AssignedToError}
                                placeholderSearch={Labels.placeHolderSearchAssignedTo}
                                searchResult={Labels.searchResult}
                                listOfSchemes={Labels.listofAssignedTo}

                                // get a value from multi select dropdown
                                done={(val, count, selectedVal) => { this.multiselectedAssignedTo(val, count, selectedVal) }}

                                // Return Value send to multiselect dropdown
                                multiSelectedValueList={this.state.multiSelectedValueAssignedToList}
                                multiSelectCount={this.state.multiSelectCountAssignedTo}
                                multiSelectSelectedValue={this.state.multiSelectSelectedValueAssignedTo}
                            />
                        </View>
                        <View style={styles.dropDownSize}>
                            <MultiSelectDropdown
                                label={Labels.oppertunityStage}
                                placeholder={Labels.selectOppertunityStage}
                                data={this.state.OppertunityStageList}
                                error={this.state.OppertunityStageError}
                                placeholderSearch={Labels.placeHolderSearchOppertunityStage}
                                searchResult={Labels.searchResult}
                                listOfSchemes={Labels.listofOppertunityStage}

                                // get a value from multi select dropdown
                                done={(val, count, selectedVal) => { this.multiselectedOppertunityStage(val, count, selectedVal) }}

                                // Return Value send to multiselect dropdown
                                multiSelectedValueList={this.state.multiSelectedValueOppertunityStageList}
                                multiSelectCount={this.state.multiSelectCountOppertunityStage}
                                multiSelectSelectedValue={this.state.multiSelectSelectedValueOppertunityStage}
                            />
                        </View>
                        <View style={styles.dropDownSize}>
                            <MultiSelectDropdown
                                label={Labels.probability}
                                placeholder={Labels.selectProbability}
                                data={this.state.ProbabilityList}
                                error={this.state.ProbabilityError}
                                placeholderSearch={Labels.placeHolderSearchProbability}
                                searchResult={Labels.searchResult}
                                listOfSchemes={Labels.listofProbability}

                                // get a value from multi select dropdown
                                done={(val, count, selectedVal) => { this.multiselectedProbability(val, count, selectedVal) }}

                                // Return Value send to multiselect dropdown
                                multiSelectedValueList={this.state.multiSelectedValueProbabilityList}
                                multiSelectCount={this.state.multiSelectCountProbability}
                                multiSelectSelectedValue={this.state.multiSelectSelectedValueProbability}
                            />
                        </View>
                        <View style={styles.dropDownSize}>
                            <MultiSelectDropdown
                                label={Labels.fiscalPeriodLabel}
                                placeholder={Labels.selectFiscalPeriod}
                                data={this.state.FiscalPeriodList}
                                error={this.state.FiscalPeriodError}
                                placeholderSearch={Labels.placeHolderSearchFiscalPeriod}
                                searchResult={Labels.searchResult}
                                listOfSchemes={Labels.listofFiscalPeriod}

                                // get a value from multi select dropdown
                                done={(val, count, selectedVal) => { this.multiselectedFiscalPeriod(val, count, selectedVal) }}

                                // Return Value send to multiselect dropdown
                                multiSelectedValueList={this.state.multiSelectedValueFiscalPeriodList}
                                multiSelectCount={this.state.multiSelectCountFiscalPeriod}
                                multiSelectSelectedValue={this.state.multiSelectSelectedValueFiscalPeriod}
                            />
                        </View>
                    </ScrollView>
                <Card>
                    <View style={[styles.btnRow]}>
                        <View style={[styles.btnColumn]}>
                            <Button
                                label={Labels.cancel}
                                color={CommonColors.dimGray}
                                backgroundColor={CommonColors.white}
                                onPress={() => { this.cancel('yes') }}
                                borderColor={CommonColors.black}
                            />
                        </View>

                        <View style={styles.btnColumn}>
                            <Button
                                label={Labels.apply}
                                color={''}
                                backgroundColor={CommonColors.orange}
                                onPress={this.submit}
                                disable={this.state.disableSubmitButton}
                            />
                        </View>
                    </View>
                </Card>
            </View>
        )
    }
}
const styles = EStyleSheet.create({
    title: {
        fontFamily: Fonts.globalrobotofonts.Rbold,
        size: Labels.lg,
        color: CommonColors.black,
        marginLeft: Labels.m12,
        marginTop: Labels.m8
    },
    dropDownSize: {
        marginLeft: Labels.m10, marginRight: Labels.m10, marginTop: Labels.m8
    },
    commonView: { marginTop: Labels.m6 },
    btnRow: { flexDirection: 'row' },
    btnColumn: { flexDirection: 'column', flex: 1, margin: Labels.m4 },
})
export default OppertunityFilter;