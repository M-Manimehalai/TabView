import React, { Component } from 'react';
import { Card, Searchbar } from 'react-native-paper';
import { Text, View, Dimensions, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Labels from '../../utils/constants/labels/Labels';
import CommonColors from '../../utils/constants/colors/CommonColors';
import OpportunitiesCard from '../../components/opportunities_card/OpportunitiesCard';



let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
class AddOpportunity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            addOpportunity: '',
            contactList: [{
                id: '1',
                imageUrl: require("../../assets/images/png/userImage.png"),
                name: Labels.leadName1,
                leadId: Labels.leadId1,
                call: Labels.calls,
                email: Labels.email
            },
            {
                id: '2',
                imageUrl: require("../../assets/images/png/userImage(1).png"),
                name: Labels.leadName2,
                leadId: Labels.leadId2,
                call: Labels.calls,
                email: Labels.email

            },
            {
                id: '3',
                imageUrl: require("../../assets/images/png/userImage(2).png"),
                name: Labels.leadName3,
                leadId: Labels.leadId1,
                call: Labels.calls,
                email: Labels.email

            },
            ],
        }
    }

    componentDidMount = () => {

    }

    componentDidUpdate = () => {

    }

    componentWillUnmount() {

    }
    render() {
        return (
            <View>
                <Searchbar
                    placeholder={Labels.addSearch}
                    //onChangeText={this.handleSearch}
                    value={this.state.searchQuery}
                    style={styles.searchBar}
                />
                <View>
                    <FlatList
                        data={this.state.contactList}
                        numColumns={1}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <OpportunitiesCard
                                flag={"addOpportunity"}
                                source={item.imageUrl} // Provide the image source
                                name={item.name}
                                amount={item.leadId}
                                call={item.call}
                                email={item.email}

                            // menuCardList={this.state.menuList}
                            />
                        }
                    />
                </View>
            </View>

        )
    }
}
const styles = EStyleSheet.create({
    searchBar: { borderRadius: Labels.borderRadiusXS, backgroundColor: CommonColors.tints ,},
    //btnColumn: { flexDirection: 'column', flex: 1, margin: Labels.m4 },
});
export default AddOpportunity;