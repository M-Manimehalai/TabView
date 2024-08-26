import React, { useState, useRef, useEffect } from 'react';
import { ToastAndroid, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Sample from '../containers/sample/Sample';
import CommonColors from '../utils/constants/colors/CommonColors';
import Testing from '../containers/sample/Testing';
import Signin from '../containers/signin/Signin';
import ForgetPassword from '../containers/forget_password/ForgetPassword';
import OTPInput from '../containers/otpinput/OtpInput';
import SetPassword from '../containers/set_password/SetPassword';
import Labels from '../utils/constants/labels/Labels';
import Lead from '../containers/lead/Lead';
import Oppertunities from '../containers/opportunities/Opportunities';
import Activity from '../containers/activity/Activity';
import { Alert, Animated, StyleSheet, View, } from 'react-native';
import { Text } from 'react-native-paper';
// import ModalPopUp from '../components/modal_popup/ModalPopUp';
import Dashboard from '../containers/dashboard/Dashboard';
import Dashboardnew from '../containers/dashboardNew/Dashboardnew';
import AddLead from '../containers/add_lead/AddLead';
import AddressInformation from '../containers/add_lead/AddressInformation';
import AddMoreAddress from '../containers/add_lead/AddMoreAddress';
import TrackingDetails from '../containers/add_lead/TrackingDetails';
import BottomTab from './BottomTab';
import Tabview from '../components/tab_view/TabViews';
import OtherDetails from '../containers/add_lead/OtherDetails';
import OpportunityDetail from '../containers/opportunities/OpportunityDetail';
import AddNotes from '../containers/add_lead/AddNotes';
import AddAttachment from '../containers/add_lead/AddAttachment';
import WelcomeScreen from '../containers/set_password/WelcomeScreen';
import AddOpportunity from '../containers/opportunities/AddOpportunities';
import ActivityInvitedBy from '../containers/activity_invitedby/ActivityInvitedBy';
import LeadandClient from '../containers/leadandclient/LeadandClient';
import Dormants from '../containers/dormants/Dormants';
import Prospectsdata from '../containers/prospectsdata/Prospectsdata';
import MyComponent from '../containers/drawer/Drawer';
import LeadFilter from '../containers/leadfolder/LeadFilter';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName="Signin"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: CommonColors.navHeaderGreen
                    },
                    headerTintColor: CommonColors.white,
                    headerTitleStyle: {
                        fontSize: 19,
                        color: CommonColors.chileanPink,
                        fontWeight: 'bold'
                    },
                }}
            >

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="ActivityInvitedBy"
                    component={ActivityInvitedBy}
                />
                 <Stack.Screen
                    options={{ headerShown: false }}
                    name="leadfilter"
                    component={LeadFilter}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Dashboard"
                    component={Dashboardnew}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Dormants"
                    component={Dormants}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="LeadandClient"
                    component={LeadandClient}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Signin"
                    component={Signin}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="OtherDetails"
                    component={OtherDetails}
                />

                

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="BottomTab"
                    component={BottomTab}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="myComponent"
                    component={MyComponent}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Set New Password"
                    component={SetPassword}
                />
                {/* <Stack.Screen
                        options={{ headerShown: true }}
                        name="Password"
                        component={PasswordValidation}
                    /> */}
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Add Lead"
                    component={AddLead}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Address Information"
                    component={AddressInformation}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Tracking Details"
                    component={TrackingDetails}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Other Details"
                    component={OtherDetails}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AddMoreAddress"
                    component={AddMoreAddress}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="forget Password"
                    component={ForgetPassword}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Mobile OTP"
                    component={OTPInput}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="tabView"
                    component={Tabview}
                />
                 <Stack.Screen
                    options={{ headerShown: true }}
                    name="Prospects"
                    component={Prospectsdata}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Opportunity Details"
                    component={OpportunityDetail}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="oppertunities"
                    component={Oppertunities}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Welcome Screen"
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Add Notes"
                    component={AddNotes}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Add Attachment"
                    component={AddAttachment}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Add Oppertunities"
                    component={AddOpportunity}
                />
            </Stack.Navigator>


        </NavigationContainer >
    )
}
export default Navigation;

