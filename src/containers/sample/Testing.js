import React, { Component } from 'react';
import { View, FlatList, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import { isNotEmpty } from '../../utils/common/common_functions/CommonFunctions';
import NodataAvailable from '../../components/nodata_available/NodataAvailable';
import { connect } from 'react-redux';
import { Fonts } from '../../utils/constants/fonts/Fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetailsList: [],
            userName: ""
        }
    }

    componentDidMount = () => {
        if (isNotEmpty(this.props.route.params.userList)) {
            this.setState({
                userDetailsList: this.props.route.params.userList
            })
        }
        else {
            this.setState({
                userDetailsList: []
            })
        }

        if (isNotEmpty(this.props.sampleUserName)) {
            this.setState({
                userName: this.props.sampleUserName
            })
        }
        else {
            this.setState({
                userName: ""
            })
        }
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.sampleUserName != this.props.sampleUserName) {
    //         if (isNotEmpty(this.props.sampleUserName)) {
    //         }
    //     }
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.columnEndHeaderView}>
                    <Text style={styles.valueText}>{isNotEmpty(this.state.userName) ? this.state.userName : "NA"}</Text>
                </View>
                {isNotEmpty(this.state.userDetailsList) ?
                    <ScrollView>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            data={this.state.userDetailsList}
                            keyExtractor={(ID, index) => String(ID)}
                            renderItem={({ item }) => (
                                <Card style={styles.cardContainer}>
                                    <View style={styles.rowView} >
                                        <View style={styles.columnFirstView}>
                                            <Text style={styles.valueText}>{item.userName}</Text>
                                            <Text style={styles.labelText}>{Labels.userName}</Text>
                                        </View>
                                        <View style={styles.columnEndView}>
                                            <Text style={styles.valueText}>{item.userType}</Text>
                                            <Text style={styles.labelText}>{Labels.userType}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rowView} >
                                        <View style={styles.columnFirstView}>
                                            <Text style={styles.valueText}>{item.gender}</Text>
                                            <Text style={styles.labelText}>{Labels.gender}</Text>
                                        </View>
                                        <View style={styles.columnEndView}>
                                            <Text style={styles.valueText}>{item.dateofBirth}</Text>
                                            <Text style={styles.labelText}>{Labels.dateofBirth}</Text>
                                        </View>
                                    </View>
                                </Card>
                            )}
                        />
                    </ScrollView>
                    :
                    <View style={styles.nodataView}>
                        <NodataAvailable />
                    </View>
                }
            </View>
        );
    }
}
const styles = EStyleSheet.create({
    container: { flex: 1 },
    cardContainer: { margin: Labels.m5, padding: Labels.p8, backgroundColor: CommonColors.white },
    rowView: { flexDirection: 'row', marginTop: Labels.m5 },
    columnFirstView: { flexDirection: 'column', flex: 1, alignItems: 'flex-start' },
    columnEndView: { flexDirection: 'column', flex: 1, alignItems: "flex-end" },
    columnEndHeaderView: { flexDirection: 'column', alignItems: "flex-end", marginTop: Labels.m5, marginRight: Labels.m5 },
    labelText: {
        fontSize: Labels.xsm,
        color: CommonColors.tableheader,
        fontFamily: Fonts.globalrobotofonts.Rregular
    },
    valueText: {
        fontSize: Labels.md,
        color: CommonColors.black,
        fontFamily: Fonts.globalrobotofonts.Rmedium
    },
    nodataView: { flex: 1, justifyContent: 'center' }
});


const mapStateToProps = state => {
    return {
        sampleUserName: state.sampleReducer.sampleUserName
    }
};

export default (connect(mapStateToProps, null)(Testing));